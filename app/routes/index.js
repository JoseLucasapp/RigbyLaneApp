module.exports = (Application)=>{
    Application.get('/', (req, res)=>{
        Application.app.controllers.index.indexPage(Application, req, res);
    });
    Application.post('/home', (req, res)=>{
        Application.app.controllers.index.homePage(Application, req, res);
    })
}