import axios from "axios";
const api="http://localhost:8888"
export const postStudent = (values) => {
  return axios.post(api+"/student/register", values);
};

export const getStudent = () => {
  return axios.get(api+"/student/list");
};

export const deleteStudentById=(id)=>{
  return axios.delete(api+`/student/delete/${id}`)
}

export const studentById=(id)=>{
  return axios.get(api+`/student/${id}`)
}

export const editStudent=(values)=>{
  return axios.put(api+`/student/update`,values)
}
