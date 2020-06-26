import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
  const handleClickCreateBtn = (e) => {
    history.push('/create');
  };
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'yellow',
        textAlign: 'center',
        padding: '20px',
      }}>
      여기는 해더얍!
      <div>
        <button onClick={handleClickCreateBtn}>신규목록</button>
      </div>
    </div>
  );
};

export default withRouter(Header);
