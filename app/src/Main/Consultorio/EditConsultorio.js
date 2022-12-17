import React from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {useState} from 'react';


const URL = 'http://localhost:8000/api/consultorio/'

const EditConsultorio = () => {

    let {id} = useParams();
    


    const[numero, setNumero] = useState("") 
   
    const edit = async (e) =>{
       
        e.preventDefault()
       await axios.put(URL + id,{id:id,Numero:numero},{
            headers: {
                'user-token': localStorage.getItem("apiData")}
             }).then((response) => {console.log(response); });
          
    }

return(

    <div className='PrimaryContainer'>
        <h2>Editar consultorio</h2>
        
    <form onSubmit={edit}>
        <label>Numero</label>
        <input
            value={numero}
            onChange={(e)=> setNumero(e.target.value)}
            type='number'
        />
        
    <button type= "submit">Edit</button>
    </form>

    <Link to={`/home`}><button><h4>Home</h4></button></Link>
</div>
)
}

export default EditConsultorio;