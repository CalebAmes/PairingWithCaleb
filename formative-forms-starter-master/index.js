const express = require('express');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

const csurfProtection = csurf({ cookie: true });

app.use(cookieParser());

app.set('view engine', 'pug');

const users = [
	{
		id: 1,
		firstName: 'Jill',
		lastName: 'Jack',
		email: 'jill.jack@gmail.com',
	},
];

// app.get('/create', csurfProtection, async (req, res) => {

// })

app.get('/', (req, res) => {
	// res.send("Hello World!");
	// console.log(users[0])

	res.render('index', { users });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
