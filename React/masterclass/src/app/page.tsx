import Link from "next/link";


export default function Home() {
  return (
     <div>
        <h2>Masterclass Next</h2>
        <nav>
            <Link href="/primeiro">Primeiro Componente</Link>
        </nav>
     </div>
  );
}