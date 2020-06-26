import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from 'src/components/Layout/';
import { updateTodo } from 'src/redux/todo/actions';

const Update = ({ history, todolist, updateTodo, match }) => {
  // ! 주소창에서 index 가저오기
  // 1. props.match 를가저온뒤 params를 호출, 다음 Routes.js에서 설정한 params명을 붙인다. 나는 id라고 적었음으로 match.params.id 가 됬다.
  // console.log('주소창 파라미터 가저오기', match.params.id); // 0 출력
  const id = match.params.id;
  const [todoList, setTodoList] = useState(todolist);
  const [value, setValue] = useState(todolist[id].title);
  const handleFocusInput = (e) => {
    setValue('');
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const deepClone = (newlist) => {
    // 딥클론 하는 코드
    todoList.map((todo) => newlist.push(todo));
    // 딥클론 됬는지 확인, false가 나와야 한다.
    console.log('같은고?', newlist === todoList);
  };
  const handleClickUpdate = () => {
    // * 새로운 배열 반환 메서드 = concat(), map(), filter(), slice()
    // 배열.concat(추가항목)은 : [...배열,추가항복]을 리턴한다!
    const newTodoList = todoList.concat();
    console.log('업뎃 딥클론 확인 false면 오케이 : ', newTodoList === todoList);
    newTodoList[id].title = value;
    console.log(value, newTodoList[id].title);
    // ! 스토어 데이터 수정 - 업데이트 리듀서는 newTodoList 전체를 추가한다.. 리듀서를 그렇게 작성했다. 이방식이 싫으면 createTodo처럼 리듀서 작성하기!
    updateTodo(newTodoList);
    // 화면이동
    history.push('/');
  };

  const handleToggleChecked = () => {
    // 배열 내부 값 수정하려면.. 이렇게 밖에 안된느 걸까..
    // 불변성 때문에 딥클론 할 변수 생성
    let newlist = [];
    deepClone(newlist);
    // 배열 내부 값 변경
    newlist[id].checked = !newlist[id].checked;
    // 확인 콘솔찍기
    console.log(todoList[id].checked, newlist[id].checked);
    // 마지막 todoList 값 새로고침
    setTodoList(newlist);
  };
  return (
    <Layout>
      <div
        style={{
          width: '100%',
          backgroundColor: 'tomato',
          height: '100%',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <span>{id} - </span>
        <input
          style={{ padding: '5px' }}
          type='text'
          value={value}
          onFocus={handleFocusInput}
          onChange={handleChangeValue}
        />{' '}
        <button onClick={handleToggleChecked}>
          {todoList[id].checked ? '완료' : '아직'}
        </button>
        <button onClick={handleClickUpdate}>수정</button>
      </div>
    </Layout>
  );
};

// ownProps 는 선택적 사용.
const mapStateToProps = (state, ownProps) => {
  // console.log('state', state); // 왜 todoReducer가 뜰까염..
  // console.log('state.todoReducer', state.todoReducer);
  // console.log('state.todoReducer.todolist', state.todoReducer.todolist);
  // console.log('ownProps', ownProps);
  return { todolist: state.todoReducer.todolist };
};

//* 리덕스 connect()와 라우터 withRouter()함께쓰려면 리덕스제공 compose()를 사용한다.
// https://stackoverflow.com/questions/54247082/connect-and-withrouter-issue

export default compose(
  connect(mapStateToProps, { updateTodo }),
  withRouter
)(Update);
