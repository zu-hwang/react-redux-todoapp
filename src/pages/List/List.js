import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Layout from 'src/components/Layout/';
import Todo from 'src/components/Todo';
import {
  createTodo,
  updateTodo,
  deleteTodo,
  checkedToggle,
  readTodo,
} from 'src/redux/todo/actions';
import { deleteLS, checkedToggleLS } from 'src/util/LS';

const List = ({
  todolist,
  checkedToggle,
  updateTodo,
  deleteTodo,
  readTodo,
}) => {
  const clickDeleteBtn = (e) => {
    const id = e.target.parentNode.id.split('todolist_id')[1];
    deleteLS(todolist, id);
    deleteTodo(id); // 리덕스 수정 완료
  };
  const setCheckedToggle = (id) => {
    checkedToggle(id); // 리덕스 수정
    checkedToggleLS(todolist, id); // 로컬스토리지 수정
  };
  //   useEffect(() => {
  //     // 여기에서 데이터 패치
  //     // readTodo(loadingLS());
  //     // 데이터 패치를 여기서 했더니 페이지가 2번 로드
  //     // console.log('LIST 데이터 패치 완료!');
  //   }, [readTodo]);

  return (
    <Layout>
      {console.log('컴포넌트 렌더링 로드')}
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
  return { todolist: state.todoReducer.todolist };
};
export default connect(mapStateToProps, {
  createTodo,
  updateTodo,
  deleteTodo,
  checkedToggle,
  readTodo,
})(List);

const MainContainer = styled.div`
  width: 100%;
  height: 420px;
  overflow: scroll;
`;
