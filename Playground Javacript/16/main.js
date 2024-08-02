function isPalidrome(palavra) {

    const cleanPalavra = palavra.replace(/\s+/g, '').toLowerCase()

    const revertPalavra = cleanPalavra.split('').reverse().join('')

    return cleanPalavra === revertPalavra
}

console.log(isPalidrome("lol")); // true
console.log(isPalidrome("carlos")); // false





/*
    replace(/\s+/g, '')
/\s+/: Esta é a parte da expressão regular.

\s: Corresponde a qualquer caractere de espaço em branco, incluindo espaços, tabulações (\t), quebras de linha (\n), etc.
+: Corresponde a um ou mais dos caracteres anteriores. Isso significa que a expressão corresponderá a uma sequência de um ou mais espaços em branco contíguos.
/g: Esta é a flag global.

g: Significa "global" e faz com que a busca continue ao longo de toda a string, em vez de parar na primeira correspondência encontrada.
replace(/\s+/g, ''): Este é o método replace aplicado a uma string.

replace: Método da string que substitui correspondências da expressão regular pelo valor especificado.
'': A string vazia que substituirá as correspondências encontradas. Neste caso, estamos substituindo todas as sequências de espaços em branco por nada, efetivamente removendo-as da string.



*/