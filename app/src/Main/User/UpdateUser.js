import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useState} from 'react';


const URL = 'http://localhost:8000/api/user/'

const EditUser = () => {


    


     // const [dni,SetDni] = useState('')
     const [nombre,setNombre] = useState('')
     const [apellido,SetApellido] = useState('')
    // const [rol,SetRol] = useState('1')
     const [email,SetEmail] = useState('')
     const [password,SetPassword] = useState('');
     const rol =  JSON.parse(localStorage.getItem("rol"))
   
    const edit = async (e) =>{
       
        e.preventDefault()
       await axios.put(URL,{Name:nombre,LastName: apellido,Email:email, Password:password,Type:rol},{
            headers: {
                'user-token': localStorage.getItem("apiData")}
             }).then((response) => {console.log(response); });
          
    }

return(

    <div className='PrimaryContainer'>
        <h2>Editar user</h2>
        
    <form onSubmit={edit}>
        <label>Nombre</label>
        <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type='text'/>
        <label>Apellido</label>    
        <input type={"text"} value={apellido} onChange={(e)=> SetApellido(e.target.value)}></input>
        <br></br>
        <label>Email</label>    
        <input type={"text"} value={email} onChange={(e)=> SetEmail(e.target.value)}></input>
        <br></br>
        <label>Password</label>    
        <input type={"text"} value={password} onChange={(e)=> SetPassword(e.target.value)}></input>
        <br></br>  
       
 
        
    <button type= "submit">Edit</button>
    </form>

    <Link to={`/home`}><button><h4>Home</h4></button></Link>
</div>
)
}

export default EditUser;