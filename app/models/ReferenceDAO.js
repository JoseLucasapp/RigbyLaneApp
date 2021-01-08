function ReferenceDAO(){

}

ReferenceDAO.prototype.index = (req,res)=>{
    res.render('page1');
}

module.exports = ()=>{
    return ReferenceDAO;
}