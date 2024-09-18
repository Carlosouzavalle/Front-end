interface Cardprops {
    produto: string,
    valor: number,
    desconto: number, 
    funcao: any
}

export default function Card(props: Cardprops) {
    return (
        <div className="flex flex-col border border-red-600 rounded-sm p-1">
            <div>Produto: {props.produto}</div>
            <div>Valor: R${props.funcao(props.valor, props.desconto)}</div>
        </div>
    )
}