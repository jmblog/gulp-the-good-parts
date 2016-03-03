#!/bin/bash

for gulpfile in `ls */*/gulpfile*.js`; do
  cmd="gulp --gulpfile ${gulpfile}"
  echo ${cmd}
  ${cmd} &
done
