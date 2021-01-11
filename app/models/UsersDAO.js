const {validationResult} = require('express-validator');
const mongoose = require('mongoose');

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

function UsersDAO(){
    const MongoDB_URL = process.env.MongoDB_URL || 'mongodb://localhost:27017/rigbylane';
    mongoose.connect(MongoDB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

UsersDAO.prototype.homePage = async(req, res)=>{
    let errors = validationResult(req);
    let data = req.body;
    if(!errors.isEmpty()){
        res.render('page1', {msg: "",exist: "", errors: errors.array(), values: data});
        return;
    }else{
        const User = await User_schema.find({username: data.username});
        const Pass = await User_schema.find({password: data.password})
        if(User.length == 0){
            res.render('page1', {msg: "",exist: "Incorrect Username", errors: "", values: data});
            return;
        }
        if(Pass.length == 0){
            res.render('page1', {msg: "",exist: "Incorrect password",errors: "", values: data});
            return;
        }else{
            req.session.authorized = true;
            req.session.username = data.username;
            if(req.session.authorized){
                res.render('page2');
            }
        }
    }
}
UsersDAO.prototype.newUser = async(req, res)=>{
    let errors = validationResult(req);
    let data = req.body;
    if(!errors.isEmpty()){
        res.render('page1', {msg: "",exist: "", errors: errors.array(), values: data});
        return;
    }else{

        const User = await User_schema.find({username: data.newUsername});
        if(User.length > 0){
            res.render('page1', {msg: "",exist: "Username already exists", errors: "", values: data});
            return;
        }
        else{
            const AddNewUser = new User_schema({
                username: req.body.newUsername,
                password: req.body.newPassword
            });
            AddNewUser.save();
            req.session.authorized = true;
            req.session.username = data.username;
            res.render('page2');
        }
    }
}

UsersDAO.prototype.savedPagePost = async(req, res)=>{
    User_schema.findOneAndUpdate(
        { username: req.session.username },
        { $push: { savedProfiles: req.body.instaUser } },
    ).exec();

    res.render('saved', {savedProfilesData : ""});
}
UsersDAO.prototype.savedPage = (req, res)=>{
    if(req.session.authorized){
        User_schema.find({username: req.session.username}).exec((err, usersData)=>{
            res.render('saved', {savedProfilesData : usersData[0]});
        });
    }else{
        res.render('page1', {msg: "",exist: "", errors: "",values:""});
    }
}

UsersDAO.prototype.deleteInstaUser = (req, res)=>{
    console.log(req.body.userForDelete);
    if(req.session.authorized){
        User_schema.find({username: req.session.username}).exec((err, usersData)=>{
            res.render('saved', {savedProfilesData : usersData[0]});
        });
    }else{
        res.render('page1', {msg: "",exist: "", errors: "",values:""});
    }
}
module.exports = ()=>{
    return UsersDAO;
}