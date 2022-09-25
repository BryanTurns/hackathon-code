import React, { useState } from "react";
const Join = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  console.log(formData);

  console.log(formData);

  function handleEvent(event) {
    const { name, value } = event.target;

    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  }

  async function postInfoToBack(e) {
    console.log("posted to back");
    console.log(formData);
    e.preventDefault();

    const res = await fetch("http://localhost:9000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    /* fetch("http://localhost:9000/sendToBack",
            {
                method: 'POST',
                headers: { "Content-Type":'application/json'},
                body: JSON.stringify(formData)
            }).then(console.log('done')) */
  }

  return (
    <div className="bg-[#46464D]">
      <form className="mx-auto w-min text-3xl h-screen  w-8/12 text-center">
        <h1 className="text-6xl font-md py-10">Join NFTickets</h1>
        <div className="py-3 inline-block px-10">
          <label className="mx-auto block pb-2">Username</label>
          <input
            className="inputs block mx-auto"
            onChange={handleEvent}
            name="userName"
            id="userName"
            value={formData.userName}
          ></input>
        </div>

        <div className="py-3 inline-block px-10">
          <label className="mx-auto block pb-2">Password:</label>

          <input
            type="password"
            className="inputs block mx-auto "
            onChange={handleEvent}
            name="password"
            id="password"
            value={formData.password}
          ></input>
        </div>
        <br />
        <div className="">
          <button
            className="mx-auto my-10 text-3xl border-solid rounded-2xl border-2 p-2 border-gray-500 hover:text-black hover:bg-gray-300 transition ease-out duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;
