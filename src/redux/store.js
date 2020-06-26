import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'src/redux/rootReducer';

// 로컬스토리지 데이터 읽기
const readLocalStorageData = () => {
  const todolist = [{ id: 0, title: '투두앱만들기', checked: false }];
  console.log('스토어 데이터 입히기', todolist);
  return { todolist };
};

const initState = readLocalStorageData();

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
