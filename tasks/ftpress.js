module.exports = () =>
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
					'set sftp:auto-confirm yes',
					'mirror {SOURCE} {TARGET}-new-{TIMESTAMP} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'chmod 0444 {TARGET}-new-{TIMESTAMP}/config.php',
					'mv {TARGET} {TARGET}-old-{TIMESTAMP}',
					'mv {TARGET}-new-{TIMESTAMP} {TARGET}',
					'rm -rf {TARGET}-old-{TIMESTAMP}',
					'exit'
				]
			}
		}
	};

	return config;
};
