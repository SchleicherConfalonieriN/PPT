import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom';
import Register from './CreateConsultorio';

const URL = 'http://localhost:8000/api/consultorio/';




const ConsultorioLista =() =>{

    const[consultorio, setConsultorio] = useState([])
    useEffect (  () => {

        getconsultorio()

    },[])

const getconsultorio = async () =>{

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


const deleteconsultorio = async (id) => {
    await axios.delete(URL+id,{
        headers: {
        'user-token': localStorage.getItem("apiData")
        }
      }
    
    )
    getconsultorio()
 }


return (
<div>
    <div className="ListContainer">
<h4>Listado de consultorio</h4>
<tr className='trtitle' id="con">
<th>Numero</th>
<th></th>
<th></th>
</tr>

    {consultorio.map((mov,index) =>
    <tr>
    <th className='Content' key={index}>{mov.Numero}</th>
    <th><Link to={`./edit/${mov.id}`}>Edit</Link></th>
    <th><button onClick={()=>deleteconsultorio(mov.id)}>X</button></th>
    </tr>
    )
    }
<Register/>



      </div>  
      </div>
)

}
export default ConsultorioLista;