import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:8000/api/turnoS/register';
const URL1 = 'http://localhost:8000/api/servicio/';



const TurnoServicio =() =>{
    const[op, setOp] = useState("")
    const[date,setDate] =useState("")
    const[hora,setHora] = useState("")
    const[servicio, setServicio] = useState([])
    useEffect (  () => {

        getServicio()

    },[])

const getServicio = async () =>{

    const res = await axios.get(URL1, {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    console.log(localStorage.getItem("apiData"));
    console.log(res.data);
    setServicio(res.data);
}

const create = async (e) =>{
    e.preventDefault()
    axios.post(URL,{id_servicio:op,Date:date, Hour:hora},{
        headers: {
            'user-token': localStorage.getItem("apiData")
            }
     }
    ).then(window.location.assign('http://localhost:3000/TurnoELista'))
}

return (

    <div className="ListContainer">
<h4>Listado de Servicios</h4>
    <form onSubmit={create}>
<select value={op} onChange={(e) => setOp(e.target.value)}>
    <option value={0}>seleccione un servicio</option>
    {servicio.map((mov,index) =>
    <option value={mov.id}>{mov.nombre}</option>
    )
    }
</select>
<br></br>
{op >0 && 
 <input type="Date" value={date} onChange={(e) => setDate(e.target.value)}></input>
}
{op >0 && 
 <select value={hora} onChange={(e) => setHora(e.target.value)}>
    <option value={0}>--seleccione un horario--</option>
    <option value={8}>8</option>
    <option value={9}>9</option>
    <option value={10}>10</option>
    <option value={11}>11</option>
    <option value={12}>12</option>
    <option value={13}>13</option>
    <option value={14}>14</option>

 </select>
}
<button>Solicitar Turno</button>
    </form>
</div>  
)

}
export default TurnoServicio;