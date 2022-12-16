import React from 'react'
import {Link} from 'react-router-dom';
//import "./Home.css";




const Administrador = () =>{


    return (
    
    <div className='PrimaryContainer'>
        <div className='listaOpciones'>
        <Link to={'/EspecialidadesLista'}> <button>Especialidad</button></Link>
        <Link to={'/MedicosLista'}><button>Medicos</button></Link>
        <Link to={'/ServiciosLista'}><button>Servicios</button></Link>
        <Link to={'/ConsultorioLista'}><button> Colsultorios</button></Link>
         </div>
        </div>)
}

export default Administrador;