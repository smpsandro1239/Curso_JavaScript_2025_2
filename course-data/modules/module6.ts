
import * as React from 'react';
import type { Module } from '../../types';

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

export const module6: Module = {
  id: '6',
  title: 'Módulo 6: O DOM (Document Object Model)',
  lessons: [
    {
      id: '6.1',
      title: 'O que é o DOM?',
      illustration: React.createElement(DOMIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Quando o navegador carrega uma página HTML, ele cria uma representação em memória desse documento. A essa representação chamamos DOM - Document Object Model.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia é uma árvore genealógica. O `<html>` é o ancestral mais antigo. O `<head>` e o `<body>` são os seus filhos. O `<body>` pode ter filhos como `<h1>`, `<p>` e `<div>`, e assim por diante.'),
        React.createElement('p', { className: 'mb-4' }, 'O JavaScript pode interagir com esta "árvore". Ele pode:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Encontrar e selecionar qualquer elemento (nó) na árvore.'),
          React.createElement('li', null, 'Alterar o conteúdo, estilo ou atributos desses elementos.'),
          React.createElement('li', null, 'Adicionar ou remover elementos da árvore.'),
          React.createElement('li', null, 'Reagir a eventos do utilizador (como cliques ou teclas pressionadas) nesses elementos.')
        ),
        React.createElement('p', { className: 'mb-4' }, 'Essencialmente, o DOM é a ponte que liga o teu código JavaScript à página HTML visível, permitindo-te criar páginas dinâmicas e interativas.')
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
        },
        {
          question: 'Se um `<div>` contém um `<p>`, na árvore do DOM, o `<p>` é o quê do `<div>`?',
          options: ['Pai (parent)', 'Irmão (sibling)', 'Filho (child)', 'Avô (grandparent)'],
          correctAnswerIndex: 2,
          explanation: 'Na hierarquia do DOM, os elementos que estão diretamente dentro de outro são chamados de "filhos" (children).'
        }
      ]
    },
    {
      id: '6.2',
      title: 'Selecionar Elementos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Antes de podermos manipular um elemento, temos de o "capturar" com o nosso código. O objeto global `document` dá-nos vários métodos para fazer isso:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`document.getElementById(\'id-do-elemento\')`:'), ' O mais rápido e específico. Vai buscar o único elemento que tem um determinado `id`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`document.querySelector(\'seletor-css\')`:'), ' O mais versátil. Encontra o PRIMEIRO elemento que corresponde a um seletor CSS (ex: `.minha-classe`, `#meu-id`, `p`).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`document.querySelectorAll(\'seletor-css\')`:'), ' Similar ao anterior, mas retorna TODOS os elementos que correspondem ao seletor, numa coleção parecida com um array (uma NodeList).')
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
  <p class="destaque">Outro parágrafo, mas com uma classe.</p>
</div>`
          },
          {
            title: 'Exemplo 1: `getElementById`',
            description: 'Apanhamos o `div` principal pelo seu `id` único.',
            code: `// JavaScript
const divPrincipal = document.getElementById('principal');
console.log(divPrincipal);`
          },
          {
            title: 'Exemplo 2: `querySelector`',
            description: 'Podemos usar qualquer seletor CSS. Aqui, apanhamos o `h1` pela sua classe. Se houvesse mais elementos com a classe `titulo`, ele só retornaria o primeiro.',
            code: `// JavaScript
const titulo = document.querySelector('.titulo');
console.log(titulo);`
          },
          {
            title: 'Exemplo 3: `querySelectorAll`',
            description: 'Aqui, selecionamos todos os parágrafos (`<p>`). O resultado é uma NodeList, que podemos percorrer com um loop.',
            code: `// JavaScript
const todosOsParagrafos = document.querySelectorAll('p');

