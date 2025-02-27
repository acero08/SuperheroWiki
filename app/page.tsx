import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
//COMMAND NP PARA VER FILES
export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/superheros">Superheros</Link>
      <ProductCard />
    </main>
  );
}
