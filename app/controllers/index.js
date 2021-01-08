module.exports.indexPage = (Application, req, res)=>{
    let data = new Application.app.models.ReferenceDAO();
    data.indexPage(req, res);
}
module.exports.homePage = (Application, req, res)=>{
    let homePage = new Application.app.models.ReferenceDAO();
    homePage.homePage(req, res);
}