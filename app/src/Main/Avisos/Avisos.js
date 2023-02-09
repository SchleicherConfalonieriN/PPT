import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:8000/api/mensajeria/';
const rol =  JSON.parse(localStorage.getItem("rol"))





const AvisoLista =() =>{

    const[mensajes, setMensajes] = useState([])
    useEffect (  () => {

        getMensajes()

    },[])

const getMensajes = async () =>{

    if (rol === 1){
    const res = await axios.get(URL+"paciente", {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    setMensajes(res.data);
    }
    else{
    const res = await axios.get(URL+"medico", {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
          }
        )  
        setMensajes(res.data);
    }

  
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


function men (mov) {

if (mov.Generador==="servicio" && mov.Tipo === "delete"){

    return <th className='Content' >Su turno para {mov.medico} del dia {mov.DateOld} a las {mov.HourOld}h a sido dado de baja. Porfavor solicitar un turno nuevo</th>

}

if (mov.Generador==="servicio" && mov.Tipo === "update"){

return <th className='Content'>Su turno para {mov.medico} del dia {mov.DateOld} a las {mov.HourOld}h a sido cambiado para el dia {mov.DateNew} a las {mov.HourNew}h</th>

}

if (mov.Generador==="medico" && mov.Tipo === "update"){

    return <th className='Content'>Su turno para {mov.medico} del dia {mov.DateOld} a las {mov.HourOld}h a sido cambiado para el dia {mov.DateNew} a las {mov.HourNew}h</th>
    
}
if (mov.Generador==="medico" && mov.Tipo === "delete"){

    return <th className='Content' >Su turno con el medico {mov.medico} del dia {mov.DateOld} a las {mov.HourOld}h a sido dado de baja. Porfavor solicitar un turno nuevo</th>
    
}



}




 

return (

    <div className="ListContainer">
<tr className='trtitle'>
<th  id ="largo">Aviso</th>


</tr>

    {
    
 rol === 1 &&   
    mensajes.map((mov,index) =>

<tr  id ="largo">



  
  
  {men(mov)}
    </tr>
    )
    }

{
    
    rol === 2 &&   
       mensajes.map((mov,index) =>
       <tr  id ="largo">
   
   
   
       {mov.Tipo == "update"  && 
       <th className='Content' key={index}>Su turno del dia {mov.DateOld} a las {mov.HourOld}h a sido cambiado para al dia {mov.DateNew} a las {mov.HourNew}h</th>
       }
       {mov.Tipo == "delete"  && 
       <th className='Content' key={index}>Su turno del dia {mov.DateOld} a las {mov.HourOld}h a sido dado de baja</th>
       }
       
       </tr>
       )
       }




   
      </div>  
)

}
export default AvisoLista;