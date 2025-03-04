import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav style={{ padding: "20px", background: "rgba(0, 0, 0, 0.3)" }}>
      {" "}
      {/* Ajusta la opacidad aquí */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "row", // Horizontal
          justifyContent: "center", // Centra los elementos horizontalmente
          alignItems: "center", // Centra los elementos verticalmente
          gap: "10px", // Espaciado entre los elementos
        }}
      >
        <li>
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/superheros"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            Superheros
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
