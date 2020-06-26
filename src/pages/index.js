/**
 * 루트 페이지에 보일 것
 */
import React from 'react';

import Layout from 'src/components/Layout/';
import List from 'src/pages/List';

function App() {
  return (
    <Layout>
      <List />
    </Layout>
  );
}

export default App;
