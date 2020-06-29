import { v4 as uuid } from 'uuid';

const createLS = (todolist, title) => {
  const newTodo = {
    id: uuid(),
    title: title,
    checked: false,
  };
  if (!todolist) {
    window.localStorage.setItem('todolist', JSON.stringify([newTodo]));
  } else {
    const newTodolist = todolist.concat(newTodo);
    window.localStorage.setItem('todolist', JSON.stringify(newTodolist));
  }
};

const updateLS = (todolist, id, title) => {
  const newTodolist = todolist.map((todo) =>
    todo.id === id ? { id, title, checked: todo.checked } : todo
  );
  window.localStorage.setItem('todolist', JSON.stringify(newTodolist));
};

const deleteLS = (todolist, id) => {
  const newTodolist = todolist.filter((todo) => todo.id !== id);
  window.localStorage.setItem('todolist', JSON.stringify(newTodolist));
};

const checkedToggleLS = (todolist, id) => {
  const newTodolist = todolist.map((todo) =>
    todo.id === id ? { id, title: todo.title, checked: !todo.checked } : todo
  );
  window.localStorage.setItem('todolist', JSON.stringify(newTodolist));
};

const sortLS = (newTodolist) => {
  window.localStorage.setItem('todolist', JSON.stringify(newTodolist));
};

const loadingLS = () => {
  const todolist = JSON.parse(window.localStorage.getItem('todolist'));
  if (!todolist) return [];
  return todolist;
};

export { loadingLS, createLS, updateLS, deleteLS, checkedToggleLS, sortLS };
