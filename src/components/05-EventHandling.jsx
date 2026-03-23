import React from "react"
import { useState } from "react"
import './EventHandling.css'




function EventHandling() {

    const[text, setText] = useState("Hello")

    const[color, setColor] = useState("black")

    
    function updateText(){
        setText("you are clicked me")
        setColor("red");
        
    }


 const[Count, setCount] = useState(0)

  function increaseCount(){
    setCount(Count+1)
  }

    return(
        <div className="eventcontainer">
            <h2 className="eventheading">Event Handling</h2>
            <p className="eventpara" style={{color: color}} >{text}</p>
            <button className="btn" onClick={updateText} >Change Text</button>
            <button  className="btn" onClick={()=>{alert("I am an inline handler")}}>button 2 </button>
            <button className="btn" onClick={()=>{console.log("hello event handler")}}>button 3</button>

 
            <h2 className="count" style={{fontSize:"30px"}}>count is: {Count}</h2>
            <button className="increasebtn" onClick={increaseCount}>Increase</button>


            
        </div>




    )
}
export default EventHandling