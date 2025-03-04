import LigasCard from "@/components/LigasCard";
import Navbar from "@/components/Navbar";

export default function Homepage() {
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
          backgroundImage: "url(/images/Wallpaper.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>SUPERWIKI</h1>
        <div style={{ marginTop: "20px" }}>
          {" "}
          <LigasCard />
        </div>
      </main>
    </>
  );
}
