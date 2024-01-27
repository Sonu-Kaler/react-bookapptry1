import React from "react";
import style from "./style.css"
import Homepage from "./Components/Sectiontwo";
import Sectionone from "./Components/Sectionone";
import Sectiontwo from "./Components/Sectiontwo"
import Navbar from "./Components/Navbar";

const App =()=>{
    return(
        <div>
        <Navbar />
        <Sectionone />
        <Sectiontwo />
        </div>
    )
}

export default App;