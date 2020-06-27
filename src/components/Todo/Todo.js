import React from 'react';
import { withRouter } from 'react-router-dom';
const Todo = ({ history, index, id, title, checked, handleDeleteBtn }) => {
  const handleUpdateBtn = (e) => {
    // todo : 수정페이지로 이동
    // console.dir(parseInt(e.target.parentNode.id));
    history.push(`/update/${index}`);
  };
  return (
    <div
      id={id}
      style={{
        backgroundColor: 'tomato',
        width: '100%',
        padding: '20px',
      }}>
      <span>{index} - </span>
      <span>{title} - </span>
      <span>{checked ? '완료' : '아직'} - </span>
      <button onClick={handleDeleteBtn}>삭제</button>
      <button onClick={handleUpdateBtn}>수정</button>
    </div>
  );
};

export default withRouter(Todo);
