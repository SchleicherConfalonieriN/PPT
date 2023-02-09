import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:8000/api/Servicio/';




const TurnoServicio =() =>{

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



return (

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

        <select></select>



    )
    }
      </div>  
)

}
export default TurnoServicio;