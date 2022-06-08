//Variáveis-------------------------------------------

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

let tentativa = false
let paridade = false
let memInterior = 0
let memOrdem

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}

function buscaParidade(interior, ordem){
    //alert("procura o par")
    paridade = true;
    memInterior = interior
    memOrdem = ordem
    tentativa = false // libera para tentar de novo
    //alert(memOrdem)
}

async function retornar(ordem){
    pkball[memOrdem].style.backgroundImage = 'url("imagens/pokeball.png")'
    pkball[ordem].style.backgroundImage = 'url("imagens/pokeball.png")'
    box[ordem-1] = 0
    box[memOrdem-1] = 0
    tentativa = false // libera para tentar de novo
}

function alertar(num) {
    alert('foi' + num)
  }

function confereParidade(interior, ordem){
    if(memInterior == interior){
        //alert("você acertou")
        tentativa = false // libera para tentar de novo
    }else{
        //alert("errou!")
        setTimeout(function(){retornar(ordem)} , 1000);
        //sleep(5000)
    }
    paridade = false;
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


function testaPkball(ordem, interior){

    //Confere se caixa já foi clicada
    if( box[ordem-1] == 0){//não clicada ainda
        box[ordem-1] = 1

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
    if(tentativa == false){
        tentativa = true
        let ordem= Number(num)
        let interior = Number(pokemon[ordem-1])
        testaPkball(ordem, interior)
    }else{
        //sem efeito
    }

}

//Escutadores---------------------------------------------------------------------------
function escutadores(){
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