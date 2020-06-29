import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Modal from 'src/Modal/Modal';

import { style, flexCenter } from 'src/util/style';

const Layout = ({ children, modal }) => {
  return (
    <>
      {modal && <Modal />}
      <BodyContainer>
        <CenterContainer>
          <Header></Header>
          {children}
          <Footer></Footer>
        </CenterContainer>
      </BodyContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.footerReducer.modal,
  };
};
export default connect(mapStateToProps, {})(Layout);

const BodyContainer = styled.div`
  background-color: ${style.bg};
  width: 100%;
  height: 100vh;
  ${flexCenter}
  flex-direction: column;
`;
const CenterContainer = styled.div`
  border: 1px solid ${style.mBorder};
  border-radius: 2px;
  height: 686px;
  width: 450px;
  background-color: ${style.red};
  overflow: hidden;
  position: relative;
`;
