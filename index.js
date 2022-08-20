//Variáveis-------------------------------------------

//botões do jogo
let telaInicial = document.getElementById("telaInicial") // pokedex inicial
let restart = document.getElementById("restart") // Na navegação
let reinicio = document.getElementById("reinicio") //Só aparece ao perder
let tema = document.getElementById("tema") //Abre menu de temas com a pokedex
let sobre = document.getElementById("sobre") //Abre menu sobre o jogo
let temadex= document.getElementById("temadex") //Menu de arenas
let cancelar= document.getElementById("cancelar") //
let arena1a= document.getElementById("arena1a") // opção de arena 1
let arena2a= document.getElementById("arena2a") // opção de arena 2
let arena3a= document.getElementById("arena3a") // opção de arena 3
let arena4a= document.getElementById("arena4a") // opção de arena 4
let arena1b= document.getElementById("arena1b") // opção de arena 1
let arena2b= document.getElementById("arena2b") // opção de arena 2
let arena3b= document.getElementById("arena3b") // opção de arena 3
let arena4b= document.getElementById("arena4b") // opção de arena 4
let sobredex= document.getElementById("sobredex") //Sobre o jogo
let fecha= document.getElementById("fecha") //

//controles do jogo
let jogo = true //diz se o jogo está ativo
let pontos = 0 //pontuação para a vitória
let erros = 0 //quantidade de erros atual
let totalErros = 8 //quantidade de erros para perder
let tentativa = false //controla o tempo de clique, evita descontrole
let paridade = false //indica se é o momento de procurar um par
let memInterior = 0 //guarda o valor do interior da bola que se procura o par
let memOrdem //guarda o valor da posição da bola que se procura o par
let tematica = 'arena'
let bola = 'url("imagens/ultraball.png")'

//sons ao mostrar cada pokemon
let bulba = new Audio("som/bulba.mp3");
let squi = new Audio("som/squi.mp3");
let char = new Audio("som/char.mp3");
let pika = new Audio("som/pika.mp3");
let meow = new Audio("som/meow.mp3");
let nene = new Audio("som/nene.mp3");
let eve = new Audio("som/eve.mp3");
let nem = new Audio("som/nem.mp3");
let ei = new Audio("som/ei.mp3");

//Imagens da tela
let venceu = document.getElementById("venceu") // Imagem de vitória final
let fundo = document.getElementById("fundo") // Fundo da tela
let caixa = document.getElementById("caixa") // caixa da pokebolas
let energia = document.getElementById("energia") //  caixa dos Luvdisks
let musica1 = document.getElementById("musica1")
let musica2 = document.getElementById("musica2")
let musica3 = document.getElementById("musica3")
let musica4 = document.getElementById("musica4")

//Imagens das quantidades de tentativas do jogo
let luvdisk = new Array(15) //Cada elemento é um Luvdisk da tela
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
luvdisk[11] = document.getElementById("L11")
luvdisk[12] = document.getElementById("L12")
luvdisk[13] = document.getElementById("L13")
luvdisk[14] = document.getElementById("L14")
luvdisk[15] = document.getElementById("L15")

//Imagens das pokebolas
let pkball = new Array(18) //Cada elemento é uma pokebola da tela
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

//Ordem da pokebolas e pokemons no interior
let pokemon = new Array(18) //guarda os valores dos 9 pokemon dentro de cada pokebola
// 1 (Bulbasaur); 2 (Charmander); 3 (Squirtle); 4 (Pikachu); 5 (Meowth)
// 6 (Nidoran F); 7 (Nidoran M); 8 (Eevee); 9 (Dratiny)
pokemon = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
let box = new Array(18) // Indica se a pokebola est´aberta ou não (0 = fechada; 1 = aberta)
box =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//Funções----------------------------------------------------------

