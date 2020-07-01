import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'src/redux/rootReducer';
import { loadingLS } from 'src/util/LS';
// 실행순서 : todo-reducer > footer-reducer > store > components
console.log('스토어 로드');

// 각 리듀서값에 대한 초기값을 설정한다.
let initState = {
  todoReducer: { todolist: loadingLS() },
  footerReducer: { modal: false },
};

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
