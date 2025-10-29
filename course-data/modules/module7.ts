import * as React from 'react';
import type { Module } from '../../types';

const AsyncIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Sync track
  React.createElement('rect', { x: "10", y: "20", width: "50", height: "15", fill: "#233554" }),
  React.createElement('rect', { x: "70", y: "20", width: "120", height: "15", fill: "#a8b2d1" }), // Blocking
  React.createElement('text', { x: "130", y: "30", textAnchor: "middle", fontSize: "7", fill: "#112240" }, "A ESPERAR"),
  React.createElement('text', { x: "100", y: "10", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Síncrono (Bloqueante)"),

  // Async track
  React.createElement('rect', { x: "10", y: "60", width: "50", height: "15", fill: "#233554" }),
  React.createElement('rect', { x: "70", y: "60", width: "50", height: "15", fill: "#233554" }), // Not blocking
  React.createElement('path', { d: "M 130 67.5 L 140 50 L 150 67.5", fill: "none", stroke: "#64ffda", strokeWidth: "1"}),
  React.createElement('text', { x: "100", y: "90", textAnchor: "middle", fontSize: "8", fill: "#64ffda" }, "Assíncrono (Não-Bloqueante)")
);

const PromiseIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    // Pending
    React.createElement('circle', { cx: "40", cy: "50", r: "15", fill: "#112240", stroke: "#a8b2d1" }),
    React.createElement('text', { x: "40", y: "53", textAnchor: "middle", fontSize: "7", fill: "#a8b2d1" }, "Pendente"),
    // Arrow to Fulfilled
    React.createElement('path', { d: "M 55 40 L 100 25", stroke: "#64ffda", strokeWidth: "1.5", markerEnd: "url(#arrowhead)" }),
    // Fulfilled
    React.createElement('circle', { cx: "120", cy: "25", r: "15", fill: "#112240", stroke: "#64ffda" }),
    React.createElement('text', { x: "120", y: "28", textAnchor: "middle", fontSize: "7", fill: "#64ffda" }, "Resolvida"),
    // Arrow to Rejected
    React.createElement('path', { d: "M 55 60 L 100 75", stroke: "red", strokeWidth: "1.5", markerEnd: "url(#arrowhead-red)" }),
    // Rejected
    React.createElement('circle', { cx: "120", cy: "75", r: "15", fill: "#112240", stroke: "red" }),
    React.createElement('text', { x: "120", y: "78", textAnchor: "middle", fontSize: "7", fill: "red" }, "Rejeitada")
);

