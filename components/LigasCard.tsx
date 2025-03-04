"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Liga {
  _id: string;
  nombre: string;
}

const LigasCard = () => {
  const [ligas, setLigas] = useState<Liga[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLigas = async () => {
      try {
        const res = await fetch("http://localhost:3001/ligas");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Liga[] = await res.json();
        setLigas(data);
      } catch (error) {
        console.error("Error al obtener las ligas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLigas();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {ligas.map((liga) => (
        <Link
          key={liga._id}
          href={`/ligas/${liga._id}`} // Esta ruta está correcta
          passHref
          legacyBehavior
        >
          <div
            style={{
              padding: "10px",
              border: "1px solid white",
              borderRadius: "10px",
              width: "150px",
              cursor: "pointer",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: "background-color 0.3s ease",
            }}
          >
            <h3>{liga.nombre}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LigasCard;
