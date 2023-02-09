import React from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {useState,useEffect} from 'react';


const URL = 'http://localhost:8000/api/medico/'
const URL1 = 'http://localhost:8000/api/especialidad/opciones/'
const URL2 = 'http://localhost:8000/api/especialidad/medico/'
const URL3 = 'http://localhost:8000/api/medico/info/'
const URL4 = 'http://localhost:8000/api/medico_especialidad/'
const URL5 = 'http://localhost:8000/api/medico_especialidad/register'
const URL6 = 'http://localhost:8000/api/consultorio/'


const EditMedico = () => {

    let {id} = useParams();
    
    const[opciones, setOpciones] = useState([])
    useEffect (  () => {

        getOpciones()

    },[])
    const[conn,setConn] = useState("")
    const[con,setCon] = useState([])
    const[cons,setCons] = useState([])
    
    useEffect (  () => {

        getOne()

    },[])


    useEffect (  () => {

        getCons()

    },[])

    const[info, setInfo] = useState([])
    useEffect (  () => {

        getInfo()

    },[])

    const[especialidades, setEspecialidades] = useState([])
    useEffect (  () => {

        getEspecialidades()

    },[])

    const getInfo = async () => {
        const res = await axios.get(URL3 + id, {
            headers: {
            'user-token': localStorage.getItem("apiData")
            }
          }
        )
   
       
        setInfo(res.data) 
     
        setMedico(res.data[0].id)
        setNombre(res.data[0].nombre)
        setApellido(res.data[0].apellido)
        setEmail(res.data[0].email)
    }

    const getCons = async () => {
        const res = await axios.get(URL6, {
            headers: {
            'user-token': localStorage.getItem("apiData")
            }
          }
        )
        setCons(res.data)
    
  
      
    }

    const getOne = async () => {
        const res = await axios.get(URL6+id, {
            headers: {
            'user-token': localStorage.getItem("apiData")
            }
          }
        )
 
        setCon(res.data)
    }
    
    
    
    const getEspecialidades = async  () =>{  
        const res = await axios.get(URL2 + id, {
            headers: {
            'user-token': localStorage.getItem("apiData")
            }
          }
        )
        setEspecialidades(res.data) 
        
    }

    const getOpciones = async () =>{

        const res = await axios.get(URL1 + id, {
            headers: {
            'user-token': localStorage.getItem("apiData")
            }
          }
        )
   console.log("Estas son las opciones : ")
   console.log(res.data)
        setOpciones(res.data)
        
    }



    const[espe, setEspe] = useState("")   
    const[medico, setMedico] = useState("")    
    const[nombre, setNombre] = useState("") 
    const[apellido, setApellido] = useState("")
    const[email,setEmail] = useState("")
    
    const edit = async (e) =>{
       
        e.preventDefault()
        editmedico() 

        if(espe !==0) {   
        registerrelacion();
        window.location.assign('http://localhost:3000/MedicosLista/edit/'+id)
        }

        if(conn !==0){
        cambiarcon() 
        eliminarcon()
        window.location.assign('http://localhost:3000/MedicosLista/edit/'+id)
        }
    }
    const cambiarcon = async () =>{
        await axios.put(URL6 + conn,{id_medico:id},{
            headers: {
                'user-token': localStorage.getItem("apiData")}
             }).then((response) => {
                console.log("PODRIA SER IGUAL:")
                console.log(response); })
    }
    const eliminarcon = async () =>{
        await axios.put(URL6 + con.id,{id_medico:null},{
            headers: {
                'user-token': localStorage.getItem("apiData")}
             }).then((response) => {
                console.log("PODRIA SER IGUAL:")
                console.log(response); })
    }

    const editmedico = async () =>{
        await axios.put(URL + id,{nombre:nombre,apellido:apellido,email:email,precio:5000},{
            headers: {
                'user-token': localStorage.getItem("apiData")}
             })/*.then((response) => {
                console.log("este esel update:")
                console.log(response); })*/

    }

    const registerrelacion = async (e) =>{
    
       /* console.log("esta es la relacion revisando : ")
        console.log(espe)
        console.log(medico)*/
        await  axios.post(URL5,{id_medico:medico,id_especialidad:espe},{
            headers: {
                'user-token': localStorage.getItem("apiData")}
             })/*.then((response) => {
                console.log("este es el register:")
                console.log(response); })*/

    }




    const deleteEspecialidad = async (id) => {
        await axios.delete(URL4+id,{
            headers: {
            'user-token': localStorage.getItem("apiData")
             }
            } 
            )/*.then((res) => console.log(res)) */
    
            getEspecialidades()
        } 
          
        

return(

    <div >
        <h2>Editar Medico</h2>
        <div className='Edit'>
    <div id="datoseditcion">
   <h4>Las especialaidades asignadas son:</h4>
   <br></br>
        {especialidades.map((e,index) => 
            <tr>{e.Nombre}  <button onClick={()=>deleteEspecialidad(e.id)}>X</button></tr>  
            )
       }       
    

    <tr>
        
        
         <h4>El consultorio asignado es el: {con.Numero}</h4>
     

       
    </tr>    
    </div>
    <div>
    <form className='FormContainerEdit' onSubmit={edit} >


    
    <div >

    <label>Nombre</label>      
        <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type='text'/>
        <br></br>
        <label>Apellido</label>         
        <input type={"text"} value={apellido} onChange={(e)=> setApellido(e.target.value)}></input>
        <br></br>
        <label>Email</label>           
        <input type={"text"} value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        <br></br>
      
        <label>Especialidades</label>           
       <select value={espe} onChange={(e) => {setEspe(e.target.value)}}>
        <option value={0}>Nueva Especialidad</option>
        {opciones.filter((e) => e.id_medico !== id).map((e,key) => 
        <option value = {e.id}>{e.Nombre}</option>
        )}
       </select>

       <br></br>
       <label>Consultorio</label>          
       <select value={conn} onChange={(e) => {setConn(e.target.value)}}>
        <option value={0}>-Nuevo Consultorio-</option>
        {cons.filter((e) => e.id_medico !== con.id_medico).map((h,key) => 
        <option value = {h.id}>{h.Numero}</option>
        )}
       </select>
      
      
     



       </div>
       <button><h4>Guardar Cambios</h4></button>
    </form>
    </div>
    </div>
</div>
)
}

export default EditMedico;