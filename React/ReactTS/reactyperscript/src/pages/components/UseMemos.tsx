// 'use client'

import { useMemo } from "react"

// import { useState, useMemo } from "react";

// const UseMemos = () => {
//     const [search, setSearch] = useState("");
//     const [items] = useState(["React", "Vue", "Angular", "Svelte", "Ember"]);

//     const filteredItems = useMemo(() => {
//         console.log("Filtrando...");
//         return items.filter((item) =>
//             item.toLowerCase().includes(search.toLowerCase())
//         );
//     }, [search, items]);

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Buscar"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//             />
//             <ul>
//                 {filteredItems.map((item) => (
//                     <li key={item}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UseMemos;


export default function UseMemos() {

    const soma = useMemo(() => {
        console.log('calculando')
        return 2 + 2
    }, [])





    return (
        <div>
            {soma}
        </div>
    )
}