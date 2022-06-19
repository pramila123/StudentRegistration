import { deleteStudentById, getStudent, postStudent } from "./services";
export const POST_STUDENT = "POST_STUDENT";
export const FETCH_STUDENT = "FETCH_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const addStudent = (postData) => {
  return async (dispatch) => {
    await postStudent(postData)
      .then((res) => {
    
        dispatch({
          type: POST_STUDENT,
          payload: res.data,
        });
        dispatch(listStudent());
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

export const deleteStudent = (id) => {
  return async (dispatch) => {
    await deleteStudentById(id)
      .then((res) => {
        dispatch({
          type: DELETE_STUDENT,
          payload: { res, id },
        });

        
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
