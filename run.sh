#!/bin/bash
	

## example 1: checking if "python3" is running
while :
do
sleep 1
OUTPUT=$(ps -aux | grep -cE "node app.js")

if (( OUTPUT > 1 )); then
    echo "node is running"
	sleep 1s
else
    echo "node is not running"
	
    nohup node app.js &
fi

done