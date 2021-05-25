import { SET_MENU_SHOW } from './rootActions';

const initialRootStore = {
  isMenuShow: false,
};

export const rootReducer = (state = initialRootStore, { type, payload } = {}) => {
  switch (type) {
    case SET_MENU_SHOW:
      return { ...state, isMenuShow: payload };
    default:
      return state;
  }
};
