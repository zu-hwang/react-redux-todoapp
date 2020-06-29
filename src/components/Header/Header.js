import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { style, flexCenter, notoSans } from 'src/util/style';

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
  ${flexCenter}
  flex-direction: column;
  background-color: ${style.white};
`;
const TitleBox = styled.div`
  padding-top: 30px;
  padding-bottom: 25px;
`;
const AppTitle = styled.p`
  font-weight: 100;
  color: ${style.black};
  font-size: 50px;
`;
const SubTitle = styled.p`
  color: ${style.black};
  padding-top: 8px;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) =>
    props.createMode ? style.beige : style.white};
  border-top: 1px solid ${style.lBorder};
  border-bottom: 1px solid ${style.lBorder};
`;

const Button = styled.div`
  ${notoSans}
  width: 100%;
  height: 100%;
  ${flexCenter}
  font-size: 30px;
  font-weight: 100;
  color: ${style.black};
  &:hover {
    cursor: pointer;
  }
`;
