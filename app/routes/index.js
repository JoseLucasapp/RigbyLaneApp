module.exports = (Application)=>{
    Application.get('/', (req, res)=>{
        Application.app.controllers.index.indexPage(Application, req, res);
    });
    Application.get('/saved', (req, res)=>{
        Application.app.controllers.index.savedPage(Application, req, res);
    });
    Application.post('/home', (req, res)=>{
        Application.app.controllers.index.homePage(Application, req, res);
    });
    Application.post('/profile', (req, res)=>{
        Application.app.controllers.index.profilePage(Application, req, res);
    });
}