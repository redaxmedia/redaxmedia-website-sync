module.exports = () =>
{
	const config =
	{
		configDatabase:
		{
			command:
			[
				'cd build',
				'php console.php config parse --db-url $DB_URL --halt-on-error',
				'php console.php status database'
			]
			.join('&&')
		},
		configModules:
		{
			command:
			[
				'replace \'UA-00000000-0\' \'UA-16122280-16\' -- build/modules/Analytics/assets/scripts/init.js',
				'replace \'auto\' \'redaxmedia.com\' -- build/modules/Analytics/assets/scripts/init.js',
				'echo sitemap: https://redaxmedia.com/module/sitemap-xml > build/robots.txt'
			]
			.join('&&')
		},
		removeConsole:
		{
			command:
			[
				'cd build',
				'rm console.php'
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
