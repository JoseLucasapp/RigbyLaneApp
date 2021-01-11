const axios = require('axios');

function ConnectionDAO(){}

ConnectionDAO.prototype.searchProfile = async(username)=>{
    const response = await axios.get('https://www.instagram.com/'+username+'/?__a=1');
    const results = response.data.graphql.user;
    return results;
}

module.exports = ()=>{
    return ConnectionDAO;
}