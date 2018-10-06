module.exports = () =>
{
	'use strict';

	const config =
	{
		configDatabase:
		{
			command:
			[
				'cd build',
				'php console.php config parse --db-url $DB_URL',
				'php console.php status database',
				'rm console.php'
			]
			.join('&&')
		},
		configModules:
		{
			command:
			[
				'replace \'UA-00000000-0\' \'UA-16122280-16\' -- build/modules/Analytics/assets/scripts/init.js',
				'replace \'auto\' \'redaxmedia.com\' -- build/modules/Analytics/assets/scripts/init.js',
				'echo sitemap: https://redaxscript.com/module/sitemap-xml > build/robots.txt'
			]
			.join('&&')
		},
		removeBuild:
		{
			command: 'rm -rf build'
		},
		options:
		{
			stdout: true,
			failOnError: true
		}
	};

	return config;
};