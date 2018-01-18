// server.js

// init project
const express = require('express');
const http = require('http');
const app = express();

const api = require('./routes/api');

app.use(express.static('public'));
app.use('/', api);

app.set('view engine', 'pug');


const server = http.createServer(app);
const port = process.env.PORT || '3000';
app.set('port', port);
server.listen(port, () => console.log(`API running on localhost:${port}`));