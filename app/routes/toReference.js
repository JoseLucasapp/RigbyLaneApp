module.exports = (Application)=>{
    Application.get('/', (req, res)=>{
        Application.app.controllers.toReferenceDAO.indexPage(Application, req, res);
    });
    Application.get('/home', (req,res)=>{
        Application.app.controllers.toReferenceDAO.getHome(Application, req, res);
    });
    Application.get('/logout',(req, res)=>{
        Application.app.controllers.toReferenceDAO.logout(Application, req, res);
    });
    Application.post('/profile', (req, res)=>{
        Application.app.controllers.toReferenceDAO.profilePage(Application, req, res);
    });
    Application.post('/deleteAccount',(req,res)=>{
        Application.app.controllers.toReferenceDAO.deleteAccount(Application,req, res);
    });
}