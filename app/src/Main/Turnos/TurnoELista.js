import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:8000/api/turnoS/Paciente';
const URL1 = 'http://localhost:8000/api/turnoS/';




const TurnoELista =() =>{

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
    console.log("esta es la data de los turnos")
console.log(res)
    console.log(res.data);
    setTurno(res.data);
}


const deleteTurno = async (id) => {
    console.log("ESTE es el id")
    console.log(id)
    await axios.delete(URL1+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    ).then((res) => console.log(res))
    getTurno()
 }


return (

    <div className="ListContainer">
<h4>Listado de Turnos</h4>
<tr className='trtitle'>
<th>Nombre</th>
<th>precio</th>
<th>fecha</th>
<th>hora</th>
<th>Editar</th>
<th>Eliminar</th>
</tr>

    {turno.map((mov,index) =>
    <tr>
    <th className='Content' key={index}>{mov.nombre}</th>
    <th className='Content' key={index}>{mov.precio}</th>
    <th className='Content' key={index}>{mov.Date}</th>
    <th className='Content' key={index}>{mov.Hour}h</th>
    <th><Link to={`./edit/${mov.id}`}>Edit</Link></th>
    <th><button onClick={()=>deleteTurno(mov.id)}>X</button></th>
    </tr>
    )
    }
      </div>  
)

}
export default TurnoELista;