import React from 'react'
import axios from "axios";
import {useState} from 'react'
import {Link} from 'react-router-dom'
 const URL ='http://localhost:8000/api/user/login';

const Login = () =>{

    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('');
    const [tipo,SetTipo] = useState('');

    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{Email:email, Password:password})
        .then((res) => {     
            localStorage.setItem("apiData",res.data.token)
            localStorage.setItem("rol",res.data.rol)
      }).then(window.location.assign('http://localhost:3000/home'));
    }

return (

    <div className= "FormContainer" id = "Login">
        <h2>Login</h2>
        <form onSubmit={create}> 
        <input type={"text"} value={email} onChange={(e)=> SetEmail(e.target.value)} placeholder="Email"></input>
        <br></br>  
        <input type={"password"} value={password} onChange={(e)=> SetPassword(e.target.value)}placeholder="Password"></input>
        <br></br>
        <label>Tipo</label>
        <select id = "srol"  value={tipo} onChange={(e)=> SetTipo(e.target.value)}>
        <option value="1" >Paciente</option>
        <option value="2">Doctor</option>
        <option value="3">Administrador</option>
        </select>
        <br></br>
        <div className='Formbtn'>
        <button>Ingresar</button>
        <Link  to={"/Register"}><button>Registrarse</button></Link>
        </div>
        </form>
     </div>
    )
}


export default Login ;