import React from 'react'
import {Link} from 'react-router-dom';
//import "./Home.css";




const Paciente = () =>{


    return (
    
    <div  className='PrimaryContainer'>
        <h1>ESTE ES EL PACIENTE</h1>
        <button>Mis Turnos</button>
        <button>Solicitar Turno</button>
        <Link to={'/EditarDatos'}><button> Editar Datos</button></Link>
        </div>)
}

export default Paciente;