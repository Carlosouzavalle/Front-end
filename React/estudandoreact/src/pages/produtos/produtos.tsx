
import Comp1 from "@/pages/components/Comp1";
import '@/app/globals.css'; 
import { useSearchParams } from 'next/navigation'; // useSearchParams para capturar query params

const produtos = [
    {
        id: 1,
        produto: 'Mouse',
        valor: 49.9,
        desconto: 0,
        disponivel: true
    },
    {
        id: 2,
        produto: 'Teclado',
        valor: 69.9,
        desconto: 0,
        disponivel: true
    },
    {
        id: 3,
        produto: 'Monitor',
        valor: 1149.9,
        desconto: 0,
        disponivel: true
    },
    {
        id: 4,
        produto: 'CPU',
        valor: 749.9,
        desconto: 200,
        disponivel: true
    },
    {
        id: 5,
        produto: 'Caixa de Som',
        valor: 149.9,
        desconto: 50,
        disponivel: true
    },
    {
        id: 6,
        produto: 'Microfone',
        valor: 249.9,
        desconto: 0,
        disponivel: false
    }  
];

function calcDesconto(v: number, d: number) {
    return v - d;
}

function calcDesconto2(v: number, d: number) {
    return v - (d / 2);
}

export default function Produtos() {
    // Usando useSearchParams para capturar os parâmetros da query string
    const searchParams = useSearchParams();

    // Usar searchParams.get() pode retornar 'null', então fornecemos um valor padrão usando '??'
    const nome = searchParams?.get('nome') ?? 'Sem nome';  // Usa 'Sem nome' como fallback
    const curso = searchParams?.get('curso') ?? 'Sem curso'; // Usa 'Sem curso' como fallback

    // Verifica se os parâmetros foram capturados corretamente
    console.log("Nome:", nome);  // Deve exibir "Carlos" ou "Sem nome"
    console.log("Curso:", curso); // Deve exibir "React Next" ou "Sem curso"

    return (
        <div>
            <Comp1 />

            <div className="flex justify-center gap-4">
                {
                    produtos.map((e: any) => {
                        if (e.disponivel) {
                            return (
                                <div key={e.id}>
                                    <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesconto} />
                                </div>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
}
