function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}
document.querySelectorAll('.tecla')

const listadeTeclas = document.querySelectorAll('.tecla');

listadeTeclas[0].onclick=tocaSomPom;

while(Contador <9) {
    listadeTeclas[contador].onclick = tocaSomPom;

    contador = contador +1;
}

