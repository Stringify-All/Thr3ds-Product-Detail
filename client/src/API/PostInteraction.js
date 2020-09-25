// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const postInteraction = (element, widget, time) => axios.get('http://52.26.193.201:3000/interactions/', element, widget, time)
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default postInteraction;