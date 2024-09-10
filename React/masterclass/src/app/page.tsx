import Pagina from "@/components/template/Pagina";
import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      {/* <div className="
         bg-gradient-to-r from-black t0 bg-zinc-800 min-h-screen
     ">
        <h2 className="font-black">Masterclass Next</h2>
        <nav className="flex flex-col">
          <Link href="/primeiro">Primeiro Componente</Link>
          <Link href="/flexbox">Flexbox</Link>
          <Link href="/pagina">Componente Pagina</Link>
        </nav>
      </div> */}

      <div className="flex flex-col items-center justify-center w-full h-96">
        <IconDashboard size={100} stroke={1} className="text-zinc-500"/>
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-black">Olá Usuário</h1>
            <p className="text-lg text-zinc-400">Seja bem-vindo</p>
        </div>
        <div>
          <Link href="./primeiro" className="bg-blue-500 rounded-md">Entrar</Link>
        </div>
      </div>
    </div>
  );
}