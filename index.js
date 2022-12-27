const express = require('express');
const chalk = require('chalk');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', 8080);

app.listen(app.get('port'), () => {
	console.log(
		'%s App is running at http://localhost:%d in %s mode',
		chalk.green('✓'),
		app.get('port'),
		app.get('env')
	);
	console.log('Press CTRL-C to stop\n');
});

app.get('/', (req, res) => {
	res.send({ message: 'User fetched' });
});

app.get('/faq', (req, res) => {
	res.send({ message: 'FAQ fetched' });
});