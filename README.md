# 🛡 FileGuardian DevOps System
## Linux File Monitoring & Auto-Backup System

> A DevOps CA2 project implementing a **Linux File Monitoring and Auto-Backup system** using Shell Scripting, Docker, and Git. The system monitors directory changes in real time, creates compressed backups, and serves a live web dashboard via Docker + nginx.

---

## 📌 Project Objective

- Monitor files and directories in **real time** using `inotify`
- Detect file **creation, modification, and deletion**
- Automatically create **compressed backups** (`.tar.gz`) on every change
- Serve an interactive **web dashboard** via Docker + nginx
- Maintain professional **CI/CD pipeline** using GitHub Actions + Docker Hub

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Linux (Ubuntu) | Operating System |
| Bash / Shell Scripting | Core automation script |
| `inotify` (inotifywait) | Real-time file monitoring |
| HTML, CSS, JavaScript | Dashboard web UI |
| **Docker** | Containerization |
| **docker-compose** | Multi-container orchestration |
| **nginx (alpine)** | Web server for dashboard |
| **GitHub Actions** | CI/CD pipeline (auto build & push) |
| Git | Version Control System |
| GitHub | Remote Repository |

---

## 📁 Project Structure

```
Devops CA2 project/
├── index.html
├── style.css
├── script.js
├── scripts/
│   └── monitor_backup.sh
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .github/
│   └── workflows/
│       └── docker-deploy.yml
├── .gitignore
└── README.md
```

---

## 🐳 Docker — Quick Start

```bash
# Clone the repo
git clone https://github.com/MDAzhar7799/Linux-File-Monitoring-Auto-Backup1.git
cd Linux-File-Monitoring-Auto-Backup1

# Build and start all containers
docker-compose up -d

# Open dashboard at: http://localhost:8080
```

### Docker only
```bash
docker build -t fileguardian-dashboard .
docker run -d -p 8080:80 --name fileguardian fileguardian-dashboard
```

### Useful Commands
```bash
docker-compose ps              # Check running containers
docker-compose logs -f         # Live logs
docker-compose down            # Stop everything
docker exec -it fileguardian_monitor bash
bash /scripts/monitor_backup.sh
```

---

## ⚙️ GitHub Actions CI/CD

Every `git push` to `main` automatically:
1. Builds the Docker image
2. Tests container health
3. Pushes to Docker Hub (`latest`, `v1.1`, `sha-<commit>`)

**Setup Secrets** (GitHub → Settings → Secrets → Actions):

| Secret | Value |
|--------|-------|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | Your Docker Hub access token |

---

## ▶ Shell Script (Without Docker)

```bash
sudo apt install inotify-tools
chmod +x scripts/monitor_backup.sh
bash scripts/monitor_backup.sh
```

---

## 🌿 Git Commands Used

```bash
git init | git add . | git commit | git stash
git branch | git checkout | git rebase
git tag v1.0 | git push origin main --tags
```

---

## 🏷 Versions

| Tag | Description |
|-----|-------------|
| `v1.0` | Initial stable release |
| `v1.1` | Docker + CI/CD pipeline added |

---

## 👤 Author

**MD AZHAR** — DevOps CA2 Project
GitHub: [MDAzhar7799](https://github.com/MDAzhar7799)