todosOsParagrafos.forEach(paragrafo => {
  console.log(paragrafo);
});`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual método usarias para selecionar um elemento único com `id="user-name"`?',
          options: ['`querySelector("#user-name")`', '`getElementById("user-name")`', 'Ambos funcionam', 'Nenhum dos dois'],
          correctAnswerIndex: 2,
          explanation: 'Ambos funcionam! `getElementById` é ligeiramente mais rápido e mais direto, mas `querySelector` é mais versátil e pode ser usado para qualquer seletor CSS, incluindo IDs.'
        },
        {
          question: 'O que `querySelectorAll(".item")` retorna se não encontrar nenhum elemento com a classe "item"?',
          options: ['`null`', '`undefined`', 'Um erro', 'Uma NodeList vazia'],
          correctAnswerIndex: 3,
          explanation: 'Se não encontrar correspondências, `querySelectorAll` retorna uma NodeList vazia (com `length` 0). Isto é útil porque o teu código não vai quebrar se tentares, por exemplo, fazer um loop sobre ela.'
        }
      ]
    },
    {
      id: '6.3',
      title: 'Manipular Elementos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Depois de selecionar um elemento, podemos fazer todo o tipo de coisas com ele. As manipulações mais comuns são:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Alterar Conteúdo:'), ' `elemento.textContent` muda o texto dentro do elemento. `elemento.innerHTML` faz o mesmo, mas interpreta qualquer HTML que lhe passes (cuidado, pode ser um risco de segurança!).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Alterar Estilos:'), ' `elemento.style.propriedadeCSS` permite-te mudar estilos diretamente. Ex: `elemento.style.color = "red"`. Nota que a propriedade CSS `background-color` se torna `backgroundColor` em JS (camelCase).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Alterar Classes:'), ' `elemento.classList` dá-nos métodos como `.add()`, `.remove()` e `.toggle()` para manipular as classes de um elemento. Esta é a forma preferida de alterar estilos, pois mantém o CSS separado do JS.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Alterar Texto',
            description: 'Selecionamos o título e mudamos o seu texto.',
            code: `// HTML: <h1 id="titulo">Olá Mundo</h1>

// JavaScript
const titulo = document.getElementById('titulo');
titulo.textContent = "Olá JavaScript!";`
          },
          {
            title: 'Exemplo 2: Alterar Estilos com `.style` e `.classList`',
            description: 'Primeiro, mudamos a cor diretamente. Depois, a forma recomendada: adicionamos uma classe CSS que define o estilo.',
            code: `// HTML: <p id="aviso">Cuidado!</p>
// CSS: .alerta { font-weight: bold; background-color: yellow; }

// JavaScript
const aviso = document.getElementById('aviso');

// Forma direta (menos recomendada)
aviso.style.color = 'red';

// Forma recomendada
aviso.classList.add('alerta');`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é a forma recomendada de alterar a aparência de um elemento?',
          options: ['Usar `elemento.style` para todas as propriedades.', 'Definir estilos numa classe CSS e depois adicionar/remover essa classe com `elemento.classList`.', 'Usar `elemento.innerHTML` para adicionar tags `<style>`.', 'Não é possível alterar estilos com JS.'],
          correctAnswerIndex: 1,
          explanation: 'Usar `classList` mantém a separação de responsabilidades (CSS para estilos, JS para comportamento), tornando o código mais limpo e fácil de manter.'
        },
        {
          question: 'Como mudarias a cor de fundo de um elemento para azul em JavaScript?',
          options: ['`elemento.style.background-color = "blue";`', '`elemento.style.backgroundColor = "blue";`', '`elemento.style(backgroundColor, "blue");`', '`elemento.class = "blue";`'],
          correctAnswerIndex: 1,
          explanation: 'As propriedades CSS com hífen (kebab-case) são convertidas para camelCase em JavaScript ao aceder ao objeto `style`.'
        }
      ]
    },
    {
      id: '6.4',
      title: 'Eventos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'O JavaScript torna as páginas interativas ao "ouvir" por ações do utilizador. A estas ações chamamos eventos. Os mais comuns são `click`, `mouseover` (passar o rato por cima), `keydown` (pressionar uma tecla), e `submit` (submeter um formulário).'),
        React.createElement('p', { className: 'mb-4' }, 'A forma moderna de lidar com eventos é o método `addEventListener`. Ele recebe dois argumentos principais:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'O tipo de evento:'), ' Uma string com o nome do evento (ex: `"click"`).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'O "listener" ou "handler":'), ' Uma função (callback) que será executada QUANDO o evento ocorrer.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Ouvir por um clique',
            description: 'Selecionamos um botão. Adicionamos um "ouvinte" para o evento `click`. Quando o botão é clicado, a função anónima é executada.',
            code: `// HTML: <button id="meu-botao">Clica em Mim</button>

