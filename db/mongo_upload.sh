#!/bin/bash
./wait-for-it.sh -h mongo -p 27017 --timeout=200
mongoimport --host mongo --db nfl --collection Rushing --drop --file rushing_clean.json --jsonArray