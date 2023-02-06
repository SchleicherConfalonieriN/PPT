import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:8000/api/turno/Paciente';
const URL1 = 'http://localhost:8000/api/turno/';




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

    console.log(res.data);
    setTurno(res.data);
}


const deleteTurno = async (id) => {
    console.log(id)
    await axios.delete(URL1+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    ).then(res => console.log(res))
    getTurno()
 }


return (

    <div className="ListContainer">
<h4>Listado de Turnos</h4>
<tr className='ListTitle'>
<th>Nombre</th>
<th>precio</th>
<th>id del doctor</th>
<th>fecha</th>
<th></th>
</tr>

    {turno.map((mov,index) =>
    <tr>
    <th className='Content' key={index}>{mov.nombre} {mov.apellido}</th>
    <th className='Content' key={index}>{mov.precio}</th>
    <th className='Content' key={index}>{mov.id_medico}</th>
    <th className='Content' key={index}>{mov.Date}</th>
    <th><Link to={`/edit/${mov.id}`}><h4>Edit</h4></Link></th>
    <th><button onClick={()=>deleteTurno(mov.id)}>X</button></th>
    </tr>
    )
    }
      </div>  
)

}
export default TurnoLista;