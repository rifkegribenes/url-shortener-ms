// server.js

// init project
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shortUrl = require('./models/shortUrl');

app.use(bodyParser.json());
app.use(cors());

// connect to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shorturls');

// create DB entry
app.get('/new/:urlToShorten(*)', (req, res, next) => {
	const { urlToShorten } = req.params;
	const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

	if (regex.test(urlToShorten) === true) {
		const short = Math.floor(Math.random()*100000).toString();
		const data = new shortUrl(
			{
				originalUrl: urlToShorten,
				shorterUrl: short
			});
		data.save(err => {
			if (err) {
				return res.send('Error saving to database');
			}
		});
		return res.json(data);
	} else {
		const data = new shortUrl({
			originalUrl: urlToShorten,
			shorterUrl: 'Invalid URL'
		})
		return res.json(data);
	}
	//
});

//

// const api = require('./routes/api');

app.use(express.static('public'));
// app.use('/', api);

app.set('view engine', 'pug');

app.get('*', (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index.pug', {
    fullUrl: fullUrl,
    title: 'URL Shortener Microservice'
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on localhost:${port}`));