//Seleciona Tema do Jogo de acordo com a opção escolhida
function mudaTema(num){
    switch(num){
        case 1: 
            bola = 'url("imagens/fastball.png")'
            fundo.style.backgroundImage = 'url("imagens/BG-pikachu.jpg")'
            caixa.style.backgroundImage = 'linear-gradient(to top right, white , red )'
            energia.style.backgroundColor = 'transparent'
            energia.style.width = '100%'
            musica1.controls = true;
            musica1.currentTime=0;
            musica1.play()
            musica2.controls = false;
            musica2.pause()
            musica3.controls = false;
            musica3.pause()
            musica4.controls = false;
            musica4.pause()
            totalErros = 15
            break;
        case 2: 
           bola = 'url("imagens/pokeball.png")'
           fundo.style.backgroundImage = 'url("imagens/BG-iniciais.jpg")'
           caixa.style.backgroundImage = 'linear-gradient(to right, blue ,rgb(73, 136, 136), red , yellow, rgb(118, 218, 88), green)'
           energia.style.backgroundColor = 'transparent'
           energia.style.width = '100%'
           musica1.controls = false;
           musica1.pause()
           musica2.controls = true;
           musica2.currentTime=0;
           musica2.play()
           musica3.controls = false;
           musica3.pause()
           musica4.controls = false;
           musica4.pause()
           totalErros = 12
           break;    
        case 3: 
           bola = 'url("imagens/greatball.png")'
           fundo.style.backgroundImage = 'url("imagens/BG-kanto.png")'
           caixa.style.backgroundImage = 'none'
           caixa.style.backgroundColor = 'white'
           energia.style.backgroundColor = 'white'
           energia.style.width = '38%'
           musica1.controls = false;
           musica1.pause()
           musica2.controls = false;
           musica2.pause()
           musica3.controls = true;
           musica3.currentTime=0;
           musica3.play()
           musica4.controls = false;
           musica4.pause()
           totalErros = 10
           break;
        case 4: 
            bola = 'url("imagens/ultraball.png")'
            fundo.style.backgroundImage = 'url("imagens/BG-arena.png")'
            caixa.style.backgroundImage = 'none'
            caixa.style.backgroundColor = 'rgb(34, 38, 46)'
            energia.style.backgroundColor = 'transparent'
            energia.style.width = '100%'
            musica1.controls = false;
            musica1.pause()
            musica2.controls = false;
            musica2.pause()
            musica3.controls = false;
            musica3.pause()
            musica4.controls = true;
            musica4.currentTime=0;
            musica4.play()
            totalErros = 8
            break;
        default:
            alert("erro")            
    }
    cancela()
    fechar()
    iniciar()
}

//Tira a pokedex da frente
function cancela(){
   temadex.style.display = 'none'
   telaInicial.style.display = 'none'
}

//Tira a pokedex da frente
function fechar(){
    sobredex.style.display = 'none'
}

//Abre o menu Sobre
function abreSobre(){
    cancela()
    sobredex.style.display = 'inline'
}

function escolheTemas(){
    fechar()
    temadex.style.display = 'inline'
}

//Chamada para iniciar ou reiniciar o jogo
function iniciar(){
    ajustaCenario()
    jogo = true
    venceu.style.display = "none"; //tira a imagem de vitória, caso esteja
}

//Ajusta o cenário inicial do jogo
function ajustaCenario(){
    reinicio.style.display = 'none'; //tira o botão de reinicio, caso esteja
    pontos = 0
    erros = 0
    tentativa = false
    paridade = false
    embaralhar()
    for(i=1; i<=15 ; i++){
        if(i<=totalErros){
            luvdisk[i].style.display = 'block';
        }else{
            luvdisk[i].style.display = 'none';
        }    
    }
    for(i=0; i<18 ; i++){
        box[i] = 0
        pkball[i+1].style.backgroundImage = bola
    }
}

//Embaralhaa os pokemons dentro das pokebolas
function embaralhar(){
    pokemon.sort(()=> Math.random() - 0.5);
}

//Chamada ao clicar em alguma pokebola; recebe o numero da pokebola clicada
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

//Verifica qual ação tomas após clicar na pokebola
function testaPkball(ordem, interior){
    if( box[ordem-1] == 0){//Caixa não clicada ainda
        box[ordem-1] = 1 //marca como clicada
        mostraPokemon(ordem, interior)
        paridade? confereParidade(interior, ordem) : buscaParidade(interior, ordem)//true? if :else
    }else{//Já foi clicada
       tentativa = false // libera para tentar de novo
    }
}

