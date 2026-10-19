var opcoes = ["Pedra", "Papel", "Tesoura"];

var vitorias = 0;
var empates = 0;
var derrotas = 0;

function jogar(escolhaUsuario) {
  var escolhaComputador = Math.floor(Math.random() * 3);

  var mensagem = "";

  if (escolhaUsuario == escolhaComputador) {
    mensagem = "Empate.";
    empates++;
  } else if (escolhaUsuario == 0 && escolhaComputador == 2) {
    mensagem = "Pedra quebra tesoura. Você ganhou!";
    vitorias++;
  } else if (escolhaUsuario == 2 && escolhaComputador == 1) {
    mensagem = "Tesoura corta papel. Você ganhou!";
    vitorias++;
  } else if (escolhaUsuario == 1 && escolhaComputador == 0) {
    mensagem = "Papel cobre a pedra. Você ganhou!";
    vitorias++;
  } else if (escolhaComputador == 0 && escolhaUsuario == 2) {
    mensagem = "Pedra quebra tesoura. Você perdeu.";
    derrotas++;
  } else if (escolhaComputador == 2 && escolhaUsuario == 1) {
    mensagem = "Tesoura corta papel. Você perdeu.";
    derrotas++;
  } else {
    mensagem = "Papel cobre a pedra. Você perdeu.";
    derrotas++;
  }

  document.getElementById("resultado").innerHTML =
    "Você escolheu: " + opcoes[escolhaUsuario] + "<br>" +
    "Computador escolheu: " + opcoes[escolhaComputador] + "<br><br>" +
    mensagem;

  document.getElementById("vitorias").innerHTML = vitorias;
  document.getElementById("empates").innerHTML = empates;
  document.getElementById("derrotas").innerHTML = derrotas;
}