import * as React from 'react';
import type { Module } from '../../types';

// Illustrations
const AsyncIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Sync Path (blocking)
  React.createElement('text', { x: "50", y: "15", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Síncrono"),
  React.createElement('rect', { x: "10", y: "20", width: "30", height: "15", fill: "#233554" }),
  React.createElement('rect', { x: "45", y: "20", width: "30", height: "15", fill: "#a8b2d1", stroke: "#ccd6f6" }),
  React.createElement('rect', { x: "80", y: "20", width: "30", height: "15", fill: "#233554" }),
  
  // Async Path (non-blocking)
  React.createElement('text', { x: "50", y: "65", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Assíncrono"),
  React.createElement('rect', { x: "10", y: "70", width: "30", height: "15", fill: "#233554" }),
  React.createElement('path', { d: "M 45 77.5 L 80 77.5", stroke: "#233554", strokeWidth: "2" }),
  React.createElement('path', { d: "M 45 77.5 C 45 60, 80 60, 80 77.5", fill: "none", stroke: "#64ffda", strokeWidth: "1.5" }),
  React.createElement('rect', { x: "80", y: "70", width: "30", height: "15", fill: "#233554" })
);

const PromiseIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Pending
  React.createElement('circle', { cx: "40", cy: "50", r: "15", fill: "#112240", stroke: "#a8b2d1", strokeDasharray: "3 3" }),
  React.createElement('text', { x: "40", y: "53", textAnchor: "middle", fontSize: "7", fill: "#a8b2d1" }, "Pendente"),
  // Arrow to Fulfilled
  React.createElement('path', { d: "M 55 40 L 100 25", stroke: "#64ffda", strokeWidth: "1.5" }),
  React.createElement('text', { x: "80", y: "28", fontSize: "7", fill: "#64ffda" }, ".then()"),
  // Fulfilled
  React.createElement('circle', { cx: "120", cy: "25", r: "15", fill: "#112240", stroke: "#64ffda" }),
  React.createElement('text', { x: "120", y: "28", textAnchor: "middle", fontSize: "7", fill: "#64ffda" }, "Sucesso"),
  // Arrow to Rejected
  React.createElement('path', { d: "M 55 60 L 100 75", stroke: "red", strokeWidth: "1.5" }),
  React.createElement('text', { x: "80", y: "78", fontSize: "7", fill: "red" }, ".catch()"),
  // Rejected
  React.createElement('circle', { cx: "120", cy: "75", r: "15", fill: "#112240", stroke: "red" }),
  React.createElement('text', { x: "120", y: "78", textAnchor: "middle", fontSize: "7", fill: "red" }, "Falha")
);

const AsyncAwaitIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-md h-auto text-lightest-slate" },
  // .then chain
  React.createElement('text', { x: "100", y: "15", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Promise Chain vs. Async/Await"),
  React.createElement('rect', { x: "10", y: "25", width: "40", height: "15", fill: "#233554" }),
  React.createElement('text', { x: "30", y: "35", textAnchor: "middle", fontSize: "7", fill: "#ccd6f6" }, "fetch()"),
  React.createElement('path', { d: "M 50 32.5 L 60 32.5", stroke: "#a8b2d1"}),
  React.createElement('rect', { x: "60", y: "25", width: "40", height: "15", fill: "#233554" }),
  React.createElement('text', { x: "80", y: "35", textAnchor: "middle", fontSize: "7", fill: "#ccd6f6" }, ".then()"),
  React.createElement('path', { d: "M 100 32.5 L 110 32.5", stroke: "#a8b2d1"}),
  React.createElement('rect', { x: "110", y: "25", width: "40", height: "15", fill: "#233554" }),
  React.createElement('text', { x: "130", y: "35", textAnchor: "middle", fontSize: "7", fill: "#ccd6f6" }, ".then()"),
  // Async/await
  React.createElement('rect', { x: "10", y: "65", width: "140", height: "20", fill: "#112240", stroke: "#64ffda", rx: "3" }),
  React.createElement('text', { x: "20", y: "78", fontSize: "7", fill: "#64ffda" }, "async function() {"),
  React.createElement('text', { x: "30", y: "88", fontSize: "7", fill: "#ccd6f6" }, "  const r = await fetch()"),
  React.createElement('text', { x: "30", y: "98", fontSize: "7", fill: "#ccd6f6" }, "  const d = await r.json()"),
  React.createElement('text', { x: "20", y: "108", fontSize: "7", fill: "#64ffda" }, "}")
);

export const module7: Module = {
  id: '7',
  title: 'Módulo 7: JavaScript Assíncrono',
  lessons: [
    {
      id: '7.1',
      title: 'O que é JavaScript Assíncrono?',
      illustration: React.createElement(AsyncIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'JavaScript é, por natureza, uma linguagem "single-threaded" (de uma só thread), o que significa que só consegue fazer uma coisa de cada vez. A isto chamamos comportamento síncrono.'),
        React.createElement('p', { className: 'mb-4' }, 'Imagina uma fila num café: no modelo síncrono, o barista só começa a preparar a tua bebida depois de o cliente anterior ter recebido a dele. Se uma bebida demorar muito tempo, toda a gente tem de esperar.'),
        React.createElement('p', { className: 'mb-4' }, 'O JavaScript assíncrono é como um barista mais eficiente. Ele recebe o teu pedido (uma operação demorada, como ir buscar dados a um servidor), entrega-te um pager (uma "promessa"), e começa a atender o cliente seguinte. Quando a tua bebida estiver pronta, o pager apita e podes ir buscá-la. Ninguém fica bloqueado à espera.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: `setTimeout`',
            description: '`setTimeout` é uma função assíncrona. Ela agenda a execução de uma função para depois de um certo tempo, mas não para o resto do código. Repara na ordem em que as mensagens aparecem na consola.',
            code: `console.log("1. Pedido feito.");

setTimeout(() => {
  console.log("3. Bebida pronta!"); // Executa após 2 segundos
}, 2000);

console.log("2. A atender o próximo cliente.");`
          }
        ]
      },
      quiz: [
        {
          question: 'O que significa dizer que JavaScript é "single-threaded"?',
          options: ['Só pode ser escrito por uma pessoa.', 'Só consegue executar uma operação de cada vez.', 'Só funciona com um tipo de dado.', 'Só pode ser usado no navegador.'],
          correctAnswerIndex: 1,
          explanation: 'Ser single-threaded significa que o motor de JavaScript tem apenas uma "call stack", pelo que executa o código de forma sequencial, uma instrução após a outra.'
        }
      ]
    },
    {
      id: '7.2',
      title: 'Callbacks e o "Callback Hell"',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Uma das formas mais antigas de lidar com código assíncrono é usar callbacks. Um callback é simplesmente uma função que é passada como argumento a outra função, para ser executada mais tarde.'),
        React.createElement('p', { className: 'mb-4' }, 'Quando temos várias operações assíncronas que dependem umas das outras, acabamos por aninhar callbacks dentro de callbacks. Isto cria uma estrutura de código conhecida como "Callback Hell" ou "Pyramid of Doom", que é muito difícil de ler e manter.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: O "Pyramid of Doom"',
            description: 'Imagina que queremos simular o processo de fazer um bolo em várias etapas, cada uma demorando 1 segundo. O resultado é um código que cresce para a direita e se torna confuso.',
            code: `setTimeout(() => {
  console.log("1. Misturar ingredientes");
  setTimeout(() => {
    console.log("2. Colocar no forno");
    setTimeout(() => {
      console.log("3. Bolo pronto!");
    }, 1000);
  }, 1000);
}, 1000);`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é o principal problema do "Callback Hell"?',
          options: ['O código fica mais rápido.', 'O código fica muito aninhado e difícil de ler.', 'Usa demasiada memória.', 'Só funciona com `setTimeout`.'],
          correctAnswerIndex: 1,
          explanation: 'A dificuldade de leitura e manutenção é o grande problema que o "Callback Hell" apresenta, o que levou à criação de soluções como as Promises.'
        }
      ]
    },
    {
      id: '7.3',
      title: 'Promises',
      illustration: React.createElement(PromiseIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Promises (Promessas) são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona. São uma solução elegante para o "Callback Hell".'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Uma Promise pode estar em um de três estados: `pending` (pendente), `fulfilled` (resolvida/sucesso), ou `rejected` (rejeitada/falha).'),
          React.createElement('li', null, 'Usamos o método `.then()` para lidar com o caso de sucesso e o `.catch()` para lidar com o caso de falha.'),
          React.createElement('li', null, 'Podemos encadear `.then()` para executar operações assíncronas em sequência de forma legível.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: Resolvendo o "Callback Hell"',
            description: 'Vamos reescrever o exemplo do bolo usando Promises. Cada passo retorna uma nova Promise, permitindo-nos encadear as ações de forma linear e muito mais legível.',
            code: `function passo1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. Misturar ingredientes");
      resolve();
    }, 1000);
  });
}

function passo2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. Colocar no forno");
      resolve();
    }, 1000);
  });
}

passo1()
  .then(passo2)
  .then(() => {
    console.log("3. Bolo pronto!");
  })
  .catch((erro) => {
    console.error("Algo correu mal!", erro);
  });`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual método de uma Promise é usado para tratar um resultado de sucesso?',
          options: ['`.catch()`', '`.finally()`', '`.then()`', '`.error()`'],
          correctAnswerIndex: 2,
          explanation: '`.then()` recebe uma função de callback que será executada quando a Promise for resolvida com sucesso.'
        }
      ]
    },
    {
      id: '7.4',
      title: 'Async/Await',
      illustration: React.createElement(AsyncAwaitIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, '`async` e `await` são "açúcar sintático" por cima das Promises. Permitem-nos escrever código assíncrono que se parece e se comporta como código síncrono, tornando-o ainda mais fácil de ler.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'A palavra-chave `async` é usada para declarar uma função que vai lidar com operações assíncronas. Uma função `async` retorna sempre uma Promise.'),
          React.createElement('li', null, 'A palavra-chave `await` só pode ser usada dentro de uma função `async`. Ela "pausa" a execução da função até que a Promise seja resolvida, e depois continua com o valor resolvido.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: A forma mais limpa',
            description: 'Vamos reescrever o exemplo do bolo uma última vez com `async/await`. O resultado é um código que se lê quase como uma lista de instruções síncronas.',
            code: `// As funções passo1 e passo2 do exemplo anterior
// ...

async function fazerBolo() {
  try {
    await passo1();
    await passo2();
    console.log("3. Bolo pronto!");
  } catch (erro) {
    console.error("Algo correu mal!", erro);
  }
}

fazerBolo();`
          }
        ]
      },
      quiz: [
        {
          question: 'Onde podes usar a palavra-chave `await`?',
          options: ['Em qualquer função.', 'Apenas dentro de uma função declarada com `async`.', 'Apenas em loops `for`.', 'Em qualquer lado no código.'],
          correctAnswerIndex: 1,
          explanation: '`await` está sintaticamente ligado a funções `async` e só é válido dentro delas.'
        }
      ]
    },
    {
      id: '7.5',
      title: 'Trabalhar com APIs: `fetch`',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'A API `fetch` é a ferramenta moderna do navegador para fazer pedidos de rede (como obter dados de um servidor ou API). Ela é baseada em Promises.'),
        React.createElement('p', { className: 'mb-4' }, 'O fluxo comum é: 1. Chamar `fetch()` com um URL. Isto retorna uma Promise que resolve para um objeto `Response`. 2. Chamar um método nesse objeto (ex: `.json()`) para extrair os dados. Isto também retorna uma Promise.'),
        React.createElement('p', { className: 'mb-4' }, 'Como `fetch` retorna Promises, podemos usar `.then()` ou, de forma mais limpa, `async/await`.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: Ir buscar dados de uma API',
            description: 'Vamos usar `async/await` com `fetch` para ir buscar uma lista de utilizadores a uma API pública de teste (JSONPlaceholder).',
            code: `async function buscarUtilizadores() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    const resposta = await fetch(url);
    
    if (!resposta.ok) {
      throw new Error(\`Erro HTTP! Status: \${resposta.status}\`);
    }
    
    const dados = await resposta.json();
    console.log("Primeiro utilizador:", dados.name);
  } catch (erro) {
    console.error("Não foi possível buscar os utilizadores:", erro);
  }
}

buscarUtilizadores();`
          }
        ]
      },
      quiz: [
        {
          question: 'O que `fetch(url)` retorna diretamente?',
          options: ['Os dados em formato JSON.', 'Uma string HTML.', 'Uma Promise que resolve para um objeto Response.', 'Nada, apenas faz o pedido.'],
          correctAnswerIndex: 2,
          explanation: 'O primeiro passo com `fetch` é obter o objeto `Response`, que contém o status e os cabeçalhos do pedido. Depois, precisamos de um segundo passo (como `.json()`) para ler o corpo da resposta.'
        }
      ],
      challenge: {
        description: "Cria uma função `async` chamada `buscarTodo` que recebe um `id` (um número de 1 a 200). A função deve usar `fetch` para ir buscar uma tarefa ('todo') da API `https://jsonplaceholder.typicode.com/todos/ID`, onde ID é o número que a função recebeu. Depois, imprime o `title` da tarefa na consola.",
        starterCode: `async function buscarTodo(id) {
  // O teu código aqui
}

// Testa a tua função
buscarTodo(5);`,
        solution: `async function buscarTodo(id) {
  try {
    const resposta = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
    if (!resposta.ok) {
      throw new Error("Não foi possível encontrar a tarefa.");
    }
    const tarefa = await resposta.json();
    console.log(\`Título da Tarefa \${id}: \${tarefa.title}\`);
  } catch (erro) {
    console.error(erro.message);
  }
}`
      }
    }
  ]
};
