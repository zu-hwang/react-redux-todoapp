import React from 'react';
import styled from 'styled-components';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const Layout = ({ children }) => {
  return (
    <BodyContainer>
      <CenterContainer>
        <Header></Header>
        {children}
        <Footer></Footer>
      </CenterContainer>
    </BodyContainer>
  );
};
export default Layout;

const BodyContainer = styled.div`
  background-color: #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CenterContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 50px;
  height: 686px;
  width: 450px;
  background-color: brown;
  overflow: hidden;
  position: relative;
`;
