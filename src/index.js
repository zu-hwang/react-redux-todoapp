import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from 'src/Routes';
import App from 'src/pages';
import store from 'src/redux/store';
import GlobalStyles from 'src/util/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <App />
      </Routes>
      <GlobalStyles></GlobalStyles>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
