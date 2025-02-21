#
# Copyright (C) 2025 Stealth Software Technologies, Inc.
#
# Permission is hereby granted, free of charge, to any person
# obtaining a copy of this software and associated documentation
# files (the "Software"), to deal in the Software without
# restriction, including without limitation the rights to use,
# copy, modify, merge, publish, distribute, sublicense, and/or
# sell copies of the Software, and to permit persons to whom the
# Software is furnished to do so, subject to the following
# conditions:
#
# The above copyright notice and this permission notice (including
# the next paragraph) shall be included in all copies or
# substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
# OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
# HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
# WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
# OTHER DEALINGS IN THE SOFTWARE.
#
# SPDX-License-Identifier: MIT
#

set -E -e -u -o pipefail || exit $?
trap exit ERR

set -x

#-----------------------------------------------------------------------
# Sleep a bit before doing anything else
#-----------------------------------------------------------------------
#
# Terraform sometimes gets into the host so fast that "apt-get update"
# fails with weird "No such file or directory" errors. Doing a sleep
# before doing anything else seems to help.
#

sleep 30

#-----------------------------------------------------------------------
# Make apt-get noninteractive
#-----------------------------------------------------------------------

DEBIAN_FRONTEND=noninteractive
readonly DEBIAN_FRONTEND
export DEBIAN_FRONTEND

#-----------------------------------------------------------------------
# Install some packages
#-----------------------------------------------------------------------

sudo apt-get -q -y update

sudo apt-get -q -y install \
  bash \
  jq \
;

#-----------------------------------------------------------------------
# Install Docker
#-----------------------------------------------------------------------

curl -L -S -f -s https://get.docker.com/ | sudo sh

x=$(sed -n '/^docker:/ p' /etc/group)
if [[ ! $x ]]; then
  sudo groupadd docker
fi

sudo usermod -G docker -a $USER

#-----------------------------------------------------------------------
# Start the Docker Compose deployment
#-----------------------------------------------------------------------

sg docker 'docker compose up -d'
