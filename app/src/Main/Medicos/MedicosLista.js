import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:8000/api/Medico/';




const MedicoLista =() =>{

    const[medico, setMedico] = useState([])
    useEffect (  () => {

        getMedico()

    },[])

const getMedico = async () =>{

    const res = await axios.get(URL, {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    console.log(localStorage.getItem("apiData"));
    console.log(res.data);
    setMedico(res.data);
}


const deleteMedico = async (id) => {
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    )
    getMedico()
 }


return (

    <div className="ListContainer">
<h4>Listado de Medicos</h4>
<tr className='ListTitle'>
<th>Nombre</th>
<th>Especialidad</th>
<th></th>
<th></th>
</tr>

    {medico.map((mov,index) =>
    <tr>
    <th className='Content' key={index}>{mov.nombre} {mov.apellido}</th>
    <th className='Content' key={index}>{mov.especialidad}</th>
    <th><Link to={`./edit/${mov.id}`}>Edit</Link></th>
    <th><button onClick={()=>deleteMedico(mov.id)}>X</button></th>
    </tr>
    )
    }

   
      </div>  
)

}
export default MedicoLista;