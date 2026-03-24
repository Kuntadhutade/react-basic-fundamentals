

                   //Using id

function Listkey() {

    const students =[
        {id:1, name: "kunta"},
         {id:2, name: "parmi"},
          {id:3, name: "prakash"},
        ]
  return (
    <div>
      <h2>students list</h2>
      <ul>
       {students.map((student)=>(
        <li key={student.id}>{student.name}</li>
       ))}
      </ul>
    </div>
  );
}
export default Listkey;
