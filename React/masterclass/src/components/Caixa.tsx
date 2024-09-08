export default function Caixa(props: any) {
    return (
        <div className={`
            bg-red-500 rounded-md
            border-2 border-zinc-300 p-3
            flex justify-center items-center
            ${props.className ?? ''}
        
        `}>
            <span>{props.texto}</span>
        </div>
    )
}