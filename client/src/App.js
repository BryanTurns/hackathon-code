import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-300">
      <nav className="px-10 font-bold text-center" >
        <Link to="/join">Join</Link>
        <Link to="/" className="float-left">Blockchain Ticket Market</Link>
        <Link className="px-10" to="/buy">
          <button className='rounded-full border-black'>Buy</button>
          </Link>
        <Link to="/sell">Sell</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
