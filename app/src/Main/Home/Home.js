import Administrador from "./Administrador";
import Paciente from "./Paciente";
import Medico from "./Medico";


const Home = () => {

const rol =  JSON.parse(localStorage.getItem("rol"))

    return(
        <div>
            {rol === 1 && (<Paciente/>)}
            {rol === 2 && (<Medico/>)} 
            {rol === 3 && (<Administrador/>)}
        </div>
    )
}

export default Home;