import { createStore } from 'redux';

import rootReduce from './mudules/rootReduce';

const store = createStore(rootReduce);

export default store;
