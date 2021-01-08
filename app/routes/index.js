module.exports = (Application)=>{
    Application.get('/', (req, res)=>{
        Application.app.controllers.index.home(Application, req, res);
    });
}