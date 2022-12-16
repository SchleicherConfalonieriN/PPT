import React from "react"
import "./App.css"


import ConsultoriosLista from "./Main/Listas/ConsultoriosLista";
import Register from "./Main/User/CreateUser.js";
import Login from "./Main/User/Login.js";
import Home from "./Main/Home/Home";
import EspecialidadesLista from "./Main/Especialidades/EspecialidadesLista";
import MedicosLista from "./Main/Listas/MedicosLista";

import ServicioLista from "./Main/Listas/ServiciosLista";



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
            <Route path='/ServiciosLista' element={ <ServicioLista/>} />
            <Route path='/ConsultoriosLista' element={ <ConsultoriosLista/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;