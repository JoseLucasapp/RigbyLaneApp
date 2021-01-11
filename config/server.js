const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
    secret:'13ippdhwl',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static('./app/public/'));
app.engine('html', require('ejs').renderFile);
app.set('views', './app/views');
app.set('view engine', 'html');

consign().include('app/controllers')
.then('app/models')
.then('app/routes').into(app);

module.exports = app;