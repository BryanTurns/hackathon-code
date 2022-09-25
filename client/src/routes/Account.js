import React, { useEffect, useState} from 'react'

const Account = () => {
  const [data,setData]=useState([])

  React.useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
    

        const response = await fetch('http://localhost:9000/api/tickets/getConcerts')
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
  console.log(data.title)

  return (
    <div>
      <img src={data.imgSrc}/>
     Info: {data.title}
     <br/>
     Description: {data.description}
     <br/>
     Price: {data.price}

    </div>
  );
};

export default Account;
