import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1>Nav Bar</h1>
      <ul>
        {" "}
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/superheros">Superheros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
