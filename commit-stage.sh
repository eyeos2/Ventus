#!/bin/sh

set -e
set -u
set -x

npm install
bower install -f
grunt test

if [ "$(git rev-parse --abbrev-ref HEAD)" = "master" ]
then
    bower version patch -m "Upgraded version to %s"
    git push origin master
    git push --tags
    echo "commit_id=$(git rev-parse HEAD)" > commit.properties
fi