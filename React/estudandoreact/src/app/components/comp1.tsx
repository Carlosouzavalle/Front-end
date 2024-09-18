import Card from "./Card"

export default function Comp1() {

    function Funcao() {
        return (
            <div className="flex justify-between items-center bg-slate-800 text-white h-[200px]">
                <div className="subtitulo">Home</div>
                <div>Contact</div>
                <div style={{ color: 'red', backgroundColor: 'bisque' }}> Galery </div>

                {/* h-[200px]  para uma medida especifica*/}
            </div>
        )
    }


    // const funcao = () => {
    //     return (
    //         <div className="flex bg-slate-800 text-white ">
    //             <div>4</div>
    //             <div>5</div>
    //             <div>6</div>
    //         </div>
    //     )
    // }


    function calcDesconto(v:number, d:number) {
        return v-d
    }

    function calcDesconto2(v:number, d:number) {
        return v-(d/2)
    }

    return (
        <div>
            <Funcao />
            {/* {funcao()} */}

            <div style={teste}>
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
            </div>

            <div className="flex justify-center gap-4">
                <Card produto={'mouse'} valor={50} desconto={2} funcao={calcDesconto}/>
                <Card produto={'teclado'} valor={500} desconto={3} funcao={calcDesconto}/>
                <Card produto={'monitor'} valor={5000} desconto={10} funcao={calcDesconto2}/>
            </div>

        </div>
    )
}


const teste = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'blue'
}