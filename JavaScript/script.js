import { aleatorio } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener("click", iniciaJogo);

function iniciaJogo() {
  atual = 0;
  historiaFinal = "";
  telaInicial.style.display = "none";
  caixaPerguntas.classList.remove("mostrar");
  caixaAlternativas.classList.remove("mostrar");
  caixaResultados.classList.remove("mostrar");
  mostraPergunta();
}

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () =>
      respostaSelecionada(alternativa)
    );
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacoes + " ";
  if (opcaoSelecionada.proximaPergunta !== undefined) {
    atual = opcaoSelecionada.proximaPergunta;
  } else {
    mostraResultado();
    return;
  }
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2050, você...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultados.classList.add("mostrar");
  botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {
  atual = 0;
  historiaFinal = "";
  textoResultado.textContent = "";
  caixaResultados.classList.remove("mostrar");
  telaInicial.style.display = "block";
  caixaPerguntas.classList.remove("mostrar");
  caixaAlternativas.classList.remove("mostrar");
  caixaPerguntas.textContent = "";
  caixaAlternativas.textContent = "";
}
