module.exports = (Application)=>{
    Application.get('/saved', (req, res)=>{
        Application.app.controllers.toInstaDAO.savedPage(Application, req, res);
    });
    Application.post('/saved', (req, res)=>{
        Application.app.controllers.toInstaDAO.savedPagePost(Application, req, res);
    });
    Application.post('/deleteInstaUser',(req, res)=>{
        Application.app.controllers.toInstaDAO.deleteInstaUser(Application, req, res);
    });
}