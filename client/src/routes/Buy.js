import Ticket from "./components/Ticket";
import React, { useState } from "react";
export default function Buy() {
  //get data from backend with info about each ticket

  //placeholder data
  const [data, setData] = React.useState([])
  /*   {
      imgSrc: "images/taylor.jpg",
      title: "Taylor Swift Tour",
      description: "Taylor Swift is coming to the Bay Area on 10/21! BUY NOW!",
      price: "2 bob coins",
      id: "0",
    },
    {
      imgSrc: "images/nft.jpg",
      title: "Joji Tour",
      description: "Joijiis coming to the Bay Area on 10/21! BUY NOW!",
      price: "4 bob coins",
      id: "3",
    },
    {
      imgSrc: "images/ticket.jpeg",
      title: "Billie Eilish Tour",
      description: "Billie is coming to the Bay Area on 10/21! BUY NOW!",
      price: "4 bob coins",
      id: "1",
    },
    {
      imgSrc: "images/ticket.jpeg",
      title: "Billie Eilish Tour",
      description: "Billi is coming to the Bay Area on 10/21! BUY NOW!",
      price: "4 bob coins",
      id: "2",
    },
  ]); */

  React.useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
    

        const response = await fetch('http://localhost:9000/api/tickets/getData')
        const data = await response.json()
        //console.log(this.state)
        setData(data)
        
        //console.log(data)
    }
    fetchData()
  
    // call the function
    //fetchData()
      // make sure to catch any error
      //.catch(console.error);
  }, [])
  console.log(data)
  

  return (
    <div className="flex-row  flex-wrap bg-gray-800">
      {data.map((ticket) => (
        <Ticket
          imgSrc={ticket.imgSrc}
          title={ticket.title}
          price={ticket.price}
          description={ticket.description}
          id={ticket.id}
        />
      ))}
    </div>
  );
}
