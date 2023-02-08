import React from 'react'
import axios from "axios";
import {useState} from 'react'


const URL ='http://localhost:8000/api/especialidad/register';

const Register = () => {
    const [nombre,SetNombre] = useState('')

    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{Nombre:nombre},{
            headers: {
                'user-token': localStorage.getItem("apiData")
                }
        }
        ).then(window.location.assign('http://localhost:3000/EspecialidadesLista'));
    }

return (

    <div className= "FormContainerEdit" >
        <h3>Registrar nueva especialidad</h3>
        <form onSubmit={create}>
        <label>Nombre</label>    
        <input type={"text"} value={nombre} onChange={(e)=> SetNombre(e.target.value)}></input>
        <br></br>
        <input type={"submit"}></input>
        </form>
     </div>
    )
}


export default Register ;