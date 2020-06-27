import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECKED_TOGGLE,
  SORT_TODOLIST,
} from 'src/redux/todo/types';

/**
 *
 * export const 액션크리에이터이름 = (페이로드매개변수) => {
 *   return {
 *     type: 액션타입지정,
 *     payload: { 페이로드변수 : 페이로드매개변수 }
 *   };
 * };
 *
 */

export const createTodo = (title) => {
  // todo = {id:자동증가, title:title, checked:false}
  return {
    type: CREATE_TODO,
    payload: {
      title,
    },
  };
};

export const updateTodo = (id, title) => {
  // 해당 인덱스 수정한 새로운 배열을 받는다.
  return {
    type: UPDATE_TODO,
    payload: { id, title },
  };
};

export const deleteTodo = (id) => {
  // 해당 인덱스 삭제한 새로운 배열을 받는다.
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};

export const checkedToggle = (id) => {
  return {
    type: CHECKED_TOGGLE,
    payload: {
      id,
    },
  };
};

export const sortTodolist = (newTodolist) => {
  return {
    type: SORT_TODOLIST,
    payload: {
      todolist: newTodolist,
    },
  };
};
