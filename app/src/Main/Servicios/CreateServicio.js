import React from 'react'
import axios from "axios";
import {useState} from 'react'


const URL ='http://localhost:8000/api/servicio/register';

const Register = () => {
    const [nombre,setNombre] = useState('')
    const [precio,setPrecio] = useState('')
    const [descripcion,setDescripcion] = useState('')

    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{nombre:nombre, precio:precio, descripcion:descripcion},{
            headers: {
                'user-token': localStorage.getItem("apiData")
                }
         }
        ).then(window.location.assign('http://localhost:3000/ServiciosLista'))
    }

return (

    <div className= "PrimaryContainer">
        <h2>Register</h2>
        <form onSubmit={create}>
        <label>Nombre</label>    
        <input type={"text"} value={nombre} onChange={(e)=> setNombre(e.target.value)}></input>
        <br></br>
        <label>Precio</label>    
        <input type={"number"} value={precio} onChange={(e)=> setPrecio(e.target.value)}></input>
        <br></br>
        <label>Descripcion</label>    
        <input type={"text"} value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}></input>
        <br></br>
        <input type={"submit"}></input>
        </form>
     </div>
    )
}


export default Register ;