import React from 'react';
import { connect } from 'react-redux';
import Todo from 'src/components/Todo';
import { createTodo, updateTodo, deleteTodo } from 'src/redux/todo/actions';
// import { URL } from 'src/urlconfig';

const List = ({ todolist, createTodo, updateTodo, deleteTodo }) => {
  console.log('List compo', todolist);
  const handleDeleteBtn = async (e) => {
    const id = e.target.parentNode.id;
    deleteTodo(id);
    const newTodolist = todolist.filter((todo) => todo.id !== id);
    window.localStorage.setItem('todolist', JSON.stringify(newTodolist));
  };

  return (
    <div>
      {todolist ? (
        todolist.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              index={index}
              title={todo.title}
              checked={todo.checked}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
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
})(List);
