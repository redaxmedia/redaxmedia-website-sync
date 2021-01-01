module.exports = () =>
{
	const config =
	{
		distWebsite:
		{
			src:
			[
				'assets/**',
				'cache/**',
				'database/**',
				'includes/**',
				'languages/en.json',
				'libraries/**',
				'modules/AliasGenerator/**',
				'modules/Analytics/**',
				'modules/CodeEditor/**',
				'modules/ConfirmAction/**',
				'modules/Dialog/**',
				'modules/FormValidator/**',
				'modules/HtmlValidator/**',
				'modules/PageCache/**',
				'modules/RankSorter/**',
				'modules/Reporter/**',
				'modules/SitemapXml/**',
				'modules/TextareaResizer/**',
				'modules/UnmaskPassword/**',
				'templates/admin/**',
				'templates/console/**',
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
