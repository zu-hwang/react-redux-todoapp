import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from 'src/components/Layout/';
import { updateTodo } from 'src/redux';

const Update = ({ history, todolist, updateTodo, match }) => {
  // ! 주소창에서 index 가저오기
  const index = match.params.id; // index 목록 길이 까지의 인덱스
  const id = todolist[index].id; // uuid
  const [selectTodo, setSelectTodo] = useState(todolist[index]);
  const handleFocusInput = (e) => {
    if (e.target.value === todolist[index].title) {
      e.target.value = '';
    }
  };
  const handleChangeValue = (e) => {
    setSelectTodo({ id, title: e.target.value, checked: selectTodo.checked });
  };
  const handleClickUpdate = (e) => {
    // ! 조건부랜더링 + map()의 꿀조합으로 수정한 배열을 쉽게 작성!
    const newTodolist = todolist.map((todo) =>
      todo.id === id ? selectTodo : todo
    );
    updateTodo(newTodolist);
    history.push('/'); // 페이지 이동
  };
  const handleToggleChecked = (e) => {
    setSelectTodo({
      id,
      title: selectTodo.title,
      checked: !selectTodo.checked,
    });
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
        }}
        id={id}>
        <span>{index} - </span>
        <input
          style={{ padding: '5px' }}
          type='text'
          value={selectTodo.title}
          onFocus={handleFocusInput}
          onChange={handleChangeValue}
        />{' '}
        <button onClick={handleToggleChecked}>
          {selectTodo.checked ? '완료' : '아직'}
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
