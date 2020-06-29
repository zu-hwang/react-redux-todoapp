import { MODAL_ON, MODAL_OFF } from 'src/redux/footer/types';

export const modalOn = () => {
  return {
    type: MODAL_ON,
  };
};

export const modalOff = () => {
  return {
    type: MODAL_OFF,
  };
};
