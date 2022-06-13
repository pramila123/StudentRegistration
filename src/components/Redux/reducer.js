import { FETCH_STUDENT } from "./action";

const initialState = {
  students: [],
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
};
