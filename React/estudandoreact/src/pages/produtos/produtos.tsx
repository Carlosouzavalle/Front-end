import Card from "@/components/Card"
import Comp1 from "@/components/Comp1"
import '@/app/globals.css'; 

const produtos=[
    {
        produto:'Mouse',
        valor: 49.9,
        desconto: 0,
        disponivel: true
    },
    {
        produto:'Teclado',
        valor: 69.9,
        desconto: 0,
        disponivel: true
    },
    {
        produto:'Monitor',
        valor: 1149.9,
        desconto: 0,
        disponivel: true
    },
    {
        produto:'CPU',
        valor: 749.9,
        desconto: 200,
        disponivel: true
    },
    {
        produto:'Caixa de Som',
        valor: 149.9,
        desconto: 50,
        disponivel: true
    },
    {
        produto:'Microfone',
        valor: 249.9,
        desconto: 0,
        disponivel: false
    }  
]

export default function Produtos() {

    function calcDesconto(v:number, d:number) {
        return v-d
    }

    function calcDesconto2(v:number, d:number) {
        return v-(d/2)
    }


    return (
        <div>

            <Comp1 />

            <div className="flex justify-center gap-4">
                {/* <Card produto={'mouse'} valor={50} desconto={2} funcao={calcDesconto}/>
                <Card produto={'teclado'} valor={500} desconto={3} funcao={calcDesconto}/>
                <Card produto={'monitor'} valor={5000} desconto={0} funcao={calcDesconto2}/> */}


                {
                    produtos.map((e:any) => {
                        if(e.disponivel) {
                            return (
                                <div>
                                        <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesconto}/>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}