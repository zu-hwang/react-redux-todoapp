import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};
export default Layout;
