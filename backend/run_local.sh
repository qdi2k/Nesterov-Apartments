#!/bin/bash

cleanup() {
    echo "Остановка hupper..."
    kill -TERM "$HUPPER_PID" 2>/dev/null
    wait "$HUPPER_PID"
    exit 0
}

trap cleanup SIGINT

hupper -m uvicorn main:app &
HUPPER_PID=$!

while true; do
    sleep 1
done
