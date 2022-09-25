import React from "react"


export default function Ticket(props){
    const selectedTicket =(nftID)=>{
        return nftID
    }
    return(
        <div className="flex-row">
            <img src={props.imgSrc}/>
            <h1>{props.title}</h1>
            <h1>{props.price}</h1>
            <h1>{props.description}</h1>
            {/* replace props.title with nft ID  */}
            <button onClick={()=>selectedTicket(props.title)} className="border-dotted">Purchase </button>
        </div>
    )
}
 