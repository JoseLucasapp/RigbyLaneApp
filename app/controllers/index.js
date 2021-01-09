module.exports.indexPage = (Application, req, res)=>{
    let data = new Application.app.models.ReferenceDAO();
    data.indexPage(req, res);
}
module.exports.savedPage = (Application, req, res)=>{
    let savedPage = new Application.app.models.ReferenceDAO();
    savedPage.savedPage(req, res);
}
module.exports.homePage = (Application, req, res)=>{
    let homePage = new Application.app.models.ReferenceDAO();
    homePage.homePage(req, res);
}
module.exports.profilePage = (Application, req, res)=>{
    let profilePage = new Application.app.models.ReferenceDAO();
    profilePage.profilePage(req, res);
}
module.exports.newUser = (Application, req, res)=>{
    let newUser = new Application.app.models.ReferenceDAO();
    newUser.newUser(req, res);
}