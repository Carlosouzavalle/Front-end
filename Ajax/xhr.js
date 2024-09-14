//ajax faz requisições http em segundo plano
//readyState: ele representa o estado atual da sua requisição


// var xhr = new XMLHttpRequest()
// var documento

// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         // alert("deu certo")
//         // console.log(xhr)
//         documento = xhr.response
//         console.log(documento)
//     }
// }
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1")
// xhr.send()


var xhr = new XMLHttpRequest()
var documento = 
    {
        "userId": 200,
        "id": 12,
        "title": "ultimas noticiais",
        "body": "noticia quente"
}

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        console.log(xhr)
    }
}

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")

xhr.send(documento)