import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({ history, match }) => {
  const handleClickCreateBtn = (e) => {
    history.push('/create');
  };
  console.log();

  return (
    <HeaderContainer>
      <TitleBox>
        <AppTitle>TODO APP</AppTitle>
        <SubTitle>REACT x REDUX</SubTitle>
      </TitleBox>
      <ButtonBox createMode={match.path === '/create' ? false : true}>
        <Button onClick={handleClickCreateBtn}>CREATE TODO</Button>
      </ButtonBox>
    </HeaderContainer>
  );
};

export default withRouter(Header);

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;
const TitleBox = styled.div`
  padding-top: 30px;
  padding-bottom: 25px;
`;
const AppTitle = styled.p`
  color: #333;
  font-size: 50px;
  font-weight: 100;
  padding: 0;
  margin: 0;
`;
const SubTitle = styled.p`
  color: #333;
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 70px;
  padding: 0;
  margin: 0;
  background-color: ${(props) => (props.createMode ? 'beige' : '#fff')};
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const Button = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 300;
  color: #333;
  &:hover {
    cursor: pointer;
  }
`;
