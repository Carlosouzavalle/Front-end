// tocar uma musica em javascript 

const audio = new Audio('AQUELASCOISAS-JoãoGomeseTarcísiodoAcordeon.mp3')

document.getElementById('play').addEventListener('click', () => {
    audio.play()
})