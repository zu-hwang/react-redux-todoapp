import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from 'src/Routes';
import App from 'src/pages';
import store from 'src/redux/store';
import GlobalStyles from 'src/util/GlobalStyles';

// store.getState() 메서드를 통해 스토어의 모든 state에 접근할 수 있다.
const allData = store.getState();
console.log('allData', allData);
const { todolist } = allData.todoReducer;
const { modal } = allData.footerReducer;
console.log('modal', modal, 'todolist', todolist);

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
