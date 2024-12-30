// // O useMemo é um hook do React que serve para memorizar o resultado de uma computação cara 
// // (ou seja, uma operação pesada) e evitar que ela seja recalculada desnecessariamente

// Funções custosas:
// Use quando você tem cálculos intensivos (ex.: processar uma grande lista ou realizar cálculos matemáticos complexos).
// Evitar recomputação desnecessária:
// Quando o cálculo depende de valores que nem sempre mudam, mas o componente ainda assim re-renderiza frequentemente.
// Melhorar a performance em listas:
// Quando você precisa filtrar, mapear ou reduzir uma lista de dados frequentemente.
// Prevenir re-renderizações de objetos ou arrays:
// Se um objeto ou array precisa ser usado como prop em um componente filho, o useMemo pode evitar que ele seja recriado e cause re-renders desnecessários.






// 'use client'

// import { useState, useMemo } from "react";


// function ExpensiveCalculation(num: number) {
//     console.log("Executando...")
//     return num * 1000
// }

// export default function UseMemo2() {
//     const [count, setCount] = useState(0);
//     const [value, setValue] = useState(1);

//     const result = useMemo(() => ExpensiveCalculation(value), [value]);

//     return (
//         <div>
//             <h1>Resultado: {result}</h1>
//             <button onClick={() => setCount(count + 1)}>Incrementar Count ({count})</button>
//             <input
//                 type="number"
//                 value={value}
//                 onChange={(e) => setValue(parseInt(e.target.value))}
//             />
//         </div>
//     );
// }
