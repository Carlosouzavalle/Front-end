"use client"

import { useState } from "react"


export default  function UseStates2() {
    const [count, setCount] = useState(0)


    return (
        <div>
            <h1>Count: {count}</h1>
            <button className="border-yellow-700  border-solid border-4 bg-slate-500 p-4 mr-3" onClick={() => setCount(count + 1)}>+1</button>
            <button className="border-yellow-700 border-solid border-4 bg-slate-500 p-4" onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}