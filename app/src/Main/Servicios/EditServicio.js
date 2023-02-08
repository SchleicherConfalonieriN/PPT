import React from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {useState,useEffect} from 'react';


const URL = 'http://localhost:8000/api/servicio/'



const EditServicio = () => {

    let {id} = useParams();
    const [nombre,setNombre] = ("")
    const [precio,setPrecio] = ("")  
    
    const[info,setInfo]  = useState([])
    useEffect (  () => {

        getInfo()

    },[])

  
    const getInfo = async () => {
        const res = await axios.get(URL + id, {
            headers: {
            'user-token': localStorage.getItem("apiData")
            }
          }
        )
          console.log("Esta es la info")
          setInfo(res.data)
          console.log(info)
        }
 
        const edit = async (e) =>{
       
            e.preventDefault()
           await axios.put(URL + id,{Nombre:nombre},{
                headers: {
                    'user-token': localStorage.getItem("apiData")}
                 }).then(window.location.assign('http://localhost:3000/EspecialidadesLista'));;
              
        }

return(
    <div>
        <h2>Editar Serivio</h2>
    <form onSubmit={edit}>
        <label>Nombre</label>
        <input
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            type='text'
        />
         <label>Precio</label>
        <input
            value={precio}
            onChange={(e)=> setNombre(e.target.value)}
            type='text'
        />
           <label>Descripcion</label>
        <input
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            type='text'
        />
        
    <button type= "submit">Editar</button>
    </form>
    </div>
)
}

export default EditServicio;