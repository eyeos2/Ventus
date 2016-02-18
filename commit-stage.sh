#!/bin/sh

set -e
set -u
set -x

if [ -f /.dockerinit ]; then
	xvfb-run grunt test
else
	npm install
	bower install
	grunt test
fi
