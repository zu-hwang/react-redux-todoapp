import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { modalOn } from 'src/redux';
import { style, flexCenter, notoSans } from 'src/util/style';

const Footer = ({ modal, modalOn }) => {
  const goToGitHub = () => {
    modalOn(true); // modal on
  };
  return (
    <FooterContainer>
      <p>2020.06.26 - 2020.06.28.</p>
      <p onClick={goToGitHub}>github@zu-hwang</p>
    </FooterContainer>
  );
};
const mapStateToProps = (state) => {
  return { modal: state.footerReducer.modal };
};
export default connect(mapStateToProps, { modalOn })(Footer);

const FooterContainer = styled.div`
  ${notoSans}
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  height: 70px;
  bottom: 0;
  position: absolute;
  background-color: ${style.white};
  border-top: 1px solid ${style.lBorder};
  p {
    font-size: 12px;
    font-weight: 100;
    color: ${style.black};
  }
  p:last-child {
    font-weight: 500;
    padding-top: 5px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
