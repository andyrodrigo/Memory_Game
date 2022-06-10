//Variáveis-------------------------------------------

let restart = document.getElementById("restart")
let reinicio = document.getElementById("reinicio")
let venceu = document.getElementById("venceu")
let jogo = true
let pontos = 8
let erros = 0
let tentativa = false
let paridade = false
let memInterior = 0
let memOrdem

var snd = new Audio("som/pokeballcut.mp3");


let luvdisk = new Array(10)
luvdisk[1] = document.getElementById("L1")
luvdisk[2] = document.getElementById("L2")
luvdisk[3] = document.getElementById("L3")
luvdisk[4] = document.getElementById("L4")
luvdisk[5] = document.getElementById("L5")
luvdisk[6] = document.getElementById("L6")
luvdisk[7] = document.getElementById("L7")
luvdisk[8] = document.getElementById("L8")
luvdisk[9] = document.getElementById("L9")
luvdisk[10] = document.getElementById("L10")

let pkball = new Array(18)

pkball[1] = document.getElementById("pk01")
pkball[2] = document.getElementById("pk02")
pkball[3] = document.getElementById("pk03")
pkball[4] = document.getElementById("pk04")
pkball[5] = document.getElementById("pk05")
pkball[6] = document.getElementById("pk06")
pkball[7] = document.getElementById("pk07")
pkball[8] = document.getElementById("pk08")
pkball[9] = document.getElementById("pk09")
pkball[10] = document.getElementById("pk10")
pkball[11] = document.getElementById("pk11")
pkball[12] = document.getElementById("pk12")
pkball[13] = document.getElementById("pk13")
pkball[14] = document.getElementById("pk14")
pkball[15] = document.getElementById("pk15")
pkball[16] = document.getElementById("pk16")
pkball[17] = document.getElementById("pk17")
pkball[18] = document.getElementById("pk18")

let pokemon = new Array(18)
let box = new Array(18)
pokemon = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
box =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]



function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}

function iniciar(){
    ajustaCenario()
    jogo = true
    venceu.style.display = "none";
}

function ajustaCenario(){
    reinicio.style.display = 'none';
    pontos = 0
    erros = 0
    tentativa = false
    paridade = false
    embaralhar()
    for(i=1; i<=10 ; i++){
        luvdisk[i].style.display = 'block';
    }
    for(i=0; i<18 ; i++){
        box[i] = 0
        pkball[i+1].style.backgroundImage = 'url("imagens/pokeball.png")'
    }
}

function embaralhar(){
    pokemon.sort(()=> Math.random() - 0.5);
}

function buscaParidade(interior, ordem){
    //alert("procura o par")
    paridade = true;
    memInterior = interior
    memOrdem = ordem
    tentativa = false // libera para tentar de novo
    //alert(memOrdem)
}

function retornar(ordem){
    pkball[memOrdem].style.backgroundImage = 'url("imagens/pokeball.png")'
    pkball[ordem].style.backgroundImage = 'url("imagens/pokeball.png")'
    box[ordem-1] = 0
    box[memOrdem-1] = 0
    tentativa = false // libera para tentar de novo
}

function alertar(num) {
    alert('foi' + num)
}

function fimDojogo(){
    if(pontos == 9){
        venceu.style.display = "flex";
        //alert('Parabéns')
    }else if(erros == 10){
        reinicio.style.display = 'block';
        jogo = false
        //alert('Você perdeu')
    }
}

function apagaCoracao(){
    luvdisk[erros].style.display = 'none';
}

function confereParidade(interior, ordem){
    if(memInterior == interior){
        //alert("você acertou")
        pontos++
        tentativa = false // libera para tentar de novo
    }else{
        //alert("errou!")
        erros++
        apagaCoracao()
        setTimeout(function(){retornar(ordem)} , 1000);
        //sleep(5000)
    }
    paridade = false;
    fimDojogo()
}

async function mostraPokemon(ordem, interior){
    switch(interior){
        case 1:
            pkball[ordem].style.backgroundImage = 'url("imagens/001.png")'
            break;
        case 2:
            pkball[ordem].style.backgroundImage = 'url("imagens/004.png")'
            break;    
        case 3:
            pkball[ordem].style.backgroundImage = 'url("imagens/007.png")'
            break;
        case 4:
            pkball[ordem].style.backgroundImage = 'url("imagens/025.png")'
            break;
        case 5:
            pkball[ordem].style.backgroundImage = 'url("imagens/029.png")'
            break;
        case 6:
            pkball[ordem].style.backgroundImage = 'url("imagens/032.png")'
            break;
        case 7:
            pkball[ordem].style.backgroundImage = 'url("imagens/052.png")'
            break;
        case 8:
            pkball[ordem].style.backgroundImage = 'url("imagens/133.png")'
            break;
        case 9:
            pkball[ordem].style.backgroundImage = 'url("imagens/147.png")'
            break;
        default:
            alert("erro")            
    }
}

function paraSom(){
    snd.pause()
    snd.currentTime=0;
}

function toca(){
    snd.play();
}


function testaPkball(ordem, interior){

    //Confere se caixa já foi clicada
    if( box[ordem-1] == 0){//não clicada ainda
        box[ordem-1] = 1

        snd.currentTime=0;
        snd.play();

        mostraPokemon(ordem, interior)

        //alert("numero: " + ordem + " interior: " + interior)

        //if true? esse :else este
        paridade? confereParidade(interior, ordem) : buscaParidade(interior, ordem)
/*
        if(paridade == false){
            buscaParidade(interior, ordem)
        }else{
            confereParidade(interior, ordem)
        }*/

    }else{
       // alert("Já foi clicada")
       tentativa = false // libera para tentar de novo
    }

}

function mostra(num){
    if(jogo){
        if(tentativa == false){
            tentativa = true
            let ordem= Number(num)
            let interior = Number(pokemon[ordem-1])
            testaPkball(ordem, interior)
        }else{
            //sem efeito
        }

    }else{
        //fim de jogo
    }
}



//Escutadores---------------------------------------------------------------------------
function escutadores(){
    reinicio.addEventListener('click', iniciar)
    restart.addEventListener('click', iniciar)
    //submit.addEventListener('click', enviar)
    pkball[1].addEventListener('click', function(){mostra("1")})
    pkball[2].addEventListener('click', function(){mostra("2")})
    pkball[3].addEventListener('click', function(){mostra("3")})
    pkball[4].addEventListener('click', function(){mostra("4")})
    pkball[5].addEventListener('click', function(){mostra("5")})
    pkball[6].addEventListener('click', function(){mostra("6")})
    pkball[7].addEventListener('click', function(){mostra("7")})
    pkball[8].addEventListener('click', function(){mostra("8")})
    pkball[9].addEventListener('click', function(){mostra("9")})
    pkball[10].addEventListener('click', function(){mostra("10")})
    pkball[11].addEventListener('click', function(){mostra("11")})
    pkball[12].addEventListener('click', function(){mostra("12")})
    pkball[13].addEventListener('click', function(){mostra("13")})
    pkball[14].addEventListener('click', function(){mostra("14")})
    pkball[15].addEventListener('click', function(){mostra("15")})
    pkball[16].addEventListener('click', function(){mostra("16")})
    pkball[17].addEventListener('click', function(){mostra("17")})
    pkball[18].addEventListener('click', function(){mostra("18")})


}
//--------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores)
window.addEventListener("load", embaralhar)