import { sortLS } from 'src/util/LS';
import { connect } from 'react-redux';
import { sortTodolist } from 'src/redux';

// 안한 목록 앞으로 정렬
const utilSort = (sortReducer = sortTodolist, todolist) => {
  if (todolist.length === 0) return [];
  if (todolist.length === 1) return todolist;
  if (todolist.length > 1) {
    console.log('정렬시작!');
    let result = [];
    const checked = todolist.filter((todo) => todo.checked);
    const noChecked = todolist.filter((todo) => !todo.checked);
    console.log(checked, noChecked);
    result = result.concat(noChecked);
    result = result.concat(checked);
    console.log('정렬끝!', result);
    sortLS(result);
    console.log('LS 정렬 todolist로 교체완료');
    sortReducer(result);
    console.log('스토어 정렬 todolist로 교체완료');
    return result;
  }
  return todolist;
};

export default connect(
  {},
  {
    sortTodolist,
  }
)(utilSort);
