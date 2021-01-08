function ReferenceDAO(){

}

ReferenceDAO.prototype.indexPage = (req,res)=>{
    res.render('page1');
}
ReferenceDAO.prototype.homePage = (req,res)=>{
    res.render('page2');
}
ReferenceDAO.prototype.savedPage = (req, res)=>{
    res.render('saved');
}
ReferenceDAO.prototype.profilePage = (req, res)=>{
    res.render('profileData');
}

module.exports = ()=>{
    return ReferenceDAO;
}