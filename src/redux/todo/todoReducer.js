import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  // CHECKED_TOGGLE,
} from 'src/redux/todo/types';

const initState = {
  todolist: [{ id: 0, title: '투두앱만들기', checked: false }],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      // ? 생성할때는 title값만 받으면 자동으로 추가한다.
      // id : 현재 state의 길이를 받는다(0부터 시작!)
      // checked는 기본 false
      return {
        ...state,
        todolist: state.todolist.concat({
          id: state.todolist.length,
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
      // ? 해당 index가 삭제된 배열 전체를 받는다.
      return {
        ...state,
        todolist: action.payload.todolist,
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
