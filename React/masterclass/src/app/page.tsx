import Link from "next/link";


export default function Home() {
  return (
     <div className="
         bg-gradient-to-r from-black t0 bg-zinc-800 min-h-screen
     ">
        <h2 className="font-black">Masterclass Next</h2>
        <nav className="flex flex-col">
            <Link href="/primeiro">Primeiro Componente</Link>
            <Link href="/flexbox">Flexbox</Link>
        </nav>
     </div>
  );
}