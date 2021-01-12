const {validationResult} = require('express-validator');
const User_schema = require('../../config/user');

function UsersDAO(){
    
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
            res.render('page1', {msg: "",exist: "Username do not exists", errors: "", values: data});
            return;
        }
        if(Pass.length == 0){
            res.render('page1', {msg: "",exist: "Incorrect password",errors: "", values: data});
            return;
        }else{
            req.session.authorized = true;
            req.session.username = data.username;
            if(req.session.authorized){
                res.render('page2', {user: req.session.username});
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
            res.render('page2', {user: req.session.username});
        }
    }
}

UsersDAO.prototype.deleteAccount = (req, res)=>{
    if(req.session.authorized){
        User_schema.findOneAndDelete({username: req.session.username}).exec(
            (err)=>{
                req.session.destroy((err)=>{
                    res.render('page1', {msg: "Account deleted" ,exist: "", errors: "",values:""});
                });
            }
        );
    }else{
        res.render('page1', {msg: "Account not deleted",exist: "", errors: "",values:""});
    }
}

module.exports = ()=>{
    return UsersDAO;
}