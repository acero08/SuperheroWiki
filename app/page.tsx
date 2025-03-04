import Liga from "@/components/ligas";
import Navbar from "@/components/Navbar"; // Ajusta la ruta si es necesario

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: "url(/images/Wallpaper.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          position: "relative",
        }}
      >
        <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>SUPERWIKI</h1>
      </main>
      <Liga />
    </>
  );
}
