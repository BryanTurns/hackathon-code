import React from "react";
import { Link } from "react-router-dom";

export default function Ticket(props) {
    async function purchase(obj){
    var obj2 = {
        ...obj,
        userName: localStorage.getItem('userName')
    }
    console.log(obj2)
        //obj2['userName']=localStorage.getItem('userName')
        //const newObj=[...obj,localStorage.gettItem("userName")]
   /*      const newObj2 = new Object()
            newObj2['userName']=localStorage.getItem("userName")
        obj.push(newObj2) */
        

    const res = await fetch("http://localhost:9000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj2)}
)};
    


  return (
    <div className="w-3/12 inline-block m-5 text-center">
      <h1 className="font-bold py-2">{props.title}</h1>
      <img src={props.imgSrc} className="mx-auto" />
      <h1>{props.price}</h1>
      <h1>{props.description}</h1>
      {/* replace props.title with nft ID  */}
      <div className="border-black my-3 inline-block rounded-lg p-1 text-3xl border-2 border-solid hover:text-black hover:bg-gray-300 transition ease-out duration-300">
        <button onClick={()=>purchase(props)}>Purchase</button>
      </div>
    </div>
  );
}
