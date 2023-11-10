function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio).play('');
}  
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }

    else{
alert('elemento não encontrado')

}

document.querySelectorAll('.tecla')

const listadeTeclas = document.querySelectorAll('.tecla');

listadeTeclas[0].onclick=tocaSomPom;

for (contador = 0; contador < listadeTeclas.length; contador++) {
   
    tecla.onclick= function(){
        TocaSom(idAudio);
    };

    tecla.onkeydown = function() {
        if( evento.code === 'space'|| evento.code === 'enter'){
            tecla.classList.add('ativa');
        }
       

tecla.classList.add('ativa');
    }
    

    tecla.onkeyup = function(){
        tecla.classList.remove('atvia');
    }

   const tecla= listadeTeclas[contador];
   
   const idAudiov = `som_${instrumento}`;
}
 
