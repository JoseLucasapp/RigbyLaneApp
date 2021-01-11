module.exports.homePage = (Application, req, res)=>{
    let homePage = new Application.app.models.UsersDAO();
    homePage.homePage(req, res);
}
module.exports.newUser = (Application, req, res)=>{
    let newUser = new Application.app.models.UsersDAO();
    newUser.newUser(req, res);
}

module.exports.indexPage = (Application, req, res)=>{
    let data = new Application.app.models.ReferenceDAO();
    data.indexPage(req, res);
}
module.exports.savedPage = (Application, req, res)=>{
    let savedPage = new Application.app.models.ReferenceDAO();
    savedPage.savedPage(req, res);
}
module.exports.savedPagePost = (Application, req, res)=>{
    let savedPagePost = new Application.app.models.UsersDAO();
    savedPagePost.savedPagePost(req, res);
}
module.exports.profilePage = async(Application, req, res)=>{
    let user = req.body.username;
    if(!user){
        user = "instagram";
    }
    let prof = new Application.app.models.ConnectionDAO();
    let results = await prof.searchProfile(user);

    let profilePage = new Application.app.models.ReferenceDAO();
    profilePage.profilePage(req, res, results);
}
module.exports.logout = (Application, req, res)=>{
    let logOut = new Application.app.models.ReferenceDAO();
    logOut.logOut(req, res);
}