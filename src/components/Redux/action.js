import { getStudent, postStudent } from "./services";

export const FETCH_STUDENT = "FETCH_STUDENT";

export const addStudent = (postData) => {
  return async (dispatch) => {
    await postStudent(postData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const listStudent = () => {
  return async (dispatch) => {
    await getStudent()
      .then((res) => {
        dispatch({
          type: FETCH_STUDENT,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
