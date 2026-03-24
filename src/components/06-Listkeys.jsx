                          //correct way with key pas

import React from "react";

function Listkeys(){

    const students = ["kunta", "mamata", "anjali", "pranali","parmi"]

    return(

        <div>
            <h2>students list</h2>
            <ul>
             {students.map((student,index)=>(                   
                 <li key={index}>{student}</li>
             ))}
                {/* <li>kunta</li>
                <li>kunta</li>
                <li>kunta</li>
                <li>kunta</li>
                <li>kunta</li>
                <li>kunta</li>
                <li>kunta</li> */}
            </ul>
        </div>
    )
}

export default Listkeys;



