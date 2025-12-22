# GuardianFS  
## Linux File Monitoring & Auto-Backup System

GuardianFS is a Linux-based file monitoring and automatic backup system that detects real-time file changes and securely creates backups.  
The project also demonstrates professional usage of **Git and GitHub** for version control, branching, tagging, and release management.

---

##  Project Objective

The objective of this project is to:
- Monitor files and directories in real time
- Detect file creation, modification, and deletion
- Automatically create backups on every change
- Maintain clean and professional version control using Git and GitHub

---

##  Technologies Used

- Linux Operating System  
- Bash / Shell Scripting  
- `inotify` (for real-time file monitoring)  
- HTML, CSS, JavaScript (Dashboard UI)  
- Git (Version Control System)  
- GitHub (Remote Repository)

---

##  Key Features

- Real-time file monitoring  
- Automatic backup creation  
- Dashboard displaying file status  
- Backup location and file metadata  
- Clean repository using `.gitignore`  
- Version tracking with commits and tags  

---

##  How the Project Works

1. User selects files or directories to monitor  
2. Shell script uses `inotify` to watch file changes  
3. When a change is detected, an automatic backup is created  
4. Backup details are logged and displayed in the dashboard  

---
## Project Structure

```text
Devops CA2 project/
│
├── index.html                # Main dashboard page
├── style.css                 # Styling for the web interface
├── script.js                 # Frontend logic and interactivity
│
├── scripts/                  # Shell scripts
│   └── monitor_backup.sh     # File monitoring & auto-backup script
│
├── screenshots/              # Project output & architecture images
│   ├── architecture.png
│   ├── terminal-output.png
│   └── backup-folder.png
│
├── .gitignore                # Files excluded from Git tracking
└── README.md                 # Project documentation
```

---

##  Git Ignore Configuration

The `.gitignore` file is used to exclude:
- Backup files (`*.tar.gz`)
- Log files
- Temporary system files

This prevents unnecessary files from being uploaded to GitHub.

---

##  Git Commands Used in This Project

- `git init` – Initialize Git repository  
- `git config --global` – Set user identity  
- `git status` – Check file status  
- `git add` – Stage project files  
- `git commit` – Save project snapshots  
- `git stash` – Temporarily store changes  
- `git branch` – Create feature branches  
- `git checkout` – Switch branches  
- `git rebase` – Maintain clean commit history  
- `git tag` – Mark stable releases  
- `git remote add origin` – Connect GitHub  
- `git push` – Upload code and tags  

---

##  Versioning

- `v1.0` – Initial stable release  
- `v1.1` – Improved documentation and structure  

---

##  Challenges Faced & Outcomes

### 1️ Real-Time File Monitoring  
**Challenge:** Continuous monitoring without performance issues.  
**Outcome:** Used `inotify`, which provides event-based monitoring with minimal overhead.

---

### 2️ Automatic Backup Creation  
**Challenge:** Ensuring backups are created for every change automatically.  
**Outcome:** Implemented shell scripts to automate backup generation.

---

### 3️ Managing Unnecessary Files in GitHub  
**Challenge:** Backup archives and logs were initially being tracked by Git.  
**Outcome:** Solved using `.gitignore` to exclude runtime-generated files.

---

### 4️ Understanding Git Workflow  
**Challenge:** Learning staging, committing, and pushing workflow.  
**Outcome:** Practiced `git add`, `git commit`, and `git status` to understand Git’s working model.

---

### 5️ Temporary Changes Management  
**Challenge:** Switching tasks without committing incomplete work.  
**Outcome:** Used `git stash` to save and restore work safely.

---

### 6️ Branch Integration  
**Challenge:** Integrating feature branch changes cleanly.  
**Outcome:** Used `git rebase` instead of merge to keep history linear.

---

### 7️ Branch Naming Confusion  
**Challenge:** Confusion between `master` and `main`.  
**Outcome:** Understood GitHub branch standards and pushed the correct branch.

---

### 8️ Cross-Platform Line Ending Warnings  
**Challenge:** CRLF and LF warnings on Windows.  
**Outcome:** Learned that these warnings are OS-related and harmless.

---

##  Conclusion

Through this project, I gained hands-on experience in Linux automation, real-time file monitoring, shell scripting, and professional project management using Git and GitHub.

---

##  How to Run the Project

```bash
chmod +x scripts/monitor_backup.sh
bash scripts/monitor_backup.sh

## Author 
MD AZHAR
