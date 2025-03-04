import LigasCard from "@/components/LigasCard";
import Navbar from "@/components/Navbar"; // Ajusta la ruta si es necesario

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          display: "flex",
          flexDirection: "column", // Cambia a columna para apilar elementos verticalmente
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Usa minHeight en lugar de height para permitir que el contenido crezca
          backgroundImage: "url(/images/Wallpaper.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          padding: "20px", // Añade un poco de padding para evitar que el contenido toque los bordes
        }}
      >
        <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>SUPERWIKI</h1>
        <div style={{ marginTop: "20px" }}>
          {" "}
          {/* Espacio entre el título y las tarjetas */}
          <LigasCard />
        </div>
      </main>
    </>
  );
}
