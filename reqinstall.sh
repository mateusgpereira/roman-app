#!/bin/bash

#Download the install script for nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.1/install.sh | bash

source ~/.profile     ## Debian
source ~/.bashrc      ## RHEL systems

nvm install v12.18.3

nvm use v12.18.3

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install --no-install-recommends yarn
