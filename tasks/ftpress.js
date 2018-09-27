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
					'mirror {SOURCE} {TARGET}-new-{TIMESTAMP} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'chmod 0444 {TARGET}-new-{TIMESTAMP}/config.php',
					'mmv {TARGET} {TARGET}-old-{TIMESTAMP}',
					'mmv {TARGET}-new-{TIMESTAMP} {TARGET}',
					'exit'
				]
			}
		}
	};

	return config;
};
