// ==============================
// FileGuardian DevOps Dashboard
// script.js
// ==============================

// --- LIVE CLOCK ---
function updateClock() {
  const now = new Date();
  document.getElementById('liveClock').textContent =
    now.toTimeString().split(' ')[0];
}
setInterval(updateClock, 1000);
updateClock();

// --- COUNTERS ---
let filesMonitored = 12;
let backupsCreated = 3;
let eventsDetected = 7;
let backupIndex = 4;
let monitorRunning = true;

function animateCounter(el, target) {
  let current = 0;
  const step = Math.ceil(target / 30);
  const interval = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(interval); }
    el.textContent = current;
  }, 40);
}

window.addEventListener('DOMContentLoaded', () => {
  animateCounter(document.getElementById('filesMonitored'), filesMonitored);
  animateCounter(document.getElementById('backupsCreated'), backupsCreated);
  animateCounter(document.getElementById('eventsDetected'), eventsDetected);
  startTerminalAnimation();
});

// --- TERMINAL ANIMATION ---
const terminalLines = [
  { text: '$ bash scripts/monitor_backup.sh', cls: 't-cmd' },
  { text: '[INFO] Starting FileGuardian v1.1...', cls: 't-info' },
  { text: '[INFO] Watching: /home/azhar/monitored', cls: 't-info' },
  { text: '[INFO] inotify initialized successfully', cls: 't-info' },
  { text: '[EVENT] MODIFY → config.yaml', cls: 't-event' },
  { text: '[BACKUP] Creating backup_001.tar.gz...', cls: 't-info' },
  { text: '[BACKUP] ✓ Saved to /backups/', cls: 't-backup' },
  { text: '[EVENT] CREATE → deploy.sh', cls: 't-event' },
  { text: '[BACKUP] Creating backup_002.tar.gz...', cls: 't-info' },
  { text: '[BACKUP] ✓ Saved to /backups/', cls: 't-backup' },
  { text: '[EVENT] DELETE → old_log.txt', cls: 't-event' },
  { text: '[BACKUP] Creating backup_003.tar.gz...', cls: 't-info' },
  { text: '[BACKUP] ✓ Saved to /backups/', cls: 't-backup' },
  { text: '[INFO] Monitoring... (Press Ctrl+C to stop)', cls: 't-info' },
];

function startTerminalAnimation() {
  const body = document.getElementById('terminalOutput');
  body.innerHTML = '';
  let i = 0;

  function addLine() {
    if (i >= terminalLines.length) return;
    const line = terminalLines[i++];
    const div = document.createElement('div');
    div.className = line.cls;
    div.textContent = line.text;
    div.style.opacity = '0';
    div.style.transition = 'opacity 0.3s';
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    requestAnimationFrame(() => { div.style.opacity = '1'; });
    setTimeout(addLine, 550 + Math.random() * 300);
  }
  addLine();
}

// --- LOG ENTRIES ---
const logEvents = [
  { msg: '[CREATE] new_file_{n}.txt created', cls: 'success' },
  { msg: '[MODIFY] config.yaml modified', cls: 'warning' },
  { msg: '[DELETE] temp_{n}.log removed', cls: 'danger' },
  { msg: '[BACKUP] backup_{n}.tar.gz → /backups/', cls: 'success' },
  { msg: '[INFO] inotify event received', cls: 'info' },
];

function addLogEntry(msg, cls) {
  const log = document.getElementById('activityLog');
  const now = new Date().toTimeString().split(' ')[0];
  const div = document.createElement('div');
  div.className = `log-entry ${cls}`;
  div.textContent = `${msg}  [${now}]`;
  div.style.opacity = '0';
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
  requestAnimationFrame(() => {
    div.style.transition = 'opacity 0.4s';
    div.style.opacity = '1';
  });
}

function clearLog() {
  document.getElementById('activityLog').innerHTML =
    '<div class="log-entry info">[INFO] Log cleared — Monitoring continues...</div>';
}

// --- SIMULATE EVENT BUTTON ---
let simulateCount = 100;
function simulateEvent() {
  if (!monitorRunning) { alert('Monitoring is stopped. Start it first.'); return; }

  const rnd = logEvents[Math.floor(Math.random() * logEvents.length)];
  const msg = rnd.msg.replace('{n}', simulateCount++);
  addLogEntry(msg, rnd.cls);
  eventsDetected++;
  document.getElementById('eventsDetected').textContent = eventsDetected;

  // Add to backup table if it's a BACKUP event
  if (rnd.cls === 'success' && msg.includes('BACKUP')) {
    addFakeBackup();
  }
}

// --- ADD BACKUP ROW ---
function addFakeBackup() {
  backupsCreated++;
  document.getElementById('backupsCreated').textContent = backupsCreated;
  const tbody = document.getElementById('backupTableBody');
  const now = new Date().toTimeString().split(' ')[0];
  const size = (2.0 + Math.random() * 1.5).toFixed(1);
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>backup_${String(backupIndex++).padStart(3,'0')}.tar.gz</td>
    <td>${size} MB</td>
    <td>${now}</td>
    <td><span class="tag green">OK</span></td>
  `;
  tr.style.background = 'rgba(0,255,136,0.05)';
  tbody.appendChild(tr);
  setTimeout(() => { tr.style.transition = 'background 1s'; tr.style.background = ''; }, 800);
}

// --- TOGGLE MONITOR ---
function toggleMonitor() {
  monitorRunning = !monitorRunning;
  const pill = document.getElementById('monitorStatus');
  const btn = document.querySelector('.btn-danger');
  if (monitorRunning) {
    pill.textContent = '● MONITORING ACTIVE';
    pill.classList.remove('stopped');
    pill.classList.add('active');
    btn.textContent = '⏹ Stop Monitoring';
    addLogEntry('[INFO] Monitoring resumed', 'info');
  } else {
    pill.textContent = '◼ MONITORING STOPPED';
    pill.classList.remove('active');
    pill.classList.add('stopped');
    btn.textContent = '▶ Start Monitoring';
    addLogEntry('[WARN] Monitoring stopped by user', 'warning');
  }
}

// --- AUTO SIMULATE (background activity) ---
function autoSimulate() {
  if (monitorRunning && Math.random() > 0.5) {
    simulateEvent();
    filesMonitored += Math.random() > 0.7 ? 1 : 0;
    document.getElementById('filesMonitored').textContent = filesMonitored;
  }
}
setInterval(autoSimulate, 6000);
