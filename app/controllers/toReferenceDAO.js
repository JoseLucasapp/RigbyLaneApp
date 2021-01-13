module.exports.indexPage = (Application, req, res)=>{
    let data = new Application.app.models.ReferenceDAO();
    data.indexPage(req, res);
}
module.exports.logout = (Application, req, res)=>{
    let logOut = new Application.app.models.ReferenceDAO();
    logOut.logOut(req, res);
}
module.exports.getHome = (Application, req ,res)=>{
    let getHome = new Application.app.models.ReferenceDAO();
    getHome.getHome(req, res);
}
module.exports.deleteAccount = (Application, req, res)=>{
    let deleteAccount = new Application.app.models.UsersDAO();
    deleteAccount.deleteAccount(req, res);
}
module.exports.profilePage = async(Application, req, res)=>{
    if(req.session.authorized){
        let user = req.body.username;
        if(!user){
            user = req.body.userForView;
        }
        if(!user){
            user = "instagram";
        }
        let searchProfile = new Application.app.models.InstagramConnect();
        let searchResults = await searchProfile.Connect(user);
        if(searchResults === "error"){
            req.session.destroy((err)=>{
                res.render('page1', {msg: "" ,exist: "User not found or instagram not response", errors: "",values:""});
            });
            return;
        }

        let profilePage = new Application.app.models.ReferenceDAO();
        profilePage.profilePage(req, res, searchResults);
    }else{
        res.render('page1', {msg: "" ,exist: "", errors: "",values:""})
    }
}