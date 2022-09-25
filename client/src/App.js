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
      <div className="bg-gray-900 text-white text-2xl ">
        <nav className=" font-bold  h-20 border-gray-500 border-b-4 border-double w-full ">
          <Link
            to="/"
            className="h-full  inline-block pl-5 pr-32 pt-5 hover:bg-gray-600 transition ease-out duration-250"
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
            <button className="rounded-full border-black">Buy</button>
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
      <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
export default App;
