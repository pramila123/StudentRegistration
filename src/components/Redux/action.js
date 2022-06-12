import { postStudent } from "./services";

export const ADD_STUDENT = "ADD_STUDENT";

export const addStudent = (postData) => {
  return (dispatch) => {
    postStudent(postData).then((res) => {
      console.log(res.data);
    }).catch((err)=>{
        console.log(err)
    });
  };
};
