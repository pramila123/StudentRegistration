
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/Student/AddStudent";
import Home from "./components/Home/Home";
import {GlobalStyle} from './globalStyles'
function App() {
  return (
    <>
    <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/student/register" element={<AddStudent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
