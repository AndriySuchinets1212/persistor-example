import * as types from '../types';


const initialState = {
  user_data: {}
}


export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      console.log(action.payload)
      return {...state, user_data: action.payload}
    default:
      return state;
  }
}