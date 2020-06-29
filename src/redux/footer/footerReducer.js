import { MODAL_ON, MODAL_OFF } from './types';

const initState = {
  modal: false,
};
const footerReducer = (state = initState, action) => {
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