// JavaScript
const botao = document.getElementById('meu-botao');

botao.addEventListener('click', () => {
  alert('O botão foi clicado!');
});`
          },
          {
            title: 'Exemplo 2: Interagir com a Página',
            description: 'Uma utilização mais prática. Ao clicar no botão, mudamos o texto de um parágrafo.',
            code: `// HTML:
// <button id="muda-texto">Mudar Texto</button>
// <p id="paragrafo">Texto original.</p>

// JavaScript
const botao = document.getElementById('muda-texto');
const paragrafo = document.getElementById('paragrafo');

botao.addEventListener('click', () => {
  paragrafo.textContent = 'O texto foi alterado pelo evento!';
});`
          }
        ]
      },
      quiz: [
        {
          question: 'Quais são os dois argumentos principais de `addEventListener`?',
          options: ['Um seletor CSS e um nome de classe.', 'O nome do evento e uma função para executar.', 'Um ID e um estilo.', 'Uma variável e um valor.'],
          correctAnswerIndex: 1,
          explanation: '`addEventListener` precisa de saber a que evento reagir (ex: "click") e o que fazer quando esse evento acontece (a função de callback).'
        }
      ]
    },
     {
      id: '6.5',
      title: 'Desafio: "Dark Mode" Toggle',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Vamos juntar tudo o que aprendemos neste módulo para criar uma funcionalidade muito comum: um botão que alterna entre o modo claro e escuro.'),
        React.createElement('p', { className: 'mb-4' }, 'A lógica é simples: vamos adicionar ou remover uma classe (ex: `dark-mode`) ao elemento `<body>`. O CSS tratará de mudar as cores quando essa classe estiver presente.')
      ),
      practice: {
        examples: [
          {
            title: 'Passo 1: O HTML',
            description: 'Precisamos apenas de um botão para o utilizador clicar.',
            code: `<button id="theme-toggle">Mudar Tema</button>`
          },
          {
            title: 'Passo 2: O CSS',
            description: 'Definimos as cores padrão e depois, dentro da classe `.dark-mode`, definimos as cores para o tema escuro. O `transition` torna a mudança suave.',
            code: `body {
  background-color: #f0f0f0;
  color: #333;
  transition: background-color 0.3s, color 0.3s;
}

body.dark-mode {
  background-color: #333;
  color: #f0f0f0;
}`
          },
          {
            title: 'Passo 3: O JavaScript',
            description: 'Selecionamos o botão e o `body`. Adicionamos um `click` listener ao botão. Dentro dele, usamos `document.body.classList.toggle(\'dark-mode\')`. O método `.toggle()` é fantástico: adiciona a classe se ela não existir, e remove-a se ela já existir.',
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
          options: ['Adiciona sempre a classe.', 'Remove sempre a classe.', 'Adiciona a classe se ela não existir e remove-a se existir.', 'Dá um erro se a classe não existir.'],
          correctAnswerIndex: 2,
          explanation: '`.toggle()` é a forma mais eficiente de alternar uma classe, perfeita para funcionalidades como menus, modos escuros, etc.'
        }
      ]
    }
  ]
};
