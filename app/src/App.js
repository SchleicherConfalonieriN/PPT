import React from "react"




import Register from "./Main/User/CreateUser.js"
import Login from "./Main/User/Login.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
 <BrowserRouter>
      <Routes>
            <Route path='/' element={ <Login/>} />
            <Route path='/Register' element={ <Register/>} />
           
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;