import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom';
import Register from './CreateEspacialidad';

const URL = 'http://localhost:8000/api/especialidad/';




const EspecialidadesLista =() =>{

    const[especialidad, setEspecialidad] = useState([])
    useEffect (  () => {

        getEspecialidad()

    },[])

const getEspecialidad = async () =>{

    const res = await axios.get(URL, {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    console.log(localStorage.getItem("apiData"));
    console.log(res.data);
    setEspecialidad(res.data);
}


const deleteEspecialidad = async (id) => {
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    )
    getEspecialidad()
 }


return (

    <div className="ListContainer">
<h4>Listado de Especialidades</h4>
<tr className='trtitle'>
<th>Nombre</th>
<th></th>
<th></th>
</tr>

    {especialidad.map((mov,index) =>
    <tr className='trlist'>
    <th className='Content' key={index}>{mov.Nombre}</th>
    <th className='Content'><Link to={`./edit/${mov.id}`}>Edit</Link></th>
    <th className='Content'><button onClick={()=>deleteEspecialidad(mov.id)}>X</button></th>
    </tr>
    )
    }
<Register/>



      </div>  
)

}
export default EspecialidadesLista;