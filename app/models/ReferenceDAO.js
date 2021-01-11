const {validationResult} = require('express-validator');

function ReferenceDAO(){
    
}

ReferenceDAO.prototype.indexPage = (req, res, results)=>{
    if(req.session.authorized){
        res.render('page2');
    }else{
        res.render('page1', {msg: "",exist: "", errors: "",values:""});
    }
}

ReferenceDAO.prototype.savedPage = (req, res)=>{
    if(req.session.authorized){
        User_schema.find({username: req.session.username}).exec((err, usersData)=>{
            console.log(usersData.savedProfiles);
        });
        res.render('saved');
    }else{
        res.render('page1', {msg: "",exist: "", errors: "",values:""});
    }
}
ReferenceDAO.prototype.profilePage = async(req, res, results)=>{
    let errors = validationResult(req);
    let data = req.body;
    if(!errors.isEmpty()){
        res.render("page2");
        return;
    }
    else{
        res.render('profileData', {response: results});
    }
}
ReferenceDAO.prototype.logOut = (req, res)=>{
    req.session.destroy((err)=>{
        res.render('page1', {msg: "Good Bye" ,exist: "", errors: "",values:""});
    });
}

module.exports = ()=>{
    return ReferenceDAO;
}