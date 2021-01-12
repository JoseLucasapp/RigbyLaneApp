const {validationResult} = require('express-validator');

function ReferenceDAO(){
    
}
ReferenceDAO.prototype.getHome = (req, res)=>{
    if(req.session.authorized){
        res.render("page2", {user: req.session.username});
    }
    else{
        res.render('page1', {msg: "Good Bye" ,exist: "", errors: "",values:""});
    }
}

ReferenceDAO.prototype.indexPage = (req, res, results)=>{
    if(req.session.authorized){
        res.render('page2');
    }else{
        res.render('page1', {msg: "",exist: "", errors: "",values:""});
    }
}

ReferenceDAO.prototype.profilePage = (req, res, results)=>{
    let errors = validationResult(req);
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