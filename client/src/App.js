// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Body from './Component/Body'
import Story from './Component/Pages/Story'
import Events from './Component/Pages/Events'
import Login from './Component/Pages/Login'
// import Signup from './Component/Pages/Signup'
import Footer from './Component/Footer '
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Testingprops from './Component/Testingprops';
import Hooks from './Component/Pages/Hooks';
function App() {
var a="bhanu create a prop" ;
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/home" element={<Body/>}/>
          <Route path="/story" element={<Story/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/hooks" element={<Hooks/>}/>
          {/* <Route path="/signup" element={<Signup/>}/> */}
         </Routes>

         <Testingprops a={a} />
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
