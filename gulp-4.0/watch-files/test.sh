#!/bin/bash

echo "aaa" > src/aaa.txt # Add
sleep 1s
echo "bbb" > src/bbb.txt # Add another
sleep 1s
echo "aaaa" > src/aaa.txt # Edit
sleep 1s
rm src/*.txt # Delete
