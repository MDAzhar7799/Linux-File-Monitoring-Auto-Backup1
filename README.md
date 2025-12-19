# Linux-File-Monitoring-Auto-Backup1
A DevOps CA2 project implementing a Linux File Monitoring and Auto-Backup system using Shell Scripting and Git. The system monitors directory changes in real time and automatically creates compressed backups with logging and version control.
# Linux File Monitoring & Auto Backup System

## Description
This project monitors a directory in real-time using `inotifywait`
and automatically creates timestamped backups whenever a file is
created, modified, or deleted.

## Features
- Real-time file monitoring
- Automatic backup creation
- Logging system
- Shell scripting based
- Git & GitHub version control

## Technologies Used
- Linux
- Bash / Shell Scripting
- inotify-tools
- Git & GitHub

## How to Run
```bash
chmod +x monitor.sh
./monitor.sh
