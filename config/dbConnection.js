const mongoose = require('mongoose');

const MongoDB_URL = process.env.MongoDB_URL || "mongodb://localhost:27017/database";
mongoose.connect(MongoDB_URL,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
