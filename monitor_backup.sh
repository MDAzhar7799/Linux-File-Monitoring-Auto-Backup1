#!/bin/bash

MONITOR_DIR="$HOME/monitor_folder"
BACKUP_DIR="$HOME/backup_folder"
LOG_FILE="$HOME/backup.log"

mkdir -p "$BACKUP_DIR"

inotifywait -m -r -e create,modify,delete "$MONITOR_DIR" |
while read path action file
do
    TIME=$(date "+%Y-%m-%d_%H-%M-%S")
    tar -czf "$BACKUP_DIR/backup_$TIME.tar.gz" "$MONITOR_DIR"
    echo "[$TIME] $action detected on $file" >> "$LOG_FILE"
done
