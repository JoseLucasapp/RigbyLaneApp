const axios = require('axios').default;

function InstagramConnect(){

}

InstagramConnect.prototype.Connect = async(username)=>{
    try{
        const A_request = await axios.get('https://www.instagram.com/'+username+'/?__a=1');
        const A_results = await A_request.data.graphql.user;
        return A_results;
    }catch(err){
        console.log(err);
        return "error";
    }
}

module.exports = ()=>{
    return InstagramConnect;
}