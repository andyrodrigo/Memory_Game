//Variáveis-------------------------------------------

//botões do jogo
let telaInicial = document.getElementById("telaInicial"); // pokedex inicial
let restart = document.getElementById("restart"); // Na navegação
let reinicio = document.getElementById("reinicio"); //Só aparece ao perder
let tema = document.getElementById("tema"); //Abre menu de temas com a pokedex
let sobre = document.getElementById("sobre"); //Abre menu sobre o jogo
let temadex = document.getElementById("temadex"); //Menu de arenas
let cancelar = document.getElementById("cancelar"); //
let arena1a = document.getElementById("arena1a"); // opção de arena 1
let arena2a = document.getElementById("arena2a"); // opção de arena 2
let arena3a = document.getElementById("arena3a"); // opção de arena 3
let arena4a = document.getElementById("arena4a"); // opção de arena 4
let arena1b = document.getElementById("arena1b"); // opção de arena 1
let arena2b = document.getElementById("arena2b"); // opção de arena 2
let arena3b = document.getElementById("arena3b"); // opção de arena 3
let arena4b = document.getElementById("arena4b"); // opção de arena 4
let sobredex = document.getElementById("sobredex"); //Sobre o jogo
let fecha = document.getElementById("fecha"); //

//controles do jogo
let jogo = true; //diz se o jogo está ativo
let pontos = 0; //pontuação para a vitória
let erros = 0; //quantidade de erros atual
let totalErros = 8; //quantidade de erros para perder
let tentativa = false; //controla o tempo de clique, evita descontrole
let paridade = false; //indica se é o momento de procurar um par
let memInterior = 0; //guarda o valor do interior da bola que se procura o par
let memOrdem; //guarda o valor da posição da bola que se procura o par
let tematica = "arena";
let bola = 'url("imagens/ultraball.png")';

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
let venceu = document.getElementById("venceu"); // Imagem de vitória final
let fundo = document.getElementById("fundo"); // Fundo da tela
let caixa = document.getElementById("caixa"); // caixa da pokebolas
let energia = document.getElementById("energia"); //  caixa dos Luvdisks
const musica = document.getElementById("musica");

//Imagens das quantidades de tentativas do jogo
let luvdisk = new Array(15); //Cada elemento é um Luvdisk da tela
luvdisk[1] = document.getElementById("L1");
luvdisk[2] = document.getElementById("L2");
luvdisk[3] = document.getElementById("L3");
luvdisk[4] = document.getElementById("L4");
luvdisk[5] = document.getElementById("L5");
luvdisk[6] = document.getElementById("L6");
luvdisk[7] = document.getElementById("L7");
luvdisk[8] = document.getElementById("L8");
luvdisk[9] = document.getElementById("L9");
luvdisk[10] = document.getElementById("L10");
luvdisk[11] = document.getElementById("L11");
luvdisk[12] = document.getElementById("L12");
luvdisk[13] = document.getElementById("L13");
luvdisk[14] = document.getElementById("L14");
luvdisk[15] = document.getElementById("L15");

//Imagens das pokebolas
let pkball = new Array(18); //Cada elemento é uma pokebola da tela
pkball[1] = document.getElementById("pk01");
pkball[2] = document.getElementById("pk02");
pkball[3] = document.getElementById("pk03");
pkball[4] = document.getElementById("pk04");
pkball[5] = document.getElementById("pk05");
pkball[6] = document.getElementById("pk06");
pkball[7] = document.getElementById("pk07");
pkball[8] = document.getElementById("pk08");
pkball[9] = document.getElementById("pk09");
pkball[10] = document.getElementById("pk10");
pkball[11] = document.getElementById("pk11");
pkball[12] = document.getElementById("pk12");
pkball[13] = document.getElementById("pk13");
pkball[14] = document.getElementById("pk14");
pkball[15] = document.getElementById("pk15");
pkball[16] = document.getElementById("pk16");
pkball[17] = document.getElementById("pk17");
pkball[18] = document.getElementById("pk18");

//Ordem da pokebolas e pokemons no interior
let pokemon = new Array(18); //guarda os valores dos 9 pokemon dentro de cada pokebola
// 1 (Bulbasaur); 2 (Charmander); 3 (Squirtle); 4 (Pikachu); 5 (Meowth)
// 6 (Nidoran F); 7 (Nidoran M); 8 (Eevee); 9 (Dratiny)
pokemon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let box = new Array(18); // Indica se a pokebola est´aberta ou não (0 = fechada; 1 = aberta)
box = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
