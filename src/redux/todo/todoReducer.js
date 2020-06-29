import { v4 as uuid } from 'uuid';
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECKED_TOGGLE,
  SORT_TODOLIST,
} from 'src/redux/todo/types';
import { loadingLS } from 'src/util/LS';

let initState = {
  todolist: loadingLS(),
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      const createTodolist = state.todolist.concat({
        id: uuid(),
        title: action.payload.title,
        checked: false,
      });
      return {
        ...state,
        todolist: createTodolist,
      };

    case UPDATE_TODO:
      const updateTodolist = state.todolist.map((todo) =>
        todo.id === action.payload.id
          ? {
              id: action.payload.id,
              title: action.payload.title,
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
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todolist: deleteTodolist,
      };

    case CHECKED_TOGGLE:
      const checkedTodolist = state.todolist.map((todo) =>
        todo.id === action.payload.id
          ? { id: todo.id, title: todo.title, checked: !todo.checked }
          : todo
      );
      return {
        ...state,
        todolist: checkedTodolist,
      };
    case SORT_TODOLIST:
      // 정렬된 투두르스트 배열 받아 교체
      return {
        ...state,
        todolist: action.payload.newTodolist,
      };

    default:
      return state;
  }
};

export default todoReducer;
