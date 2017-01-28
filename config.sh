#!/usr/bin/env bash

replace 'UA-00000000-0' 'UA-16122280-16' -- build/modules/Analytics/assets/scripts/init.js
replace 'auto' 'redaxmedia.com' -- build/modules/Analytics/assets/scripts/init.js
echo sitemap: https://redaxscript.com/sitemap_xml > build/robots.txt

cd build
php console.php config parse --db-url $DB_URL
php console.php status database
rm console.php
mkdir files