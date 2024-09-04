export default function page() {
    
    function anoAtual() {
        return new Date().getFullYear()
    }
    
    
    return (
        <div>
            <h1>Primeiro</h1>
            <div className="flex flex-col">
                <span> {1 + 1} </span>
                <span> {Math.random().toFixed(1)} </span>
                <span> {anoAtual()} </span>
            </div>
        </div>
    )
}


// Sim, no Next.js(especialmente na versão mais recente que usa o App Router introduzido no Next.js 13 +) 
// o sistema de navegação usa uma estrutura baseada em pastas e arquivos para definir as rotas, e esses arquivos 
// podem ser nomeados como page.tsx(ou page.js se estiver usando JavaScript em vez de TypeScript).

// As rotas são definidas por diretórios, e cada rota 
// precisa ter um arquivo page.tsx dentro de uma pasta específica.