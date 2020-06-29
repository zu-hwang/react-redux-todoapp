import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Layout from 'src/components/Layout/';
import Todo from 'src/components/Todo';
import {
  createTodo,
  updateTodo,
  deleteTodo,
  checkedToggle,
  sortTodolist,
} from 'src/redux/todo/actions';
import { deleteLS, checkedToggleLS } from 'src/util/LS';

const List = ({ todolist, checkedToggle, updateTodo, deleteTodo }) => {
  const clickDeleteBtn = (e) => {
    const id = e.target.parentNode.id.split('todolist_id')[1];
    deleteLS(todolist, id);
    deleteTodo(id); // 리덕스 수정 완료
  };
  const setCheckedToggle = (id) => {
    checkedToggle(id); // 리덕스 수정
    checkedToggleLS(todolist, id); // 로컬스토리지 수정
  };
  useEffect(() => {
    // console.log('LIST ON');
  });
  return (
    <Layout>
      <MainContainer>
        {Array.isArray(todolist) &&
          todolist.map((todo, index) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                index={index + 1}
                title={todo.title}
                checked={todo.checked}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                clickDeleteBtn={clickDeleteBtn}
                setCheckedToggle={setCheckedToggle}></Todo>
            );
          })}
      </MainContainer>
    </Layout>
  );
};

// ownProps 는 선택적 사용.
const mapStateToProps = (state, ownProps) => {
  // console.log('state', state); // 왜 todoReducer가 뜰까염..
  // console.log('state.todoReducer', state.todoReducer);
  // console.log('state.todoReducer.todolist', state.todoReducer.todolist);
  // console.log('ownProps', ownProps);
  return { todolist: state.todoReducer.todolist };
};
export default connect(mapStateToProps, {
  createTodo,
  updateTodo,
  deleteTodo,
  checkedToggle,
  sortTodolist,
})(List);

const MainContainer = styled.div`
  width: 100%;
  height: 420px;
  overflow: scroll;
`;
