import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import { and } from 'sequelize';

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

const mensaje  = (a,b) => {

if(a==="delete"  && b==="servicio")


return (<h1>FUNCIONA</h1>)
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



    {mov.Tipo == "update"  && 
    <th className='Content' key={index}>Su turno con el medico {mov.medico} del dia {mov.DateOld} a las {mov.HourOld}h a sido cambiado para el dia {mov.DateNew} a las {mov.HourNew}h</th>
    }
    {(mov.Tipo == "delete")  &&

     <th className='Content' key={index}>Su turno con el medico {mov.medico} del dia {mov.DateOld} a las {mov.HourOld}h a sido dado de baja porfavor solicitar el turno nuevamente</th>
    
    }
    
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