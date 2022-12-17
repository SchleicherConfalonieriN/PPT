import React from "react"
import "./App.css"

//Barra

import Barra from './Components/Barra';


import Register from "./Main/User/CreateUser.js";
import Login from "./Main/User/Login.js";
import Home from "./Main/Home/Home";
import UpdateUser from "./Main/User/UpdateUser";
//LISTAS
import ConsultorioLista from "./Main/Consultorio/ConsultoriosLista.js";
import EspecialidadesLista from "./Main/Especialidades/EspecialidadesLista";
import MedicosLista from "./Main/Medicos/MedicosLista";
import ServicioLista from "./Main/Servicios/ServiciosLista";
//EDITAR
import EditEspecialidad from './Main/Especialidades/EditarEspecialidades';
import EditConsultorio from './Main/Consultorio/EditConsultorio';




import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <Barra/>
 <BrowserRouter>
      <Routes>
            <Route path='/' element={ <Login/>} />
            <Route path='/Register' element={ <Register/>} />
            <Route path='/Home' element={ <Home/>} />
            <Route path='/EditarDatos' element={ <UpdateUser/>} />
            <Route path='/Register' element={ <Register/>} />
            <Route path='/Home/Register' element={ <Register/>} />
            <Route path='/MedicosLista' element={ <MedicosLista/>} />
            <Route path='/EspecialidadesLista' element={ <EspecialidadesLista/>} />
            <Route path='/ServiciosLista' element={ <ServicioLista/>} />
            <Route path='/ConsultorioLista' element={ <ConsultorioLista/>} />
            <Route path='/EspecialidadesLista/edit/:id' element={ <EditEspecialidad/>} />
            <Route path='/ConsultorioLista/edit/:id' element={ <EditConsultorio/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;