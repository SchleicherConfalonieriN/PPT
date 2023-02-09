import React from 'react'
import axios from "axios";
import {useState,useEffect} from 'react'


const URL ='http://localhost:8000/api/turno/register';
const URL4 ='http://localhost:8000/api/turno/date';
const URL1 = 'http://localhost:8000/api/medico_especialidad/'
const URL2 = 'http://localhost:8000/api/especialidad/'

const Turno = () => {

    const[especialidad, setEspecialidad] = useState([])
    useEffect (  () => {

        getEspecialidad()

    },[])

    const hcompleto = [
        {h:8},{h:9},{h:10},{h:11},{h:12},{h:13},{h:14},{h:15}]


const getEspecialidad = async () =>{

    const res = await axios.get(URL2, {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
   
    setEspecialidad(res.data);
}



    
    const [hora,setHora] = useState('')
    const [espe,setEspe] = useState('0')
    const [idi,setIdMedico] = useState('')
    const [turnoh, setTurnoH] = useState([0])
    useEffect (  () => {

        datefun()
    },[])

    const [date,setDate] = useState('')
    useEffect(() => {
        datefun(date)
    })

    

    
    const[medicos, setMedicos] = useState([])
    useEffect (  () => {

        getMedico()
    },[])

    const getMedico = async () =>{

        const res = await axios.get(URL1, {
            headers: {
            'user-token': localStorage.getItem("apiData")
            }
          }
        )
          console.log("estos son los medicos")
            console.log(res.data)
          setMedicos(res.data);
      }
    const create = async (e) =>{
        e.preventDefault()
        console.log(hora)
        axios.post(URL,{ Date:date, id_medico:idi, Hour:hora},{
            headers: {
                'user-token': localStorage.getItem("apiData")
                }
         }
        ).then(res => console.log(res))/*.then(window.location.assign('http://localhost:3000/TurnoLista'))*/
    }


    const datefun = async (e) =>{
     

        const res =  await axios.post(URL4, {Date:date, id_medico:idi},{
            headers: {
            'user-token': localStorage.getItem("apiData")
            }
          }
        )
        const pedidos = res.data 
        console.log(res.data)
        pedidos.forEach((elemento) => {
            console.log(elemento.Hour)
        })

        setTurnoH(hcompleto)
    }




return (

    <div className= "PrimaryContainer">
        <h2>Turno</h2>

        <form onSubmit={create}>
    <div>
    <h4>Selecccione una especialidad</h4>
    <select onChange={(e)=> setEspe(e.target.value)}>
    <option value="0">------------</option>
            {especialidad.map((s,key) =>
                <option value={s.Nombre}>{s.Nombre}</option>
            )
            }
    </select>
    </div>


  {espe !== "0" && 
    <div>
        <select  onChange={(e)=> {
            setIdMedico(e.target.value)
            console.log("ESTE ES EL ID SELECIONADO")
            console.log(idi)
            }
            }>
            <option>------------</option>
            {medicos.filter((es) => es.Nombre == espe).map((m,key) =>
                <option value={m.medico_id}>{m.nombre} {m.apellido}</option>
            )
            }
        </select>

        <label>Fecha</label>    
        <input type="date" value={date} onChange={(e)=> 
            {
            setDate(e.target.value)
            datefun(e.target.value)
            
            }}></input>
        <br></br>

        <select value={hora} onChange={(e) => {setHora(e.target.value)}}>
                <option>-----------</option>              
               {hcompleto.map((l,key) =>              
               
                <option value={l.h}>{l.h}</option>
               
                
               )
              }
            
        </select>



        <input type={"submit"}></input>
      
    
       

</div> 

}

     
        </form>
     
     
     </div>
    
    
    )
}


export default Turno ;