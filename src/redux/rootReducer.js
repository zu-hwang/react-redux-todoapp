import { combineReducers } from 'redux';
import todoReducer from 'src/redux/todo/todoReducer';
// import headerReducer from 'src/redux/header/headerReducer';

// 리듀서는 객체로 전달한다!
const rootReducer = combineReducers({
  // headerReducer,
  todoReducer,
});

export default rootReducer;
