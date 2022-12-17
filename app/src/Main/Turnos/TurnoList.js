import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import CreateTurno from "./CreateTurno";
const URL = 'http://localhost:8000/api/turno/Paciente';




const TurnoLista =() =>{

    const[turno, setTurno] = useState([])
    useEffect (  () => {

        getTurno()

    },[])

const getTurno = async () =>{

    const res = await axios.get(URL, {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    console.log(localStorage.getItem("apiData"));
    console.log(res.data);
    setTurno(res.data);
}


const deleteTurno = async (id) => {
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    )
    getTurno()
 }


return (

    <div className="ListContainer">
<h4>Listado de Turnos</h4>
<tr className='ListTitle'>
<th>Nombre</th>
<th>Precio</th>
<th>Descripcion</th>
<th></th>
</tr>

    {turno.map((mov,index) =>
    <tr>
    <th className='Content' key={index}>{mov.nombre}</th>
    <th className='Content' key={index}>{mov.precio}</th>
    <th className='Content' key={index}>{mov.descripcion}</th>
    <th><Link to={`/edit/${mov.id}`}><h4>Edit</h4></Link></th>
    <th><button onClick={()=>deleteTurno(mov.id)}>X</button></th>
    </tr>
    )
    }

    <CreateTurno/>
      </div>  
)

}
export default TurnoLista;