import React from "react";
import { Link } from "react-router-dom";

export default function Ticket(props) {
  return (
    <div className="w-3/12 inline-block m-5 text-center">
      <h1 className="font-bold py-2">{props.title}</h1>
      <img src={props.imgSrc} className="mx-auto" />

      <h1>{props.price}</h1>
      <h1>{props.description}</h1>
      {/* replace props.title with nft ID  */}
      <div className="border-black my-3 inline-block rounded-lg p-1 text-3xl border-2 border-solid hover:text-black hover:bg-gray-300 transition ease-out duration-300">
        <button>Purchase</button>
      </div>
    </div>
  );
}
