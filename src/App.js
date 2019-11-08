import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import { Provider } from 'react-redux'; // deixa disponivel o stora da aplicacao
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import history from './server/history';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
