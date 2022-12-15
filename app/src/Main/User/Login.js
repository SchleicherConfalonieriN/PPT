import React from 'react'
import axios from "axios";
import {useState} from 'react'

 const URL ='http://localhost:8000/api/user/login';

const Login = () =>{

    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('');


    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{Email:email, Password:password})
        .then((res) => {     
            localStorage.setItem("apiData",JSON.stringify(res.data))
      }).then(window.location.assign('http://localhost:3000/home'));
    }

return (

    <div className= "PrimaryContainer">
        <h2>Login</h2>
        <form onSubmit={create}>
        <label>Email</label>    
        <input type={"text"} value={email} onChange={(e)=> SetEmail(e.target.value)}></input>
        <br></br>
        <label>Password</label>    
        <input type={"password"} value={password} onChange={(e)=> SetPassword(e.target.value)}></input>
        <br></br>
        <input type={"submit"}></input>
        </form>
     </div>
    )
}


export default Login ;