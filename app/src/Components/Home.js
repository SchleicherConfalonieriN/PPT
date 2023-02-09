import React from 'react'

const Home = () => {
    
    const Hsession = async (id) => {
        window.location.assign('http://localhost:3000/Home');
     }



return (

    <div id= "bt2">
        
        <button onClick={()=>Hsession()}>Home</button>  
    </div>
    )
}


export default Home;