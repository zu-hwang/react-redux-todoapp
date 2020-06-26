import React from 'react';
import { connect } from 'react-redux';
import Todo from 'src/components/Todo';
import {
  createTodo,
  updateTodo,
  deleteTodo,
  checkedToggle,
} from 'src/redux/todo/actions';

const List = ({
  todolist,
  createTodo,
  updateTodo,
  deleteTodo,
  checkedToggle,
}) => {
  console.log('List compo', todolist);
  const handleDeleteBtn = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      {todolist ? (
        todolist.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              checked={todo.checked}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              checkedToggle={checkedToggle}
              handleDeleteBtn={handleDeleteBtn}></Todo>
          );
        })
      ) : (
        <p>내용없음</p>
      )}
    </div>
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
})(List);
