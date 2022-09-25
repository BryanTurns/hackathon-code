import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-black text-white text-2xl">
      <nav className=" font-bold text-center h-14   w-full ">
        <Link
          to="/"
          className="h-full float-left inline-block px-5 pt-2 hover:bg-gray-600 transition ease-out duration-250"
        >
          Blockchain Ticket Market
        </Link>
        <Link
          to="/join"
          className="h-full inline-block pt-2 px-5 hover:bg-gray-600 transition ease-out duration-250"
        >
          Join
        </Link>
        <Link
          className="h-full inline-block pt-2 px-5 hover:bg-gray-600 transition ease-out duration-250"
          to="/buy"
        >
          <button classname="rounded-full border-black">Buy</button>
        </Link>
        <Link
          to="/sell"
          className="h-full inline-block pt-2 px-5 hover:bg-gray-600 transition ease-out duration-250"
        >
          Sell
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
