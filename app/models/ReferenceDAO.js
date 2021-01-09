const {validationResult} = require('express-validator');
const mongoose = require('mongoose');

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
    const User = User_schema.findOne({newUsername: req.body.username},{projection: { _id: 0, newUsername: 1, newPassword: 1 }});
    console.log(User._conditions);
    if(User._conditions.newUsername === req.body.username){
        console.log(User._conditions.newPassword === req.body.password);
        console.log(User._conditions.newPassword);
        console.log(req.body.password);
    }
    return;
    //res.render('page2');
}
ReferenceDAO.prototype.savedPage = (req, res)=>{
    res.render('saved');
}
ReferenceDAO.prototype.profilePage = (req, res)=>{
    res.render('profileData');
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