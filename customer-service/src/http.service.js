const axios = require('axios');
module.exports = async (url) => {
  console.log(url);
  return axios
      .get(url)
      .then(response => console.log(`received items: ${response.data.count}`))
      .catch(error => console.log(error.message))
};