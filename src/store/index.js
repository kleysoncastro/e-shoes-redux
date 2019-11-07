import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMinddleware from 'redux-saga';

import rootReduce from './mudules/rootReduce';
import rootSaga from './mudules/rootSaga';

const sagaMiddleware = createSagaMinddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMiddleware)
      )
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReduce, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
