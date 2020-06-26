# TODO app with react-redux

CRA --template redux로 todo app 만들기를 진행했다.

- 리덕스로 데이터 관리
- todo 생성/수정/삭제/조회 기능을 구현
- react-router로 페이지 이동
- styled-components로 스타일 작성

작업하면서 에러 발생했을때, 막혔던 것, 새롭게 알게된 것, 기타사항을 아래 정리하도록 하겠다.

## 절대경로 설정

프로젝트 루트에 `.env` 파일을 생성하고 `NODE_PATH=src/`를 입력/저장!
프로젝트 루트에 `jsconfig.json` 파일 생성하고 아래 내용 입력

```js
{
  "compilerOptions": {
    "baseUrl": "."
  },
  "include": ["src"]
}
```

## 폴더구조

리덕스를 추가하고 나서 폴더구조를 어떻게 해야 할지 계속 고민하다가, 유튜브 강의하는 분의 방식으로 작성하게 됐다. `/src/redux/` 에 리덕스 관련 파일을 정리했고, `store.js` , `rootReducer.js`, `index.js(액션크리에이터모음)` 파일을 위치시켰다. 컴포넌트별 폴더를 나누어 `/src/redux/[컴포명]/` 에는 각 `types.js`, `actions.js`, `reducer.js`를 위치하였다.

- `src/redux/store.js` : 스토어 생성, 미들웨어/데브툴 지정, state초기화(서버로부터 데이터를 받는다)
- `src/redux/rootReducer.js` : 컴포넌트별로 나뉜 `reducer.js`파일을 `combineReducers()`를 통해 통합한다.
- `src/redux/index.js` : 각 컴포넌트의 `actions.js` 파일의 통합본이다. 경로를 줄여쓰기 위해 `index.js`로 하였다.

- `src/redux/[컴포명]/types.js`: 해당 컴포넌트의 액션타입 상수 지정
- `src/redux/[컴포명]/actions.js`: 해당 컴포넌트의 액션크리에이터 함수 구현
- `src/redux/[컴포명]/[컴포명]Reducer.js`: 해당 컴포넌트의 리듀서 구현

## 액션-타입

액션타입은 이름표역할을 한다. 상수로 선언하여 보기좋게 관리하자!

## 액션-크리에이터

액션크리에이터는 객체를 반환한다. 액션크리에이터는 리듀서를 호출한다. 액션크리에이터에서 지정하는 `payload` 지정과 `reducer.js`에서 `payload`사용을 주의 하자. **데이터가 왜 안들어갈까, 왜 이상하게 들어갔지? 리듀서로 데이터 수정한뒤 에러가 날때,** 대부분이 여기서 잘못 작성했을때가 많았다!

## 리듀서

전달 받은 payload를 state에 어떻게 반영할지 잘 정하자! todo app에서는 배열 데이터 1종류 밖에 없어 많이 다루지는 못했지만, `createTodo()`와 `updateTodo()`는 차이가 있었다.

- `createTodo()` : 객체를 배열에 추가하면 됬다. title만 payload로 받고, 나머지 `id`, `checked` 의 값은 리듀서에서 지정하였다.
- `updateTodo()` : 업데이트 할때는 컴포넌트에서 객체변수를 생성하고 해당 인덱스로 **새 배열을 생성하고 payload**로 전달했다.

## `combineReducer({리듀서1,리듀서2...})`

`combineReducer()` 할때 인자는 꼭 **객체(object)**를 넣는다. 인자 여러개 형식으로 리듀서를 너봤자 에러만 난다!^^

```js
const rootReducer = combineReducer({ 리듀서1, 리듀서2, 리듀서3 });
```

## 리덕스 x 라우터

리덕스와 라우터를 같이쓰다보니 `connect()`함수와 `withRouter()`를 어떻게 써야 할지 막막한 상황발생! 해결법은 아주 간단했다. redux에서 재공하는 `compose()`를 사용하여 `connect()`와 `withRouter()`를 인자로 재공한다. 아래예제를 확인하자.

```js
// 아래 3가지 import 한다.
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// 해당 컴포넌트에서 export 할때
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(컴포넌트명);
```
