import { MODAL_ON, MODAL_OFF } from './types';
console.log('푸터리듀서 로드');
const footerReducer = (state = {}, action) => {
  switch (action.type) {
    case MODAL_ON:
      return {
        ...state,
        modal: true,
      };
    case MODAL_OFF:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};

export default footerReducer;
