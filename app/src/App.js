import React from "react"




import Register from "./Main/User/CreateUser.js";
import Login from "./Main/User/Login.js";
import Administrador from "./Main/Home/Administrador";
import Paciente from "./Main/Home/Paciente";
import Medico from "./Main/Home/Medico";



import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
 <BrowserRouter>
      <Routes>
            <Route path='/' element={ <Login/>} />
            <Route path='/Register' element={ <Register/>} />
            <Route path='/Medico' element={ <Medico/>} />
            <Route path='/Administrador' element={ <Administrador/>} />
            <Route path='/Paciente' element={ <Paciente/>} />
           
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;