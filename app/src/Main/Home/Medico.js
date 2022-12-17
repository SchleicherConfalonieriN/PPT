import React from 'react'
import {Link} from 'react-router-dom';
//import "./Home.css";




const Medico = () =>{


    return (
    
    <div className='PrimaryContainer'>
         <h1>Este es el medico</h1>
         <Link to={'/EditarDatos'}><button> Editar Datos</button></Link>
        </div>)
}

export default Medico;