//Coloca a imagem do pokemon no interior e o som dele
function mostraPokemon(ordem, interior){
    switch(interior){
        case 1: //bulbasaur
            bulba.currentTime=0;
            bulba.play();
            pkball[ordem].style.backgroundImage = 'url("imagens/001.png")'
            break;
        case 2: //chamander
            char.currentTime=0;
            char.play();
            pkball[ordem].style.backgroundImage = 'url("imagens/004.png")'
            break;    
        case 3: //squirtle
            squi.currentTime=0;
            squi.play();
            pkball[ordem].style.backgroundImage = 'url("imagens/007.png")'
            break;
        case 4: //pikachu
            pika.currentTime=0;
            pika.play();
            pkball[ordem].style.backgroundImage = 'url("imagens/025.png")'
            break;
        case 5: //nidoran F
            nene.currentTime=0;
            nene.play();
            pkball[ordem].style.backgroundImage = 'url("imagens/029.png")'
            break;
        case 6: //nidoran M
            nem.currentTime=0;
            nem.play();
            pkball[ordem].style.backgroundImage = 'url("imagens/032.png")'
            break;
        case 7: //Meowth
            meow.currentTime=0;
            meow.play();
            pkball[ordem].style.backgroundImage = 'url("imagens/052.png")'
            break;
        case 8: //Eevee
            eve.currentTime=0;
            eve.play();
            pkball[ordem].style.backgroundImage = 'url("imagens/133.png")'
            break;
        case 9: //Dratiny
            ei.currentTime=0;
            ei.play();
            pkball[ordem].style.backgroundImage = 'url("imagens/147.png")'
            break;
        default:
            alert("erro")            
    }
}

//Ativa o modo de buscar a paridade do próximo clique e registra nas memórias
function buscaParidade(interior, ordem){
    paridade = true;
    memInterior = interior
    memOrdem = ordem
    tentativa = false // libera para tentar de novo
}

//Verifica se acertou a paridade
function confereParidade(interior, ordem){
    if(memInterior == interior){ //acerto
        pontos++
        tentativa = false // libera para tentar de novo
    }else{
        erros++
        luvdisk[erros].style.display = 'none'; //apagaCoracao
        setTimeout(function(){retornar(ordem)} , 1000);
    }
    paridade = false;
    fimDojogo()
}

//Coloca os pokemon de volta na pokebola após o erro
function retornar(ordem){
    pkball[memOrdem].style.backgroundImage = bola
    pkball[ordem].style.backgroundImage = bola
    box[ordem-1] = 0
    box[memOrdem-1] = 0
    tentativa = false // libera para tentar de novo
}

//Encerra a partida, após Ganhar ou Perder
function fimDojogo(){
    if(pontos == 9){ //Venceu o jogo
        venceu.style.display = "flex"; //Exibe imagem de vitória
    }else if(erros == totalErros){ //Perdeu o jogo
        reinicio.style.display = 'block'; //Mostra botão de reinicio
        jogo = false //Paralisa o jogo
    }
}

//Escutadores---------------------------------------------------------------------------
function escutadores(){
    reinicio.addEventListener('click', iniciar)
    restart.addEventListener('click', iniciar)
    cancelar.addEventListener('click', cancela)
    tema.addEventListener('click', escolheTemas)
    sobre.addEventListener('click', abreSobre)
    fecha.addEventListener('click', fechar)
    arena1a.addEventListener('click', function(){mudaTema(1)})
    arena2a.addEventListener('click', function(){mudaTema(2)})
    arena3a.addEventListener('click', function(){mudaTema(3)})
    arena4a.addEventListener('click', function(){mudaTema(4)})
    arena1b.addEventListener('click', function(){mudaTema(1)})
    arena2b.addEventListener('click', function(){mudaTema(2)})
    arena3b.addEventListener('click', function(){mudaTema(3)})
    arena4b.addEventListener('click', function(){mudaTema(4)})
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
window.addEventListener("load", escutadores) //Ativa os escutadores
window.addEventListener("load", embaralhar) //Chama o embaralhamento assim que a página carrega
//window.addEventListener("load", function(){mudaTema(4)}) //Escolhe tema arena logo