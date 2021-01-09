const mongoose = require('./dbConnection');

const User_schema = mongoose.model("users",{
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
});

const user = mongoose.model("User", User_schema);

module.exports = user;