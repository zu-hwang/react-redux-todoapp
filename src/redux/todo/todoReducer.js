import { v4 as uuid } from 'uuid';
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECKED_TOGGLE,
  READ_TODO,
} from 'src/redux/todo/types';

// import utilSort from 'src/util/utilSort';
console.log('투두리듀서 로드');
const todoReducer = (state = {}, action) => {
  const { type, payload } = action; // action 구조분해할당
  switch (type) {
    case CREATE_TODO:
      const createTodolist = state.todolist.concat({
        id: uuid(),
        title: payload.title,
        checked: false,
      });
      return {
        ...state,
        todolist: createTodolist,
      };

    case UPDATE_TODO:
      const updateTodolist = state.todolist.map((todo) =>
        todo.id === payload.id
          ? {
              id: payload.id,
              title: payload.title,
              checked: todo.checked,
            }
          : todo
      );
      return {
        ...state,
        todolist: updateTodolist,
      };

    case DELETE_TODO:
      const deleteTodolist = state.todolist.filter(
        (todo) => todo.id !== payload.id
      );
      return {
        ...state,
        todolist: deleteTodolist,
      };

    case CHECKED_TOGGLE:
      const checkedTodolist = state.todolist.map((todo) =>
        todo.id === payload.id
          ? { id: todo.id, title: todo.title, checked: !todo.checked }
          : todo
      );
      return {
        ...state,
        todolist: checkedTodolist,
      };
    case READ_TODO:
      // 정렬된 투두르스트 배열 받아 교체
      return {
        ...state,
        todolist: payload.todolist,
      };

    default:
      return state;
  }
};

export default todoReducer;
