import Cabecalho from "@/components/template/Cabecalho";
import MenuPrincipal from "./MenuPrincipal";
import Caixa from "../Caixa";


export default function Pagina() {
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho />
            <div className="flex flex-grow">
                <MenuPrincipal />
                <main>
                    <Caixa />
                </main>
            </div>
        </div>
    )
}