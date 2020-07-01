import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Layout from 'src/components/Layout/';
import { createTodo } from 'src/redux/todo/actions';
import { createLS } from 'src/util/LS';

const Create = ({ history, todolist, createTodo }) => {
  // state = 인풋 벨류,
  const [value, setValue] = useState('');
  const inputElement = useRef(null);

  const changeInputValue = (e) => {
    setValue(e.target.value);
  };

  const clickCreateBtn = (e) => {
    // 추가 리듀서는 title만 전달 받는다.
    createTodo(value);
    // localstorage 추가
    createLS(todolist, value); // 로컬스토리지 데이터 추가
    // 라우터 페이지 전환
    history.push('/');
  };

  const pressKeyDown = (e) => {
    if (e.key === 'Enter') {
      clickCreateBtn(); // 버튼 클릭과 동일 이벤트
    }
  };
  // 화면 그려지면 바로 input에 포커스
  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <Layout>
      <CreateContainer>
        <Input
          placeholder='내용을 입력하세요'
          value={value}
          onChange={changeInputValue}
          onKeyDown={pressKeyDown}
          type='text'
          ref={inputElement}
        />
        <Button onClick={clickCreateBtn}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </CreateContainer>
    </Layout>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { todolist: state.todoReducer.todolist };
};

// 리덕스 connect()와 라우터 withRouter()함께쓰려면 리덕스제공 compose()를 사용한다.
export default compose(
  connect(mapStateToProps, { createTodo }),
  withRouter
)(Create);

const CreateContainer = styled.div`
  background-color: beige;
  /* background-color: #f0f0f0; */
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  &:nth-child(odd) {
    background-color: #f7f7f7;
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const Input = styled.input`
  margin: 0 15px 0 0;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  color: #333;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 10px;
  position: relative;
  top: 5px;
  width: 100%;
  display: flex;
  align-items: center;

  &::placeholder {
    align-items: center;
  }
  &:hover {
    cursor: text;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.div`
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;
