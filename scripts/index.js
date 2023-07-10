//Funções----------------------------------------------------------

//Seleciona Tema do Jogo de acordo com a opção escolhida
function mudaTema(num) {
  musica.controls = true;
  musica.currentTime = 0;
  switch (num) {
    case 1:
      bola = 'url("imagens/fastball.png")';
      fundo.style.backgroundImage = 'url("imagens/BG-pikachu.jpg")';
      musica.src = "som/bike.mp3";
      totalErros = 15;
      break;
    case 2:
      bola = 'url("imagens/pokeball.png")';
      fundo.style.backgroundImage = 'url("imagens/BG-iniciais.jpg")';
      musica.src = "som/mainpk.mp3";
      totalErros = 12;
      break;
    case 3:
      bola = 'url("imagens/greatball.png")';
      fundo.style.backgroundImage = 'url("imagens/BG-kanto.png")';
      musica.src = "som/kanto.mp3";
      totalErros = 10;
      break;
    case 4:
      bola = 'url("imagens/ultraball.png")';
      fundo.style.backgroundImage = 'url("imagens/BG-arena.png")';
      musica.src = "som/battle.mp3";
      totalErros = 8;
      break;
    default:
      alert("erro");
  }
  musica.play();
  cancela();
  fechar();
  iniciar();
}

//Tira a pokedex da frente
function cancela() {
  temadex.style.display = "none";
  telaInicial.style.display = "none";
}

//Tira a pokedex da frente
function fechar() {
  sobredex.style.display = "none";
}

//Abre o menu Sobre
function abreSobre() {
  cancela();
  sobredex.style.display = "inline";
}

function escolheTemas() {
  fechar();
  temadex.style.display = "inline";
}

//Chamada para iniciar ou reiniciar o jogo
function iniciar() {
  ajustaCenario();
  jogo = true;
  venceu.style.display = "none"; //tira a imagem de vitória, caso esteja
}

//Ajusta o cenário inicial do jogo
function ajustaCenario() {
  reinicio.style.display = "none"; //tira o botão de reinicio, caso esteja
  pontos = 0;
  erros = 0;
  tentativa = false;
  paridade = false;
  embaralhar();
  for (i = 1; i <= 15; i++) {
    if (i <= totalErros) {
      luvdisk[i].style.display = "block";
    } else {
      luvdisk[i].style.display = "none";
    }
  }
  for (i = 0; i < 18; i++) {
    box[i] = 0;
    pkball[i + 1].style.backgroundImage = bola;
  }
}

//Embaralhaa os pokemons dentro das pokebolas
function embaralhar() {
  pokemon.sort(() => Math.random() - 0.5);
}

//Chamada ao clicar em alguma pokebola; recebe o numero da pokebola clicada
function mostra(num) {
  if (jogo) {
    if (tentativa == false) {
      tentativa = true;
      let ordem = Number(num);
      let interior = Number(pokemon[ordem - 1]);
      testaPkball(ordem, interior);
    } else {
      //sem efeito
    }
  } else {
    //fim de jogo
  }
}

//Verifica qual ação tomas após clicar na pokebola
function testaPkball(ordem, interior) {
  if (box[ordem - 1] == 0) {
    //Caixa não clicada ainda
    box[ordem - 1] = 1; //marca como clicada
    mostraPokemon(ordem, interior);
    paridade
      ? confereParidade(interior, ordem)
      : buscaParidade(interior, ordem); //true? if :else
  } else {
    //Já foi clicada
    tentativa = false; // libera para tentar de novo
  }
}

//Coloca a imagem do pokemon no interior e o som dele
function mostraPokemon(ordem, interior) {
  switch (interior) {
    case 1: //bulbasaur
      bulba.currentTime = 0;
      bulba.play();
      pkball[ordem].style.backgroundImage = 'url("imagens/001.png")';
      break;
    case 2: //chamander
      char.currentTime = 0;
      char.play();
      pkball[ordem].style.backgroundImage = 'url("imagens/004.png")';
      break;
    case 3: //squirtle
      squi.currentTime = 0;
      squi.play();
      pkball[ordem].style.backgroundImage = 'url("imagens/007.png")';
      break;
    case 4: //pikachu
      pika.currentTime = 0;
      pika.play();
      pkball[ordem].style.backgroundImage = 'url("imagens/025.png")';
      break;
    case 5: //nidoran F
      nene.currentTime = 0;
      nene.play();
      pkball[ordem].style.backgroundImage = 'url("imagens/029.png")';
      break;
    case 6: //nidoran M
      nem.currentTime = 0;
      nem.play();
      pkball[ordem].style.backgroundImage = 'url("imagens/032.png")';
      break;
    case 7: //Meowth
      meow.currentTime = 0;
      meow.play();
      pkball[ordem].style.backgroundImage = 'url("imagens/052.png")';
      break;
    case 8: //Eevee
      eve.currentTime = 0;
      eve.play();
      pkball[ordem].style.backgroundImage = 'url("imagens/133.png")';
      break;
    case 9: //Dratiny
      ei.currentTime = 0;
      ei.play();
      pkball[ordem].style.backgroundImage = 'url("imagens/147.png")';
      break;
    default:
      alert("erro");
  }
}

