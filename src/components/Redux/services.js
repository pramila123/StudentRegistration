import axios from "axios";
export const postStudent = (values) => {
  return axios.post("http://localhost:8888/student/register", values);
};

export const getStudent = () => {
  return axios.get("http://localhost:8888/student/list");
};
