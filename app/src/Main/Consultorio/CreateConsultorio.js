import React from 'react'
import axios from "axios";
import {useState} from 'react'


const URL ='http://localhost:8000/api/consultorio/register';

const Register = () => {
    const [numero,setNumero] = useState('')

    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{Numero:numero},{
            headers: {
                'user-token': localStorage.getItem("apiData")
                }
         }
        ).then(window.location.assign('http://localhost:3000/ConsultorioLista'))
    }

return (

    <div className= "PrimaryContainer">
        <h2>Register</h2>
        <form onSubmit={create}>
        <label>Numero</label>    
        <input type={"number"} value={numero} onChange={(e)=> setNumero(e.target.value)}></input>
        <br></br>
        <input type={"submit"}></input>
        </form>
     </div>
    )
}


export default Register ;