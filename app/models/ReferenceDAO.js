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
    res.render('page1', {exist: "", errors: "",values:""});
}
ReferenceDAO.prototype.homePage = async(req, res)=>{
    let errors = validationResult(req);
    let data = req.body;
    if(!errors.isEmpty()){
        res.render('page1', {exist: "", errors: errors.array(), values: data});
        return;
    }else{
        const User = await User_schema.find({username: data.username});
        const Pass = await User_schema.find({password: data.password})
        if(User.length == 0){
            res.render('page1', {exist: "Incorrect Username", errors: "", values: data});
            return;
        }
        if(Pass.length == 0){
            res.render('page1', {exist: "Incorrect password",errors: "", values: data});
            return;
        }else{
            res.render('page2');
        }
    }
}
ReferenceDAO.prototype.savedPage = (req, res)=>{
    res.render('saved');
}
ReferenceDAO.prototype.profilePage = async(req, res)=>{
    /*
        try {
          const response = await axios.get('https://www.instagram.com/legadaodamassa/?__a=1');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    */
    res.render('profileData');
}
ReferenceDAO.prototype.newUser = async(req, res)=>{
    let errors = validationResult(req);
    let data = req.body;
    if(!errors.isEmpty()){
        res.render('page1', {exist: "", errors: errors.array(), values: data});
        return;
    }else{

        const User = await User_schema.find({username: data.newUsername});
        if(User.length > 0){
            res.render('page1', {exist: "Username already exists", errors: "", values: data});
            return;
        }
        else{
            const AddNewUser = new User_schema({
                username: req.body.newUsername,
                password: req.body.newPassword
            });
            AddNewUser.save();
            res.render('page2');
        }
    }
}

module.exports = ()=>{
    return ReferenceDAO;
}