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

#
# This shell script is written to be as portable as possible. It even
# avoids defining any shell functions, as the work to be done is quite
# straightforward.
#
# Each generated key will be one of the following types:
#
#       Type 1: 128 random bits (16 random bytes) written in
#               URL-safe Base64 with no padding.
#
#       Type 2: 256 random bits (32 random bytes) written in
#               URL-safe Base64 with no padding.
#

chmod 600 .env || exit $?

tmp=generate-keys.sh.tmp

to_url_safe='
  s|=||g
  s|+|-|g
  s|/|_|g
'

# AGGREGATOR_API_AUTH_TOKENS: A single type 1 key.
head -c 16 /dev/urandom >${tmp?}1 || exit $?
base64 -w 0 ${tmp?}1 >${tmp?}2 || exit $?
x=`sed "${to_url_safe?}" ${tmp?}2` || exit $?
sed -i.bak "
  /^#AGGREGATOR_API_AUTH_TOKENS=/ {
    s|=.*|=${x?}|
    s|#||
  }
" .env || exit $?

# DATASTORE_KEYS: A single type 1 key.
head -c 16 /dev/urandom >${tmp?}1 || exit $?
base64 -w 0 ${tmp?}1 >${tmp?}2 || exit $?
x=`sed "${to_url_safe?}" ${tmp?}2` || exit $?
sed -i.bak "
  /^#DATASTORE_KEYS=/ {
    s|=.*|=${x?}|
    s|#||
  }
" .env || exit $?

# POSTGRES_PASSWORD: A single type 1 key.
head -c 16 /dev/urandom >${tmp?}1 || exit $?
base64 -w 0 ${tmp?}1 >${tmp?}2 || exit $?
x=`sed "${to_url_safe?}" ${tmp?}2` || exit $?
sed -i.bak "
  /^#POSTGRES_PASSWORD=/ {
    s|=.*|=${x?}|
    s|#||
  }
" .env || exit $?

rm -f ${tmp?}* || exit $?
