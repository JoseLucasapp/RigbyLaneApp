const axios = require('axios');

function ConnectionDAO(){}

ConnectionDAO.prototype.searchProfile = async(username)=>{
    try{
        const response = await axios.get('https://www.instagram.com/'+username+'/?__a=1');
        const results = response.data.graphql.user;
        return results;
    }catch{
        return "error";
    }
}

module.exports = ()=>{
    return ConnectionDAO;
}