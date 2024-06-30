import { combineReducers } from 'redux';
import { SET_FORM_DATA } from './actions';

const initialState = {
  formData: {},
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
});