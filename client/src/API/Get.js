const axios = require('axios');

const getProducts = () => {
  return axios.get('')
    .then(() => {
      console.log('Hello');
    });
};

const getCart = () => {
  return axios.get('')
};

module.exports = {
  getProducts, getCart,
};
