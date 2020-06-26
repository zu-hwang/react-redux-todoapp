import React from 'react';
import { withRouter } from 'react-router-dom';
const Todo = ({ history, id, title, checked, handleDeleteBtn }) => {
  const handleUpdateBtn = (e) => {
    // todo : 수정페이지로 이동
    // console.dir(parseInt(e.target.parentNode.id));
    history.push(`/update/${id}`);
  };
  return (
    <div
      id={id + '-todo-key'}
      style={{
        backgroundColor: 'tomato',
        width: '100%',
        padding: '20px',
      }}>
      <span>{id} - </span>
      <span>{title} - </span>
      <span>{checked ? '완료' : '아직'} - </span>
      <button onClick={handleDeleteBtn}>삭제</button>
      <button onClick={handleUpdateBtn}>수정</button>
    </div>
  );
};

export default withRouter(Todo);
