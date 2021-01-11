const {body} = require('express-validator');
module.exports = (Application)=>{
    Application.post('/home', [
        body("username").isLength({min: 5}).withMessage("Username lower than 5 characters"),
        body("password").isLength({min: 6}).withMessage("Password lower than 6 characters")
    ],(req, res)=>{
        Application.app.controllers.index.homePage(Application, req, res);
    });
    Application.post('/profile', (req, res)=>{
        Application.app.controllers.index.profilePage(Application, req, res);
    });
    Application.post('/', [
        body("newUsername").isLength({min: 5}).withMessage("Username lower than 5 characters"),
        body("newPassword").isLength({min: 6}).withMessage("Password lower than 6 characters")
    ],(req, res)=>{
        Application.app.controllers.index.newUser(Application, req, res);
    });

    Application.post('/deleteInstaUser',(req, res)=>{
        Application.app.controllers.index.deleteInstaUser(Application, req, res);
    });
}