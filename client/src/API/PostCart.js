// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const addToCart = (userSession, productId) => axios.post('http://52.26.193.201:3000/cart/' + userSession, productId)
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default addToCart;