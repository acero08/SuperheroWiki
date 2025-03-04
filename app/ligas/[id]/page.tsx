"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Superhero {
  nombre: string;
  edad: number;
  identidad_secreta: string;
  poderes: string[];
  afiliacion: string;
  ciudad: string;
}

interface Liga {
  _id: string;
  nombre: string;
  ubicacion: string;
  fecha_de_fundacion: string;
  base_secreta: string;
  estado: string;
  superheroes: Superhero[];
}

const LigaPage = () => {
  const params = useParams();
  const id = params.id as string;
  const [liga, setLiga] = useState<Liga | null>(null);
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [loading, setLoading] = useState(true);
  const [fechaFormateada, setFechaFormateada] = useState<string>("");

  useEffect(() => {
    if (id) {
      const fetchLiga = async () => {
        try {
          // Obtener información de la liga
          const resLiga = await fetch(`http://localhost:3001/ligas/${id}`);
          if (!resLiga.ok) {
            throw new Error(`Error HTTP! estado: ${resLiga.status}`);
          }
          const dataLiga: Liga = await resLiga.json();
          setLiga(dataLiga);
          const fecha = new Date(dataLiga.fecha_de_fundacion);
          setFechaFormateada(
            isNaN(fecha.getTime())
              ? "Fecha no válida"
              : fecha.toLocaleDateString()
          );

          // Obtener superhéroes de la liga
          const resSuperheroes = await fetch(
            `http://localhost:3001/ligas/${id}/superheroes`
          );
          if (!resSuperheroes.ok) {
            throw new Error(`Error HTTP! estado: ${resSuperheroes.status}`);
          }
          const dataSuperheroes: Superhero[] = await resSuperheroes.json();
          setSuperheroes(dataSuperheroes);
        } catch (error) {
          console.error("Error obteniendo la liga o los superhéroes:", error);
          setLiga(null);
        } finally {
          setLoading(false);
        }
      };

      fetchLiga();
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundImage: "url(/images/Ligas.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          padding: "20px",
        }}
      >
        {loading ? (
          <p>Cargando...</p>
        ) : !liga ? (
          <p>No se encontró la liga</p>
        ) : (
          <div style={{ textAlign: "center", maxWidth: "800px" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              {liga.nombre}
            </h1>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "2rem",
                borderRadius: "10px",
                margin: "1rem",
              }}
            >
              <p>
                <strong>Ubicación:</strong> {liga?.ubicacion || "No disponible"}
              </p>
              <p>
                <strong>Fecha de Fundación:</strong>{" "}
                {fechaFormateada || "No disponible"}
              </p>
              <p>
                <strong>Base Secreta:</strong>{" "}
                {liga?.base_secreta || "No disponible"}
              </p>
              <p>
                <strong>Estado:</strong> {liga?.estado || "No disponible"}
              </p>

              <h2 style={{ fontSize: "2rem", margin: "1.5rem 0" }}>
                Superhéroes Miembros
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                {(superheroes.length > 0 ? superheroes : []).map(
                  (superhero, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        padding: "1rem",
                        borderRadius: "8px",
                      }}
                    >
                      <h3 style={{ color: "gold", marginBottom: "0.5rem" }}>
                        {superhero.nombre}
                      </h3>
                      <p>
                        <em>{superhero.identidad_secreta}</em>
                      </p>
                      <p>Edad: {superhero.edad}</p>
                      <p>Ciudad: {superhero.ciudad}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default LigaPage;
