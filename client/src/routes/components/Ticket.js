import React from "react"


export default function Ticket(props){
    
    async function purchase(nftID){
    const res = await fetch("http://localhost:9000/api/users/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nftID),
      });
    }

    
    return(
        <div className="flex-row">
            <img src={props.imgSrc}/>
            <h1>{props.title}</h1>
            <h1>{props.price}</h1>
            <h1>{props.description}</h1>
            {/* replace props.title with nft ID  */}
            <button onClick={()=>purchase(props.title)} className="border-dotted">Purchase </button>
        </div>
    )
}
 