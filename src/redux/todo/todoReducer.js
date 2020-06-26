import {
  CREATE_TODO,
  // UPDATE_TODO,
  // DELETE_TODO,
  // CHECKED_TOGGLE,
} from 'src/redux/todo/types';

const initState = {
  todolist: [{ id: 0, title: '투두앱만들기', checked: false }],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todolist: state.todolist.concat({
          id: state.todolist.length,
          title: action.payload.title,
          checked: false,
        }),
      };
    // case UPDATE_TODO:
    //   return {
    //     ...state,
    //     todolist: {action.payload.todo}
    //   };
    // case DELETE_TODO:
    //   return {
    //     ...state,
    //     // 삭제할땐 오쩨야함..? DB연결해서 삭제하는 로직 들어가나?
    //   };
    // case CHECKED_TOGGLE:
    //   return {
    //     ...state,
    //     todolist: !state.checked, //토글은 현재스테이트 반대값
    //   };
    default:
      return state;
  }
};

export default todoReducer;
