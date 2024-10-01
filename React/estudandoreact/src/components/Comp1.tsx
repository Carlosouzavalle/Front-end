import Link from "next/link";

export default function Comp1() {
    const funcao = () => {
        return (
            <div className="flex bg-slate-800 text-white">
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        );
    };

    return (
        <div>
            {/* Função opcionalmente renderizada */}
            {/* {funcao()} */}

            <nav className="flex justify-between items-center bg-slate-800 text-white h-[200px]">
                <Link href="/">Home</Link>
                <Link
                    href={{
                        pathname: "/produtos/produtos",
                        query: {
                            nome: "Carlos",
                            curso: "React Next",
                        },
                    }}
                >
                    Produtos
                </Link>
                <Link href="/teste/teste">Teste</Link>
            </nav>
        </div>
    );
}

// Se não estiver usando a constante 'teste', você pode removê-la.
