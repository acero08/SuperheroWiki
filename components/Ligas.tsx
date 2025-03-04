import React from "react";

interface Liga {
  _id: string; // ID de la liga
  nombre: string;
  fundacion: Date;
  ubicacion: string;
  nivel_amenaza: string;
}

const Liga = async () => {
  const res = await fetch("http://localhost:3001/api/liga/superhero");
  const ligas: Liga[] = await res.json();

  return (
    <>
      <h1>Ligas de Superhéroes</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {ligas.map((liga) => (
          <div
            key={liga._id}
            style={{
              border: "2px solid black",
              borderRadius: "8px",
              padding: "20px",
              width: "200px",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.1)", // Fondo transparente
            }}
          >
            <h2>{liga.nombre}</h2>
            <p>Fundación: {new Date(liga.fundacion).toLocaleDateString()}</p>
            <p>Ubicación: {liga.ubicacion}</p>
            <p>Nivel de Amenaza: {liga.nivel_amenaza}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Liga;
