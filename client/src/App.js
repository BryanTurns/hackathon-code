import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { GiTicket } from "react-icons/gi";

function App() {
  return (
    <div className="bg-gray-800">
      <div className=" text-white text-center mx-auto  w-8/12">
        <GiTicket className="inline-block mx-10 mb-20 " size={100} />
        <h1 className=" text-9xl text-center inline-block ">NFTickets</h1>
      </div>
      <div className="bg-[#7B7B7B] text-white text-2xl ">
        <nav className=" font-bold text-center h-20 border-black border-b-4 border-double w-full ">
          <Link
            to="/"
            className="h-full float-left inline-block px-5 pt-5 hover:bg-gray-600 transition ease-out duration-250"
          >
            Blockchain Ticket Market
          </Link>
          <Link
            to="/join"
            className="h-full inline-block pt-5 px-10 hover:bg-gray-600 transition ease-out duration-250"
          >
            Join
          </Link>
          <Link
            className="h-full inline-block pt-5 px-10 hover:bg-gray-600 transition ease-out duration-250"
            to="/buy"
          >
            <button classname="rounded-full border-black">Buy</button>
          </Link>
          <Link
            to="/sell"
            className="h-full inline-block pt-5 px-10 hover:bg-gray-600 transition ease-out duration-250"
          >
            Sell
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
export default App;
