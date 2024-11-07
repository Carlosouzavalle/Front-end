"use client"

import { useState, useEffect } from "react"
interface DemoProps {

}

export default  function UseStates2({}: DemoProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('this count is:', count)


        return () => {
            console.log('i am being cleaned up!')
        }

    }, [count])



    return (
        <div>
            <h1>Count: {count}</h1>
            <button className="border-black border-solid border-4 bg-slate-500 p-4" onClick={() => setCount(count + 1)}>+1</button>
            <button className="border-yellow-700 border-solid border-4 bg-slate-500 p-4" onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}