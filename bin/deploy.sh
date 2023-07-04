#!/bin/bash

echo "DEPLOYING TO REMEDY-FRONT-V2.SURGE.SH..."

rm -rf dist
npm run build
cp dist/index.html dist/200.html

surge dist --domain "remedy-front-v2.surge.sh"

rm -rf dist
rm -rf .parcel-cache
