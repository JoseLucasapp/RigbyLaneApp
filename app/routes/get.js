module.exports = (Application)=>{
    Application.get('/', (req, res)=>{
        Application.app.controllers.index.indexPage(Application, req, res);
    });
    Application.get('/saved', (req, res)=>{
        Application.app.controllers.index.savedPage(Application, req, res);
    });
    Application.get('/logout',(req, res)=>{
        Application.app.controllers.index.logout(Application, req, res);
    });
    Application.post('/saved', (req, res)=>{
        Application.app.controllers.index.savedPagePost(Application, req, res);
    });
}