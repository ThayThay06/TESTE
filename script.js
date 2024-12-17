const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Você acabou de descobrir que a humanidade conseguiu colonizar Marte e estão convidando novos exploradores para visitá-lo. Qual a sua reação inicial?",
    alternativas: [
      {
        texto: "Isso é empolgante! Quero participar!",
        afirmacao:
          "Sentiu-se animado com a ideia de explorar novos horizontes. Percebeu que sua curiosidade pelo desconhecido sempre foi um grande motivador para buscar experiências únicas e desafiadoras.",
      },

      {
        texto: "Isso parece perigoso! Prefiro ficar na Terra.",
        afirmacao:
          "Decidiu que o conforto e a segurança da Terra são prioridades. A ideia de se aventurar em um ambiente hostil reforçou seu apreço pela estabilidade e pelos recursos do nosso planeta.",
      },
    ],
  },

  {
    enunciado:
      "No processo de treinamento para se tornar um explorador espacial, você deve aprender sobre as tecnologias envolvidas, como impressoras 3D que fabricam ferramentas e alimentos no espaço. Como você prefere aprender sobre isso?",
    alternativas: [
      {
        texto: "Assistir vídeos educativos e interativos sobre o tema.",
        afirmacao:
          "Descobriu que aprender de forma visual e prática torna o processo mais dinâmico. A interação com exemplos reais de impressoras 3D ajudou a visualizar como essas tecnologias estão transformando a vida no espaço.",
      },

      {
        texto: "Ler livros e artigos detalhados sobre essas tecnologias.",
        afirmacao:
          "Aprofundou-se nos detalhes técnicos, compreendendo como as tecnologias espaciais foram desenvolvidas. Percebeu que entender os fundamentos é essencial para aplicá-los em diferentes contextos.",
      },
    ],
  },

  {
    enunciado:
      "Chegando em Marte, você percebe que há uma estação científica que precisa de ideias para melhorar as condições de vida. Qual abordagem você sugere?",
    alternativas: [
      {
        texto:
          "Utilizar robôs inteligentes para otimizar as plantações internas.",
        afirmacao:
          "Enxergou na automação uma maneira de transformar o cultivo em Marte. Notou que a tecnologia é uma aliada poderosa para superar os desafios de ambientes extremos.",
      },

      {
        texto:
          "Criar novas fontes de energia sustentável para manter os sistemas funcionando.",
        afirmacao:
          "Compreendeu que a sustentabilidade é essencial para garantir o sucesso em Marte. Propôs ideias que equilibram inovação tecnológica e respeito pelos recursos disponíveis.",
      },
    ],
  },

  {
    enunciado:
      "Os cientistas locais pediram ajuda para ilustrar uma nova teoria sobre a formação de montanhas marcianas. O que você faz?",
    alternativas: [
      {
        texto:
          "Desenho uma ilustração à mão ou usando um aplicativo simples de design.",
        afirmacao:
          "Usou sua criatividade para traduzir teorias complexas em imagens claras e acessíveis. Notou que a simplicidade, muitas vezes, é a melhor forma de comunicação.",
      },

      {
        texto:
          "Uso uma ferramenta de IA para criar uma imagem realista e impactante.",
        afirmacao:
          "Aproveitou o potencial das ferramentas de IA para criar algo inovador. Percebeu que combinar habilidades humanas com tecnologia pode gerar resultados impressionantes.",
      },
    ],
  },

  {
    enunciado:
      "No retorno à Terra, você é convidado para um debate sobre o impacto das viagens espaciais no meio ambiente e na sociedade. Qual é sua posição?",
    alternativas: [
      {
        texto:
          "Apoio as viagens espaciais porque elas promovem inovação e avanço científico.",
        afirmacao:
          "Refletiu sobre como a exploração espacial impulsiona o desenvolvimento de novas tecnologias. Concluiu que os benefícios podem ser imensuráveis para a sociedade",
      },

      {
        texto:
          "Questiono as viagens espaciais devido ao alto custo ambiental e econômico.",
        afirmacao:
          "Reconheceu a importância de equilibrar os avanços tecnológicos com os impactos no planeta. Decidiu que é essencial buscar alternativas que sejam mais responsáveis e acessíveis.",
      },
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049, você...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
