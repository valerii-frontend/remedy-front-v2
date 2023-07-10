#!/bin/bash

vercel build --prod
vercel deploy --prebuilt --prod

open https://remedy-front-v2.vercel.app
