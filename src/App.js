import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import { Provider } from 'react-redux'; // deixa disponivel o stora da aplicacao
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
