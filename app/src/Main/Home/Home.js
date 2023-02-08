import Administrador from "./Administrador";
import Paciente from "./Paciente";
import Medico from "./Medico";
import Register from "../User/CreateUser.js";
import Login from "../User/Login.js";
import UpdateUser from "../User/UpdateUser";
//LISTAS

import CreateTurno from "../Turnos/CreateTurno"
import ConsultorioLista from "../Consultorio/ConsultoriosLista.js";
import EspecialidadesLista from "../Especialidades/EspecialidadesLista";
import MedicosLista from "../Medicos/MedicosLista";
import ServicioLista from "../Servicios/ServiciosLista";
import TurnoLista from "../Turnos/TurnoList"
//EDITAR
import EditEspecialidad from '../Especialidades/EditarEspecialidades';
import EditConsultorio from '../Consultorio/EditConsultorio';

import {Route, Routes } from 'react-router-dom';
import EditMedico from "../Medicos/EditMedico";
import EditServicio from "../Servicios/EditServicio";

const Home = () => {

const rol =  JSON.parse(localStorage.getItem("rol"))

    return(   
        <div id = "home">

    <Routes>
        <Route path='/' element={ <Login/>} />
        <Route path='/Register' element={ <Register/>} />
        <Route path='/EditarDatos' element={ <UpdateUser/>} />
        <Route path='/Register' element={ <Register/>} />
        <Route path='/TurnoLista' element={ <TurnoLista/>} />
        <Route path='/MedicosLista' element={ <MedicosLista/>} />
        <Route path='/MedicosLista/edit/:id' element={<EditMedico/>}/>
        <Route path='/EspecialidadesLista' element={ <EspecialidadesLista/>} />
        <Route path='/ServiciosLista' element={ <ServicioLista/>} />
        <Route path='/ServiciosLista/edit/:id' element= {<EditServicio/>}/>
        <Route path='/ConsultorioLista' element={ <ConsultorioLista/>} />
        <Route path='/EspecialidadesLista/edit/:id' element={ <EditEspecialidad/>} />
        <Route path='/ConsultorioLista/edit/:id' element={ <EditConsultorio/>} />
        <Route path='/CreateTurno' element={ <CreateTurno/>} />
    </Routes>  


            {rol === 1 && (<Paciente/>)}
            {rol === 2 && (<Medico/>)} 
            {rol === 3 && (<Administrador/>)}
        </div>
    )
}

export default Home;