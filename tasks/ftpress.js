module.exports = grunt =>
{
	'use strict';

	const config =
	{
		deploy:
		{
			src:
			[
				'build'
			],
			dest: 'www/htdocs/w00976cb/redaxmedia',
			options:
			{
				url: process.env.FTP_URL,
				command:
				[
					'mirror {SOURCE} {TARGET}-temp --reverse --delete-first --parallel=10 --use-pget-n=10',
					'chmod 0444 {TARGET}-temp/config.php',
					'rename {TARGET} {TARGET}-{TIMESTAMP}',
					'rename {TARGET}-temp {TARGET}',
					'exit'
				]
			}
		}
	};

	return config;
};
