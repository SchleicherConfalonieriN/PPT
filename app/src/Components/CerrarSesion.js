import React from 'react'

const CerrarSession = () => {
    
    const Csession = async (id) => {
        localStorage.clear();
        window.location.assign('http://localhost:3000/');
     }



return (

    <div className= "PrimaryContainer">
        <button onClick={()=>Csession()}>Cerrar Sesion</button>  
    </div>
    )
}


export default CerrarSession ;