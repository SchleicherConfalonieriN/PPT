import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:8000/api/mensajeria/';






const AvisoLista =() =>{

    const[mensajes, setMensajes] = useState([])
    useEffect (  () => {

        getMensajes()

    },[])

const getMensajes = async () =>{

    const res = await axios.get(URL+"paciente", {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    console.log(localStorage.getItem("apiData"));
    console.log(res.data);
    setMensajes(res.data);
}


const deleteMensajes = async (id) => {
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    )
    getMensajes()
 }


return (

    <div className="ListContainer">
<h4>Avisos</h4>
<tr className='trtitle'>
<th  id ="largo">Mensaje</th>


</tr>

    {mensajes.map((mov,index) =>
    <tr  id ="largo">
    <th className='Content' key={index}>Su turno con el medico {mov.medico} del dia {mov.DateOld} a las {mov.HourOld}h a sido cambiado para el dia {mov.DateNew} a las {mov.HourNew}h</th>

    
   
    </tr>
    )
    }

   
      </div>  
)

}
export default AvisoLista;