"use client"; // Adicione isso no topo do arquivo

import { useState, useEffect } from "react";

export default function UseEffectss() {
//   const [value, setValue] = useState("initial value");
//   const [checked, setChecked] = useState(false);

const [data, setData] = useState(null)


useEffect(() => {
    const fecthData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json()
        setData(result)
    }

    fecthData()
}, [])


//   useEffect(() => {
//     console.log("alooo");
//   }, [value]);

  return (
    <div>
      {/* <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      /> */}

    <div>{data ? JSON.stringify(data) : 'Carregando...'}</div>




    </div>
  );
}
