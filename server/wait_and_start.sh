#!/bin/sh
./wait-for-it.sh -h mongo -p 27017 --timeout=200
npm run prod