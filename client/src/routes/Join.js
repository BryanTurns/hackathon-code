import React, { useState } from "react"
const Join=()=>{

    const [formData,setFormData] = useState({
        userName: "",
        password: "",

    })
    console.log(formData)

    function handleEvent(event){
        
        const { name, value }= event.target
        
        setFormData(() => ({
            ...formData,
            [name]: value
         }))
    }

        async function postInfoToBack(e){
            console.log("posted to back")
            console.log(formData)
            e.preventDefault()

             const res = await fetch("http://localhost:9000/api/users",
            {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(formData)
            }) 
            

             /* fetch("http://localhost:9000/sendToBack",
            {
                method: 'POST',
                headers: { "Content-Type":'application/json'},
                body: JSON.stringify(formData)
            }).then(console.log('done')) */
        }
        
        
        
    

    return(
        <div>
            <form onSubmit={postInfoToBack}>
                <label>Username 
                <input
                    className='inputs'             
                    onChange={handleEvent}
                    name="userName"
                    id="userName"
                    value={formData.userName}
                ></input></label>
                <br/>
                <label>Password: 
                <input
                    type="password"
                    className='inputs'             
                    onChange={handleEvent}
                    name="password"
                    id="password"
                    value={formData.password}
                ></input></label>
                <br/>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Join