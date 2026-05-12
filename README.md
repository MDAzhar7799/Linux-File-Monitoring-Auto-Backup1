# FileGuardian DevOps System
## Linux File Monitoring & Auto-Backup System

> A DevOps CA2 project implementing a **Linux File Monitoring and Auto-Backup System** using Shell Scripting, Docker, and Git. The system monitors directory changes in real time, creates compressed backups, and serves a live web dashboard via Docker + nginx.

---

# Project Objective

- Monitor files and directories in **real time** using `inotify`
- Detect file **creation, modification, and deletion**
- Automatically create **compressed backups** (`.tar.gz`) on every change
- Serve an interactive **web dashboard** via Docker + nginx
- Maintain a professional **CI/CD pipeline** using GitHub Actions + Docker Hub

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| Linux (Ubuntu) | Operating System |
| Bash / Shell Scripting | Core automation script |
| `inotify` (`inotifywait`) | Real-time file monitoring |
| HTML, CSS, JavaScript | Dashboard Web UI |
| Docker | Containerization |
| docker-compose | Multi-container orchestration |
| nginx (alpine) | Web server for dashboard |
| GitHub Actions | CI/CD pipeline (auto build & push) |
| Git | Version Control System |
| GitHub | Remote Repository |

---

# Project Structure

```bash
Linux-File-Monitoring-Auto-Backup1/
│
├── index.html
├── style.css
├── script.js
│
├── scripts/
│   └── monitor_backup.sh
│
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
│
├── .github/
│   └── workflows/
│       └── docker-deploy.yml
│
├── .gitignore
└── README.md
```

---

# Docker — Quick Start

## Clone Repository

```bash
git clone https://github.com/MDAzhar7799/Linux-File-Monitoring-Auto-Backup1.git
cd Linux-File-Monitoring-Auto-Backup1
```

## Build & Start Containers

```bash
docker-compose up -d
```

Open dashboard in browser:

```bash
http://localhost:8080
```

---

# Docker Only

## Build Docker Image

```bash
docker build -t fileguardian-dashboard .
```

## Run Container

```bash
docker run -d -p 8080:80 --name fileguardian fileguardian-dashboard
```

---

# Useful Docker Commands

```bash
# Check running containers
docker-compose ps

# View live logs
docker-compose logs -f

# Stop all containers
docker-compose down

# Open container terminal
docker exec -it fileguardian_monitor bash

# Run monitoring script manually
bash /scripts/monitor_backup.sh
```

---

# GitHub Actions CI/CD

Every push to the `main` branch automatically:

1. Builds the Docker image
2. Tests container health
3. Pushes image to Docker Hub with tags:
   - `latest`
   - `v1.1`
   - `sha-<commit>`

---

# GitHub Secrets Setup

Go to:

```text
GitHub Repository → Settings → Secrets → Actions
```

Add the following secrets:

| Secret Name | Value |
|-------------|-------|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | Your Docker Hub access token |

---

# Run Shell Script Without Docker

## Install inotify-tools

```bash
sudo apt update
sudo apt install inotify-tools
```

## Give Execute Permission

```bash
chmod +x scripts/monitor_backup.sh
```

## Run Script

```bash
bash scripts/monitor_backup.sh
```

---

# Git Commands Used

```bash
git init
git add .
git commit -m "Initial commit"

git stash
git branch
git checkout
git rebase

git tag v1.0
git push origin main --tags
```

---

# 🏷 Version History

| Version | Description |
|---------|-------------|
| `v1.0` | Initial stable release |
| `v1.1` | Docker + CI/CD pipeline added |

---

# Author

## MD AZHAR

**DevOps CA2 Project**

GitHub:  
https://github.com/MDAzhar7799

---
