import { DELETE_STUDENT, FETCH_STUDENT, POST_STUDENT } from "./action";

const initialState = {
  students: [],
  success: null,
  error: null,
  loading:false,
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_STUDENT:
      return {
        ...state,
        success: action.payload,
        loading:true,
      };
    case FETCH_STUDENT:
      return {
        ...state,
        students: action.payload,
        loading:false,
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((std) => std.id !== action.payload.id),
        success:action.payload.res.data,
        loading:true,
      };
    default:
      return state;
  }
};
