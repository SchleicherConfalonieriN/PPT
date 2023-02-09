import React from 'react'
import axios from "axios";
import {useState} from 'react'
import {Link} from 'react-router-dom'

const URL ='http://localhost:8000/api/user/register';
const URL1 = 'http://localhost:8000/api/medico/register'
const Register = () => {
   // const [dni,SetDni] = useState('')
    const [nombre,SetNombre] = useState('')
    const [apellido,SetApellido] = useState('')
   // const [rol,SetRol] = useState('1')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('');
    const [dni,SetDni] = useState('');
    const [type,SetType] = useState('');  
    const rol =  JSON.parse(localStorage.getItem("rol"))

    const create = async (e) =>{
        e.preventDefault()
        if(type == 2){
            medico()
            }


        if(type == 0){
        await axios.post(URL,{Name:nombre,LastName:apellido, Email:email,dni:dni, Password:password,Type:1})
        .then(window.location.assign('http://localhost:3000/'));
        }


        if(type == 3){
        await  axios.post(URL,{Name:nombre,LastName: apellido,Email:email,dni:dni, Password:password,Type:type})
            .then(window.location.assign('http://localhost:3000/Home'));

        }
      
    async function medico () {
        await axios.post(URL,
            {Name:nombre,LastName: apellido,Type:type,Email:email,dni:dni, Password:password}
            ).then((res) => console.log(res)).then(axios.post(URL1,
                {nombre:nombre,apellido: apellido, precio:5000,dni:dni, Password:password,Type:2})
        ).then((res) => console.log(res)).then(window.location.assign('http://localhost:3000/Home')); 
    }
        

    }

return (

    <div className= "FormContainer">
        <h2>Registro</h2>
        <form onSubmit={create}>
        
        <label>Nombre </label>  <br></br>  
        <input  type={"text"} value={nombre} onChange={(e)=> SetNombre(e.target.value)}></input>
        <br></br>
        <label>Apellido  </label>  <br></br>  
        <input type={"text"} value={apellido} onChange={(e)=> SetApellido(e.target.value)}></input>
        <br></br>
        <label>Email    </label>  <br></br>  
        <input type={"text"} value={email} onChange={(e)=> SetEmail(e.target.value)}></input>
        <br></br>
        <label>Dni    </label>  <br></br>  
        <input type={"number"} value={dni} onChange={(e)=> SetDni(e.target.value)}></input>
        <br></br>
        <label>Password  </label><br></br>    
        <input type={"text"} value={password} onChange={(e)=> SetPassword(e.target.value)}></input>
        <br></br>
        {rol === 3 && ( 
        <label>Tipo</label> 
        )}
        {rol === 3 && (
        
        <select onChange={(e)=> SetType(e.target.value)} >
            <option value={0}>------------------</option>
            <option value={2}>Medico</option>
            <option value={3}>Administrador</option>
        </select>
        )}
        <br></br>
        <input type={"submit"}></input>
        <Link  to={"/"}>Cancelar</Link>
        </form>
     </div>
    )
}


export default Register ;