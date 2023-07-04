#!/bin/bash

mkdir -p dist

# Copying the __MOCK directory w/ mock images
rm -rf dist/__MOCK
cp -r src/__MOCK dist

parcel build index.html
