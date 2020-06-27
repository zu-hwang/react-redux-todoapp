import { sortLS } from 'src/util/LS';

// 안한 목록 앞으로 정렬
export const sortTodolist = (todolist) => {
  if (todolist) {
    console.log('정렬시작!');
    let result = [];
    const checked = todolist.filter((todo) => todo.checked);
    const noChecked = todolist.filter((todo) => !todo.checked);
    result = [...noChecked, ...checked];
    console.log('정렬끝!', result);
    sortLS(result);
    console.log('LS정렬 todolist로 교체완료');
    return result;
  }
  return todolist;
};
