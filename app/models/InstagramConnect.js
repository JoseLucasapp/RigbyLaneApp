const axios = require('axios').default;

function InstagramConnect(){

}

InstagramConnect.prototype.Connect = async(username)=>{
    try{
        const A_request = await axios.get('https://www.instagram.com/'+username+'/?__a=1');
        const A_results = await A_request.data.graphql.user;
        console.log(A_request)
        console.log(A_results)
        return A_results;
    }catch(err){
        console.log(err);
        return "error";
    }
}

module.exports = ()=>{
    return InstagramConnect;
}