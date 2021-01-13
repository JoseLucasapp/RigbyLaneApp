module.exports.savedPage = (Application, req, res)=>{
    let savedPage = new Application.app.models.InstaDAO();
    savedPage.savedPage(req, res);
}
module.exports.savedPagePost = (Application, req, res)=>{
    let savedPagePost = new Application.app.models.InstaDAO();
    savedPagePost.savedPagePost(req, res);
}
module.exports.deleteInstaUser = (Application, req, res)=>{
    let deleteInstaUser = new Application.app.models.InstaDAO();
    deleteInstaUser.deleteInstaUser(req,res);
}