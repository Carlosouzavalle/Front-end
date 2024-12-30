"use client"

import { useState, useEffect } from "react"


export default  function UseStates2() {
    // const [count, setCount] = useState(0)
    const  [imagem, setImagem] = useState()


    useEffect(() => {
        fetch("https://api.waifu.pics/sfw/megumin")
            .then((resp) => resp.json())
            .then((obj) => {
                setImagem(obj.url)
                console.log("Imagem carregada:", obj.url);
            })
    }, [])

        
    // useEffect(() => {
    //     console.log('this count is:', count)


    //     return () => {
    //         console.log('i am being cleaned up!')
    //     }

    // }, [count])


    return (
        <div>
            {/* <h1>Count: {count}</h1>
            <button className="border-black border-solid border-4 bg-slate-500 p-4" onClick={() => setCount(count + 1)}>+1</button>
            <button className="border-yellow-700 border-solid border-4 bg-slate-500 p-4" onClick={() => setCount(count - 1)}>-1</button> */}
        
                <img src={imagem} />
        
        </div>
    )
}




// O useEffect é um dos hooks fundamentais no React. Ele é usado para gerenciar efeitos colaterais em componentes funcionais. Um efeito colateral é qualquer operação que afeta algo fora do escopo imediato do componente, como:

// Fazer chamadas para APIs.
// Atualizar o título da página.
// Subscrever eventos (ex.: adicionar um listener de evento ao window).
// Manipular o DOM diretamente.