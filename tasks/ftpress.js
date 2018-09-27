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
					'mirror {SOURCE} {TARGET}-{TIMESTAMP} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'chmod 0444 {TARGET}-{TIMESTAMP}/config.php',
					'rm -r {TARGET}',
					'mv {TARGET}-{TIMESTAMP} {TARGET}',
					'exit'
				]
			}
		}
	};

	return config;
};
