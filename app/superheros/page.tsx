import React from "react";

interface Superheros {
  id: number;
  nombre: string;
  edad: number;
  identidad_secreta: string;
  poderes: string[];
}

const Superherospage = async () => {
  const res = await fetch("http://localhost:3001/api/superhero/");
  const superheros: Superheros[] = await res.json();

  return (
    <>
      <h1>Superheros</h1>
      <ul>
        {superheros.map((superhero) => (
          <li key={superhero.id}>
            {superhero.nombre}
            {superhero.edad}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Superherospage;
