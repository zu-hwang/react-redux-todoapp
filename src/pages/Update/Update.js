import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { updateTodo } from 'src/redux';
import { updateLS } from 'src/util/LS';
import Layout from 'src/components/Layout/';

const Update = ({ history, todolist, updateTodo, match }) => {
  const InputElement = useRef(null);
  const id = match.params.id; // uuid
  const title = todolist && todolist.filter((todo) => todo.id === id)[0].title;
  // ! TypeError: Cannot read property 'filter' of undefined 에러날땐 객체에 내용이 있는지 검사하고 진행하자.
  const [inputValue, setInputValue] = useState(title);
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const clickUpdateBtn = (e) => {
    updateTodo(id, inputValue);
    updateLS(todolist, id, inputValue);
    history.push('/'); // 페이지 이동
  };
  const pressKeyDown = (e) => {
    console.dir(e.key);
    if (e.key === 'Enter') {
      clickUpdateBtn();
    }
  };
  useEffect(() => {
    // 오토 포커스
    InputElement.current.focus();
  }, []);

  return (
    <Layout>
      <UpdateContainer id={id}>
        <LeftBox>
          <Input
            type='text'
            value={inputValue}
            onChange={changeInputValue}
            onKeyDown={pressKeyDown}
            ref={InputElement}
          />
        </LeftBox>
        <ButtonBox>
          <Button onClick={clickUpdateBtn}>
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </ButtonBox>
      </UpdateContainer>
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

export default compose(
  connect(mapStateToProps, { updateTodo }),
  withRouter
)(Update);

const UpdateContainer = styled.div`
  background-color: #f0f0f0;
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
  &:nth-child(odd) {
    background-color: #f7f7f7;
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonBox = styled.div`
  width: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.div`
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

const Input = styled.input`
  padding: 10 0;
  margin: 0;
  border: 0;
  /* border-bottom: 1px solid #333; */
  background-color: rgba(255, 255, 255, 0);
  color: #333;
  font-size: 20px;
  font-weight: 300;
  width: 100%;
  display: flex;
  align-items: center;
  &::placeholder {
    align-items: center;
    color: red;
  }
  &:hover {
    cursor: text;
  }
  &:focus {
    outline: none;
  }
`;
