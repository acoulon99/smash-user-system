#!/bin/bash
# MongoDB install script

echo "Starting MongoDB..."
# If Mongo crashes you must remove the mongod.lock file before it will start
if [[ -f /var/lib/mongodb/mongod.lock ]]; then
	echo 'Removing mongod.lock file..'
	sudo rm /var/lib/mongodb/mongod.lock
	mongod --repair
fi

sudo service mongod restart