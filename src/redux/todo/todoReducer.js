import { v4 as uuid } from 'uuid';
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  UPDATE_INDEX,
  // CHECKED_TOGGLE,
} from 'src/redux/todo/types';

let initState = {};
const initTodolist = JSON.parse(window.localStorage.getItem('todolist'));
const checkData = () => {
  if (initTodolist) {
    initState = { todolist: initTodolist };
  } else {
    initState = { todolist: [] };
  }
};
checkData();
console.log('reducer 초기값 :', initState);

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      // ? 생성할때는 title값만 받으면 자동으로 추가한다.
      // id : 현재 state의 길이를 받는다(0부터 시작!)
      // checked는 기본 false
      return {
        ...state,
        todolist: state.todolist.concat({
          id: uuid(),
          title: action.payload.title,
          checked: false,
        }),
      };
    case UPDATE_TODO:
      // 업데이트는 해당 index 수정된 새로운 todolist배열을 받는다.
      return {
        ...state,
        todolist: action.payload.todolist,
      };
    case DELETE_TODO:
      // ? id를 받고 해당 아이디의 인덱스 제거한 배열을 todolist에 전달
      return {
        ...state,
        todolist: state.todolist.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case UPDATE_INDEX:
      return {
        ...state,
        index: state.todolist.filter((todo) => {
          let largeIndex = 0;
          if (todo.id > largeIndex) {
            largeIndex = todo.id;
          }
          console.log(largeIndex);
          return largeIndex;
        }),
      };
    // case CHECKED_TOGGLE:
    //   // ? 체크토글을 어떻게 해야할지 너무 고민이다. 어처피 업데이트인데... 업뎃으로 대체해도 될거같고~...궈민이다!!!!
    //   return {
    //     ...state,
    //     //
    //   };
    default:
      return state;
  }
};

export default todoReducer;
