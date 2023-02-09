import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import CreateServicio from "./CreateServicio";
const URL = 'http://localhost:8000/api/Servicio/';




const ServicioLista =() =>{

    const[servicio, setServicio] = useState([])
    useEffect (  () => {

        getServicio()

    },[])

const getServicio = async () =>{

    const res = await axios.get(URL, {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    console.log(localStorage.getItem("apiData"));
    console.log(res.data);
    setServicio(res.data);
}


const deleteServicio = async (id) => {
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    )
    getServicio()
 }


return (
<div id="rela">
    <div className="ListContainer">
<h4>Listado de Servicios</h4>
<tr className='trtitle'>
<th>Nombre</th>
<th>Precio</th>
<th>Descripcion</th>
<th></th>
<th></th>
</tr>

    {servicio.map((mov,index) =>
    <tr>
    <th  key={index}>{mov.nombre}</th>
    <th  key={index}>{mov.precio}</th>
    <th  key={index}><button>Info</button><div className='info'>{mov.descripcion}</div></th>
    <th><Link to={`./edit/${mov.id}`}>Edit</Link></th>
    <th><button onClick={()=>deleteServicio(mov.id)}>X</button></th>
    </tr>
    )
    }

  
      </div> 
      <CreateServicio/>
      </div> 
)

}
export default ServicioLista;