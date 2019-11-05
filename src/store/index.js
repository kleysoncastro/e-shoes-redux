import { createStore } from 'redux';

import rootReduce from './mudules/rootReduce';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReduce, enhancer);

export default store;
