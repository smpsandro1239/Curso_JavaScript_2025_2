import * as React from 'react';
import type { Module } from '../../types';

// Illustrations
const DOMIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Root (document)
  React.createElement('circle', { cx: "100", cy: "10", r: "8", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "100", y: "12", textAnchor: "middle", fontSize: "5", fill: "#a8b2d1" }, "html"),
  
  // Body and Head
  React.createElement('line', { x1: "100", y1: "18", x2: "60", y2: "30" }),
  React.createElement('circle', { cx: "60", cy: "35", r: "8", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "60", y: "37", textAnchor: "middle", fontSize: "5", fill: "#a8b2d1" }, "head"),

  React.createElement('line', { x1: "100", y1: "18", x2: "140", y2: "30" }),
  React.createElement('circle', { cx: "140", cy: "35", r: "8", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "140", y: "37", textAnchor: "middle", fontSize: "5", fill: "#a8b2d1" }, "body"),
  
  // Children of Body
  React.createElement('line', { x1: "140", y1: "43", x2: "120", y2: "55" }),
  React.createElement('rect', { x: "115", y: "60", width: "10", height: "10", fill: "#64ffda", opacity: "0.5" }),
  React.createElement('text', { x: "120", y: "78", textAnchor: "middle", fontSize: "5", fill: "#a8b2d1" }, "h1"),

  React.createElement('line', { x1: "140", y1: "43", x2: "160", y2: "55" }),
  React.createElement('rect', { x: "155", y: "60", width: "10", height: "10", fill: "#64ffda", opacity: "0.5" }),
  React.createElement('text', { x: "160", y: "78", textAnchor: "middle", fontSize: "5", fill: "#a8b2d1" }, "p")
);

const EventBubblingIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('rect', { x: "10", y: "10", width: "180", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "20", y: "25", fontSize: "8", fill: "#a8b2d1" }, "div (pai)"),
    React.createElement('rect', { x: "40", y: "20", width: "120", height: "60", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "50", y: "35", fontSize: "8", fill: "#a8b2d1" }, "form (filho)"),
    React.createElement('rect', { x: "70", y: "30", width: "60", height: "40", fill: "#233554", stroke: "#8892b0", rx: "5" }),
    React.createElement('text', { x: "100", y: "55", textAnchor: "middle", fontSize: "8", fill: "#ccd6f6" }, "button"),
    React.createElement('path', { d: "M 100 50 L 90 40", stroke: "#64ffda", strokeWidth: "1.5" }),
    React.createElement('text', { x: "85", y: "38", fontSize: "10", fill: "#64ffda" }, "Click!"),
    React.createElement('path', { d: "M 100 60 C 120 75, 140 85, 160 90", fill: "none", stroke: "#64ffda", strokeWidth: "1", strokeDasharray: "3 3" }),
    React.createElement('path', { d: "M 165 90 L 160 90 L 162 85", fill: "#64ffda" })
);

const FormsIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('rect', { x: "10", y: "20", width: "180", height: "60", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "20", y: "35", fontSize: "7", fill: "#a8b2d1" }, "Email:"),
    React.createElement('rect', { x: "20", y: "40", width: "100", height: "15", fill: "#233554" }),
    React.createElement('rect', { x: "130", y: "40", width: "50", height: "15", fill: "#64ffda" }),
    React.createElement('text', { x: "155", y: "50", textAnchor: "middle", fontSize: "7", fill: "#0a192f", fontWeight: "bold" }, "Enviar"),
    React.createElement('path', { d: "M 180 50 L 195 50 L 190 45 M 195 50 L 190 55", stroke: "red", strokeWidth: "1.5"}),
    React.createElement('text', { x: "160", y: "15", textAnchor: "middle", fontSize: "7", fill: "red" }, "preventDefault()")
);

