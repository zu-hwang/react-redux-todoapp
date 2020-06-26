import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from 'src/components/Layout/';
import { createTodo } from 'src/redux/todo/actions';

const Create = ({ history, todolist, createTodo }) => {
  // state = 인풋 벨류,
  const [value, setValue] = useState('');
  const handleInputValue = (e) => {
    setValue(e.target.value);
  };
  const handleClickBtn = (e) => {
    // 추가 리듀서는 title만 전달 받는다.
    createTodo(value);
    // 라우터 페이지 전환
    history.push('/');
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
        <input
          placeholder='내용을 입력하세요'
          value={value}
          onChange={handleInputValue}
          style={{ padding: '5px' }}
          type='text'
        />{' '}
        <button onClick={handleClickBtn}>리스트 생성</button>
      </div>
    </Layout>
  );
};

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
  connect(mapStateToProps, { createTodo }),
  withRouter
)(Create);
