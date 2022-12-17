import React from 'react'
import {Link} from 'react-router-dom';
//import "./Home.css";




const Paciente = () =>{


    return (
    
    <div  className='PrimaryContainer'>
        Este es el paciente
        <button>Mis Turnos</button>
        <button>Solicitar Turno</button>
        <Link to={'/EditarDatos'}><button> Editar Datos</button></Link>
        </div>)
}

export default Paciente;