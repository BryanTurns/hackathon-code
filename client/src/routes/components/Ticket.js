import React from "react";
import { Link } from "react-router-dom";

export default function Ticket(props) {
  return (
    <div className="w-3/12 inline-block m-5 text-center bg-gray-700 rounded-3xl">
      <h1 className="font-bold py-2">{props.title}</h1>
      <img src={props.imgSrc} className="mx-auto w-9/12 " />

      <h1>{props.price}</h1>
      <h1>{props.description}</h1>
      {/* replace props.title with nft ID  */}
      <button className="border-black bg-gray-200 my-3 inline-block rounded-lg p-3 text-3xl border-2 border-solid  text-black  hover:text-white hover:bg-gray-600 transition ease-out duration-300 onclick:text-blue">
        Purchase
      </button>
    </div>
  );
}
