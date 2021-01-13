const {body} = require('express-validator');
module.exports = (Application)=>{
    Application.post('/', [
        body("newUsername").isLength({min: 5}).withMessage("Username lower than 5 characters"),
        body("newPassword").isLength({min: 6}).withMessage("Password lower than 6 characters")
    ],(req, res)=>{
        Application.app.controllers.toUsersDAO.newUser(Application, req, res);
    });
    Application.post('/home', [
        body("username").isLength({min: 5}).withMessage("Username lower than 5 characters"),
        body("password").isLength({min: 6}).withMessage("Password lower than 6 characters")
    ],(req, res)=>{
        Application.app.controllers.toUsersDAO.homePage(Application, req, res);
    });
}