// server.js

// init project
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

// create DB entry
app.get('/new/:urlToShorten(*)', (req, res, next) => {
	const { urlToShorten } = req.params;
	console.log(urlToShorten);
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