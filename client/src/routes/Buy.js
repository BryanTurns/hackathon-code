import Ticket from "./components/Ticket"
import React, {useState} from 'react'
export  default function Buy(){
    //get data from backend with info about each ticket

    //placeholder data
    const [data,setData] = React.useState([
        {
            imgSrc:"images/ticket.jpeg",
            title:"Taylor Swift Tour",
            description: "Taylor Swift is coming to the Bay Area on 10/21! BUY NOW!",
            price: "2 bob coins"
        },
        {
            imgSrc:"images/ticket.jpeg",
            title:"Billie Eilish Tour",
            description: "Billi is coming to the Bay Area on 10/21! BUY NOW!",
            price: "4 bob coins"
        }
        
    ])
    

   
    return(
        <div>
        {data.map(ticket=>(
        <Ticket
        imgSrc={ticket.imgSrc}
        title={ticket.title}
        price={ticket.price}
        description={ticket.description}
        />
        ))}
        </div>
    )
}
