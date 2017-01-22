require('shelljs/global');

let chalk = require('chalk');
let program = require('commander');

if (!which('aws')) {
  echo('Sorry, this script requires aws');
  exit(1);
}

program.version('0.0.1')
  .option('-m, --max-age [value]', 'set value for cache-control')
  .option('-f, --filepaths [items]', 'relative filepaths url')
  .option('-b, --bucket [value]', 's3 bucket name')
  .parse(process.argv);

imagesFilePaths = program.filepaths.split(',');

imagesFilePaths.forEach((filepath) => {
	let imagePath = `s3://${program.bucket}/${filepath}`;
	let cacheControl = `max-age=${program.maxAge}`;
	let metaDirective = 'REPLACE --expires 2034-01-01T00:00:00Z';
	let acl = 'public-read';

	let sssCmd = `
		aws s3 cp ${imagePath} ${imagePath} --cache-control ${cacheControl} --metadata-directive ${metaDirective} --acl ${acl}
	`
	console.log(chalk.green('Log : '), chalk.gray(sssCmd));
	if (exec(sssCmd).code !== 0) {
  		echo('Error: AWS set cache-control failed');
  		exit(1);
	}
});
