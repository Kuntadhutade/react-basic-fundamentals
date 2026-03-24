import React, { useState } from "react";

function ConditionalRender() {
//   const isLoggedIn = true;

const [visible, setVisible] = useState(true)



  return (
    <>
      <h2>Conditional Render</h2>
      {/* {isLoggedIn ? <h2>hello</h2> : <h2>Bye</h2>} */}

      <button  onClick={()=>setVisible(!visible)}>
        {visible ? "hide": "show"}
        </button>
        {visible && <p>This is text can be toggled on and off</p>}
    </>
  );
}

export default ConditionalRender;
