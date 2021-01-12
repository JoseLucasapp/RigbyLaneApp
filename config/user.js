const mongoose = require('mongoose');

const MongoDB_URL = process.env.MongoDB_URL || 'mongodb://localhost:27017/rigbylane';
    mongoose.connect(MongoDB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
});

const User_schema = mongoose.model("Users",{
    username:{
        type: String,
        lowercase:true,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    savedProfiles:[]
});

module.exports = User_schema;