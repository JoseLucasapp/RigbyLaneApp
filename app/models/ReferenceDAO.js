const {validationResult} = require('express-validator');
const mongoose = require('mongoose');
const axios = require('axios');

const User_schema = mongoose.model("Users",{
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
});

function ReferenceDAO(){
    const MongoDB_URL = process.env.MongoDB_URL || 'mongodb://localhost:27017/rigbylane';
    mongoose.connect(MongoDB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

ReferenceDAO.prototype.indexPage = (req, res)=>{
    res.render('page1', {errors: "",values:""});
}
ReferenceDAO.prototype.homePage = (req, res)=>{
    res.render('page2');
}
ReferenceDAO.prototype.savedPage = (req, res)=>{
    res.render('saved');
}
ReferenceDAO.prototype.profilePage = async(req, res)=>{
    console.log(req.body);
    const response =  await axios.get('https://www.instagram.com/legadaodamassa/?__a=1').then(res=>{return Object.values(res.data.graphql)});
    res.render('profileData',{results: response});
}
ReferenceDAO.prototype.newUser = (req, res)=>{
    let errors = validationResult(req);
    let data = req.body;
    if(!errors.isEmpty()){
        res.render('page1', {errors: errors.array(), values: data});
        return;
    }else{
        const AddNewUser = new User_schema({
            username: req.body.newUsername,
            password: req.body.newPassword
        });
        AddNewUser.save();
        res.render('page2');
    }
}

module.exports = ()=>{
    return ReferenceDAO;
}