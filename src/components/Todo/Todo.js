import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faTimes } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ history, index, id, title, checked, handleDeleteBtn }) => {
  const handleUpdateBtn = (e) => {
    // todo : 수정페이지로 이동
    // console.dir(parseInt(e.target.parentNode.id));
    history.push(`/update/${index}`);
  };
  return (
    <TodoContainer id={id}>
      <LeftBox>
        <CheckBox>{checked && <Checking />}</CheckBox>
        <NumberBox>{index}</NumberBox>
        <Title>{title}</Title>
      </LeftBox>
      <ButtonBox>
        <Button onClick={handleDeleteBtn}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
        <Button onClick={handleUpdateBtn}>
          <FontAwesomeIcon icon={faEraser} />
        </Button>
      </ButtonBox>
    </TodoContainer>
  );
};

export default withRouter(Todo);

const TodoContainer = styled.div`
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
`;
const NumberBox = styled.div`
  width: 25px;
  padding: 5px;
  margin-right: 10px;
  text-align: center;
  &::after {
    content: '_';
  }
`;

const CheckBox = styled.div`
  border: 1px solid #ddd;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checking = styled.div`
  background-color: brown;
  width: 10px;
  height: 10px;
  border-radius: 15px;
`;

const Title = styled.div`
  width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
