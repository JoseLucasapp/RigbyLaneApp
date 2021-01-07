const express = require('express');
const consign = require('consign');

const app = express();

app.use(express.static('./app/public'));
app.engine('html', require('ejs').renderFile);
app.set('views', './app/views');
app.set('view engine', 'html')

consign().include().into(app);

module.exports = app;