
// variaveis de loggin
let inputName = document.getElementById('inputName')
let startButton = document.getElementById('startButton')
let welcomMensage = document.getElementById('welcomMensage')
let loginImg = document.getElementById('loginImg')
let ErrorloginImg = document.querySelector('.ErrorloginImg')


//variaveis de inicio
let IntroductionHistory = document.createElement('div')
let History = document.createElement('p')
let nextButton = document.createElement('button')


// loggin e algumas funcionalidades
startButton.addEventListener('click', function () {
    let = Getname = inputName.value

    //variaveis de estrutura
    let buttonContinue = document.createElement('button')
    let contentDiv = document.querySelector('.login')


    if (Getname) {
        welcomMensage.textContent = 'Welcome, ' + Getname + ' To Rosalia Word!!'
        loginImg.style.display = 'block'
        ErrorloginImg.style.display = 'none'
        startButton.style.display = 'none'
        inputName.style.display = 'none'


        // propriedades do button
        buttonContinue.style.width = '150px'
        buttonContinue.style.height = '50px'
        buttonContinue.style.fontSize = '20px'
        buttonContinue.style.display = 'block'
        buttonContinue.textContent = 'Continue'
        buttonContinue.classList.add('large-button')

        contentDiv.appendChild(buttonContinue)

    } else {
        welcomMensage.textContent = 'Please type your name!'
        loginImg.style.display = 'none'
        ErrorloginImg.style.display = 'block'
    }


    //iniciando o game
    buttonContinue.addEventListener('click', function () {
        console.log('alooo')
        buttonContinue.style.display = 'none'
        startButton.style.display = 'none'
        loginImg.style.display = 'none'
        welcomMensage.style.display = 'none'

        //container da historia do game
        IntroductionHistory.style.width = '100vw'
        IntroductionHistory.style.height = '100vh'
        IntroductionHistory.style.backgroundColor = 'bisque'
        IntroductionHistory.classList.add('IntroductionHistory')
        contentDiv.appendChild(IntroductionHistory)

        contentDiv.classList.add('contentDiv')
        // referente ao paragrafo que esta dentro do container
        IntroductionHistory.appendChild(History)
        History.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        History.classList.add('History_class')

        //button next container da historia
        nextButton.style.width = '100px'
        nextButton.style.height = '50px'
        nextButton.style.fontSize = '20px'
        nextButton.textContent = 'Next'
        IntroductionHistory.appendChild(nextButton)
        nextButton.classList.add('nextButton')
    })
})

inputName.addEventListener('mouseenter', function () {
    ErrorloginImg.style.display = 'none'
})