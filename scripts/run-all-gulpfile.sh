#!/bin/bash

for gulpfile in `ls recipes/*/gulpfile*.js`; do
  cmd="gulp --gulpfile ${gulpfile}"
  echo ${cmd}
  ${cmd} &
done
