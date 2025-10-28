import * as React from 'react';
import type { Module } from '../../types';

export const module5: Module = {
  id: '5',
  title: 'Módulo 5: JavaScript e o Navegador: O DOM',
  lessons: [
    {
      id: '5.1',
      title: 'O que é o DOM?',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Até agora, o nosso código tem vivido principalmente na consola. Está na hora de o fazer interagir com a própria página web. É aqui que entra o DOM.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          React.createElement('strong', { className: 'text-lightest-slate' }, 'DOM significa Document Object Model (Modelo de Objeto do Documento).'),
          ' É uma representação em estrutura de árvore do teu documento HTML que o navegador cria quando carrega uma página. O JavaScript pode interagir com esta árvore para alterar a estrutura, o estilo e o conteúdo da página.'
        ),
         React.createElement(
          'p',
          { className: 'mb-4' },
          'A analogia perfeita é uma ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'árvore genealógica'),
          '. O elemento `<html>` é o patriarca. O `<body>` e o `<head>` são os seus filhos. O `<body>` pode ter filhos como `<h1>`, `<div>` e `<p>`, que por sua vez podem ter outros filhos. O JavaScript é como um genealogista que pode:'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Encontrar qualquer pessoa na árvore (selecionar um elemento).'),
          React.createElement('li', null, 'Mudar o nome de uma pessoa (alterar o texto de um elemento).'),
          React.createElement('li', null, 'Mudar a cor da roupa de uma pessoa (alterar o estilo CSS).'),
          React.createElement('li', null, 'Adicionar novas pessoas à família (criar e inserir novos elementos).'),
          React.createElement('li', null, 'Remover pessoas da árvore (remover elementos).')
        ),
         React.createElement(
          'p',
          { className: 'mt-4' },
          'O ponto de partida para interagir com o DOM é quase sempre o objeto global `document`.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - O Objeto `document`",
            description: "Abre a consola do navegador e escreve `document`. Vais ver uma representação do DOM. `console.dir(document)` é ainda melhor, pois mostra-o como um objeto que podes explorar.",
            code: `// Corre isto na consola do navegador!
console.log(document);
console.dir(document);`
          },
          {
            title: "Exemplo 2: O Caso Comum - Aceder a Partes do DOM",
            description: "O objeto `document` dá-nos acesso direto a partes importantes da página, como o `<body>`, `<head>`, e o título.",
            code: `// Aceder ao corpo da página
console.log(document.body);

// Mudar o título da página (vê o separador do teu navegador a mudar!)
document.title = "O DOM é incrível!";`
          },
          {
            title: "Exemplo 3: A Armadilha - A Ordem de Execução",
            description: "Um erro muito comum é tentar aceder a um elemento HTML com JavaScript antes de o HTML ter sido completamente carregado pelo navegador. É por isso que as tags `<script>` são muitas vezes colocadas no final do `<body>`.",
            code: `<!-- HTML -->
<!-- <script src="script.js"></script> -> Se o script estivesse aqui em cima, daria erro. -->
</head>
<body>
  <h1 id="titulo">Olá Mundo</h1>
  <script src="script.js"></script> <!-- Colocado aqui, funciona! -->
</body>

// script.js
const tituloEl = document.getElementById('titulo');
console.log(tituloEl); // Mostra o elemento <h1>`
          }
        ]
      },
      quiz: [
        {
          question: 'O que é o DOM?',
          options: [
            'Uma linguagem de programação.',
            'Uma representação em árvore do documento HTML, que pode ser manipulada por JavaScript.',
            'Um ficheiro que guarda os estilos da página, como o CSS.',
            'O servidor onde o website está alojado.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Correto! O DOM é a ponte entre o teu código HTML e o teu código JavaScript. É um "modelo" da tua página que o JS consegue entender e modificar dinamicamente.'
        },
        {
            question: "Qual é o objeto global em JavaScript que serve como ponto de entrada para o DOM?",
            options: [
              'window',
              'page',
              'document',
              'dom'
            ],
            correctAnswerIndex: 2,
            explanation: 'O objeto `document` é a representação da tua página inteira e a partir dele podes selecionar, modificar, adicionar ou remover qualquer elemento.'
        },
        {
            question: "Porque é que um script que manipula o DOM deve, preferencialmente, ser carregado no final do `<body>`?",
            options: [
              "Para carregar mais rápido.",
              "Para garantir que todos os elementos HTML já foram criados na árvore do DOM antes de o script tentar acedê-los.",
              "Porque o JavaScript não funciona dentro do `<head>`.",
              "Para não interferir com o CSS."
            ],
            correctAnswerIndex: 1,
            explanation: 'Se o script executar antes de o HTML ser processado, ele pode tentar encontrar um elemento que ainda não existe, resultando num erro. Colocá-lo no fim garante que a "árvore genealógica" está completa.'
        }
      ],
      challenge: {
        description: "Abre a consola de qualquer website (como a Wikipedia, por exemplo). Escreve e executa a seguinte linha: `document.body.style.backgroundColor = 'black';`. O que acontece? Agora tenta `document.body.style.filter = 'invert(1)';`. Descreve o que observaste. Este é o poder do DOM!",
        starterCode: `// Escreve estes comandos na consola de outro website!
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';`,
        solution: "Ao executar os comandos, o fundo do website deve ter ficado preto e a cor do texto branca. Isto demonstra como o JavaScript pode manipular diretamente os estilos (CSS) de qualquer elemento da página, alterando a sua aparência em tempo real."
      }
    },
    {
      id: '5.2',
      title: 'Selecionar Elementos',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Para manipular um elemento, primeiro precisas de o "apanhar". JavaScript oferece vários métodos para selecionar elementos, mas os mais modernos e versáteis usam seletores de CSS, os mesmos que usas para estilizar a página.'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'document.getElementById(id)'), ': A forma mais rápida de apanhar um elemento com um `id` único. Como um bilhete de identidade, não deve haver dois iguais.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'document.querySelector(seletor)'), ': O canivete suíço. Encontra o ', React.createElement('strong', { className: 'text-lightest-slate' }, 'primeiro elemento'), ' que corresponde a qualquer seletor de CSS que lhe dês (ex: `#meu-id`, `.minha-classe`, `p`). Se não encontrar nada, devolve `null`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'document.querySelectorAll(seletor)'), ': O gémeo do anterior, mas para apanhar ', React.createElement('strong', { className: 'text-lightest-slate' }, 'todos os elementos'), ' que correspondem ao seletor. Devolve uma `NodeList` (parecida com um array) que podes percorrer com um ciclo.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Selecionar por ID",
            description: "Esta é a forma mais direta. Dado um elemento com um ID, podemos selecioná-lo e guardá-lo numa variável.",
            code: `<!-- HTML -->
<h1 id="titulo-principal">O Meu Site</h1>

// JavaScript
const titulo = document.getElementById('titulo-principal');
console.log(titulo);`
          },
          {
            title: "Exemplo 2: O Caso Comum - querySelector e querySelectorAll",
            description: "Vamos usar seletores de classe e de tag para apanhar múltiplos elementos e depois percorrer a lista para fazer algo com cada um.",
            code: `<!-- HTML -->
<ul>
  <li class="item">Maçã</li>
  <li class="item">Banana</li>
  <li>Laranja</li>
</ul>

// JavaScript
const primeiroItem = document.querySelector('.item'); // Apanha só a Maçã
console.log(primeiroItem.textContent);

const todosOsItens = document.querySelectorAll('li'); // Apanha todos os <li>
todosOsItens.forEach(item => {
  console.log("Item da lista:", item.textContent);
});`
          },
          {
            title: "Exemplo 3: A Armadilha - O que acontece quando não encontra?",
            description: "`getElementById` e `querySelector` devolvem `null` se não encontrarem o elemento. Tentar aceder a uma propriedade de `null` (ex: `null.textContent`) é um erro muito comum que para a execução do script. É boa prática verificar se o elemento existe antes de o manipular.",
            code: `const elementoQueNaoExiste = document.getElementById('fantasma');

// console.log(elementoQueNaoExiste.textContent); // TypeError: Cannot read properties of null

// A forma segura:
if (elementoQueNaoExiste) {
  console.log(elementoQueNaoExiste.textContent);
} else {
  console.log("O elemento 'fantasma' não foi encontrado.");
}`
          }
        ]
      },
      quiz: [
        {
          question: "Qual método usarias para selecionar todos os parágrafos `<p>` com a classe `aviso`?",
          options: [
            "document.querySelector('p.aviso')",
            "document.getElementById('p.aviso')",
            "document.querySelectorAll('p.aviso')",
            "document.getElementsByClass('aviso')"
          ],
          correctAnswerIndex: 2,
          explanation: "Correto! `querySelectorAll` é o método ideal porque queremos 'todos' os elementos que correspondem. O seletor de CSS 'p.aviso' especifica exatamente o que procuramos."
        },
        {
            question: "O que devolve `document.querySelector('#id-que-nao-existe')`?",
            options: [
              "undefined",
              "um erro",
              "uma string vazia ''",
              "null"
            ],
            correctAnswerIndex: 3,
            explanation: "Se `querySelector` não encontrar nenhum elemento que corresponda ao seletor, ele devolve `null`. Isto é importante para que possas verificar se a seleção foi bem sucedida."
        },
        {
            question: "Qual a principal diferença entre `querySelector` e `querySelectorAll`?",
            options: [
                "`querySelector` é mais rápido.",
                "`querySelector` devolve um único elemento (o primeiro que encontra), enquanto `querySelectorAll` devolve uma lista de todos os que encontra.",
                "`querySelectorAll` só funciona com classes, e `querySelector` com IDs.",
                "Não há diferença."
            ],
            correctAnswerIndex: 1,
            explanation: "A diferença está no nome: `Query Selector` (devolve um) vs `Query Selector All` (devolve todos)."
        }
      ],
      challenge: {
        description: "Cria um HTML simples com um título `h1`, três parágrafos `<p>`, e uma lista `<ul>` com dois itens `<li>`. Um dos parágrafos deve ter a classe `destaque`. Escreve código JS para: 1. Selecionar o título e imprimir o seu texto. 2. Selecionar apenas o parágrafo em destaque e imprimir o seu texto. 3. Selecionar todos os itens da lista e imprimir o texto de cada um.",
        starterCode: `// Seleciona e imprime o título

// Seleciona e imprime o parágrafo em destaque

// Seleciona e imprime todos os itens da lista`,
        solution: `// HTML para testar:
/*
<h1 id="titulo">Título Principal</h1>
<p>Parágrafo 1.</p>
<p class="destaque">Parágrafo 2 com destaque.</p>
<p>Parágrafo 3.</p>
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>
*/

// Solução JS:
const titulo = document.querySelector('#titulo');
console.log('Título:', titulo.textContent);

const destaque = document.querySelector('.destaque');
console.log('Destaque:', destaque.textContent);

const itens = document.querySelectorAll('li');
console.log('Itens da lista:');
itens.forEach(item => {
  console.log('-', item.textContent);
});`
      }
    },
    {
      id: '5.3',
      title: 'Modificar Elementos',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Depois de selecionares um elemento, podes modificá-lo de várias maneiras. É como ter um boneco e poder mudar-lhe a roupa, o que ele diz e os acessórios que usa.'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Conteúdo (O que ele diz)'), ': Podes mudar o texto com `.textContent` (seguro) ou o HTML interno com `.innerHTML` (cuidado! pode ser inseguro se usares texto vindo do utilizador).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Estilos (A aparência)'), ': Podes alterar diretamente o CSS de um elemento através da propriedade `.style`. Por exemplo, `elemento.style.color = "red"`. Nota que propriedades CSS com hífen (ex: `background-color`) são escritas em camelCase (ex: `backgroundColor`).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Classes (A roupa)'), ': A forma preferida de alterar estilos é manipulando classes. A propriedade `.classList` é um guarda-roupa com métodos úteis: `.add("classe")`, `.remove("classe")`, e `.toggle("classe")`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Atributos (Os acessórios)'), ': Podes mudar os atributos de um elemento, como o `src` de uma imagem ou o `href` de um link, com `.setAttribute(nome, valor)` e lê-los com `.getAttribute(nome)`.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Mudar Texto e Estilos",
            description: 'Vamos selecionar um título e mudar o seu conteúdo de texto e a sua cor.',
            code: `// HTML: <h1 id="boas-vindas">Olá!</h1>

const titulo = document.getElementById('boas-vindas');

// Mudar o texto
titulo.textContent = "Bem-vindo ao DOM!";

// Mudar o estilo (a cor do texto)
titulo.style.color = "#64ffda"; // A nossa cor 'green'`
          },
          {
            title: "Exemplo 2: O Caso Comum - Manipular Classes",
            description: 'A melhor forma de alterar a aparência é ter classes CSS pré-definidas e adicioná-las ou removê-las com JavaScript. Aqui, ativamos um "dark mode" num `div`.',
            code: `/* CSS:
.dark-mode {
  background-color: #0a192f;
  color: #e6f1ff;
}
*/

// HTML: <div id="painel">Conteúdo</div>

const painel = document.getElementById('painel');
// Adiciona a classe 'dark-mode' ao elemento
painel.classList.add('dark-mode');`
          },
          {
            title: "Exemplo 3: A Armadilha - `textContent` vs. `innerHTML`",
            description: "`innerHTML` interpreta qualquer string como HTML. Se essa string vier de um utilizador, ele pode injetar código malicioso (como uma tag `<script>`). `textContent` trata tudo como texto literal, o que é muito mais seguro.",
            code: `const divSegura = document.getElementById('segura');
const divPerigosa = document.getElementById('perigosa');

const inputMalicioso = '<img src="x" onerror="alert(\'XSS Attack!\')">';

divSegura.textContent = inputMalicioso; // A página mostra o texto literal
// divPerigosa.innerHTML = inputMalicioso; // Descomentar isto executaria o alerta!`
          }
        ]
      },
      quiz: [
        {
          question: "Qual é a principal razão para preferir `textContent` em vez de `innerHTML` ao inserir texto de fontes não confiáveis?",
          options: [
            'É mais rápido.',
            'É mais fácil de escrever.',
            'Evita ataques de Cross-Site Scripting (XSS) porque não interpreta o texto como HTML.',
            'Funciona em navegadores mais antigos.'
          ],
          correctAnswerIndex: 2,
          explanation: "`innerHTML` interpreta qualquer string como HTML, o que significa que um utilizador malicioso poderia injetar uma tag `<script>` e executar código na tua página. `textContent` trata tudo como texto simples, neutralizando este risco de segurança."
        },
        {
            question: "Como adicionarias a classe CSS 'ativo' a um elemento guardado na variável `meuElemento`?",
            options: [
                "meuElemento.style = 'ativo';",
                "meuElemento.className = 'ativo';",
                "meuElemento.classList.add('ativo');",
                "meuElemento.setAttribute('class', 'add', 'ativo');"
            ],
            correctAnswerIndex: 2,
            explanation: "A propriedade `.classList` é a interface moderna e mais segura para manipular classes. O método `.add()` adiciona uma ou mais classes ao elemento."
        },
        {
            question: "Qual a sintaxe correta para alterar a cor de fundo de um elemento `el` para azul?",
            options: [
                "el.style.background-color = 'blue';",
                "el.style.backgroundColor = 'blue';",
                "el.style = 'background-color: blue;';",
                "el.css('backgroundColor', 'blue');"
            ],
            correctAnswerIndex: 1,
            explanation: "Propriedades CSS com hífen (kebab-case) são convertidas para camelCase em JavaScript ao aceder ao objeto `.style`."
        }
      ],
      challenge: {
        description: "Cria um HTML com um `<img>` e um botão. A imagem começa com um `src` de uma imagem A. Quando o botão é clicado, o JavaScript deve alterar o atributo `src` da imagem para o URL de uma imagem B.",
        starterCode: `// HTML para testar:
/*
<img id="minha-imagem" src="URL_IMAGEM_A" alt="Imagem" width="200">
<button id="meu-botao">Mudar Imagem</button>
*/

// JS:
const imagem = document.getElementById('minha-imagem');
const botao = document.getElementById('meu-botao');
const URL_IMAGEM_B = "URL_DA_TUA_IMAGEM_B";

// Adiciona o event listener ao botão aqui`,
        solution: `const imagem = document.getElementById('minha-imagem');
const botao = document.getElementById('meu-botao');
const URL_IMAGEM_B = "https://via.placeholder.com/200/0000FF/FFFFFF?text=Imagem+B";

botao.addEventListener('click', () => {
  imagem.setAttribute('src', URL_IMAGEM_B);
});`
      }
    },
    {
      id: '5.4',
      title: 'Manipulação de Eventos',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'A interatividade num website vem da capacidade de responder a ações do utilizador. Estas ações são chamadas de "eventos". JavaScript permite-nos "ouvir" estes eventos e executar código em resposta.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'A analogia é como instalar um sensor de movimento. Usas a ferramenta `addEventListener` para o fazer. Precisas de três coisas:'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, '1. O ', React.createElement('strong', { className: 'text-lightest-slate' }, 'elemento'), ' onde instalar o sensor (ex: um botão).'),
          React.createElement('li', null, '2. O ', React.createElement('strong', { className: 'text-lightest-slate' }, 'tipo de evento'), ' a que o sensor reage (ex: um `"click"`).'),
          React.createElement('li', null, '3. A ', React.createElement('strong', { className: 'text-lightest-slate' }, 'função a executar'), ' (a "callback") quando o sensor dispara (ex: acender uma luz).')
        ),
        React.createElement(
          'p',
          { className: 'mt-4' },
          'Eventos comuns incluem `click`, `mouseover` (passar o rato por cima), `keydown` (pressionar uma tecla), e `submit` (submeter um formulário).'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Alerta ao Clicar",
            description: 'Vamos adicionar um "ouvinte de evento" a um botão que mostra uma mensagem de alerta quando é clicado.',
            code: `// HTML: <button id="alerta-btn">Clica-me!</button>

const botao = document.getElementById('alerta-btn');

function mostrarAlerta() {
  alert('Botão clicado!');
}

botao.addEventListener('click', mostrarAlerta);`
          },
          {
            title: "Exemplo 2: O Caso Comum - O Objeto `event`",
            description: 'A função de callback recebe automaticamente um argumento, o objeto `event`, que contém informação sobre o evento. `event.target` é muito útil, pois refere-se ao elemento que despoletou o evento.',
            code: `// HTML: <div id="caixa">Clica aqui dentro</div>

const caixa = document.getElementById('caixa');

caixa.addEventListener('click', function(event) {
  console.log('O evento aconteceu em:', event.target);
  event.target.textContent = 'Fui clicado!';
});`
          },
          {
            title: "Exemplo 3: A Armadilha - `minhaFuncao` vs `minhaFuncao()`",
            description: "Um erro clássico é passar a função com parênteses `()` para o `addEventListener`. Isto executa a função imediatamente em vez de esperar pelo evento. Deves passar a referência da função (o seu nome) sem a chamar.",
            code: `const botao = document.getElementById('meu-botao');

// CORRETO: Passa a referência da função
botao.addEventListener('click', handleClick);

// ERRADO: Chama a função imediatamente e passa o seu resultado (undefined)
// como callback. O alerta aparece assim que a página carrega.
// botao.addEventListener('click', alert('Isto está errado!'));`
          }
        ]
      },
      quiz: [
        {
          question: "Qual é a sintaxe correta para executar a função `mostrarAlerta` quando um botão com o id 'meuBotao' é clicado?",
          options: [
            "meuBotao.addEventListener('click', mostrarAlerta());",
            "document.getElementById('meuBotao').addEventListener('click', mostrarAlerta);",
            "document.getElementById('meuBotao').onClick = mostrarAlerta();",
            "document.querySelector('#meuBotao').listen('click', mostrarAlerta);"
          ],
          correctAnswerIndex: 1,
          explanation: "Usamos `addEventListener` no elemento selecionado. O nome da função (`mostrarAlerta`) é passado como referência (sem os parênteses `()`), para que o navegador a possa chamar mais tarde quando o evento ocorrer."
        },
        {
            question: "Dentro de uma função de callback de um evento, o que representa `event.target`?",
            options: [
                "O tipo de evento (ex: 'click').",
                "O documento HTML inteiro.",
                "O elemento exato que despoletou o evento.",
                "A posição do cursor do rato."
            ],
            correctAnswerIndex: 2,
            explanation: "`event.target` é extremamente útil para saber qual o elemento que originou o evento, especialmente quando tens o mesmo 'ouvinte' em múltiplos elementos."
        },
        {
            question: "Qual evento usarias para detetar quando o utilizador prime uma tecla no teclado?",
            options: [
                "'click'",
                "'mouseover'",
                "'submit'",
                "'keydown'"
            ],
            correctAnswerIndex: 3,
            explanation: "O evento `keydown` é despoletado assim que uma tecla é pressionada. Existem também o `keyup` (quando a tecla é libertada) e o `keypress` (geralmente para teclas que produzem caracteres)."
        }
      ],
      challenge: {
        description: "Cria um contador simples. O HTML deve ter um `<h2>` com o id `contador` (a começar com o texto '0') e dois botões, um com o id `incrementar` e outro com `decrementar`. Usa `addEventListener` para que o botão de incrementar aumente o número no `<h2>` e o de decrementar o diminua.",
        starterCode: `// HTML para testar:
/*
<h2 id="contador">0</h2>
<button id="incrementar">+</button>
<button id="decrementar">-</button>
*/

// JS:
const contadorEl = document.getElementById('contador');
const incBtn = document.getElementById('incrementar');
const decBtn = document.getElementById('decrementar');

let contagem = 0;

// Adiciona os teus event listeners aqui`,
        solution: `const contadorEl = document.getElementById('contador');
const incBtn = document.getElementById('incrementar');
const decBtn = document.getElementById('decrementar');

let contagem = 0;

incBtn.addEventListener('click', () => {
  contagem++;
  contadorEl.textContent = contagem;
});

decBtn.addEventListener('click', () => {
  contagem--;
  contadorEl.textContent = contagem;
});`
      }
    },
    {
      id: '5.5',
      title: 'Criar e Remover Elementos',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'O JavaScript não se limita a manipular elementos existentes; ele pode criar novos elementos do zero e adicioná-los à página, ou remover elementos que já não são necessários. Isto é a base de todas as aplicações web dinâmicas.'
        ),
         React.createElement(
          'p',
          { className: 'mb-4' },
          'É um processo de dois passos, como construir um móvel do IKEA:'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, '1. ', React.createElement('strong', { className: 'text-green' }, 'Construir o móvel (Criar o elemento)'), ': Usas `document.createElement("tagName")`. Isto cria o elemento, mas ele existe apenas em memória, fora da página.'),
          React.createElement('li', null, '2. ', React.createElement('strong', { className: 'text-green' }, 'Colocar o móvel no sítio (Anexar o elemento)'), ': Depois de o construíres e talvez personalizares (ex: com `.textContent`), precisas de o adicionar a um elemento que já está na página. Usas `elementoPai.appendChild(novoElemento)` para o colocar no final do elemento pai.')
        ),
        React.createElement(
          'p',
          { className: 'mt-4' },
          'Para remover um elemento, a forma mais moderna e simples é chamar `.remove()` no próprio elemento que queres remover: `elementoARemover.remove()`.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Adicionar um Item a uma Lista",
            description: 'Vamos criar um novo `<li>` e adicioná-lo a uma lista `<ul>` que já existe na página.',
            code: `// HTML: <ul id="minha-lista"><li>Primeiro item</li></ul>

const lista = document.getElementById('minha-lista');

// 1. Criar o elemento
const novoItem = document.createElement('li');

// 2. Personalizar (opcional, mas recomendado)
novoItem.textContent = "Segundo item";

// 3. Anexar ao DOM
lista.appendChild(novoItem);`
          },
          {
            title: "Exemplo 2: O Caso Comum - Criar e Remover",
            description: 'Vamos criar um elemento com um botão para se auto-remover quando clicado.',
            code: `const container = document.getElementById('container'); // Um div vazio

const paragrafoRemovivel = document.createElement('p');
paragrafoRemovivel.textContent = "Clica em mim para me removeres.";

paragrafoRemovivel.addEventListener('click', (event) => {
  event.target.remove(); // Remove o próprio elemento que foi clicado
});

container.appendChild(paragrafoRemovivel);`
          },
          {
            title: "Exemplo 3: A Armadilha - Anexar um Elemento Existente",
            description: "Se tentares usar `appendChild` num elemento que já está no DOM, ele não será clonado, será MOVIDO da sua posição original para a nova. Isto pode ser útil, mas também uma fonte de bugs se não for o comportamento esperado.",
            code: `// HTML:
// <div id="div1"><p id="paragrafo">Olá</p></div>
// <div id="div2"></div>

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const paragrafo = document.getElementById('paragrafo');

// Move o parágrafo da div1 para a div2
div2.appendChild(paragrafo);`
          }
        ]
      },
      quiz: [
        {
          question: "Depois de criar um novo parágrafo com `const p = document.createElement('p')`, o que precisas de fazer para que ele apareça na página?",
          options: [
            'Nada, ele aparece automaticamente.',
            'Adicioná-lo ao `document` com `document.add(p)`.',
            'Anexá-lo a um elemento já existente no DOM usando um método como `appendChild()`.',
            'Reiniciar a página.'
          ],
          correctAnswerIndex: 2,
          explanation: "Criar um elemento com `createElement` apenas o cria na memória. Para o tornar visível, tens de o inserir na árvore do DOM, anexando-o a um elemento pai que já faça parte da página."
        },
        {
            question: "Qual método cria um novo elemento HTML em JavaScript?",
            options: [
                "document.newElement('div')",
                "document.make('div')",
                "document.createElement('div')",
                "document.build('div')"
            ],
            correctAnswerIndex: 2,
            explanation: "`document.createElement()` é o método fundamental para criar novos nós de elementos no DOM."
        },
        {
            question: "Qual é a forma mais simples e moderna de remover um elemento `el` do DOM?",
            options: [
                "el.remove()",
                "el.parentNode.removeChild(el)",
                "document.delete(el)",
                "el.display = 'none'"
            ],
            correctAnswerIndex: 0,
            explanation: "Enquanto `el.parentNode.removeChild(el)` é a forma mais antiga e ainda funciona, `el.remove()` é a API moderna, mais curta e legível para remover um elemento diretamente."
        }
      ],
      challenge: {
        description: "Cria uma To-Do List simples. O HTML deve ter um `<input>` de texto, um botão 'Adicionar' e uma `<ul>`. Quando o botão é clicado, o texto do input deve ser usado para criar um novo `<li>`, que é adicionado à lista. Bónus: faz com que o campo de texto seja limpo após adicionar o item.",
        starterCode: `// HTML para testar:
/*
<input id="todo-input" type="text" placeholder="Nova tarefa...">
<button id="add-btn">Adicionar</button>
<ul id="todo-list"></ul>
*/

// JS:
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Adiciona o event listener ao botão aqui`,
        solution: `const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  const textoTarefa = input.value;

  if (textoTarefa.trim() !== '') {
    // 1. Criar o novo elemento
    const novoLi = document.createElement('li');
    // 2. Definir o seu conteúdo
    novoLi.textContent = textoTarefa;
    // 3. Adicioná-lo à lista no DOM
    list.appendChild(novoLi);

    // Bónus: Limpar o input
    input.value = '';
  }
});`
      }
    }
  ]
};
