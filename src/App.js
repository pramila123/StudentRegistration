
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import {GlobalStyle} from './globalStyles'
import Header from "./components/Home/Header";
import Footer from "./components/Footer";
import EditStudent from "./components/Student/EditStudent";



function App() {
  
  return (
    <>
    <GlobalStyle/>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
         
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
