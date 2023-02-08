import React from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {useState,useEffect} from 'react';


const URL = 'http://localhost:8000/api/servicio/'



const EdiServicio = () => {

    let {id} = useParams();
    

    const[info, setInfo] = useState([])
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
   
       
        setInfo(res.data) 
     
      
        setNombre(res.data[0].nombre)
        setDes(res.data[0].descripcion)
        setPrecio(res.data[0].precio)
    
    }

   
    const[nombre, setNombre] = useState("") 
    const[precio, setPrecio] = useState("") 
    const[des, setDes] = useState("") 
 
    
    const edit = async (e) =>{
       
        e.preventDefault()
        await axios.put(URL + id, {nombre:nombre, precio:precio, descripcion:des}
            ,{headers: {
            'user-token': localStorage.getItem("apiData")
            }}
        ).then(window.location.assign('http://localhost:3000/ServiciosLista'));
    }
        

    

 





  
          
        

return(

    <div >
        <h2>Editar Medico</h2>
  
    <form className='FormContainerEdit' onSubmit={edit} >


    

    <label>Nombre</label>      
        <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type='text'/>
        <br></br>
        <label>Precio</label>         
        <input type={"text"} value={precio} onChange={(e)=> setPrecio(e.target.value)}></input>
        <br></br>
        <label>Descripcion</label>           
        <input type={"text"} value={des} onChange={(e)=> setDes(e.target.value)}></input>
        <br></br>
 
       <button><h4>Guardar Cambios</h4></button>
    </form>
    </div>

)
}

export default EdiServicio;