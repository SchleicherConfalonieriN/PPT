import React  from 'react';
import CerrarSession from './CerrarSesion';
import Home from './Home';
import {Link} from 'react-router-dom';
const Barra = () =>{

    return(
        <div className='navs'>
        <Home />
        <CerrarSession/>
        </div>
    )
}

export default Barra;