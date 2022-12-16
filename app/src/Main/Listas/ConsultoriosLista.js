import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom';
const URL = 'http://localhost:8000/api/consultorio/';




const ConsultoriosLista =() =>{

    const[consultorio, setConsultorio] = useState([])
    const[numero, setNumero] = useState("")
    useEffect (  () => {

        getConsultorio()

    },[])

const getConsultorio = async () =>{

    const res = await axios.get(URL, {
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    )
    console.log(localStorage.getItem("apiData"));
    console.log(res.data);
    setConsultorio(res.data);
}

const create = async (e) =>{
    e.preventDefault()
    axios.post(URL+"register",{Numero:numero},{
        headers: {
            'user-token': localStorage.getItem("apiData")
            }
    }
    ).then(window.location.assign('http://localhost:3000/ConsultorioesLista'));
}




const deleteConsultorio = async (id) => {
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    )
    getConsultorio()
 }


return (

    <div className="ListContainer">
<h4>Listado de Consultorioes</h4>
<tr className='ListTitle'>
<th>numero</th>
</tr>

    {consultorio.map((mov,index) =>
    <tr>
    <th className='Content' key={index}>{mov.numero}</th>
    <th><Link to={`/edit/${mov.id}`}><h4>Edit</h4></Link></th>
    <th><button onClick={()=>deleteConsultorio(mov.id)}>X</button></th>
    </tr>
)}
 <div className= "PrimaryContainer">
        <h2>Register</h2>
        <form onSubmit={create}>
        <label>numero</label>    
        <input type={"number"} value={numero} onChange={(e)=> setNumero(e.target.value)}></input>
        <br></br>
        <input type={"submit"}></input>
        </form>
     </div>



      </div>  
)

}
export default ConsultoriosLista;