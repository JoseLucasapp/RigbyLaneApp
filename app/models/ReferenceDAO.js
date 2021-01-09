const {validationResult} = require('express-validator');
function ReferenceDAO(){

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
ReferenceDAO.prototype.profilePage = (req, res)=>{
    res.render('profileData');
}
ReferenceDAO.prototype.newUser = (req, res)=>{
    let errors = validationResult(req);
    let data = req.body;
    if(!errors.isEmpty()){
        res.render('page1', {errors: errors.array(), values: data});
        return;
    }
    res.render('page2');
}

module.exports = ()=>{
    return ReferenceDAO;
}