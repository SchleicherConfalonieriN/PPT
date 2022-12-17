import React from 'react'
import axios from "axios";
import {useState} from 'react'


const URL ='http://localhost:8000/api/servicio/turno';

const Turno = () => {
    const [nombre,setNombre] = useState('')
    const [date,setDate] = useState('')
    const [id_medico,setIdMedico] = useState('')

    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{nombre:nombre, Date:date, id_medico:id_medico},{
            headers: {
                'user-token': localStorage.getItem("apiData")
                }
         }
        ).then(window.location.assign('http://localhost:3000/TurnosLista'))
    }

return (

    <div className= "PrimaryContainer">
        <h2>Turno</h2>
        <form onSubmit={create}>
        <label>Nombre</label>    
        <input type={"text"} value={nombre} onChange={(e)=> setNombre(e.target.value)}></input>
        <br></br>
        <label>Fecha</label>    
        <input type="datetime" value={date} onChange={(e)=> setDate(e.target.value)}></input>
        <br></br>
        <label>id medico</label>    
        <input type={"number"} value={id_medico} onChange={(e)=> setIdMedico(e.target.value)}></input>
        <br></br>
        <input type={"submit"}></input>
        </form>
     </div>
    )
}


export default Turno ;