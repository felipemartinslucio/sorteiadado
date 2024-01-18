let dado1 = Math.random() * 6

numeroDado1 = Math.floor(dado1 + 1)

let imagemDado1 = 'dado' + numeroDado1 + '.png'
let diretorioDado1 = 'img/' + imagemDado1

document.getElementById('Jogador1').setAttribute('src', diretorioDado1)



let dado2 = Math.random() * 6

numeroDado2 = Math.floor(dado2 + 1)

let imagemDado2 = 'dado' + numeroDado2 + '.png'
let diretorioDado2 = 'img/' + imagemDado2

document.getElementById('Jogador2').setAttribute('src', diretorioDado2)