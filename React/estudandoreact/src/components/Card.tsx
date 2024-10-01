interface Cardprops {
    produto: string,
    valor: number,
    desconto: number,
    funcao: any
}

export default function Card(props: Cardprops) {
    return (
        <div className={`flex justify-center flex-col border-4 ${props.desconto > 0 ? 'border-red-600' : 'border-blue-700'}  rounded-sm p-1`}>
            <div>Produto: {props.produto}</div>
            <div>Valor: {props.valor}</div>

            {/* Renderização condicional */}
            {/* o que vai acontecer aqui é que ele simplismente vai executar e pronto
            porem se você quiser apresentar uma mensagem
            
            */}

            {props.desconto > 0 && (
                <div>
                    <div>Produto: {props.produto}</div>
                    <div>Valor: R${props.funcao(props.valor, props.desconto)}
                    </div>

                </div>
            )}




            {/* {props.desconto > 0 ? (
            <div>
                <div>Produto: {props.produto}</div>
                <div>Valor: R${props.funcao(props.valor, props.desconto)}</div>
            </div>
        ): "Sua msg aqui"} */}
         </div>
    )
}