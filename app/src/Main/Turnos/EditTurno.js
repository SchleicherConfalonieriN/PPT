import React from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {useState,useEffect} from 'react';


const URL = 'http://localhost:8000/api/turno/'

const EditTurno = () => {

    let {id} = useParams();
    


    const[date, setDate] = useState("") 
    const[hora, setHora] = useState("") 

    const[info, setInfo] = useState([])
    useEffect (  () => {

        getInfo()

    },[])

    const getInfo = async () => {
        const res = await axios.get(URL+id, {
            headers: {
            'user-token': localStorage.getItem("apiData")
            }
          }
        )
        
       
        setInfo(res.data) 
     
        setDate(res.data[0].Date)
        setHora(res.data[0].Hour)
        console.log("revision de data")
        console.log(date)
        console.log(hora)
    }
   
    const edit = async (e) =>{
       
        e.preventDefault()
       await axios.put(URL + id,{Date:date,Hour:hora},{
            headers: {
                'user-token': localStorage.getItem("apiData")}
             }).then((res) =>{console.log(res)})
             /*.then(window.location.assign('http://localhost:3000/EspecialidadesLista'));*/
          
    }

return(

    <div className='PrimaryContainer'>
        <h2>Editar dia y fecha de consulta medica</h2>
        
    <form onSubmit={edit}>
        <label>Dia</label>
        <input
            type="date"
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            
        />
        
        <label>Hora</label>
        <select value={hora} onChange={(e) => setHora(e.target.value)}>
    <option value={0}>--seleccione un horario--</option>
    <option value={8}>8</option>
    <option value={9}>9</option>
    <option value={10}>10</option>
    <option value={11}>11</option>
    <option value={12}>12</option>
    <option value={13}>13</option>
    <option value={14}>14</option>
        </select>
    <button type= "submit">Guardar Cambios</button>
    </form>

</div>
)
}

export default EditTurno;