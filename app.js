const app = require('./config/server');

app.get('/', (req,res)=>{
    res.render("page1");
});

app.listen(3000);