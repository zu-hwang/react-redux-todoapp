import { combineReducers } from 'redux';
import todoReducer from 'src/redux/todo/todoReducer';
import footerReducer from 'src/redux/footer/footerReducer';

// 리듀서는 객체로 전달한다!
const rootReducer = combineReducers({
  footerReducer,
  todoReducer,
});

export default rootReducer;
