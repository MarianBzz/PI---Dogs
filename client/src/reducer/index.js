import { GET_DOGS } from "../actions/";
let initialState = {
  dogs: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      console.log(action.payload);
      return {
        ...state,
        dogs: action.payload,
      };
    default:
      return state;
  }
}
