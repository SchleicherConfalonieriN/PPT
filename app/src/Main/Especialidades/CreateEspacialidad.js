import React from 'react'
import axios from "axios";
import {useState} from 'react'

const URL ='http://localhost:8000/api/especialidad/register';

const Register = () => {
    const [nombre,SetNombre] = useState('')

    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{Nombre:nombre})
        .then(window.location.assign('http://localhost:3000/'));
    }

return (

    <div className= "PrimaryContainer">
        <h2>Register</h2>
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