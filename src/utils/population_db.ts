import { initDB } from '../db/mongo';
import QuestionModel from '../db/questionModel';

var questions = [
  {
    "utterance": "Analista Legislativo - Câmara de Belo Horizonte/MG - Ano: 2018 - Banca: CONSULPLAN - Disciplina:  Tecnologia da Informação - Assunto: Tecnologia da Informação",
    "question": "O modelo de camadas ISO/OSI, ou simplesmente modelo OSI (Open Systems Interconection), é um modelo desenvolvido pela ISO (International Standards Organization) no qual os fabricantes têm condição de criar protocolos e componentes a partir desse modelo. É um modelo que possui diversas camadas, cada uma com uma função específica. Tendo como base o modelo de camadas ISO/OSI, disserte acerca dos seguintes questionamentos: a) Quantidade e quais são as camadas do modelo OSI. b) Definição de cada uma das camadas do modelo OSI. c) Apresentação dos principais protocolos de cada uma das camadas do Modelo OSI.",
    "type": "Dissertation"
  },
  {
    "utterance": "TI - Concurso: Conselho Regional de Enfermagem-MA - Ano: 2014 - Banca: IDECAN - Disciplina: Tecnologia da Informação -",
    "question": " Assunto: Tecnologia da Informação - “A tecnologia a serviço da saúde: equilíbrio entre os benefícios e impactos negativos do avanço tecnológico na sociedade”",
    "type": "Dissertation"
  },
  {
    "utterance": "Analista - Concurso: COMISSÃO NACIONAL DE ENERGIA NUCLEAR – CNEN - Ano: 2014 - Banca: IDECAN - Disciplina: Tecnologia da Informação - Assunto: Tecnologia da Informação",
    "question": " Quais são os modelos de compartilhamento do Windows Server 2008? Defina sucintamente cada modelo apresentado.  Quais são as permissões dos compartilhamentos mencionadas? Há permissão efetiva, caso o usuário pertença a mais de um grupo?",
    "type": "Dissertation"
  },
  {
    "utterance": "TI - Concurso: TRT14 - Ano: 2014 - Banca: FCC - Disciplina: Tecnologia da Informação - Assunto: Tecnologia da Informação -",
    "question": " 1. Defina a UML e o polimorfismo.  2. Relacione:  a. os componentes básicos principais utilizados nos diagramas de caso de uso e de sequencia.  b. os compartimentos principais utilizados na representação de uma classe.  3. Descreva o principal objetivo das camadas de transporte, de enlace e de rede do modelo de referência OSI.",
    "type": "Dissertation"
  },
  {
    "utterance": "Analista - Concurso: COMISSÃO NACIONAL DE ENERGIA NUCLEAR – CNEN - Ano: 2014 - Banca: IDECAN - Disciplina: Tecnologia da Informação - Assunto: Tecnologia da Informação",
    "question": "Quais são os modelos de compartilhamento do Windows Server 2008 ? Defina sucintamente cada modelo apresentado.  Quais são as permissões dos compartilhamentos mencionadas ? Há permissão efetiva, caso o usuário pertença a mais de um grupo ?",
    "type": "Dissertation"
  },
  {
    "utterance": "Disciplina: TI - Concurso: ABDI - AGÊNCIA BRASILEIRA DE DESENVOLVIMENTO INDUSTRIAL - Ano: 2008 - Banca: IBFC ",
    "question": "-Indique o endereço de Rede, o Endereço de Broadcast, a máscara em decimal e a quantidade de endereços úteis (excluindo-se o de rede e broadcast) para o IP a seguir: 172.10.100.65/21",
    "type": "Dissertation"
  },
  {
    "utterance": "Q818045 - Cebraspe (Cespe) - 2021 - MP-AP - Analista Ministerial - Tecnologia da Informação",
    "question": "Sabendo que é possível utilizar JSON em programas desenvolvidos em Python, assinale a opção que apresenta o código correto para que, ao final, o script tenha como resultado a impressão do valor do processo, ou seja, 1234, a partir do JSON fornecido.",
    "answers": [
      { "value": "a", "name": "import json x = '{ \"MP\":\"AP\", \"Processo\":1234, \"Cidade\":\"Macapa\"}' y = json.loads(x) print(y[\"Processo\"])" },
      { "value": "b", "name": "import json x = '{ \"MP\":\"AP\", \"Processo\":1234, \"Cidade\":\"Macapa\"}' y = json.dump(x) print(y[1])" },
      { "value": "c", "name": "import json x = '{ \"MP\":\"AP\", \"Processo\":1234, \"Cidade\":\"Macapa\"}' y = json.index(x) print(y(Processo))" },
      { "value": "d", "name": "import json x = '{ \"MP\":\"AP\", \"Processo\":1234, \"Cidade\":\"Macapa\"}' y = json.split(x) print(y[1])" },
      { "value": "e", "name": "import json x = '{ \"MP\":\"AP\", \"Processo\":1234, \"Cidade\":\"Macapa\"}' y = json.lambda(x) print(y[2])" }
    ],
    "correct_answer": "d",
    "type": "MultipleChoice"
  },
  {
    "utterance": "Q817795 - CEBRASPE - 2021 - PC-DF - Agente de Polícia",
    "question": "Com relação a mineração de dados, aprendizado de máquina e aplicações Python, julgue o item a seguir. Uma das aplicações de Python é o aprendizado de máquina, que pode ser exemplificado por um programa de computador que aprende com a experiência de detectar imagens de armas e de explosivos em vídeos, tendo seu desempenho medido e melhorado por meio dos erros e de acertos decorrentes da experiência",
    "answers": [
      { "value": "a", "name": "Errado" },
      { "value": "b", "name": "Certo" }
    ],
    "correct_answer": "a",
    "type": "MultipleChoice"
  },
  {
    "utterance": "Q816311 - Quadrix - 2019 - CREA - TO - Analista de Sistemas",
    "question": "Com relação à engenharia de software, julgue o item UML é uma linguagem de programação usada no desenvolvimento de sistemas para a Internet.",
    "answers": [
      { "value": "a", "name": "Errado" },
      { "value": "b", "name": "Certo" }
    ],
    "correct_answer": "b",
    "type": "MultipleChoice"
  },
  {
    "utterance": "Q685503 - SUGEP - UFRPE - 2018 - UFRPE - Analista de Tecnologia da Informação - Sistemas",
    "question": "Considere o código Python a seguir: vec = [i + 10 for i in range(5)] O valor da variável vec após a execução do código é:",
    "answers": [
      { "value": "a", "name": "10" },
      { "value": "b", "name": "15" },
      { "value": "c", "name": "[10, 11, 12, 13, 14]" },
      { "value": "d", "name": "[11, 12, 13, 14, 15]" },
      { "value": "e", "name": "[0, 1, 2, 3, 4]" },
    ],
    "correct_answer": "e",
    "type": "MultipleChoice"
  },
  {
    "utterance": "Q741300 - FGV - 2018 - AL-RO - Analista Legislativo - Tecnologia da Informação - Banco de Dados",
    "question": "Considere a aplicação do algoritmo de busca binária sobre um conjunto de chaves distintas. Assinale a declaração Python que define uma lista L sobre a qual esse algoritmo não pode ser aplicado diretamente.",
    "answers": [
      { "value": "a", "name": "L=[0,1,2,3,5,8,13,21]" },
      { "value": "b", "name": "L=[0]" },
      { "value": "c", "name": "L=[“MARIA”, “MARINA”, “MARIO”]" },
      { "value": "d", "name": "L=[-1,-2,-3,-4,-5]" },
      { "value": "e", "name": "L=[“MARIA”, “MARIO”, “MARINA”]" },
    ],
    "correct_answer": "b",
    "type": "MultipleChoice"
  },
  {
    "utterance": "Q606923 - Quadrix - 2017 - CONTER - Analista de Tecnologia da Informação",
    "question": "Assinale a alternativa correta a respeito da linguagem de programação Python.",
    "answers": [
      { "value": "a", "name": "A Python não é considerada como uma linguagem orientada a objetos." },
      { "value": "b", "name": "Uma das desvantagens da linguagem de programação Python é que ela não possui as chamadas bibliotecas- padrão, ou seja, não possui um conjunto de funcionalidades pré-compiladas." },
      { "value": "c", "name": "Os programas em Python podem pesquisar arquivos e árvores de diretórios. No entanto, com esses programas, não é permitido chamar outros programas." },
      { "value": "d", "name": "Os arquivos de programa Python, por convenção, recebem nomes que terminam com “.pyn”." },
      { "value": "e", "name": "A Python utiliza diversos operadores de expressão. Caso se desejasse realizar o deslocamento de x à esquerda por y bits, poder-se-ia utilizar o seguinte operador: x << y." },
    ],
    "correct_answer": "c",
    "type": "MultipleChoice"
  }, {
    "utterance": "Q573896 - IF-PI - 2016 - IF-PI - Técnico em Tecnologia da Informação",
    "question": "Dada a sequência de código Python3, assinale a alternativa CORRETA: q = [x ** 2 for x in range(5)]",
    "answers": [
      { "value": "a", "name": "A variável q conterá uma lista com os números inteiros de 0 a 10." },
      { "value": "b", "name": "A variável q conterá uma lista vazia." },
      { "value": "c", "name": "A variável q conterá uma lista com os números 0, 1, 4, 9 e 16." },
      { "value": "d", "name": "A variável q conterá uma lista com os números 0, 2, 4, 6 e 8." },
      { "value": "e", "name": "A variável q conterá o valor None." }
    ],
    "correct_answer": "d",
    "type": "MultipleChoice"
  },
  {
    "utterance": "[UFPR 2017] Atualmente é possível comprar e criar os chamados GloFish, peixes transgênicos que se tornam fluorescentes quando expostos à luz ultravioleta. Para conferir a fluorescência, pesquisadores criaram peixes que produzem em suas células a proteína GFP (proteína verde fluorescente, na sigla em inglês), presente naturalmente em medusas e que pode ser detectada sob luz ultravioleta. Considerando a tecnologia para obtenção de transgênicos, identifique como verdadeiras (V) ou falsas (F) as seguintes afirmativas:",
    "question": [
      "( ) Os peixes GloFish são chamados transgênicos porque possuem em seu genoma um segmento de DNA de medusa.",
      "( ) O gene que codifica a GFP foi inserido nas células somáticas, mas não nas gaméticas dos peixes GloFish.",
      "( ) As células fluorescentes dos GloFish produzem RNA mensageiro, que, por meio da tradução, origina a proteína GFP.",
      "( ) Os peixes GloFish foram produzidos pela introdução de um núcleo extraído de uma célula de medusa em uma célula de peixe cujo núcleo tinha sido anteriormente removido."
    ],
    "answers": [
      { "value": "a", "name": "V F F V" },
      { "value": "b", "name": "F V F V" },
      { "value": "c", "name": "F F V V" },
      { "value": "d", "name": "V F V F" },
      { "value": "e", "name": "F V F F" }
    ],
    "correct_answer": "d",
    "type": "TrueOrFalse"
  },
  {
    "utterance": "[UFSM 2014] Pode ser estranho para nossa espécie, que tanto orgulho sente de sua capacidade de criar e lidar com as novas tecnologias a seu favor, parar para pensar que, de certa forma, ainda temos semelhanças incontestáveis com as plantas angiospermas! Com relação a esse fato, avalie as alternativas a seguir e coloque verdadeira (V) ou falsa (F).Os humanos e as angiospermas",
    "question": [
      "( ) têm corpos pluricelulares organizados em tecidos e órgãos.",
      "( ) compartilham o mesmo tipo de nutrição.",
      "( ) reproduzem-se de forma sexuada e assexuada.",
      "( ) formam gametas masculinos e femininos."
    ],
    "answers": [
      { "value": "a", "name": "F V F V" },
      { "value": "b", "name": "V F F V" },
      { "value": "c", "name": "V F V F" },
      { "value": "d", "name": "F F V V" },
      { "value": "e", "name": "F V F F" }
    ],
    "correct_answer": "b",
    "type": "TrueOrFalse"
  },
  {
    "utterance": "[UFSM 2014] Análises ambientais têm detectado presença de antibióticos no solo, nas águas superficiais e subterrâneas. Considerando que a ação dos antibióticos pode ser sobre a produção da parede celular, a síntese de proteínas ou a permeabilidade da membrana plasmática, responda à questão.Assinale verdadeira (V) ou falsa (F) em cada afirmativa a seguir.",
    "question": [
      "( ) Se o ambiente for contaminado com um antibiótico que impeça a produção da parede celular, pode-se prever que microrganismos, como algas e vírus, não sobreviverão neste ambiente.",
      "( ) Um antibiótico que interfere na síntese de proteínas deve atuar diretamente no núcleo, local onde a síntese proteica ocorre.",
      "( ) Nas bactérias, a parede celular é a parte mais externa, reveste a membrana plasmática e pode atuar como proteção da célula contra elementos que estejam no meio ambiente, como os antibióticos, por exemplo."
    ],
    "answers": [
      { "value": "a", "name": "F F F" },
      { "value": "b", "name": "F F V" },
      { "value": "c", "name": "V V F" },
      { "value": "d", "name": "V F V" },
      { "value": "e", "name": "V V V" }
    ],
    "correct_answer": "b",
    "type": "TrueOrFalse"
  },
  {
    "utterance": "[UEL 2014] No século XX, devido às crises, houve o questionamento da racionalidade econômica e das tecnologias dominantes diante do uso desenfreado dos recursos naturais, exigindo, com isso, mudanças de atitude frente aos cuidados com o meio ambiente. Em relação às atuais políticas públicas ambientais no Brasil, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.",
    "question": [
      "( ) A Agenda Marrom, criada em 1970, ganhou importância efetiva e foi elaborada com o intuito de atender, de maneira pioneira, à  conservação da vegetação ripária nas zonas rurais.",
      "( ) A Agenda Verde é responsável pela formulação e gestão dos recursos hídricos decorrentes de atividades poluidoras, como a realização de estudos e pesquisas sobre poluição, qualidade do ar, da água e do solo.",
      "( ) A Agenda Habitat contribuiu para a elaboração da Agenda 21 Brasileira, especialmente no que tange ao eixo temático denominado Cidades Sustentáveis, com o intuito de melhorar as condições dos assentamentos humanos.",
      "( ) A erradicação da pobreza e a resolução do problema habitacional são requisitos para a promoção do desenvolvimento sustentável nas grandes cidades.",
      "( ) Apesar de pautada na década de 1980, a problemática ambiental urbana ganhou visibilidade na década de 1990, impulsionada pelos fóruns internacionais."
    ],
    "answers": [
      { "value": "a", "name": "F V F V V" },
      { "value": "b", "name": "F F V V V" },
      { "value": "c", "name": "V F V F V" },
      { "value": "d", "name": "F F V V F" },
      { "value": "e", "name": "F V F F f" }
    ],
    "correct_answer": "b",
    "type": "TrueOrFalse"
  },
  {
    "utterance": "[UEL 2011] A fauna de vertebrados do fundo de cavernas é representada por peixes, salamandras e morcegos, são animais geralmente despigmentados e, no caso dos peixes, cegos.Sobre a condição de cegueira dos peixes da caverna, atribua verdadeiro (V) ou falso (F) para as afirmativas a seguir, que explicam a razão pela qual encontramos maior incidência de peixes cegos dentro das cavernas do que fora delas, quando comparada com a população de peixes não cegos.",
    "question": [
      "( ) Dentro das cavernas, os peixes não cegos são presas fáceis dos peixes cegos.",
      "( ) Fora das cavernas, os peixes cegos são presas fáceis de predadores.",
      "( ) Fora das cavernas, os peixes não cegos levam vantagem sobre os peixes cegos.",
      "( ) Dentro das cavernas, os peixes cegos levam vantagem sobre os peixes não cegos."
    ],
    "answers": [
      { "value": "a", "name": "F V V V" },
      { "value": "b", "name": "F V V F" },
      { "value": "c", "name": "V F V F" },
      { "value": "d", "name": "V F F V" },
      { "value": "e", "name": "V V F F" }
    ],
    "correct_answer": "b",
    "type": "TrueOrFalse"
  }
]

async function population () {
  for (var index = 0; index < questions.length; index++) {
    const newQuestion = new QuestionModel({
      utterance: questions[index].utterance,
      question: questions[index].question,
      answers: questions[index].answers,
      correct_answer: questions[index].correct_answer,
      type: questions[index].type,
    })
    await newQuestion.save();
  }
}
initDB()
population()
