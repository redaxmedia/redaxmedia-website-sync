module.exports = () =>
{
	'use strict';

	const config =
	{
		distWebsite:
		{
			src:
			[
				'assets/**',
				'cache/**',
				'database/**',
				'dist/**',
				'includes/**',
				'languages/en.json',
				'libraries/**',
				'modules/Analytics/**',
				'modules/PageCache/**',
				'modules/SitemapXml/**',
				'modules/Validator/**',
				'templates/admin/**',
				'config.php',
				'console.php',
				'index.php',
				'.htaccess'
			],
			dest: 'build',
			cwd: 'vendor/redaxscript/redaxscript/',
			expand: true
		},
		distTemplate:
		{
			src:
			[
				'templates/redaxmedia/**'
			],
			dest: 'build',
			cwd: 'vendor/redaxmedia/redaxmedia-template/',
			expand: true
		}
	};

	return config;
};