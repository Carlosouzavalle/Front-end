'use client'

import { useEffect, useState, useRef } from "react"

function useRefer() {
    const [name, setName] = useState('')
    //const [renders, setRenders] = useState(1)
    
    const renders = useRef(0)


    useEffect(() => {
        renders.current = renders.current + 1
    })



    
    return (
        <div>
            <input className="text-yellow-400" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello!! My Name is {name} </p>
            <p>Renders: {renders.current} </p>
        </div>
    )
}

export default useRefer


// Segundo a documentação do React, existem algumas boas finalidades para o uso de refs:
// Gerenciamento de foco, seleção de texto, ou reprodução de mídia.
// Engatilhar animações imperativas.
// Integração com bibliotecas DOM de terceiros.