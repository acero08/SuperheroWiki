import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <section style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      {/* Left Side - Text */}
      <div style={{ flex: 1, textAlign: "left", paddingLeft: "50px" }}>
        <h1 style={{ fontSize: "5rem", margin: 0 }}>404</h1>
        <p style={{ fontSize: "2rem", margin: "10px 0" }}>Page Not Found</p>
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            color: "blue",
            textDecoration: "underline",
          }}
        >
          Go Back Home
        </Link>
      </div>

      {/* Right Side - Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "50px",
        }}
      >
        <Image
          src="/images/shocked.jpg"
          alt="Shocked face"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
