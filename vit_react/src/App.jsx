import React from 'react';
import {Link, Routes , Route} from "react-router-dom"
import Home from "./Home"
import ServiceList from "../src/services/ServiceList"
import ServiceDetail from "../src/services/ServiceDetail"


function App() {
  return (
    <div className="form-container">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/servicelist">Services List</Link>
      <Link to="/servicedetail">Services Detail</Link>

      <Routes>
				<Route exact path='/' element={<Home/>} />
				<Route exact path='/about' element={<h1>About page</h1>} />
				<Route exact path='/servicelist' element={<ServiceList/>} />
				<Route path='servicelist/:serviceId' element={<ServiceDetail/>}/>
   	 </Routes>   

    </div>

  );
}

export default App;
