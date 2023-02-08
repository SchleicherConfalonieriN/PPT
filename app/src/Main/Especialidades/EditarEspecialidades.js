import React from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {useState} from 'react';


const URL = 'http://localhost:8000/api/especialidad/'

const EditEspecialidad = () => {

    let {id} = useParams();
    


    const[nombre, setNombre] = useState("") 
   
    const edit = async (e) =>{
       
        e.preventDefault()
       await axios.put(URL + id,{Nombre:nombre},{
            headers: {
                'user-token': localStorage.getItem("apiData")}
             }).then(window.location.assign('http://localhost:3000/EspecialidadesLista'));;
          
    }

return(

    <div className='PrimaryContainer'>
        <h2>Editar Especialidad</h2>
        
    <form onSubmit={edit}>
        <label>Nombre</label>
        <input
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            type='text'
        />
        
    <button type= "submit">Editar</button>
    </form>

</div>
)
}

export default EditEspecialidad;