export const module5: Module = {
  id: '5',
  title: 'Módulo 5: JavaScript e o Navegador: O DOM',
  lessons: [
    {
      id: '5.1',
      title: 'O que é o DOM?',
      illustration: React.createElement(DOMIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Quando o navegador carrega uma página HTML, ele cria uma representação em memória desse documento. A essa representação chamamos DOM - Document Object Model.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia é uma árvore genealógica. O `<html>` é o ancestral mais antigo. O `<head>` e o `<body>` são os seus filhos. O `<body>` pode ter filhos como `<h1>`, `<p>` e `<div>`, e assim por diante.'),
        React.createElement('p', { className: 'mb-4' }, 'O JavaScript pode interagir com esta "árvore", permitindo-nos criar páginas dinâmicas e interativas.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - O Objeto `document`',
            description: 'O ponto de entrada para o DOM é o objeto global `document`. Podes explorá-lo na consola para veres as imensas propriedades e métodos que ele contém.',
            code: `// Escreve na consola:
console.log(document);`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Explorar o DOM',
            description: 'A melhor forma de entender o DOM é vê-lo. Abre as Ferramentas de Programador (F12) e vai à aba "Elements". Vês a estrutura em árvore? Clica nas setas para expandir e colapsar os nós. Passa o rato por cima dos elementos no painel e vê como eles são realçados na página.',
            code: `// Não há código para escrever aqui.
// A prática é usar as DevTools para explorar o DOM desta página.`
          },
          {
            title: 'Exemplo 3: A Nuance - DOM não é HTML',
            description: 'É importante perceber que o DOM não é o teu ficheiro HTML. É a representação "viva" desse HTML. O JavaScript manipula o DOM, e o navegador atualiza o que vês no ecrã em conformidade. Se alterares o DOM, não estás a alterar o teu ficheiro `index.html` original.',
            code: `// O DOM pode ser modificado, o teu ficheiro fonte não.`
          }
        ]
      },
      quiz: [
        {
          question: 'O que é o DOM?',
          options: ['Uma linguagem de programação.', 'Uma representação em memória do documento HTML em forma de árvore.', 'Um ficheiro de estilos CSS.', 'Um servidor web.'],
          correctAnswerIndex: 1,
          explanation: 'O DOM é a estrutura de objetos que o navegador cria para representar o HTML, permitindo que linguagens como o JavaScript a manipulem.'
        }
      ],
      challenge: {
        description: "Abre a consola nesta página e escreve `document.body`. Expande o objeto que aparece. Tenta encontrar a propriedade `children` e expande-a também. O que vês?",
        starterCode: `// Escreve na consola:
document.body`,
        solution: "Deverás ver uma representação do elemento `<body>` e, dentro de `children`, uma `HTMLCollection` com os seus filhos diretos (neste caso, o `div` com o id `root`)."
      }
    },
    {
      id: '5.2',
      title: 'Selecionar Elementos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Antes de podermos manipular um elemento, temos de o "capturar". O objeto global `document` dá-nos vários métodos para fazer isso:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`document.getElementById(\'id\')`:'), ' O mais rápido. Vai buscar o único elemento com um `id`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`document.querySelector(\'seletor\')`:'), ' O mais versátil. Encontra o PRIMEIRO elemento que corresponde a um seletor CSS.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`document.querySelectorAll(\'seletor\')`:'), ' Retorna TODOS os elementos que correspondem ao seletor.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo de HTML para os seletores',
            description: 'Vamos usar este pequeno HTML como base para os exemplos seguintes.',
            code: `<!-- HTML de Exemplo -->
<div id="principal">
  <h1 class="titulo">Título Principal</h1>
  <p>Um parágrafo de texto.</p>
  <p class="destaque">Outro parágrafo.</p>
</div>`
          },
          {
            title: 'Exemplo 1: O Básico - `getElementById`',
            description: 'Este método é muito rápido e direto, mas requer que o teu elemento tenha um `id`.',
            code: `// Assume o HTML acima.
const divPrincipal = document.getElementById('principal');
console.log(divPrincipal);`
          },
          {
            title: 'Exemplo 2: O Caso Comum - `querySelector` (Recomendado)',
            description: 'Podemos usar qualquer seletor CSS. Aqui, apanhamos o `h1` pela sua classe e o parágrafo que está dentro do `div` com id `principal`.',
            code: `const titulo = document.querySelector('.titulo');
const paragrafo = document.querySelector('#principal p');
console.log(titulo.textContent);`
          },
          {
            title: 'Exemplo 3: A Nuance - `querySelectorAll`',
            description: 'Aqui, selecionamos todos os parágrafos (`<p>`). O resultado é uma NodeList, que parece um array e podemos percorrer com `forEach`.',
            code: `const todosOsParagrafos = document.querySelectorAll('p');
todosOsParagrafos.forEach(p => {
  console.log(p.textContent);
});`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual método usarias para selecionar todos os elementos com a classe `item-lista`?',
          options: ['`querySelector(".item-lista")`', '`getElementById("item-lista")`', '`querySelectorAll(".item-lista")`'],
          correctAnswerIndex: 2,
          explanation: '`querySelectorAll` é o método correto para selecionar múltiplos elementos que correspondem a um seletor CSS.'
        },
        {
          question: '`document.querySelector("p")` retorna...',
          options: ['Todos os parágrafos da página.', 'O primeiro parágrafo da página.', 'Um erro, o seletor é inválido.', 'O último parágrafo da página.'],
          correctAnswerIndex: 1,
          explanation: '`querySelector` pára e retorna assim que encontra o primeiro elemento que corresponde ao seletor.'
        }
      ],
      challenge: {
        description: "Imagina que tens uma página com vários links `<a>`. Escreve o código para selecionar todos os links e imprimir o seu `href` (o URL para onde apontam) na consola.",
        starterCode: `// HTML:
// <a href="/pagina1">Link 1</a>
// <a href="/pagina2">Link 2</a>

const todosOsLinks = document.querySelectorAll('a');

// O teu código aqui para percorrer e imprimir`,
        solution: `const todosOsLinks = document.querySelectorAll('a');

todosOsLinks.forEach(link => {
  console.log(link.href);
});`
      }
    },
     {
      id: '5.3',
      title: 'Manipular Elementos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Depois de selecionar um elemento, as manipulações mais comuns são:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Conteúdo:'), ' `elemento.textContent` (para texto) e `elemento.innerHTML` (para HTML).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Estilos:'), ' `elemento.style` (para estilos inline) ou `elemento.classList` (para manipular classes CSS - a forma recomendada).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Atributos:'), ' `elemento.setAttribute(\'nome\', \'valor\')` e `elemento.getAttribute(\'nome\')`.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Alterar Texto',
            description: 'Selecionamos o título e mudamos o seu texto. `.textContent` é seguro pois interpreta tudo como texto simples.',
            code: `// HTML: <h1 id="titulo">Olá Mundo</h1>
const titulo = document.getElementById('titulo');
titulo.textContent = "Olá JavaScript!";`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Alterar Estilos com `classList`',
            description: 'Esta é a forma recomendada. Adicionamos uma classe CSS que define o estilo, mantendo a separação de responsabilidades.',
            code: `// HTML: <p id="aviso">Cuidado!</p>
// CSS: .alerta { font-weight: bold; background-color: yellow; }
const aviso = document.getElementById('aviso');
aviso.classList.add('alerta');`
          },
          {
            title: 'Exemplo 3: A Armadilha - `innerHTML` vs. `textContent`',
            description: '`innerHTML` permite inserir HTML, mas deve ser usado com cuidado. Se inserires HTML vindo de um utilizador sem o "limpar" primeiro, abres uma vulnerabilidade de segurança (XSS). `textContent` é sempre seguro.',
            code: `const container = document.querySelector('#container');
// Seguro:
container.textContent = '<strong>Isto é apenas texto.</strong>';
// Perigoso (se o conteúdo vier de fora):
container.innerHTML = '<strong>Isto é HTML a sério!</strong>';`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é a forma recomendada de alterar a aparência de um elemento?',
          options: ['Usar `elemento.style` para todas as propriedades.', 'Definir estilos numa classe CSS e depois adicionar/remover essa classe com `elemento.classList`.', 'Usar `elemento.innerHTML`.'],
          correctAnswerIndex: 1,
          explanation: 'Usar `classList` mantém a separação de responsabilidades (CSS para estilos, JS para comportamento), tornando o código mais limpo.'
        }
      ],
      challenge: {
        description: "Seleciona uma imagem na página e muda o seu atributo `src` para um novo URL de imagem. Depois, adiciona uma classe 'imagem-redonda' a essa imagem.",
        starterCode: `// HTML: <img id="minha-imagem" src="url_antigo.jpg">
// CSS: .imagem-redonda { border-radius: 50%; }

const imagem = document.getElementById('minha-imagem');

// O teu código aqui`,
        solution: `const imagem = document.getElementById('minha-imagem');

imagem.setAttribute('src', 'https://picsum.photos/200'); // URL de uma imagem aleatória
imagem.classList.add('imagem-redonda');`
      }
    },
    {
      id: '5.4',
      title: 'Criar e Remover Elementos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Podemos criar novos elementos do zero e adicioná-los à página, ou remover os que já existem.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`document.createElement(\'tag\')`:'), ' Cria um novo elemento (ex: `p`, `div`).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`elementoPai.append(elementoFilho)`:'), ' Adiciona o `elementoFilho` ao final do `elementoPai`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`elemento.remove()`:'), ' Remove o elemento do DOM.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Adicionar um item a uma lista',
            description: 'Criamos um novo `<li>`, definimos o seu texto, e adicionamo-lo à `<ul>` existente.',
            code: `// HTML: <ul id="lista"><li>Primeiro</li></ul>
const lista = document.getElementById('lista');

const novoItem = document.createElement('li');
novoItem.textContent = "Segundo";

lista.append(novoItem);`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Criar uma estrutura mais complexa',
            description: 'Podemos criar um elemento e depois adicionar-lhe filhos antes de o colocar no DOM.',
            code: `// HTML: <div id="container"></div>
const container = document.getElementById('container');

const cartao = document.createElement('div');
cartao.classList.add('cartao-produto');

const titulo = document.createElement('h3');
titulo.textContent = 'Novo Produto';

cartao.append(titulo);
container.append(cartao);`
          },
          {
            title: 'Exemplo 3: A Nuance - Remover um elemento',
            description: 'Para remover, basta selecionar o elemento que queres apagar e chamar `.remove()` nele.',
            code: `// HTML: <p id="para-remover">Este texto vai desaparecer.</p>
const paragrafo = document.getElementById('para-remover');
// Espera 2 segundos e remove o parágrafo
setTimeout(() => {
  paragrafo.remove();
}, 2000);`
          }
        ]
      },
       quiz: [
        {
          question: 'Qual método cria um novo elemento `<h2>` em memória?',
          options: ['`document.create("h2")`', '`document.createElement("h2")`', '`document.new("h2")`'],
          correctAnswerIndex: 1,
          explanation: '`document.createElement()` é o método correto para criar um novo nó de elemento a partir de um nome de tag.'
        }
      ],
      challenge: {
        description: "Dado um array de nomes, cria um `<li>` para cada nome e adiciona-o a uma `<ul>` na página.",
        starterCode: `// HTML: <ul id="lista-nomes"></ul>
const nomes = ["Ana", "Rui", "Marta"];
const lista = document.getElementById('lista-nomes');

// O teu loop aqui`,
        solution: `const nomes = ["Ana", "Rui", "Marta"];
const lista = document.getElementById('lista-nomes');

for (const nome of nomes) {
  const item = document.createElement('li');
  item.textContent = nome;
  lista.append(item);
}`
      }
    },
    {
      id: '5.5',
      title: 'Ouvir Eventos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'O JavaScript torna as páginas interativas ao "ouvir" por ações do utilizador (eventos). A forma moderna de o fazer é com `addEventListener`.'),
        React.createElement('p', { className: 'mb-4' }, '`elemento.addEventListener(\'tipoDeEvento\', funcaoCallback);`'),
        React.createElement('p', { className: 'mb-4' }, 'Os eventos mais comuns são `click`, `mouseover` (passar o rato por cima), `keydown` (pressionar uma tecla), e `submit` (submeter um formulário).')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Ouvir por um clique',
            description: 'Selecionamos um botão. Adicionamos um "ouvinte" para o evento `click`. Quando o botão é clicado, a função anónima (callback) é executada.',
            code: `// HTML: <button id="meu-botao">Clica em Mim</button>
const botao = document.getElementById('meu-botao');
botao.addEventListener('click', () => {
  console.log('O botão foi clicado!');
});`
          },
          {
            title: 'Exemplo 2: O Caso Comum - O objeto `event`',
            description: 'A função de callback recebe automaticamente um argumento, que é um objeto de evento. Este objeto contém informação útil sobre o evento, como as coordenadas do rato (`event.clientX`) ou a tecla que foi pressionada (`event.key`).',
            code: `// HTML: <input type="text" id="meu-input">
const input = document.getElementById('meu-input');
input.addEventListener('keydown', (event) => {
  console.log(\`Tecla pressionada: \${event.key}\`);
});`
          },
          {
            title: 'Exemplo 3: A Nuance - `this` em Event Listeners',
            description: 'Dentro de um event listener declarado com `function` (e não arrow function), a palavra-chave `this` refere-se ao elemento que despoletou o evento. Com arrow functions, `this` mantém o seu valor do contexto exterior.',
            code: `const botao = document.getElementById('meu-botao');
botao.addEventListener('click', function() {
  // 'this' aqui é o próprio botão
  this.textContent = 'Fui clicado!';
});`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é o primeiro argumento de `addEventListener`?',
          options: ['A função a executar.', 'Um objeto de configuração.', 'Uma string com o nome do evento (ex: "click").'],
          correctAnswerIndex: 2,
          explanation: 'O primeiro argumento especifica o tipo de evento que queremos "ouvir".'
        }
      ],
      challenge: {
        description: "Cria um `div` quadrado. Adiciona um event listener para `mouseover` que muda a cor de fundo do `div` para verde, e outro para `mouseout` que a volta a pôr na cor original.",
        starterCode: `// HTML: <div id="caixa" style="width: 100px; height: 100px; border: 1px solid white;"></div>
const caixa = document.getElementById('caixa');

// Adiciona os teus event listeners aqui`,
        solution: `const caixa = document.getElementById('caixa');
const corOriginal = caixa.style.backgroundColor;

caixa.addEventListener('mouseover', () => {
  caixa.style.backgroundColor = 'green';
});

caixa.addEventListener('mouseout', () => {
  caixa.style.backgroundColor = corOriginal;
});`
      }
    },
    {
      id: '5.6',
      title: 'Aprofundamento: Propagação de Eventos (Bubbling)',
      illustration: React.createElement(EventBubblingIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Quando um evento acontece num elemento (ex: um clique num botão), ele não pára aí. Depois de ser tratado no botão, o evento "borbulha" (bubbles up) para o elemento pai, depois para o pai desse, e assim por diante, até chegar ao `<html>`.'),
        React.createElement('p', { className: 'mb-4' }, 'Isto é útil para um padrão chamado "delegação de eventos", mas por vezes queremos parar esta propagação. Podemos fazê-lo com `evento.stopPropagation()` dentro da nossa função de callback.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Ver o Bubbling',
            description: 'Clica no botão interior. Verás que ambos os alertas são acionados: primeiro o do botão, depois o do seu `div` pai.',
            code: `// HTML: <div id="exterior"><button id="interior">Clica</button></div>
const exterior = document.getElementById('exterior');
const interior = document.getElementById('interior');

interior.addEventListener('click', () => {
  alert('Botão Interior Clicado!');
});

exterior.addEventListener('click', () => {
  alert('Div Exterior Clicado!');
});`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Parar o "borbulhar"',
            description: 'Agora, ao clicar no botão, usamos `e.stopPropagation()`. O evento é tratado no botão e a sua propagação para. O alerta do `div` exterior nunca é acionado.',
            code: `// HTML: <div id="exterior"><button id="interior">Clica</button></div>
// (Assume os mesmos seletores do exemplo anterior)
interior.addEventListener('click', (e) => {
  e.stopPropagation(); // Impede o evento de "borbulhar"
  alert('Botão Interior Clicado (propagação parada)!');
});`
          },
          {
            title: 'Exemplo 3: A Nuance - Delegação de Eventos',
            description: 'Em vez de adicionar um listener a cada `<li>`, adicionamos um único listener ao `<ul>` pai. Graças ao bubbling, o clique em qualquer `<li>` irá "borbulhar" até ao `<ul>`, onde o apanhamos. O `e.target` diz-nos qual o `<li>` exato que foi clicado.',
            code: `// HTML: <ul id="lista-delegada"><li>Item 1</li><li>Item 2</li></ul>
const lista = document.getElementById('lista-delegada');
lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Clicaste em:', e.target.textContent);
  }
});`
          }
        ]
      },
      quiz: [
        {
          question: 'O que `evento.stopPropagation()` faz?',
          options: ['Causa um erro.', 'Impede que o evento se propague para os elementos pais.', 'Executa o evento duas vezes.'],
          correctAnswerIndex: 1,
          explanation: '`stopPropagation()` é o método que usamos no objeto de evento para impedir o comportamento de bubbling.'
        }
      ],
      challenge: {
        description: "Cria três `divs` aninhados (avô, pai, filho). Adiciona um ouvinte de clique a cada um que imprima o seu nome na consola. Clica no `div` mais interior e observa a ordem em que as mensagens aparecem. Agora, modifica o código do `div` filho para parar a propagação.",
        starterCode: `// HTML:
// <div id="avo"><div id="pai"><div id="filho">Clica aqui</div></div></div>

const avo = document.getElementById('avo');
const pai = document.getElementById('pai');
const filho = document.getElementById('filho');

avo.addEventListener('click', () => console.log('Avô'));
pai.addEventListener('click', () => console.log('Pai'));
filho.addEventListener('click', () => console.log('Filho'));`,
        solution: `// Adiciona esta linha ao listener do filho:
filho.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Filho');
});
// Agora, ao clicar, apenas "Filho" será impresso.`
      }
    },
    {
      id: '5.7',
      title: 'Aprofundamento: Trabalhar com Formulários',
      illustration: React.createElement(FormsIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Formulários são uma parte crucial da web. Ao lidar com eles, há dois conceitos-chave:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Ouvimos o evento `submit` no elemento `<form>`, não o `click` no botão.'),
          React.createElement('li', null, 'Usamos `evento.preventDefault()` para impedir o comportamento padrão do navegador, que é recarregar a página ao submeter um formulário.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Capturar dados de um formulário',
            description: 'Ouvimos o `submit`. Prevenimos o recarregamento. Depois, selecionamos o input e lemos o seu valor com a propriedade `.value`.',
            code: `// HTML: 
// <form id="meu-form">
//   <input type="text" id="nome-input" placeholder="O teu nome">
//   <button type="submit">Enviar</button>
// </form>

const form = document.getElementById('meu-form');
const input = document.getElementById('nome-input');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // A linha mais importante!
  const nome = input.value;
  console.log(\`Olá, \${nome}!\`);
});`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Limpar o formulário após submissão',
            description: 'Após capturar os dados, é boa prática limpar os campos do formulário para o utilizador poder inserir novos dados.',
            code: `// ... (código do exemplo anterior)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = input.value;
  console.log(\`Olá, \${nome}!\`);

  input.value = ''; // Limpa o campo
});`
          },
          {
            title: 'Exemplo 3: A Nuance - Validação simples',
            description: 'Antes de processar os dados, devemos sempre validar. Aqui, verificamos se o campo não está vazio.',
            code: `// ... (código do exemplo anterior)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = input.value.trim(); // .trim() remove espaços em branco

  if (nome === '') {
    alert("Por favor, preencha o nome.");
    return; // Para a execução da função
  }
  
  console.log(\`Olá, \${nome}!\`);
  input.value = '';
});`
          }
        ]
      },
      quiz: [
        {
          question: 'O que `evento.preventDefault()` faz num evento de `submit` de um formulário?',
          options: ['Apaga os dados do formulário.', 'Impede que a página seja recarregada.', 'Submete o formulário duas vezes.'],
          correctAnswerIndex: 1,
          explanation: '`preventDefault()` é essencial para que possamos lidar com os dados do formulário com JavaScript sem que o navegador execute a sua ação padrão.'
        }
      ],
      challenge: {
        description: "Cria um formulário simples com dois campos (`<input>`) para números e um botão de submissão. Quando o formulário for submetido, impede o recarregamento, lê os valores dos dois campos, soma-os, e mostra o resultado num parágrafo `<p>` na página.",
        starterCode: `// HTML:
// <form id="form-soma">
//   <input type="number" id="num1" value="0">
//   <input type="number" id="num2" value="0">
//   <button>Somar</button>
// </form>
// <p id="resultado"></p>
`,
        solution: `const form = document.getElementById('form-soma');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultadoP = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const soma = num1 + num2;
  
  resultadoP.textContent = "Resultado: " + soma;
});`
      }
    },
    {
      id: '5.8',
      title: 'Desafio do Módulo: Dark Mode Toggle',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Vamos juntar tudo o que aprendemos neste módulo para criar uma funcionalidade muito comum: um botão que alterna entre o modo claro e escuro. A lógica é simples: vamos adicionar ou remover uma classe (ex: `dark-mode`) ao elemento `<body>`. O CSS tratará de mudar as cores quando essa classe estiver presente.')
      ),
      practice: {
        examples: [
          {
            title: 'Passo 1: O HTML e CSS',
            description: 'Precisamos de um botão e de regras de CSS para a classe `.dark-mode`.',
            code: `<!-- HTML -->
<button id="theme-toggle">Mudar Tema</button>

<!-- CSS -->
<style>
  body { 
    transition: all 0.3s;
    background-color: #e6f1ff;
    color: #0a192f;
  }
  body.dark-mode {
    background-color: #0a192f;
    color: #e6f1ff;
  }
</style>`
          },
          {
            title: 'Passo 2: O JavaScript',
            description: 'Selecionamos o botão e o `body`. Adicionamos um `click` listener ao botão. Dentro dele, usamos `document.body.classList.toggle(\'dark-mode\')`. O método `.toggle()` adiciona a classe se ela não existir, e remove-a se ela já existir.',
            code: `const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});`
          },
          {
            title: 'Passo 3: Melhorar a Experiência (Opcional)',
            description: 'Podemos guardar a preferência do utilizador no `localStorage` para que o tema se mantenha quando ele voltar à página.',
            code: `// ... (código anterior) ...

// No listener de clique, depois do toggle:
if (document.body.classList.contains('dark-mode')) {
  localStorage.setItem('theme', 'dark');
} else {
  localStorage.setItem('theme', 'light');
}

// Quando a página carrega:
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}`
          }
        ]
      },
      quiz: [
        {
          question: 'O que o método `classList.toggle("minha-classe")` faz?',
          options: ['Adiciona sempre a classe.', 'Remove sempre a classe.', 'Adiciona a classe se ela não existir e remove-a se existir.'],
          correctAnswerIndex: 2,
          explanation: '`.toggle()` é a forma mais eficiente de alternar uma classe, perfeita para funcionalidades como menus, modos escuros, etc.'
        }
      ],
      challenge: {
        description: "Melhora o nosso botão de Dark Mode. Faz com que o texto do botão mude consoante o tema. Se o tema for claro, o botão deve dizer 'Ativar Modo Escuro'. Se o tema for escuro, deve dizer 'Ativar Modo Claro'.",
        starterCode: `const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // A tua lógica para mudar o texto aqui
});`,
        solution: `const themeToggleBtn = document.getElementById('theme-toggle');

function atualizarTextoBotao() {
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = 'Ativar Modo Claro';
  } else {
    themeToggleBtn.textContent = 'Ativar Modo Escuro';
  }
}

// Iniciar com o texto correto
atualizarTextoBotao();

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  atualizarTextoBotao();
});`
      }
    }
  ]
};