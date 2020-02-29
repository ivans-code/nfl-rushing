#!/bin/bash
mongoimport --db nfl --collection rushing --drop --file rushing_clean.json --jsonArray