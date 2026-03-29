import { useState } from "react"


function LoginForm(){

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")


    function handleSubmit(event){
        event.preventDefault()
        // alert("hi")
        alert(`Email: ${email}, Phone:${password} `)

    console.log("hello, I am controlled form")

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="formcontainer" >
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={e =>setEmail(e.target.value)}/>
            </div>

            <div>
                <label>Password:</label>
                <input type="password" value={password}   onChange={e =>setPassword(e.target.value)}/>
            </div>



            <button type="submit" className="submit">Login</button>

            </div>

          
          
        </form>
        </>
    )
}

export default LoginForm