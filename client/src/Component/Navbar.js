import React from 'react'
import './Navbar.css';
import logo from '../logo.png';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Story from './Story'
// import { useEffect } from 'react'; 
// import ReactDOM from 'react-dom/frontend';

const Navbar = () => {
  return (
    <div className="bhanu">
   
       <nav className="  navbar navbar-expand-lg">
    <div className="container-fluid" >
    {/* <a className="navbar-brand" href="/" style={{fontFamily:"Qwitcher Grypen", fontSize:"35px"}}>
        <img src={Logo} height={"38px"}/>
    </a> */}
     <a className="navbar-brand " href="./"> <img src={logo} height={"42px"} /></a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button>
    
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item me-3 me-lg-0">
                       <a class="nav-link mx-1 text-white" href="#"><i class="fas fa-print"></i></a>
                   </li> */}
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="/home">Home</a>
           </li>

           {/* <li className="nav-item">
             <a className="nav-link" href="/achivers" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>Achivers</a>
           </li> */}
           <li className="nav-item">
             <a className="nav-link active" href="/story">Story</a>
           </li>
           <li className="nav-item">
             <a className="nav-link active" href="/events">events</a>
           </li>
           {/* <Route path="/about" component={About} /> */}
           <li className="nav-item">
             <a className="nav-link active" href="https://www.w3schools.com/">W3 school</a>
           </li>
           <li className="nav-item">
             <a className="nav-link active" href="https://www.javatpoint.com/">javapint</a>
           </li>
           <div style={{marginLeft:"1000px"}}>
           <li className="nav-item">
             <a className="nav-link active" href="/login">Login</a>
             </li>
             </div>
             <li className="nav-item">
             <a className="nav-link active" href="/signup">Signup</a>
             </li>
          
          </ul>
           <div >
            
            </div>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Features</a>
              <div style={{marginRight:"150px"}}>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About us </a></li>
                <li><a className="dropdown-item" href="#">We together</a></li>
                 {/* <li><hr className="dropdown-divider"/></li>
                 <li><a className="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
              </div>
            </div>

           
           {/* <li className="nav-item">
             <a className="nav-link active" href="https://www.w3schools.com/">Register</a>
           </li>
        
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
         

           </div>
          </div>
          </nav>
          
    </div>
  )
}

export default Navbar


// export class Navbar extends Component {
//   render() {
//     return (
      
//       <div className="bhanu">
        
//         <nav className="navbar navbar-expand-lg bg-light"  >
//   <div className="container-fluid" >
//     <a className="navbar-brand" href="#">icon</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
    
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//        {/* <li class="nav-item me-3 me-lg-0">
//                     <a class="nav-link mx-1 text-white" href="#"><i class="fas fa-print"></i></a>
//                 </li> */}
//           <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/home">Home</a>
//         </li>

//         {/* <li className="nav-item">
//           <a className="nav-link" href="/achivers" style={{fontFamily:"Amatic SC", fontSize:"25px"}}>Achivers</a>
//         </li> */}
//         <li className="nav-item">
//           <a className="nav-link active" href="/story">Story</a>
//         </li>
//         {/* <Route path="/about" component={About} /> */}
//         <li className="nav-item">
//           <a className="nav-link active" href="https://www.w3schools.com/">W3 school</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" href="https://www.javatpoint.com/">javapint</a>
//         </li>
        
//         {/* <li className="nav-item">
//           <a className="nav-link disabled">Disabled</a>
//         </li> */}
//        </ul>

//        <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>
//            <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">About us </a></li>
//             <li><a className="dropdown-item" href="#">We together</a></li>
//             {/* <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li> */}

//           </ul>

//         </li>
        
//          <form className="d-flex" role="search">
//            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//            <button className="btn btn-outline-primary" type="submit">Search</button>
//          </form>
         

//         </div>
//        </div>
//        </nav>
//       </div>
     
//     )
//   }
// }

// export default Navbar
