import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'src/redux/rootReducer';

const loadData = () => {
  // 서버로 부터 테이터를 받는다. 여기에 fatch하면 될 듯!
  const todolist = [{ id: 0, title: '투두앱만들기', checked: false }];
  console.log('스토어 데이터 입히기', todolist);
  return { todolist };
};

const initState = loadData();

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
