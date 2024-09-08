// import Link from "next/link"
import { IconHexagonNumber1, IconHexagonNumber2, IconHexagonNumber3 } from "@tabler/icons-react"
import MenuItem from "@/components/template/MenuItem"

export default function MenuPrincipal() {




    //perceba que com uma simples função agora temos o mesmo estilo para todos os elementos
    // function menuItem(texto: string, link: string) {
    //     return (
    //         <Link href={link} className="hover:bg-blue-500 p-2">
    //             {texto}
    //         </Link>
    //     )
    // }



    return (
        <aside className="w-80 bg-zinc-900 " >
            <nav className="flex flex-col p-5 gap-1">
                <MenuItem link="/primeiro">
                    <IconHexagonNumber1 />
                    <span>Primeiro Componente</span>
                </MenuItem>
                <MenuItem link="/flexbox" >
                <IconHexagonNumber2 />
                    <span>FlexBox</span>
                </MenuItem>
                <MenuItem link="/pagina">
                    <IconHexagonNumber3 />
                    <span>Componente pagina</span>
                </MenuItem>

 



                {/* {menuItem('Primeiro Componente', './primeiro')}
                {menuItem('Flexbox', './flexbox')}
                {menuItem('Componente Pagina', './pagina')} */}

            </nav>
        </aside>
    )
}