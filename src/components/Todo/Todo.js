import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { style, flexCenter, notoSans } from 'src/util/style';

const Todo = ({
  history,
  index,
  id,
  title,
  checked,
  clickDeleteBtn,
  setCheckedToggle,
}) => {
  const clickUpdateBtn = (e) => {
    // todo : 수정페이지로 이동
    // console.dir(parseInt(e.target.parentNode.id));
    history.push(`/update/${id}`);
  };

  return (
    <TodoContainer>
      <LeftBox>
        <CheckBox onClick={() => setCheckedToggle(id)}>
          {checked && <Checking />}
        </CheckBox>
        <NumberBox>{index}</NumberBox>
        <Title>{title}</Title>
      </LeftBox>
      <ButtonBox>
        <Button id={'todolist_id' + id}>
          <FontAwesomeIcon
            icon={faTimes}
            id={'todolist_id' + id}
            onClick={clickDeleteBtn}
          />
        </Button>
        <Button id={'todolist_id' + id}>
          <FontAwesomeIcon
            icon={faEraser}
            id={'todolist_id' + id}
            onClick={clickUpdateBtn}
          />
        </Button>
      </ButtonBox>
    </TodoContainer>
  );
};

export default withRouter(Todo);

const TodoContainer = styled.div`
  ${flexCenter}
  justify-content: space-between;
  background-color: ${style.lGray};
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${style.lBorder};
  font-size: 20px;
  font-weight: 300;
  padding-left: 20px;
  padding-right: 20px;
  &:nth-child(odd) {
    background-color: ${style.llGray};
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const LeftBox = styled.div`
  ${flexCenter}
`;
const NumberBox = styled.div`
  ${notoSans}
  font-weight:100;
  color: ${style.black};
  width: 25px;
  padding: 5px;
  margin-right: 10px;
  text-align: center;
  &::after {
    content: '_';
  }
`;

const CheckBox = styled.div`
  ${flexCenter}
  border: 1px solid ${style.mBorder};
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 12px;
  overflow: hidden;
`;

const Checking = styled.div`
  background-color: ${style.brown};
  width: 10px;
  height: 10px;
  border-radius: 15px;
`;

const Title = styled.div`
  ${notoSans}
  font-weight:100;
  color: ${style.black};
  width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ButtonBox = styled.div`
  ${flexCenter}
  justify-content: flex-end;
  width: 60px;
`;

const Button = styled.div`
  ${flexCenter}
  color: ${style.mGray};
  width: 30px;
  height: 30px;
`;
