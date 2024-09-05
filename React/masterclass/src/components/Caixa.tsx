export default function Caixa(props: any) {
    return (
        <div className="
            w-16 h-16 bg-red-500 rounded-md
            border-2 border-zinc-300
        ">
            <span>{props.texto}</span>
        </div>
    )
}