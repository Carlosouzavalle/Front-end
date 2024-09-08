import Link from "next/link";

export default function MenuItem(props: any) {
    return (
        <Link href={props.link} className="
        flex items-center gap-1
        hover:bg-blue-500 p-2
        
        
        
        
        ">
            {props.children}
        </Link>
    )
}

/*
     {props.children}  children é uma propriedade especial e ele representa os elementos
     filhos que foram passados pra seu componente a vantagem é que podemos passar qualquer coisa
     inclusive icones




*/