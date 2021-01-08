function ReferenceDAO(){

}

ReferenceDAO.prototype.indexPage = (req,res)=>{
    res.render('page1');
}
ReferenceDAO.prototype.homePage = (req,res)=>{
    res.render('page2');
}

module.exports = ()=>{
    return ReferenceDAO;
}