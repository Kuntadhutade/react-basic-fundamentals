

import { useState } from "react";


function Event(){

    const[name,setName] = useState("")

    function handleChange(event){
        setName(event.target.value)
    }



    return(


        <>
        
        <h2>{name}</h2>

        <input className="inputtext" type="text"  onChange={handleChange}/>
        </>
    )
}



export default Event