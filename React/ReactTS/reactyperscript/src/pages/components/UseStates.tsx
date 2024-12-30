// "use client";

// import { useState } from "react"

// const UseStates = () => {
//     const [count, setCount] = useState(0)

//     const IncrementCount = () => {
//         //setCount(count + 1) tbm funciona
//         setCount((prevState) => prevState + 1)
//         /* quando a gente quer alterar o state baseado no valor anterior  */
//     }


//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={IncrementCount}>Increment</button>
//         </div>
//     )
// }

// export default UseStates



// usando o hook useState dentro de um componente que, por padrão, 
// está sendo renderizado no lado do servidor (Server Component). Hooks como useState 
// só podem ser usados em Client Components, que são renderizados no lado do cliente. 
// Para resolver isso, você precisa marcar 
// o componente como um Client Component, usando a diretiva "use client" no início do arquivo.
// vc n pode por um hook dentro de uma função, if pq vai mudar o numero de vezes que ele vai ser chamado



// Mude ao longo do tempo:
// Por exemplo: Contadores, toggles (on/off), inputs de formulário.
// Acesse e atualize o valor no componente:
// O React re-renderiza o componente automaticamente sempre que o estado muda.
// Afete a interface do usuário:
// Por exemplo, esconder ou mostrar algo com base no estado.




'use client'

import {useState} from "react"

export default function UseState() {
    const [soma, setSoma] = useState(() => calcular())

    function calcular() {
         return { value: 2 + 2 }
    }


    return (    
        <div>
            <h1>Resultado: {soma.value}</h1>
            <button onClick={() => setSoma(calcular())}>
                Recalcular
            </button>
        </div>
    )
}