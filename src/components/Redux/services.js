import axios from 'axios'
export const postStudent=(values)=>{
return axios
.post("http://localhost:8888/student/register", values)

}