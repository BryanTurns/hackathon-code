const Home = () => {
  return (
    <div>
      <div className="float-left px-6" >
        <img src="images/image.png"/>
        <h1>Buy</h1>
        <p> DESCRIPTION</p>
      </div>
      <div className="float-left px-6">
        <img src={("images/image.png")}/>
        <h1>Sell</h1>
        <p> DESCRIPTION</p>
      </div>
      <div className="float-left px-6">
        <img src={("images/image.png")}/>
        <h1>Transfer</h1>
        <p> DESCRIPTION</p>
      </div>
    </div>
  );
};

export default Home;
