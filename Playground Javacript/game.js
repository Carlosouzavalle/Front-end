let player = {
    forca: 10,
    inteligencia: 10,
    defesa: 10,
    mana: 10,
    LV: 1
}


// enemy
let enemy = {
    forca: 5,
    inteligencia: 2,
    defesa: 8,
    mana: 3
}


function matouEnemy() {
    if (player.forca > enemy.forca) {
        console.log('você derrotou o inimigo')
        return true;
    } else {
        console.log('enemy muito forte')
    }
}


function upouDeNivel() {
    if(matouEnemy()) {
        player.LV += 1
        player.defesa += 10
        player.forca += 10
        player.mana += 10
        player.inteligencia += 10
        console.log(player)
        console.log('Você upou de nível!');
    }
}


matouEnemy()
upouDeNivel()