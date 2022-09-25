import React, { useEffect, useState } from "react";
import Ticket from "./components/Ticket";

const Account = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:9000/api/tickets/getConcerts"
      );
      const data = await response.json();
      //console.log(this.state)
      setData(data);
      console.log(data);

      //console.log(data)
    };
    fetchData();

    // call the function
    //fetchData()
    // make sure to catch any error
    //.catch(console.error);
  }, []);
  console.log(data.title);

  return (
    <div>
      <Ticket
        imgSrc={data.imgSrc}
        title={data.title}
        price={data.price}
        description={data.description}
        id={data.id}
      />
    </div>
  );
};

export default Account;
