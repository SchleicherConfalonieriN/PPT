import React from 'react'
import axios from "axios";
import {useState} from 'react'

const URL ='http://localhost:8000/api/user/register';

const Register = () => {
   // const [dni,SetDni] = useState('')
    const [nombre,SetNombre] = useState('')
    const [apellido,SetApellido] = useState('')
   // const [rol,SetRol] = useState('1')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('');
    const [type,SetType] = useState('');  
    const rol =  JSON.parse(localStorage.getItem("rol"))

    const create = async (e) =>{
        e.preventDefault()
        if (type === 0 && rol === 3){
            alert("Introducir tipo de usuario a agregar");}
        else{

        if(type === 0){
        axios.post(URL,{Name:nombre,LastName: apellido,Email:email, Password:password,Type:1})
        .then(window.location.assign('http://localhost:3000/'));
        }else{
            axios.post(URL,{Name:nombre,LastName: apellido,Email:email, Password:password,Type:type})
            .then(window.location.assign('http://localhost:3000/Home'));

        }
            
        }

    }

return (

    <div className= "PrimaryContainer">
        <h2>Register</h2>
        <form onSubmit={create}>
        
        <label>Nombre</label>    
        <input type={"text"} value={nombre} onChange={(e)=> SetNombre(e.target.value)}></input>
        <br></br>
        <label>Apellido</label>    
        <input type={"text"} value={apellido} onChange={(e)=> SetApellido(e.target.value)}></input>
        <br></br>
        <label>Email</label>    
        <input type={"text"} value={email} onChange={(e)=> SetEmail(e.target.value)}></input>
        <br></br>
        <label>Password</label>    
        <input type={"text"} value={password} onChange={(e)=> SetPassword(e.target.value)}></input>
        <br></br>
        <label>Tipo</label>    

        {rol === 3 && (
        
        <select onChange={(e)=> SetType(e.target.value)} >
            <option value={0}>------------------</option>
            <option value={1}>Paciente</option>
            <option value={2}>Medico</option>
            <option value={3}>Administrador</option>
        </select>
        )}
        <br></br>
        <input type={"submit"}></input>
        </form>
     </div>
    )
}


export default Register ;