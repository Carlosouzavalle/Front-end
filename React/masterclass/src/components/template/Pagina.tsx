import Cabecalho from "@/components/template/Cabecalho";
import MenuPrincipal from "./MenuPrincipal";
import Caixa from "../Caixa";
import Rodape from "./Rodape";


export default function Pagina(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho />

            <div className="flex flex-grow">
                <MenuPrincipal />

                <div className="flex flex-col flex-1">
                    <main className="p-7 flex-1">
                        {props.children}
                    </main>
                    <Rodape />
                </div>

            </div>
        </div>
    )
}