'use strict';

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || 'development';
const express     = require('express');
const bodyParser  = require('body-parser');
const sass        = require('node-sass-middleware');
const app         = express();
const bcrypt      = require('bcrypt');
const cookieSession = require('cookie-session');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET
const cookieParser = require('cookie-parser');



const knexConfig  = require('./knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require('./routes/users');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/styles', sass({
  src: __dirname + '/styles',
  dest: __dirname + '/public/styles',
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static('public'));

// Mount all resource routes
app.use('/users', usersRoutes(knex, bcrypt));



app.get('/test/login', function(req, res) {
  console.log(req.body);
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

  console.log(token);
  res.sendStatus(200);
});


app.post('/test/login', function(req, res) {
    const payload = {email: 'TEst'};

    const token = jwt.sign(payload, secret, {
      expiresIn: '1h'
    });
    console.log(token);
    res.json({
       user: 'Test user',
       token: token
    });
});

console.log(secret)
// Home page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});