//Ativa o modo de buscar a paridade do próximo clique e registra nas memórias
function buscaParidade(interior, ordem) {
  paridade = true;
  memInterior = interior;
  memOrdem = ordem;
  tentativa = false; // libera para tentar de novo
}

//Verifica se acertou a paridade
function confereParidade(interior, ordem) {
  if (memInterior == interior) {
    //acerto
    pontos++;
    tentativa = false; // libera para tentar de novo
  } else {
    erros++;
    luvdisk[erros].style.display = "none"; //apagaCoracao
    setTimeout(function () {
      retornar(ordem);
    }, 1000);
  }
  paridade = false;
  fimDojogo();
}

//Coloca os pokemon de volta na pokebola após o erro
function retornar(ordem) {
  pkball[memOrdem].style.backgroundImage = bola;
  pkball[ordem].style.backgroundImage = bola;
  box[ordem - 1] = 0;
  box[memOrdem - 1] = 0;
  tentativa = false; // libera para tentar de novo
}

//Encerra a partida, após Ganhar ou Perder
function fimDojogo() {
  if (pontos == 9) {
    //Venceu o jogo
    venceu.style.display = "flex"; //Exibe imagem de vitória
  } else if (erros == totalErros) {
    //Perdeu o jogo
    reinicio.style.display = "block"; //Mostra botão de reinicio
    jogo = false; //Paralisa o jogo
  }
}

//Escutadores---------------------------------------------------------------------------
function escutadores() {
  reinicio.addEventListener("click", iniciar);
  restart.addEventListener("click", iniciar);
  cancelar.addEventListener("click", cancela);
  tema.addEventListener("click", escolheTemas);
  sobre.addEventListener("click", abreSobre);
  fecha.addEventListener("click", fechar);
  arena1a.addEventListener("click", function () {
    mudaTema(1);
  });
  arena2a.addEventListener("click", function () {
    mudaTema(2);
  });
  arena3a.addEventListener("click", function () {
    mudaTema(3);
  });
  arena4a.addEventListener("click", function () {
    mudaTema(4);
  });
  arena1b.addEventListener("click", function () {
    mudaTema(1);
  });
  arena2b.addEventListener("click", function () {
    mudaTema(2);
  });
  arena3b.addEventListener("click", function () {
    mudaTema(3);
  });
  arena4b.addEventListener("click", function () {
    mudaTema(4);
  });
  pkball[1].addEventListener("click", function () {
    mostra("1");
  });
  pkball[2].addEventListener("click", function () {
    mostra("2");
  });
  pkball[3].addEventListener("click", function () {
    mostra("3");
  });
  pkball[4].addEventListener("click", function () {
    mostra("4");
  });
  pkball[5].addEventListener("click", function () {
    mostra("5");
  });
  pkball[6].addEventListener("click", function () {
    mostra("6");
  });
  pkball[7].addEventListener("click", function () {
    mostra("7");
  });
  pkball[8].addEventListener("click", function () {
    mostra("8");
  });
  pkball[9].addEventListener("click", function () {
    mostra("9");
  });
  pkball[10].addEventListener("click", function () {
    mostra("10");
  });
  pkball[11].addEventListener("click", function () {
    mostra("11");
  });
  pkball[12].addEventListener("click", function () {
    mostra("12");
  });
  pkball[13].addEventListener("click", function () {
    mostra("13");
  });
  pkball[14].addEventListener("click", function () {
    mostra("14");
  });
  pkball[15].addEventListener("click", function () {
    mostra("15");
  });
  pkball[16].addEventListener("click", function () {
    mostra("16");
  });
  pkball[17].addEventListener("click", function () {
    mostra("17");
  });
  pkball[18].addEventListener("click", function () {
    mostra("18");
  });
}
//--------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores); //Ativa os escutadores
window.addEventListener("load", embaralhar); //Chama o embaralhamento assim que a página carrega
musica.volume = 0.2;
//window.addEventListener("load", function(){mudaTema(4)}) //Escolhe tema arena logo
