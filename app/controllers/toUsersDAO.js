module.exports.homePage = (Application, req, res)=>{
    let homePage = new Application.app.models.UsersDAO();
    homePage.homePage(req, res);
}
module.exports.newUser = (Application, req, res)=>{
    let newUser = new Application.app.models.UsersDAO();
    newUser.newUser(req, res);
}