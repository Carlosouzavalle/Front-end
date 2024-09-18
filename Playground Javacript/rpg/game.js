// variaveis de loggin
let inputName = document.getElementById('inputName')
let startButton = document.getElementById('startButton')
let welcomMensage = document.getElementById('welcomMensage')
let loginImg = document.getElementById('loginImg')
let ErrorloginImg = document.querySelector('.ErrorloginImg')
let container = document.querySelector('.container')


//variaveis importantes
let IntroductionHistory = document.createElement('div')
let History = document.createElement('p')
let nextButton = document.createElement('button')
let AtackButton = document.createElement('button')
let SelectClassButton = document.createElement('button')



   // Escolhendo sua classe
function ChooseClasse() {
    inputName.style.display = 'none';
    startButton.style.display = 'none';


    let chooseClassDiv = document.createElement('div');
    chooseClassDiv.classList.add('chooseClassDiv');

    let selectMenu = document.createElement('select');
    container.appendChild(chooseClassDiv);
    chooseClassDiv.appendChild(selectMenu);

    // Primeira opção desabilitada como rótulo
    let defaultOption = document.createElement('option');
    defaultOption.textContent = 'Escolha sua Classe';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectMenu.appendChild(defaultOption);

    // Lista de opções de classes
    let classes = ['Guerreiro', 'Mago', 'Arqueiro', 'Assassino'];

    // Adiciona as opções ao select
    classes.forEach(classe => {
        let option = document.createElement('option');
        option.textContent = classe;
        selectMenu.appendChild(option);
    });


    // Cria um container para a imagem
    let imgContainer = document.createElement('div');
    
    imgContainer.classList.add('imgContainer')

    chooseClassDiv.appendChild(imgContainer);


    // Evento de mudança para o menu de seleção
    selectMenu.addEventListener('change', function() {
        // Limpa a imagem anterior
        imgContainer.innerHTML = '';

        // Verifica a escolha do usuário
        if (selectMenu.value === 'Guerreiro') {
            let guerreiroIMG = document.createElement('img');
            guerreiroIMG.src = './img/guerreiro.png'; // Caminho da imagem do guerreiro
            guerreiroIMG.width = 200;  // Define a largura da imagem
            imgContainer.appendChild(guerreiroIMG);
        } else if (selectMenu.value === 'Mago') {
            let magoIMG = document.createElement('img');
            magoIMG.src = './img/172668824662537404.png'; // Caminho da imagem do mago
            magoIMG.width = 180;
            imgContainer.appendChild(magoIMG);
        } else if (selectMenu.value === 'Arqueiro') {
            let arqueiroIMG = document.createElement('img');
            arqueiroIMG.src = './img/arqueiro.png'; // Caminho da imagem do arqueiro
            arqueiroIMG.width = 130;
            imgContainer.appendChild(arqueiroIMG);
        } else if (selectMenu.value === 'Assassino') {
            let assassinoIMG = document.createElement('img');
            assassinoIMG.src = './img/assasino.png'; // Caminho da imagem do assassino
            assassinoIMG.width = 165;
            imgContainer.appendChild(assassinoIMG);
        }
    });



    SelectClassButton.textContent = 'Select Class'
    SelectClassButton.classList.add('SelectClassButton')
    chooseClassDiv.appendChild(SelectClassButton)

    SelectClassButton.addEventListener('click', function() {

        console.log('clicou')
        inputName.style.display = 'block';
        startButton.style.display = 'block';
        chooseClassDiv.style.display = 'none'
        selectMenu.style.display = 'none'
    
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
            History.classList.add('History_class')
            History.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    
            //button next container da historia
            nextButton.style.width = '100px'
            nextButton.style.height = '50px'
            nextButton.style.fontSize = '20px'
            nextButton.textContent = 'Next'
            IntroductionHistory.appendChild(nextButton)
            nextButton.classList.add('nextButton')
    
        })
    })
    
    })

}
ChooseClasse();





inputName.addEventListener('mouseenter', function () {
    ErrorloginImg.style.display = 'none'
})


//avança a historia
nextButton.addEventListener('click', function () {
    // Altera o texto do parágrafo da história
    History.textContent = 'Você está caminhando até que encontra um inimigo!!!';

    // Cria a imagem do mob
    let mob1 = document.createElement('img');
    mob1.classList.add('mob1')
    mob1.src = './img/mob1.jpg';  // Substitua pelo caminho da sua imagem
    mob1.width = 200;  // Define a largura da imagem
    mob1.height = 200; // Define a altura da imagem

    // container stats
    let divStats = document.createElement('div')
    let cardAtack = document.createElement('div')
    let carDef = document.createElement('div')
    divStats.classList.add('divStats')
    cardAtack.classList.add('cardAtack')
    carDef.classList.add('carDef')

    // Limpa a introdução para evitar que o texto anterior fique junto
    IntroductionHistory.innerHTML = '';
    cardAtack.textContent = 'ATK: 100';
    carDef.textContent = 'DEF: 100';

    // Adiciona a imagem primeiro
    IntroductionHistory.appendChild(mob1);
    
    // Adiciona o texto da história abaixo da imagem
    IntroductionHistory.appendChild(History);
    
    // Adiciona o botão de próximo abaixo do texto
    IntroductionHistory.appendChild(divStats)
    divStats.appendChild(cardAtack)
    divStats.appendChild(carDef)

    // // Buttons
    // IntroductionHistory.appendChild(AtackButton)
    // AtackButton.textContent = 'ATACAR'
    // AtackButton.classList.add('AtackButton')
    // IntroductionHistory.appendChild(nextButton);

});


// AtackButton.addEventListener('click', function() {
    
// })