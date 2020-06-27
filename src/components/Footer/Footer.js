import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>20020.06.26 - 2020.06.27.</p>
      <p>github@zu-hwang</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #fff;
  height: 70px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #e5e5e5;
  p {
    font-size: 12px;
    font-weight: 300;
    color: #333;
  }
  p:last-child {
    font-weight: normal;
    padding-top: 5px;
  }
`;
