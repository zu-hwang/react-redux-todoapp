# TODO app with react-redux

[![todoapp-snap-image](https://i.ibb.co/ZTrxCXx/todoapp-snap.jpg)](https://youtu.be/Xqcvxqo7nuY)
> 이미지를 클릭하면 youtube 영상 페이지로 이동합니다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xqcvxqo7nuY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- 리덕스로 데이터 관리
- todo 생성/수정/삭제/조회 기능을 구현
- react-router로 페이지 이동
- styled-components로 스타일 작성 : 아직


# CRA프로젝트
`$ npx create-react-app react-redux-todoapp --template redux`

위 명령어를 통해 리액트+리덕스 프로젝트를 생성했다.

## package.json
```js
{
// 상단 생략
  "dependencies": {
    "@reduxjs/toolkit": "^1.1.0",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-redux": "^7.1.3",
    "react-scripts": "3.4.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
// 하단 생략
```
리덕스 템플릿으로 지정했을때 기본 package.json의 모습이다. `@reduxjs/toolkit`, `react-redux` 가 설치된 것이 보이는데 `redux` 모듈은 보이지 않는다. 왜? `redux.js/toolkit`이 `redux`가 포함인가... [reduxjs/toolkit 깃헙](https://github.com/reduxjs/redux-toolkit)에서 확인해보니, 오호 그렇구나!
더 궁금한것은 [redux toolkit 공식문서](https://redux-toolkit.js.org/) 에서 추가내용 살피기!

---

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

- `src/redux/store.js` : 스토어 생성, 미들웨어/데브툴 지정, state초기화
- `src/redux/rootReducer.js` : 컴포넌트별로 나뉜 `reducer.js`파일을 `combineReducers()`를 통해 통합한다.
- `src/redux/index.js` : 각 컴포넌트의 `actions.js` 파일의 통합본이다. 경로를 줄여쓰기 위해 `index.js`로 하였다.

- `src/redux/[컴포명]/types.js`: 해당 컴포넌트의 액션타입 상수 지정
- `src/redux/[컴포명]/actions.js`: 해당 컴포넌트의 액션크리에이터 함수 구현
- `src/redux/[컴포명]/[컴포명]Reducer.js`: 해당 컴포넌트의 리듀서 구현

---

# 
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

---

## 라우터

[리액트 라우서 공식문서](https://reacttraining.com/react-router/web/guides/quick-start)

### 라우터 Hook

[리액트라우터 공식문서- 제공 Hook](https://reacttraining.com/react-router/web/api/Hooks)
위 문서에서 hook에 4종류에 대해 알아보기. 사용법은 기존 방식과 거의~ 유사!

- `useHistory` : route props.history hook ver.
  ```js
  import { useHistory } from 'react-router-dom';
  let history = useHistory();
  history.push('/home');
  ```
- `useParams`
  ```js
  import { useParams } from 'react-router-dom';
  // Routes.js에 경로가 '/update/:id'라면 id = 파라미터명
  let { id } = useParams(); // 주소창에 id부분에 들어간 값이 변수에 담긴다.
  ```
- `useRouteMatch`
- `useLocation`

### `withRouter()` 와 `history.push()`

hook말고 이전에 사용하던 방법으로 진행해보자.

`react-router-dom` 에서 제공하는 `withRouter()`를 통해 컴포넌트를 export 하게 되면 `props`에 `history` 속성이 추가 된다. `props.history.push('라우터경로')` 를 통해 주소창을 조정할 수 있으며, 라우터에 지정한 컴포넌트로 화면전환도 가능하다.

```js
import { withRouter } from 'react-router-dom';

const 컴포명 = (props) => {
  return (
    <div>
      <button onClick={() => props.history.push('/')}>홈으로</button>
      <button onClick={() => props.history.push('/create')}>생성하기</button>
    </div>
  );
};
export default withRouter(컴포명);
```

### `match.params()`

`history.push()`를 통해 주소창을 조정했다면, 이번엔 주소창에 있는 `params`를 추출해보자. Routes.js에서 각 경로마다 컴포넌트를 지정해 줬다(`/Routes.js`확인하기). 경로를 설정할때 경로에 지정한 파라미터(목록의 id 나 문자열 등)를 불러서 사용할때 `match.params('지정파라미터')` 을 통해 값을 얻을 수 있다. 상품상세페이지 같은 곳에 주로 사용한다!

---

# React-Hook

## useState

`useState()` 는 `[state, setState()]` 를 리턴한다.

```js
const [value, setValue] = useState('초기값');
```

과 같이 선언하는 것은 배열에 0번, 1번 인덱스 값을 나눈 것으로 생각하면 된다.

```js
const value = useState('초기값');
console.log(value[0]); // '초기값'
value[1]('변경된 값'); // setValue('변경된 값') 과 동일하다
console.log(value[0]); // '변경된 값'
```

위 예제와 같이 사용할 수도 있다!

## useEffect

[리액트 공식문서 - Effect Hook 사용하기](https://ko.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

### `useEffect(CB)`

`componentDidMount()` + `componentDidUpdate()` 합친 기능
첫 랜더링 + 모든 업테이트 때 매번 실행되는 이팩트 함수

### `useEffect(CB,[])`

2번째 인자에 **빈배열**을 넘겨 주면 `componentDidMount()`와 동일한 기능으로 첫 페이디 로딩 1회만 실행 된다.

### `useEffect(CB,[state])`

2번인자에 `[state 배열]` 을 넘길때, **해당 state 값이 변경됬을때만 CB 실행**

### `useEffect(클린업CB,[state or props])`

해당 state, props의 값이 바뀔때 클린업 CB 실행

## mock-데이터 패치 오류

```
List.js:28 Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
```

이런적 없었는데 패치하다 에러가 발생했다. `public/data/data.json` 경로에 목데이터를 두고 패치로 불러들였는데, json을 불러오지 못하고 있고..

```js
fetch(`${URL}/public/data/data.json`, {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
```

해더를 붙여 json지정해주었더니 이번엔 오류 코드가 바꼈다.

```
List.js:18 GET http://localhost:3000/public/data/data.json 404 (Not Found)
```

파일이 있는데 왜 404에러? 찾아가질 못할까? **문제는 경로에 있었다!!** **`public`을 제거하고 `http://localhost:3000/data/data.json`으로 작성해야 했다.**

> fetch와 fs로 json 데이터 변경하려다 로컬스토리지에 저장하는 방식으로 바꿈!

---

# 리덕스x리액트에서 데이터 패치는 어디서 해야할까?

처음에 데이터를 list 컴포넌트에서 작성했는데, 스토어와 리듀서의 state초기화때문에 값이 엉켜 리덕스에서 패치하러 이동!

리덕스 스토어와 리듀서에는 state 초기값이 들어간다. 사이클이 **스토어 > 리듀서**로 지나가길래 처음에 스토어에 패치를 달았지만, 스토어에서 값이 잘 들어와도 리듀서에서 다시 state 초기화가 적용되면서 값이 날라가는 상태가 된다. 결국 **리듀서에서 데이터 패치를 했다**. 아직까진 문제는 없는데 여기에 하는 것이 맞는지는 잘..🧐

---

# LocalStorage/sessionStorage

로컬스토리지와 세션스토리지는 동일한 메서드를 사용한다.
`window.localStorage.메서드()`
`window.sessionStorage.메서드()`

## `getItem('키이름str')`

데이터를 가저올때 문자열 형태로 가저오기 때문에, 만약 로컬스토리지에 저장된 문자열이 json 객체 형태라면 `JSON.parse(window.localstorage.getItem('key'))` 파싱해주어야 한다.

## `setItem('키이름str','값str')`

데이터를 저장할때도 마찬가지로 문자열로 저장해야 하기 때문에 복잡한 객채의 경우 json 형태 문자열로 저장하게 된다. 이때 js객체를 `JSON.stringify(데이터객체)`해주어야 한다.

## `removeItem('키이름str')`

해당 키와 값을 쌍으로 제거 한다.

## `clear()`

로컬스토리지에 있는 모든 아이템을 삭제한다.

---

# Array 메서드

## 새로운 배열을 반환하는 메서드

`concat()`, `map()`, `filter()`, `slice()`

> ### 유용하게 쓰기
>
> **논리 && 연산자** :
>
> - true && expression : 일때는 항상 expression로 평가
> - false && expression : 일때는 항상 false로 평가
>
> **조건부 연산자** : `condition ? true : false` ,
>
> store나 state로 관리하는 배열 객체에서 특정 인덱스의 값만 수정해야 할때! (`/src/pages/Update/Update.js`확인)
>
> `const newArray = array.map(arr => arr.id===id? newArr : arr)`
>
> 위 코드와 같이 `map()`와 **조건부 연산자 or if문** 을 통해 쉽게 표현 가능. **조건부연산자강추~!**

---

# UUID 모듈

id 값을 배열 길이로 줬다니 삭제했을때 id 중복이 생겨서 UUID 모듈을 설치했다.
`npm i uuid` 로 설치, 보통 v4사용한단다.

- v1 : timestamp + random value
- v3 : namespace + sha-1
- v4 : random
- v5 : namespace + md5

```js
import { v4 as uuid } from 'uuid';
uuid(); // 랜덤값이 출력된다.
```

---

# styled-components

`npm i styled-components` 로 설치

```js
import styled from 'styled-components';
// 위 styled 속성 불러서 스타일 컴포넌트를 작성한다.
```

## reset css 적용하기

설치 : `npm i styled-reset`

`src/GlobalStyles.js`를 생성하고 글로벌적용할 스타일을 작성한다.

- createGlobalStyle 모듈 부르기
- reset.css 위치시키기(어째선지 box-sizing 설정이 안되어 있음, 추가 설정해야한다)
- 최상위 컴포넌트에 위치시켜 컴포넌트가 랜더링 될때 전역 스타일 적용
- google webfont 적용 : `GlobalStyles.js`에 `@import`를 통해 추가하려고 했더니 하지말라는 알람이 떠서, `<link>` 태그를 `index.html <head>`에 추가했다.
- css를 통해 자주쓰는 css속성묶어 변수화 : `src/util/style.js`에 정리하여 import하여 사용


## ThemProvider

테마를 선택할수 있게 돕는다. 다크모드 / 화이트모드 : 투두앱에는 사용하지 않음

---

# font-awesome

`npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome`


--- 

# 에러

> #### TypeError: Cannot read property 'filter' of undefined
 ```js
 const title =todolist.filter((todo) => todo.id === id)[0].title
 ```
>다른때는 잘만되던 코드였는데, 갑자기 typeError를 호출하기 시작! **이유는 리듀서를 UPDATE_TODO가 아닌 UPDATE_INDEX...를 수정**했으니, `updateTodo()` 리듀서를 실행하면 todolist-state가 undefined가 됨!, 당연히 `undefined`에 `filter(), map(), length` 배열 속성,메서드를 쓸수가 없으니 typeError 발생!


---

# Modal

footer 영역에 깃헙 링크버튼 클릭시 페이지이동에 대한 경고창이 뜨고, 이동버튼 클릭시 현재페이지에서 github repo로 이동하도록 url을 변경하였다.
모달은 그냥 해보고싶어서..

- `<Layout />`에 `<Modal/>`를 추가했으며, `redux store`에서 관리하는 `modal-state`가 `true` 일때 컴포넌트가 보이도록 설정

## 주소창 url 변경하기
깃헙 페이지로 이동할때 외부 url로 이동해야 하기때문에 javascript `window.location` 객체를 사용했다.

```js
  const goToGitHub = () => {
    window.location.href = 'https://github.com/zu-hwang/react-redux-todoapp';
  };
```
현재 페이지에서 이동함으로 modal-state는 off 하지 않아도 무관!

## 외부 ulf - 새 탭 띄우기
```js
 const openTapGitHub = () => {
    // 새탭에서 외부 url열기
    modalOff();
    window.open('https://github.com/zu-hwang/react-redux-todoapp', '_blank');
  };
```
현재 페이지에서 모달창은 닫아주고, 새창에 외부url을 띄웠다.

