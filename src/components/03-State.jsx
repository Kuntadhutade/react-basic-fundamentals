import { useState } from "react";



function State(){

 const [text, settext] = useState("I am nice person")

  const btn1 = ()=>{
    settext("I am a bad person")
  }

  const btn2 =()=>{
    settext("I am a good person")
  }

    return(
        <>
        <p className="text">{text}</p>
      <div className="btncontainer">
      <button className="button" onClick={btn1}>Button 1</button>
      <button className="button" onClick={btn2} >Button 2</button>
      </div>

        </>
    )
}




export default State;
