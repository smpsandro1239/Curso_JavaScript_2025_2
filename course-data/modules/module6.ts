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

const EventLoopIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-lg h-auto text-lightest-slate" },
    React.createElement('text', { x: "50", y: "10", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Motor JavaScript"),
    // Call Stack
    React.createElement('rect', { x: "10", y: "20", width: "80", height: "70", fill: "#112240", stroke: "#233554", rx: "3" }),
    React.createElement('text', { x: "50", y: "30", textAnchor: "middle", fontSize: "7", fill: "#ccd6f6" }, "Call Stack"),
    React.createElement('rect', { x: "20", y: "75", width: "60", height: "10", fill: "#233554" }),
    // Web APIs
    React.createElement('rect', { x: "110", y: "20", width: "80", height: "30", fill: "#112240", stroke: "#233554", rx: "3" }),
    React.createElement('text', { x: "150", y: "35", textAnchor: "middle", fontSize: "7", fill: "#ccd6f6" }, "Web APIs"),
    // Callback Queue
    React.createElement('rect', { x: "110", y: "60", width: "80", height: "30", fill: "#112240", stroke: "#233554", rx: "3" }),
    React.createElement('text', { x: "150", y: "75", textAnchor: "middle", fontSize: "7", fill: "#ccd6f6" }, "Callback Queue"),
    // Arrows
    React.createElement('path', { d: "M 90 40 L 110 40", stroke: "#64ffda", strokeWidth: "1" }),
    React.createElement('path', { d: "M 110 75 L 90 75", stroke: "#64ffda", strokeWidth: "1" }),
    React.createElement('path', { d: "M 150 50 L 150 60", stroke: "#64ffda", strokeWidth: "1" })
);

export const module6: Module = {
  id: '6',
  title: 'Módulo 6: JavaScript Assíncrono',
  lessons: [
    {
      id: '6.1',
      title: 'Síncrono vs. Assíncrono',
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
            title: 'Exemplo 1: O Básico - Código Síncrono',
            description: 'O código é executado linha a linha, na ordem em que aparece. A segunda mensagem só aparece depois da primeira, e a terceira depois da segunda.',
            code: `console.log("Primeiro passo");
console.log("Segundo passo");
console.log("Terceiro passo");`
          },
          {
            title: 'Exemplo 2: O Caso Comum - `setTimeout`',
            description: '`setTimeout` é uma função assíncrona. Ela agenda a execução de uma função para depois de um certo tempo, mas não para o resto do código. Repara na ordem em que as mensagens aparecem na consola.',
            code: `console.log("1. Pedido feito.");

setTimeout(() => {
  console.log("3. Bebida pronta!"); // Executa após 2 segundos
}, 2000);

console.log("2. A atender o próximo cliente.");`
          },
          {
            title: 'Exemplo 3: A Armadilha - Bloquear a Thread',
            description: 'Se executarmos uma tarefa muito demorada de forma síncrona, a página inteira fica "congelada". Este loop demora alguns segundos a completar, e durante esse tempo, a página não responde.',
            code: `console.log("Início da tarefa demorada.");

// Este loop bloqueia tudo por alguns segundos.
for (let i = 0; i < 3000000000; i++) {
  // A fazer trabalho pesado...
}

console.log("Fim da tarefa demorada.");`
          }
        ]
      },
      quiz: [
        {
          question: 'O que significa dizer que JavaScript é "single-threaded"?',
          options: ['Só pode ser escrito por uma pessoa.', 'Só consegue executar uma operação de cada vez.', 'Só funciona com um tipo de dado.', 'Só pode ser usado no navegador.'],
          correctAnswerIndex: 1,
          explanation: 'Ser single-threaded significa que o motor de JavaScript tem apenas uma "call stack", pelo que executa o código de forma sequencial, uma instrução após a outra.'
        },
        {
          question: 'Qual é o principal benefício do código assíncrono?',
          options: ['É mais fácil de escrever.', 'Usa menos memória.', 'Não bloqueia a execução do resto do código, mantendo a página responsiva.', 'Executa sempre mais rápido.'],
          correctAnswerIndex: 2,
          explanation: 'O não-bloqueio (non-blocking) é a vantagem fundamental, permitindo que tarefas demoradas (como pedidos de rede) ocorram em segundo plano sem congelar a interface do utilizador.'
        }
      ],
      challenge: {
        description: "Prevê a ordem de aparição das mensagens na consola. Depois, executa o código para confirmar.",
        starterCode: `console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");`,
        solution: `// Ordem de aparição: A, C, B
// Mesmo com um timeout de 0ms, o setTimeout é uma operação assíncrona.
// Ele coloca a sua função na fila de espera (callback queue) e só a executa
// depois de todo o código síncrono (os logs de A e C) ter terminado.`
      }
    },
    {
      id: '6.2',
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
            title: 'Exemplo 1: O Básico - Um callback simples',
            description: 'A função `executarDepois` recebe uma função (o nosso callback `tarefa`) e um tempo. Após o tempo passar, ela executa o callback.',
            code: `function tarefa() {
  console.log("A tarefa foi executada!");
}

function executarDepois(callback, tempo) {
  setTimeout(callback, tempo);
}

executarDepois(tarefa, 2000);`
          },
          {
            title: 'Exemplo 2: O Caso Comum - O "Pyramid of Doom"',
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
          },
          {
            title: 'Exemplo 3: A Nuance - Callbacks de Erro',
            description: 'Um padrão comum é o callback receber dois argumentos: um para o erro (se ocorrer) e outro para os dados (se for sucesso). O primeiro argumento é por convenção o erro.',
            code: `function buscarDados(callback) {
  const sucesso = Math.random() > 0.5;
  setTimeout(() => {
    if (sucesso) {
      callback(null, { dados: "Informação secreta" });
    } else {
      callback(new Error("Não foi possível buscar os dados."));
    }
  }, 1000);
}

buscarDados((erro, dados) => {
  if (erro) {
    console.error(erro.message);
  } else {
    console.log(dados);
  }
});`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é o principal problema do "Callback Hell"?',
          options: ['O código fica mais rápido.', 'O código fica muito aninhado e difícil de ler.', 'Usa demasiada memória.', 'Só funciona com `setTimeout`.'],
          correctAnswerIndex: 1,
          explanation: 'A dificuldade de leitura e manutenção é o grande problema que o "Callback Hell" apresenta, o que levou à criação de soluções como as Promises.'
        },
        {
          question: 'O que é um callback?',
          options: ['Uma função que chama outra função.', 'Uma função que é passada como argumento para ser executada mais tarde.', 'Um tipo de erro.', 'Uma variável global.'],
          correctAnswerIndex: 1,
          explanation: 'O nome "callback" vem da ideia de que a função principal "chama de volta" (calls back) a função que lhe foi passada quando termina a sua tarefa.'
        }
      ],
      challenge: {
          description: "Cria uma função `buscarDados` que simula ir buscar dados a um servidor. Ela deve aceitar um callback. Dentro da `buscarDados`, usa um `setTimeout` de 1.5s. Após esse tempo, chama o callback, passando-lhe um objeto `{ nome: 'Ana', idade: 28 }`.",
          starterCode: `function buscarDados(callback) {
  // O teu setTimeout aqui
}

buscarDados((dados) => {
  console.log("Dados recebidos:", dados);
});`,
          solution: `function buscarDados(callback) {
  setTimeout(() => {
    const dadosFalsos = { nome: 'Ana', idade: 28 };
    callback(dadosFalsos);
  }, 1500);
}

buscarDados((dados) => {
  console.log("Dados recebidos:", dados);
});`
      }
    },
    {
      id: '6.3',
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
                title: 'Exemplo 1: O Básico - Criar uma Promise',
                description: 'Criamos uma nova Promise. Se a operação simulada tiver sucesso, chamamos `resolve`. Se falhar, chamamos `reject`.',
                code: `const minhaPromessa = new Promise((resolve, reject) => {
  const sucesso = true; // Tenta mudar para 'false'
  
  setTimeout(() => {
    if (sucesso) {
      resolve("A operação foi um sucesso!");
    } else {
      reject("Algo correu mal.");
    }
  }, 1000);
});

minhaPromessa
  .then((mensagem) => console.log(mensagem))
  .catch((erro) => console.error(erro));`
            },
            {
                title: 'Exemplo 2: O Caso Comum - Encadeamento (`Chaining`)',
                description: 'Vamos reescrever o exemplo do bolo usando Promises. Cada passo retorna uma nova Promise, permitindo-nos encadear as ações de forma linear e muito mais legível.',
                code: `function passo1() {
  return new Promise(resolve => setTimeout(() => {
    console.log("1. Misturar ingredientes");
    resolve();
  }, 1000));
}

function passo2() {
  return new Promise(resolve => setTimeout(() => {
    console.log("2. Colocar no forno");
    resolve();
  }, 1000));
}

passo1()
  .then(passo2)
  .then(() => {
    console.log("3. Bolo pronto!");
  });`
            },
            {
                title: 'Exemplo 3: A Nuance - `fetch` retorna uma Promise',
                description: 'A função `fetch`, que usamos para fazer pedidos de rede, é o exemplo mais comum de uma função que retorna uma Promise. O primeiro `.then` trata da resposta inicial, o segundo trata dos dados em formato JSON.',
                code: `fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error("Erro no fetch:", erro));`
            }
        ]
      },
      quiz: [
        {
          question: 'Qual método de uma Promise é usado para tratar um resultado de sucesso?',
          options: ['`.catch()`', '`.finally()`', '`.then()`', '`.error()`'],
          correctAnswerIndex: 2,
          explanation: '`.then()` recebe uma função de callback que será executada quando a Promise for resolvida com sucesso.'
        },
        {
          question: 'O que a função `fetch()` retorna?',
          options: ['Os dados em JSON.', 'Um objeto de erro.', 'Uma Promise que resolve com o objeto de Resposta.', '`undefined`.'],
          correctAnswerIndex: 2,
          explanation: '`fetch` retorna imediatamente uma Promise. O trabalho de rede acontece em segundo plano, e a Promise será resolvida (ou rejeitada) quando o trabalho terminar.'
        }
      ],
      challenge: {
        description: "Cria uma Promise que simula o download de um ficheiro. A Promise deve resolver com 'Download completo!' depois de 2 segundos. Usa `.then()` para imprimir a mensagem de sucesso na consola.",
        starterCode: `const promessaDownload = new Promise((resolve, reject) => {
  // O teu setTimeout aqui
});

// O teu .then() aqui`,
        solution: `const promessaDownload = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Download completo!');
  }, 2000);
});

promessaDownload.then((mensagem) => {
  console.log(mensagem);
});`
      }
    },
    {
      id: '6.4',
      title: 'Async/Await',
      illustration: React.createElement(AsyncIllustration),
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
            title: 'Exemplo 1: O Básico - A forma mais limpa',
            description: 'Vamos reescrever o exemplo do bolo uma última vez com `async/await`. O resultado é um código que se lê quase como uma lista de instruções síncronas.',
            code: `function passo(msg) {
  return new Promise(res => setTimeout(() => { console.log(msg); res(); }, 1000));
}

async function fazerBolo() {
  await passo("1. Misturar ingredientes");
  await passo("2. Colocar no forno");
  console.log("3. Bolo pronto!");
}

fazerBolo();`
          },
          {
            title: 'Exemplo 2: O Caso Comum - `fetch` com `async/await`',
            description: 'Este é o padrão mais comum para ir buscar dados a uma API. Esperamos pela resposta (`fetch`) e depois esperamos pela conversão para JSON.',
            code: `async function buscarUtilizador() {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const utilizador = await resposta.json();
  console.log(utilizador.name);
}

buscarUtilizador();`
          },
          {
            title: 'Exemplo 3: A Nuance - Tratamento de Erros com `try...catch`',
            description: 'Para tratar erros em funções `async`, usamos o familiar bloco `try...catch`. Se qualquer uma das Promises dentro do `try` for rejeitada, a execução salta para o bloco `catch`.',
            code: `async function buscarDados() {
  try {
    const resposta = await fetch('https://url-que-nao-existe.com');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Apanhámos um erro!", erro.message);
  }
}

buscarDados();`
          }
        ]
      },
      quiz: [
        {
          question: 'Onde podes usar a palavra-chave `await`?',
          options: ['Em qualquer função.', 'Apenas dentro de uma função declarada com `async`.', 'Apenas em loops `for`.', 'Em qualquer lado no código.'],
          correctAnswerIndex: 1,
          explanation: '`await` está sintaticamente ligado a funções `async` e só é válido dentro delas.'
        },
        {
          question: 'Uma função declarada com `async` retorna sempre o quê?',
          options: ['`undefined`', 'O valor da última expressão `await`.', 'Uma Promise.', 'Um objeto de erro.'],
          correctAnswerIndex: 2,
          explanation: 'Mesmo que não tenhas um `return` explícito, uma função `async` envolve o seu valor de retorno (ou `undefined`) numa Promise resolvida.'
        }
      ],
      challenge: {
        description: "Converte o desafio da lição anterior (a Promise de download) para usar `async/await`.",
        starterCode: `function simularDownload() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Download completo!"), 2000);
  });
}

async function iniciarDownload() {
  // Usa await aqui
}

iniciarDownload();`,
        solution: `async function iniciarDownload() {
  console.log("A iniciar download...");
  const mensagem = await simularDownload();
  console.log(mensagem);
}`
      }
    },
    {
      id: '6.5',
      title: 'Aprofundamento: O Event Loop',
      illustration: React.createElement(EventLoopIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Afinal, se o JavaScript só faz uma coisa de cada vez, como é que o `setTimeout` funciona sem bloquear tudo? A resposta está no Event Loop e nos seus "ajudantes".'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia do Chef: O JS é um Chef que só faz uma tarefa de cada vez (o Call Stack). Tarefas demoradas (como ir ao forno, ou um `setTimeout`) são delegadas a ajudantes (as Web APIs do navegador). Quando um ajudante termina, ele coloca o "prato pronto" (a função de callback) numa fila de espera (Callback Queue). Apenas quando o Chef principal não tem mais nada para fazer, ele vai à fila de espera e serve o próximo prato.'),
        React.createElement('p', { className: 'mb-4' }, 'Este modelo de concorrência é o que permite ao JavaScript ser não-bloqueante.' )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Síncrono primeiro',
            description: 'Este é o exemplo mais clássico. Todo o código síncrono na Call Stack é executado antes de o Event Loop verificar a Callback Queue.',
            code: `console.log('Início');

setTimeout(() => {
  console.log('Timeout terminou');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise resolvida');
});

console.log('Fim');

// Ordem: Início, Fim, Promise resolvida, Timeout terminou`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Microtasks vs. Macrotasks',
            description: 'As Promises vão para uma fila prioritária (Microtask Queue), enquanto o `setTimeout` vai para a fila normal (Macrotask/Callback Queue). O Event Loop serve sempre todas as microtasks antes de servir uma macrotask.',
            code: `// ... o mesmo código do exemplo anterior ...
// A "Promise resolvida" aparece antes do "Timeout terminou"
// porque a fila de Microtasks tem prioridade.`
          },
          {
            title: 'Exemplo 3: A Nuance - Visualizar a Call Stack',
            description: 'Podemos pensar na execução de funções aninhadas como pratos a serem empilhados. O último a entrar é o primeiro a sair.',
            code: `function terceiro() {
  console.log('Três');
}
function segundo() {
  console.log('Dois');
  terceiro();
}
function primeiro() {
  console.log('Um');
  segundo();
}
primeiro();
// Stack: entra primeiro(), entra segundo(), entra terceiro().
// Sai terceiro(), sai segundo(), sai primeiro().
// Ordem do log: Um, Dois, Três`
          }
        ]
      },
      quiz: [
        {
          question: 'Na analogia do Chef, o que representa a Callback Queue?',
          options: ['O Chef principal.', 'Os ajudantes.', 'As tarefas demoradas.', 'A fila de pratos prontos à espera de serem servidos.'],
          correctAnswerIndex: 3,
          explanation: 'A Callback Queue (ou Fila de Callbacks) armazena as funções que estão prontas para serem executadas, assim que a Call Stack estiver vazia.'
        },
        {
          question: 'O que tem prioridade para o Event Loop?',
          options: ['A Callback Queue (Macrotasks).', 'A Microtask Queue (Promises).', 'Nenhuma, é aleatório.', 'A que tiver a tarefa mais rápida.'],
          correctAnswerIndex: 1,
          explanation: 'O Event Loop processará sempre todas as tarefas na Microtask Queue antes de pegar na próxima tarefa da Macrotask Queue.'
        }
      ],
      challenge: {
        description: "Qual achas que será a ordem dos logs no código do desafio da primeira lição (`6.1`)? Explica o porquê usando os conceitos de Call Stack, Web APIs e Callback Queue.",
        starterCode: `console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");`,
        solution: `1. \`console.log("A")\` entra e sai da Call Stack (imprime A).
2. \`setTimeout\` entra na Call Stack. O navegador (Web API) agenda o timer. \`setTimeout\` sai da Stack.
3. \`console.log("C")\` entra e sai da Call Stack (imprime C).
4. A Call Stack está vazia. O timer de 0ms termina, e o seu callback (\`() => console.log("B")\`) é colocado na Callback Queue.
5. O Event Loop vê a Stack vazia e move o callback para a Stack.
6. O callback é executado (imprime B).
Ordem final: A, C, B.`
      }
    },
    {
      id: '6.6',
      title: 'Aprofundamento: `Promise.all()`',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'O que acontece quando precisamos de fazer várias chamadas de API e só queremos continuar quando todas tiverem terminado? Fazer uma de cada vez seria lento. É para isso que serve o `Promise.all()`!'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Recebe um array de Promises.'),
          React.createElement('li', null, 'Retorna uma única Promise que resolve quando TODAS as promises do array tiverem resolvido.'),
          React.createElement('li', null, 'O valor resolvido é um array com os resultados de cada promise, na mesma ordem.'),
          React.createElement('li', null, 'Se UMA das promises for rejeitada, o `Promise.all()` inteiro é rejeitado imediatamente.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Promises simples',
            description: 'Criamos duas promises que resolvem em tempos diferentes. O `.then` do `Promise.all` só é executado depois de ambas terminarem.',
            code: `const p1 = new Promise(res => setTimeout(() => res('Primeira'), 1000));
const p2 = new Promise(res => setTimeout(() => res('Segunda'), 500));

Promise.all([p1, p2])
  .then(resultados => {
    console.log(resultados); // ['Primeira', 'Segunda'] - na ordem original!
  });`
          },
          {
            title: 'Exemplo 2: O Caso Comum - `fetch` em paralelo',
            description: 'Usamos a JSONPlaceholder API para ir buscar os dados de um utilizador e os seus posts em paralelo, o que é muito mais rápido do que fazer um de cada vez.',
            code: `async function buscarDadosCombinados() {
  try {
    const urls = [
      'https://jsonplaceholder.typicode.com/users/1',
      'https://jsonplaceholder.typicode.com/posts?userId=1'
    ];
    const promessas = urls.map(url => fetch(url).then(res => res.json()));
    const [utilizador, posts] = await Promise.all(promessas);
    console.log(\`Utilizador \${utilizador.name} tem \${posts.length} posts.\`);
  } catch (erro) {
    console.error("Falha ao buscar dados:", erro);
  }
}
buscarDadosCombinados();`
          },
          {
            title: 'Exemplo 3: A Armadilha - Comportamento Fail-Fast',
            description: 'Se uma das promises falhar, o `Promise.all` rejeita imediatamente e o `.catch` é acionado. Os resultados das outras promises são ignorados.',
            code: `const p1 = Promise.resolve('Sucesso');
const p2 = Promise.reject('Falha!');
const p3 = new Promise(res => setTimeout(() => res('Outro Sucesso'), 1000));

Promise.all([p1, p2, p3])
  .then(resultados => console.log(resultados))
  .catch(erro => console.error(erro)); // "Falha!"`
          }
        ]
      },
      quiz: [
        {
          question: 'O que acontece se uma das promises em `Promise.all()` for rejeitada?',
          options: ['As outras promises continuam e o resultado é um sucesso parcial.', 'O `Promise.all()` é imediatamente rejeitado, ignorando as outras.', 'O `Promise.all()` espera que todas terminem e depois é rejeitado.', 'O programa dá um erro de sintaxe.'],
          correctAnswerIndex: 1,
          explanation: '`Promise.all` tem um comportamento "fail-fast". Assim que uma das promises falha, a promise principal é rejeitada com o motivo dessa falha.'
        },
        {
          question: 'O que `Promise.all` retorna se todas as promises forem bem-sucedidas?',
          options: ['Apenas o resultado da primeira promise.', 'Apenas o resultado da última promise.', 'Um array com os resultados de cada promise, na ordem em que foram passadas.', 'Um objeto com os resultados.'],
          correctAnswerIndex: 2,
          explanation: 'A ordem dos resultados no array de retorno corresponde sempre à ordem das promises no array de entrada, independentemente da ordem em que elas resolvem.'
        }
      ],
      challenge: {
        description: "Usa a PokéAPI. Cria uma função que recebe um array de 3 nomes de Pokémon e usa `Promise.all()` com `fetch` para ir buscar os dados dos três em paralelo. No final, imprime o nome e o tipo principal de cada um.",
        starterCode: `const pokemons = ["pikachu", "charmander", "squirtle"];

async function buscarVariosPokemons(nomes) {
  // O teu código aqui
}

buscarVariosPokemons(pokemons);`,
        solution: `async function buscarVariosPokemons(nomes) {
  try {
    const promessas = nomes.map(nome =>
      fetch(\`https://pokeapi.co/api/v2/pokemon/\${nome}\`).then(res => res.json())
    );

    const resultados = await Promise.all(promessas);

    resultados.forEach(pokemon => {
      console.log(\`Nome: \${pokemon.name}, Tipo: \${pokemon.types[0].type.name}\`);
    });
  } catch (erro) {
    console.error("Erro a buscar Pokémons:", erro);
  }
}`
      }
    },
    {
      id: '6.7',
      title: 'Desafio do Módulo: Mini App do Tempo',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Vamos unir o que aprendeste sobre JavaScript Assíncrono e Manipulação do DOM para criar uma pequena aplicação que vai buscar o tempo atual a uma API e o mostra na página.')
      ),
      practice: {
        examples: [
          {
            title: 'Passo 1: O HTML',
            description: 'Precisamos de um local para mostrar a informação.',
            code: `<!-- HTML -->
<div id="weather">
  <h1>Tempo em Lisboa</h1>
  <p id="temperatura">A carregar...</p>
  <p id="descricao">A carregar...</p>
</div>`
          },
          {
            title: 'Passo 2: O JavaScript (a Lógica)',
            description: 'Vamos criar uma função `async` que usa `fetch` para ir buscar os dados a uma API de tempo gratuita (requer um URL específico que pode não funcionar sempre, mas serve para o exemplo).',
            code: `async function buscarTempo() {
  const url = 'https://goweather.herokuapp.com/weather/Lisbon';
  // ... o resto da lógica vai aqui
}`
          },
          {
            title: 'Passo 3: A Lógica Completa',
            description: 'Dentro da função, fazemos o `fetch`, tratamos dos dados, selecionamos os elementos do DOM e atualizamos o seu conteúdo.',
            code: `const tempEl = document.getElementById('temperatura');
const descEl = document.getElementById('descricao');

async function buscarTempo() {
  try {
    const url = 'https://goweather.herokuapp.com/weather/Lisbon';
    const resposta = await fetch(url);
    const dados = await resposta.json();

    tempEl.textContent = \`Temperatura: \${dados.temperature}\`;
    descEl.textContent = \`Descrição: \${dados.description}\`;
  } catch (erro) {
    tempEl.textContent = "Não foi possível carregar o tempo.";
    descEl.textContent = "";
  }
}

buscarTempo();`
          }
        ]
      },
      quiz: [
        {
          question: 'Porque é importante ter um bloco `try...catch` ao usar `fetch`?',
          options: ['Para o código ser mais rápido.', 'É uma exigência da sintaxe `async/await`.', 'Para lidar com erros de rede ou falhas da API de forma graciosa, sem quebrar a aplicação.', 'Para converter os dados para JSON.'],
          correctAnswerIndex: 2,
          explanation: 'Operações de rede podem falhar por muitas razões (falta de internet, servidor em baixo, etc.). `try...catch` permite-nos capturar esses erros e mostrar uma mensagem amigável ao utilizador em vez de uma aplicação quebrada.'
        },
        {
          question: 'O que a linha `const dados = await resposta.json()` faz?',
          options: ['Converte uma string para um objeto JavaScript.', 'É uma operação assíncrona que lê o corpo da resposta e o converte de JSON para um objeto JS.', 'Verifica se a resposta tem erros.', 'Envia dados em formato JSON.'],
          correctAnswerIndex: 1,
          explanation: 'O método `.json()` também retorna uma Promise, porque o corpo da resposta pode ser grande e demorar tempo a ser lido e processado. Por isso, também precisamos de usar `await` nele.'
        }
      ],
      challenge: {
        description: "Melhora a App do Tempo. Adiciona um `<input>` e um `<button>` ao HTML. Faz com que a função `buscarTempo` receba o nome de uma cidade como argumento e vá buscar o tempo para essa cidade, em vez de ser sempre Lisboa.",
        starterCode: `// HTML:
// <input id="cidade-input" placeholder="Nome da cidade">
// <button id="buscar-tempo-btn">Buscar</button>

// JavaScript:
// Adapta a função buscarTempo para receber um argumento 'cidade'`,
        solution: `const tempEl = document.getElementById('temperatura');
const descEl = document.getElementById('descricao');
const input = document.getElementById('cidade-input');
const botao = document.getElementById('buscar-tempo-btn');

async function buscarTempo(cidade) {
  tempEl.textContent = \`A carregar tempo para \${cidade}...\`;
  descEl.textContent = '';
  try {
    const url = \`https://goweather.herokuapp.com/weather/\${cidade}\`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    tempEl.textContent = \`Temperatura: \${dados.temperature}\`;
    descEl.textContent = \`Descrição: \${dados.description}\`;
  } catch (erro) {
    tempEl.textContent = \`Não foi possível carregar o tempo para \${cidade}.\`;
  }
}

botao.addEventListener('click', () => {
  const cidade = input.value.trim();
  if (cidade) {
    buscarTempo(cidade);
  }
});

buscarTempo("Lisbon"); // Carga inicial`
      }
    }
  ]
};