export const module7: Module = {
  id: '7',
  title: 'Módulo 7: JavaScript Assíncrono',
  lessons: [
    {
      id: '7.1',
      title: 'Síncrono vs. Assíncrono',
      illustration: React.createElement(AsyncIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Por natureza, o JavaScript é ', React.createElement('strong', { className: 'text-light-slate' }, 'síncrono'), ' e "single-threaded". Isto significa que ele executa uma tarefa de cada vez, pela ordem em que aparecem. Se uma tarefa demora muito tempo (ex: carregar um ficheiro grande), a página inteira fica bloqueada à espera.'),
        React.createElement('p', { className: 'mb-4' }, 'O código ', React.createElement('strong', { className: 'text-green' }, 'assíncrono'), ' resolve este problema. Permite que tarefas demoradas sejam iniciadas, e o JavaScript continua a executar outras coisas. Quando a tarefa demorada termina, o nosso código é notificado e pode então lidar com o resultado. Isto mantém a página responsiva.'),
        React.createElement('p', { className: 'mb-4' }, '`setTimeout` é uma função simples que demonstra este comportamento: ela agenda a execução de uma função para DEPOIS de um certo tempo, sem bloquear o resto do código.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: `setTimeout` em ação',
            description: 'Repara na ordem em que as mensagens aparecem na consola. "Fim" aparece ANTES de "Passaram 2 segundos", porque o `setTimeout` não bloqueia a execução.',
            code: `console.log("Início");

setTimeout(() => {
  console.log("Passaram 2 segundos");
}, 2000); // 2000 milissegundos = 2 segundos

console.log("Fim");

// Ordem de output:
// 1. "Início"
// 2. "Fim"
// 3. "Passaram 2 segundos" (após 2s)`
          }
        ]
      },
      quiz: [
        {
          question: 'O que significa dizer que JavaScript é "síncrono"?',
          options: ['Executa várias tarefas ao mesmo tempo.', 'Executa uma tarefa de cada vez, pela ordem, bloqueando até que cada uma termine.', 'Só funciona com números.', 'É uma linguagem muito rápida.'],
          correctAnswerIndex: 1,
          explanation: 'Síncrono significa que o código é executado linha a linha, e cada linha tem de esperar que a anterior termine.'
        }
      ]
    },
    {
      id: '7.2',
      title: 'Promises: Promessas de um Valor Futuro',
      illustration: React.createElement(PromiseIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona. É literalmente uma "promessa" de que terás um valor no futuro.'),
        React.createElement('p', { className: 'mb-4' }, 'Uma Promise pode estar em três estados:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, 'Pendente (pending):'), ' estado inicial, a operação ainda não terminou.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Resolvida (fulfilled/resolved):'), ' a operação terminou com sucesso.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-red-400' }, 'Rejeitada (rejected):'), ' a operação falhou.')
        ),
        React.createElement('p', { className: 'mt-4' }, 'Para consumir o resultado de uma Promise, usamos os métodos `.then()` (para o caso de sucesso) e `.catch()` (para o caso de erro).')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: Consumir uma Promise com `.then` e `.catch`',
            description: 'A função `fetch` (que veremos a seguir) retorna uma Promise. Aqui vemos como lidar com o seu resultado.',
            code: `// fetch retorna uma Promise que representa o pedido de rede
const promise = fetch('https://api.github.com/users/github');

promise
  .then(response => {
    // Quando a promise é resolvida, recebemos a resposta
    console.log("Sucesso!", response);
  })
  .catch(error => {
    // Se a promise for rejeitada (ex: sem internet), o erro é apanhado aqui
    console.error("Falhou!", error);
  });`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual método usas para lidar com uma Promise que foi resolvida com sucesso?',
          options: ['`.catch()`', '`.error()`', '`.finally()`', '`.then()`'],
          correctAnswerIndex: 3,
          explanation: '`.then()` recebe uma função que será executada com o valor de retorno da Promise quando esta for resolvida com sucesso.'
        }
      ]
    },
    {
      id: '7.3',
      title: 'Async/Await: Açúcar Sintático',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, '`async` e `await` são funcionalidades modernas que nos permitem trabalhar com Promises de uma forma que parece síncrona, tornando o código muito mais fácil de ler.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`async function`:'), ' Declarar uma função como `async` faz com que ela retorne automaticamente uma Promise.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`await`:'), ' Só pode ser usado DENTRO de uma `async function`. Pausa a execução da função ATÉ que a Promise seja resolvida, e depois continua, com o valor resolvido.')
        ),
        React.createElement('p', { className: 'mt-4' }, 'Para lidar com erros, usamos o bom e velho bloco `try...catch`, tal como no código síncrono.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: Reescrever o `fetch` com async/await',
            description: 'Compara este código com o do exemplo anterior (`.then`/`.catch`). É muito mais linear e fácil de seguir.',
            code: `// A função tem de ser 'async' para podermos usar 'await'
async function buscarUtilizador() {
  try {
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json(); // .json() também retorna uma Promise!
    
    console.log("Nome do utilizador:", data.name);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

buscarUtilizador();`
          }
        ]
      },
      quiz: [
        {
          question: 'Onde podes usar a palavra-chave `await`?',
          options: ['Em qualquer função.', 'Apenas dentro de funções declaradas com a palavra `async`.', 'Apenas fora de funções.', 'Apenas em loops `for`.'],
          correctAnswerIndex: 1,
          explanation: '`await` só é válido sintaticamente dentro de uma função `async`, caso contrário, causará um erro.'
        }
      ],
      challenge: {
        description: "Usa a API JSONPlaceholder para ir buscar um 'todo' (tarefa). O URL é `https://jsonplaceholder.typicode.com/todos/1`. Cria uma função `async` que faz o pedido com `fetch`, usa `await` para obter a resposta e os dados em JSON, e depois imprime o `title` da tarefa na consola.",
        starterCode: `async function buscarTarefa() {
  // O teu código com try/catch, fetch e await vai aqui
}

buscarTarefa();`,
        solution: `async function buscarTarefa() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    console.log("Título da Tarefa:", todo.title);
  } catch (error) {
    console.error("Não foi possível buscar a tarefa:", error);
  }
}

buscarTarefa();`
      }
    }
  ]
};
