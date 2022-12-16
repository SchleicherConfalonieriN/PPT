import React from "react"
import "./App.css"



import Register from "./Main/User/CreateUser.js";
import Login from "./Main/User/Login.js";
import Home from "./Main/Home/Home";
import EspecialidadesLista from "./Main/Especialidades/EspecialidadesLista";
import MedicosLista from "./Main/Listas/MedicosLista";
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
            <Route path='/Home' element={ <Home/>} />
            <Route path='/MedicosLista' element={ <MedicosLista/>} />
            <Route path='/EspecialidadesLista' element={ <EspecialidadesLista/>} />
            <Route path='/Paciente' element={ <Paciente/>} />
           
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;