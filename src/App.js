
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/Student/AddStudent";
import Home from "./components/Home/Home";
import {GlobalStyle} from './globalStyles'
import Header from "./components/Home/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <GlobalStyle/>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/student/register" element={<AddStudent />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
