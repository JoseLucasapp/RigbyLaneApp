const User_schema = require('../../config/user');

function InstaDAO(){

}

InstaDAO.prototype.savedPagePost = async(req, res)=>{
    User_schema.findOneAndUpdate(
        { username: req.session.username },
        { $push: { savedProfiles: req.body.instaUser } },
    ).exec((err)=>{
        User_schema.find({username: req.session.username}).exec((err, usersData)=>{
            res.render('saved', {savedProfilesData : usersData[0]});
        });
    });
}
InstaDAO.prototype.savedPage = (req, res)=>{
    if(req.session.authorized){
        User_schema.find({username: req.session.username}).exec((err, usersData)=>{
            res.render('saved', {savedProfilesData : usersData[0]});
        });
    }else{
        res.render('page1', {msg: "",exist: "", errors: "",values:""});
    }
}

InstaDAO.prototype.deleteInstaUser = (req, res)=>{

    if(req.session.authorized){
        User_schema.findOneAndUpdate({ username: req.session.username }
            , {$pull: {savedProfiles: req.body.userForDelete}}).exec(()=>{
                User_schema.find({username: req.session.username}).exec((err, usersData)=>{
                    res.render('saved', {savedProfilesData : usersData[0]});
                });
            });
    }else{
        res.render('page1', {msg: "",exist: "", errors: "",values:""});
    }
}

module.exports = ()=>{
    return InstaDAO;
}