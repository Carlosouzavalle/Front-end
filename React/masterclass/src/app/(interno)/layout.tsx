import Pagina from "@/components/template/Pagina";

export default function layout( {children}: any) {
    return (
        <div>
            <Pagina>
                {children}
            </Pagina>
        </div>
    )
}