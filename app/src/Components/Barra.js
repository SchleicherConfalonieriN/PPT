import React  from 'react';

import {Link} from 'react-router-dom';
const Barra = () =>{
/*
    {rol === 3  && (          )} 
    {rol === 3  && (          )} 
    {rol === 3  && (          )} 
    {rol === 3  && (          )} 
    {rol === 3  && (          )} 
    {rol === 3  && (          )} 
*/
const rol =  JSON.parse(localStorage.getItem("rol"))




    return(
        <div className='nav'>
        <ul>    
            {rol === 1  && (<li><Link to={'/AvisoLista'}>Avisos</Link></li>)} 
            {rol === 3  && (<li><Link to={'/EspecialidadesLista'}>Especialidad</Link></li>)}    
            {rol === 3  && (<li><Link to={'/MedicosLista'}>Medicos</Link></li>)} 
            {rol === 3  && (<li><Link to={'/ServiciosLista'}>Servicios</Link></li>)} 
            {rol === 3  && (<li><Link to={'/ConsultorioLista'}> Colsultorios</Link></li>)} 
            {rol === 3  && (<li><Link to={'/Register'}> Usuario Nuevo</Link></li>)} 
            {rol  && (<li><Link to={'/EditarDatos'}> Editar Datos</Link></li>)} 
            {rol === 1  && (<li><Link to={'/TurnoLista'}> Turnos</Link></li>)} 
            {rol === 1  && (<li><Link to={'/CreateTurno'}> Solicitar Turnos</Link></li>)} 
          
           
        
        </ul>
        </div>
    )
}

export default Barra;