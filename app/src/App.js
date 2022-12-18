import React from "react"
import "./App.css"

import BarraS from "./Components/BarraS"
import Barra from "./Components/Barra"
import Home from "./Main/Home/Home";






function App() {
  const rol =  JSON.parse(localStorage.getItem("rol"))
  return (
    <div className="App">  
       {rol  && (<BarraS/> )}
            
          <div id="c">
            {rol  && (<Barra/> )}
            <Home/> 
          </div>    
    </div>
  );
}

export default App;