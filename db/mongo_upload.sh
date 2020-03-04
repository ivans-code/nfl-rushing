#!/bin/bash
mongoimport --db nfl --collection Rushing --drop --file rushing_clean.json --jsonArray