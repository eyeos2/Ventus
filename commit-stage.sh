#!/bin/sh

set -e
set -u
set -x

npm install
bower install 
grunt test

if [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/master)" ]
then
    # we may be in 'master' or in a detached branch in commit 'abcdef...' which
    # also is master (great job, jenkins ¬¬ ), so checkout master to be able to
    # push new commits
    git checkout master

    grunt build
    git add .
    git add -f build
    git commit -m "Generated build"
    bower version patch -m "Upgraded version to %s"
    git push origin master
    git push --tags
    echo "commit_id=$(git rev-parse HEAD)" > commit.properties
fi
