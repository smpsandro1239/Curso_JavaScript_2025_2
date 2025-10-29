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
            title: 'Prática: Explorar o DOM',
            description: 'A melhor forma de entender o DOM é vê-lo. Abre as Ferramentas de Programador (F12) e vai à aba "Elements". Vês a estrutura em árvore? Clica nas setas para expandir e colapsar os nós. Passa o rato por cima dos elementos no painel e vê como eles são realçados na página.',
            code: `// Não há código para escrever aqui.
// A prática é usar as DevTools para explorar o DOM desta página.`
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
      ]
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
            title: 'Exemplo 1: `querySelector` (Recomendado)',
            description: 'Podemos usar qualquer seletor CSS. Aqui, apanhamos o `div` pelo seu id e o `h1` pela sua classe.',
            code: `const divPrincipal = document.querySelector('#principal');
const titulo = document.querySelector('.titulo');
console.log(titulo.textContent);`
          },
          {
            title: 'Exemplo 2: `querySelectorAll`',
            description: 'Aqui, selecionamos todos os parágrafos (`<p>`). O resultado é uma NodeList, que podemos percorrer com `forEach`.',
            code: `const todosOsParagrafos = document.querySelectorAll('p');
todosOsParagrafos.forEach(p => {
  p.style.color = '#64ffda'; // Pinta todos os parágrafos de verde
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
        }
      ]
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
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Estilos:'), ' `elemento.style` (para estilos inline) ou `elemento.classList` (para manipular classes CSS - a forma recomendada).')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Alterar Texto',
            description: 'Selecionamos o título e mudamos o seu texto.',
            code: `// HTML: <h1 id="titulo">Olá Mundo</h1>
const titulo = document.getElementById('titulo');
titulo.textContent = "Olá JavaScript!";`
          },
          {
            title: 'Exemplo 2: Alterar Estilos com `classList`',
            description: 'Esta é a forma recomendada. Adicionamos uma classe CSS que define o estilo, mantendo a separação de responsabilidades.',
            code: `// HTML: <p id="aviso">Cuidado!</p>
// CSS: .alerta { font-weight: bold; background-color: yellow; }
const aviso = document.getElementById('aviso');
aviso.classList.add('alerta');`
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
      ]
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
            title: 'Exemplo: Adicionar um item a uma lista',
            description: 'Criamos um novo `<li>`, definimos o seu texto, e adicionamo-lo à `<ul>` existente.',
            code: `// HTML: <ul id="lista"><li>Primeiro</li></ul>
const lista = document.getElementById('lista');

const novoItem = document.createElement('li');
novoItem.textContent = "Segundo";

lista.append(novoItem);`
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
      ]
    },
    {
      id: '5.5',
      title: 'Ouvir Eventos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'O JavaScript torna as páginas interativas ao "ouvir" por ações do utilizador (eventos). A forma moderna de o fazer é com `addEventListener`.'),
        React.createElement('p', { className: 'mb-4' }, '`elemento.addEventListener(\'tipoDeEvento\', funcaoCallback);`'),
        React.createElement('p', { className: 'mb-4' }, 'Os eventos mais comuns são `click`, `mouseover`, `keydown`, e `submit`.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: Ouvir por um clique',
            description: 'Selecionamos um botão. Adicionamos um "ouvinte" para o evento `click`. Quando o botão é clicado, a função anónima (callback) é executada.',
            code: `// HTML: <button id="meu-botao">Clica em Mim</button>
const botao = document.getElementById('meu-botao');
botao.addEventListener('click', () => {
  console.log('O botão foi clicado!');
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
      ]
    },
    {
      id: '5.6',
      title: 'Aprofundamento: Propagação de Eventos (Bubbling)',
      illustration: React.createElement(EventBubblingIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Quando um evento acontece num elemento (ex: um clique num botão), ele não pára aí. Depois de ser tratado no botão, o evento "borbulha" (bubbles up) para o elemento pai, depois para o pai desse, e assim por diante, até chegar ao `<html>`.'),
        React.createElement('p', { className: 'mb-4' }, 'Isto é útil, mas por vezes queremos parar esta propagação. Podemos fazê-lo com `evento.stopPropagation()` dentro da nossa função de callback.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: Parar o "borbulhar"',
            description: 'Clica no botão interior. Verás que, graças a `e.stopPropagation()`, apenas o alerta do botão é acionado. O evento nunca chega ao `div` exterior.',
            code: `// HTML: <div id="exterior"><button id="interior">Clica</button></div>
const exterior = document.getElementById('exterior');
const interior = document.getElementById('interior');

interior.addEventListener('click', (e) => {
  e.stopPropagation(); // Impede o evento de "borbulhar"
  alert('Botão Interior Clicado!');
});

exterior.addEventListener('click', () => {
  alert('Div Exterior Clicado!');
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
      ]
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
            title: 'Exemplo: Capturar dados de um formulário',
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
      ]
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
  body { transition: all 0.3s; }
  body.dark-mode {
    background-color: #0a192f;
    color: #ccd6f6;
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
      ]
    }
  ]
};