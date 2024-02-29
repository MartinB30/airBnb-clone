import React from "react";
import Hero from "./Hero";


export default function Navbar() {
  return (
    <div>
      <nav>
        <img
          src="./images/airbnb-logo.png"
          alt="logo from air bnb"
          className="airbnb-logo"
        />
      </nav>
      <Hero />
    </div>
  );
}
