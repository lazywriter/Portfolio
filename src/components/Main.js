import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main style={{ textAlign: "center", marginTop: "10vw" }}>
      <h1
        class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        style={{}}
      >
        Hi,I'm
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          style={{ marginLeft: "15px" }}
        >
          Yash Thakur
        </span>{" "}
      </h1>
      <p
        class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        style={{ marginTop: "10px" }}
      >
        I'm a Web 3.0 Developer
      </p>
      <button
        style={{ margin: "1vw" }}
        type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <Link to="/about-me">About Me</Link>{" "}
      </button>
    </main>
  );
}

export default Main;
