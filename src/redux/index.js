// ! src/redux/index.js 에는 actions.js 파일들을 통합한다.
// 액션크리에이터 함수는 자주 여러곳에서 자주 불리기도 하고,
// 나의 액션크리에이터 파일이 컴포넌트별로 나누어져 있어 불러들이기 복잡할 수 있어 통합하도록 하겠다...
// 하지만 지금 프로젝트는 너무 작이 이럴필요는 옶지만, 그래도 합칠꺼다!!

export {
  createTodo,
  updateTodo,
  deleteTodo,
  checkedToggle,
  sortTodolist,
} from 'src/redux/todo/actions';

export { modalOn, modalOff } from 'src/redux/footer/actions';
