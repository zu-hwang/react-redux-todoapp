import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { modalOff } from 'src/redux';
import { withRouter } from 'react-router-dom';
import { style, flexCenter, notoSans } from 'src/util/style';

const Modal = ({ modalOff, history }) => {
  // const goToGitHub = () => {
  //   // 현재페이지에서 외부 url이동시키기
  //   window.location.href = 'https://github.com/zu-hwang/react-redux-todoapp';
  // };
  const openTapGitHub = () => {
    // 새탭에서 외부 url열기
    modalOff();
    window.open('https://github.com/zu-hwang/react-redux-todoapp', '_blank');
  };
  const offModal = () => {
    modalOff();
  };

  return (
    <ModalContainer>
      <TitleBox>
        Do you want to move <br />
        <span>TODO APP - react x redux</span>
        <br /> GitHub Repository?
      </TitleBox>
      <ButtonBox>
        <Button onClick={openTapGitHub}>YES. MOV !</Button>
        <Button onClick={offModal}>NOP. STAY !</Button>
      </ButtonBox>
    </ModalContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.footerReducer.modal,
  };
};
export default compose(
  connect(mapStateToProps, { modalOff }),
  withRouter
)(Modal);

const ModalContainer = styled.div`
  ${notoSans}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  ${flexCenter}
  flex-direction: column;
`;

const TitleBox = styled.p`
  font-size: 50px;
  font-weight: 200;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 50px;
  span {
    font-weight: 900;
    border-bottom: 2px solid ${style.white};
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Button = styled.div`
  ${flexCenter}
  width: 170px;
  height: 70px;
  padding: 20px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 10px;
  font-size: 20px;
  font-weight: 300;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${style.beige};
  }
`;
