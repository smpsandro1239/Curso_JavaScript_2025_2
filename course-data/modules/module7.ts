import * as React from 'react';
import type { Module } from '../../types';

const PromisesIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 300 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-xl h-auto text-lightest-slate" },
  // Pending
  React.createElement(
    'g',
    { transform: "translate(10, 10)" },
    React.createElement('rect', { width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('circle', { cx: "40", cy: "40", r: "15", fill: "none", stroke: "#a8b2d1", strokeWidth: "2", strokeDasharray: "4 4" }),
    React.createElement('path', { d: "M 40 30 L 40 42 L 48 48", fill: "none", stroke: "#a8b2d1", strokeWidth: "2" }),
    React.createElement('text', { x: "40", y: "80", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Pendente")
  ),
  // Arrow
  React.createElement('path', { d: "M 95 50 L 125 50", stroke: "#233554", strokeWidth: "2", markerEnd: "url(#arrowhead-gray)" }),
  React.createElement('defs', null, 
    React.createElement('marker', { id: "arrowhead-gray", markerWidth: "5", markerHeight: "3.5", refX: "0", refY: "1.75", orient: "auto" },
      React.createElement('polygon', { points: "0 0, 5 1.75, 0 3.5", fill: "#233554" })
    )
  ),
  // Fulfilled
  React.createElement(
    'g',
    { transform: "translate(130, 10)" },
    React.createElement('rect', { width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('path', { d: "M 25 45 L 38 58 L 55 30", fill: "none", stroke: "#64ffda", strokeWidth: "4" }),
    React.createElement('text', { x: "40", y: "80", textAnchor: "middle", fontSize: "8", fill: "#64ffda" }, "Realizada")
  ),
  // Rejected
  React.createElement(
    'g',
    { transform: "translate(210, 10)" },
    React.createElement('rect', { width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
     React.createElement('path', { d: "M 30 30 L 50 50 M 50 30 L 30 50", fill: "none", stroke: "rgb(239 68 68)", strokeWidth: "4" }),
    React.createElement('text', { x: "40", y: "80", textAnchor: "middle", fontSize: "8", fill: "rgb(252 165 165)" }, "Rejeitada")
  ),
  // Split path
   React.createElement('path', { d: "M 170 10 L 190 10 C 200 10, 200 20, 210 20 L 210 30", stroke: "#233554", strokeWidth: "1", fill: "none" }),
   React.createElement('path', { d: "M 170 90 L 190 90 C 200 90, 200 80, 210 80 L 210 70", stroke: "#233554", strokeWidth: "1", fill: "none" })
);

export const module7: Module = {
  id: '7',
  title: 'Módulo 7: JavaScript Assíncrono',
  lessons: [
    {
      id: '7.1',
      title: 'A Natureza Assíncrona do JS',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'JavaScript é, por natureza, uma linguagem "single-threaded" (de thread única). Isto significa que só consegue fazer uma coisa de cada vez. Imagina uma fila de café: a primeira pessoa a chegar é a primeira a ser servida. A isto chama-se execução síncrona.'),
        React.createElement('p', { className: 'mb-4' }, 'No entanto, tarefas como ir buscar dados a um servidor (uma API) podem demorar. Se o JavaScript esperasse (bloqueasse) por essa resposta, toda a página web congelaria. Para evitar isto, o JS usa um modelo assíncrono.'),
        React.createElement('p', { className: 'mb-4' }, 'Tarefas assíncronas são como pedir um café para levar e receber uma senha. Podes fazer outras coisas enquanto esperas, e quando o teu café (os teus dados) estiver pronto, és notificado. As formas de lidar com esta "notificação" evoluíram:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Callbacks:'), ' A forma original. Passas uma função (o callback) como argumento para outra função, e essa função de callback é chamada quando a tarefa assíncrona termina.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Promises:'), ' Uma forma mais moderna e robusta. Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Async/Await:'), ' "Açúcar sintático" por cima das Promises. Permite escrever código assíncrono que parece síncrono, tornando-o muito mais fácil de ler e manter.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: Síncrono vs. Assíncrono",
            description: "Vê a ordem em que as mensagens aparecem na consola. `setTimeout` é uma função assíncrona que espera um determinado tempo antes de executar o seu callback.",
            code: `console.log("1. Primeiro");

setTimeout(() => {
  console.log("2. Segundo (depois de 2 segundos)");
}, 2000);

console.log("3. Terceiro");

// Output esperado na consola:
// 1. Primeiro
// 3. Terceiro
// 2. Segundo (depois de 2 segundos)`
          },
          {
            title: "Exemplo 2: O Problema dos Callbacks (Callback Hell)",
            description: "Quando tens múltiplas operações assíncronas que dependem umas das outras, acabas com callbacks dentro de callbacks, criando uma estrutura de código difícil de ler, conhecida como 'Callback Hell' ou 'Pyramid of Doom'.",
            code: `setTimeout(() => {
  console.log('Primeira tarefa completa');
  setTimeout(() => {
    console.log('Segunda tarefa completa');
    setTimeout(() => {
      console.log('Terceira tarefa completa');
    }, 1000);
  }, 1000);
}, 1000);`
          }
        ]
      },
      quiz: [
        {
          question: 'O que significa JavaScript ser "single-threaded"?',
          options: [
            'Só pode ser escrito num único ficheiro.',
            'Só consegue executar uma operação de cada vez.',
            'Só funciona com um tipo de dado.',
            'Só pode ser usado no browser.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Ser single-threaded significa ter apenas uma "call stack", ou seja, a capacidade de executar uma instrução de cada vez. Operações assíncronas são delegadas para APIs do ambiente (browser/Node.js) para não bloquear esta thread principal.'
        },
        {
          question: 'Qual é a principal desvantagem do padrão de callbacks para código assíncrono complexo?',
          options: [
            'São lentos.',
            'Só funcionam com `setTimeout`.',
            'Podem levar a um código profundamente aninhado e difícil de ler (Callback Hell).',
            'Não conseguem lidar com erros.'
          ],
          correctAnswerIndex: 2,
          explanation: 'O "Callback Hell" é o principal problema que as Promises e o Async/Await vieram resolver, melhorando drasticamente a legibilidade e manutenção de código assíncrono.'
        }
      ]
    },
    {
      id: '7.2',
      title: 'Promises',
      illustration: React.createElement(PromisesIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Uma Promise é um objeto que representa um valor que pode estar disponível agora, no futuro, ou nunca. É uma promessa de um resultado. Uma Promise pode estar em um de três estados:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Pending (Pendente):'), ' O estado inicial; a operação ainda não foi concluída.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Fulfilled (Realizada):'), ' A operação foi concluída com sucesso. A promessa tem um valor.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Rejected (Rejeitada):'), ' A operação falhou. A promessa tem um motivo (um erro).')
        ),
        React.createElement('p', { className: 'mb-4 mt-4' }, 'Interagimos com Promises usando os métodos `.then()` para lidar com o sucesso, `.catch()` para lidar com a falha, e `.finally()` para executar código independentemente do resultado.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Consumir uma Promise',
            description: 'A função `fetch` (que veremos em breve) retorna uma Promise. Encadeamos `.then()` para processar a resposta quando ela chega com sucesso. O primeiro `.then` lida com a resposta HTTP, o segundo com os dados JSON.',
            code: `fetch('https://api.github.com/users/github')
  .then(response => {
    // response.json() também retorna uma promise!
    return response.json(); 
  })
  .then(data => {
    console.log("Dados do utilizador:", data.name);
  })
  .catch(error => {
    console.error("Ocorreu um erro:", error);
  });`
          },
          {
            title: 'Exemplo 2: Criar uma Promise',
            description: 'Podemos criar as nossas próprias Promises. O construtor da Promise recebe uma função com dois argumentos: `resolve` (para chamar em caso de sucesso) e `reject` (para chamar em caso de falha).',
            code: `const minhaPromessa = new Promise((resolve, reject) => {
  const sucesso = true; // Mude para false para ver o .catch()
  
  setTimeout(() => {
    if (sucesso) {
      resolve("A operação foi bem sucedida!");
    } else {
      reject("A operação falhou.");
    }
  }, 2000);
});

minhaPromessa
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro));`
          }
        ]
      },
      quiz: [
        {
          question: 'O que o método `.then()` de uma Promise faz?',
          options: ['Executa sempre, independentemente do resultado.', 'Lida com o caso de falha (rejeição) da Promise.', 'Agenda uma função para ser executada quando a Promise for resolvida com sucesso.', 'Cria uma nova Promise.'],
          correctAnswerIndex: 2,
          explanation: '`.then()` é usado para lidar com o resultado de sucesso de uma Promise. O seu argumento é uma função que receberá o valor resolvido.'
        },
        {
          question: 'Qual método é usado para lidar com erros numa cadeia de Promises?',
          options: ['`.error()`', '`.reject()`', '`.catch()`', '`.finally()`'],
          correctAnswerIndex: 2,
          explanation: '`.catch()` é o método designado para "apanhar" quaisquer rejeições (erros) que ocorram na Promise ou em qualquer `.then()` anterior na cadeia.'
        }
      ]
    },
    {
      id: '7.3',
      title: 'Async/Await',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, '`async` e `await` são funcionalidades que nos permitem trabalhar com Promises de uma forma mais confortável e síncrona visualmente.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`async function`:'), ' Ao declarar uma função como `async`, ela passa a retornar automaticamente uma Promise. O valor que a função retorna (com `return`) será o valor de resolução dessa Promise.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`await`:'), ' Esta palavra-chave só pode ser usada DENTRO de uma `async function`. Ela pausa a execução da função até que a Promise à sua direita seja resolvida, e depois "desembrulha" o valor resolvido.')
        ),
        React.createElement('p', { className: 'mb-4 mt-4' }, 'Para lidar com erros, usamos o bom e velho bloco `try...catch`, tal como faríamos com código síncrono.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: `fetch` com Async/Await',
            description: 'Vê como este código é mais limpo e linear do que a versão com `.then()`. Parece que o programa para em cada `await` até o resultado estar pronto.',
            code: `async function buscarUtilizador() {
  try {
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    console.log("Nome do utilizador:", data.name);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

buscarUtilizador();`
          },
          {
            title: 'Exemplo 2: Lidar com Múltiplas Promises',
            description: '`Promise.all` é um método muito útil que recebe um array de Promises e espera que TODAS elas resolvam. Com `await`, podemos esperar pelo resultado de todas de uma vez.',
            code: `async function buscarVarios() {
  try {
    const [utilizador1, utilizador2] = await Promise.all([
      fetch('https://api.github.com/users/google'),
      fetch('https://api.github.com/users/facebook')
    ]);

    const dados1 = await utilizador1.json();
    const dados2 = await utilizador2.json();

    console.log("Utilizador 1:", dados1.name);
    console.log("Utilizador 2:", dados2.name);

  } catch (error) {
    console.error("Falha ao buscar dados:", error);
  }
}

buscarVarios();`
          }
        ]
      },
      quiz: [
        {
          question: 'Onde podes usar a palavra-chave `await`?',
          options: ['Em qualquer função.', 'Apenas dentro de funções declaradas com a palavra-chave `async`.', 'Apenas fora de funções.', 'Apenas em loops `for`.'],
          correctAnswerIndex: 1,
          explanation: '`await` só é válido sintaticamente dentro de uma `async function`. Tentar usá-lo noutro local resultará num erro.'
        },
        {
          question: 'Como lidas com erros numa `async function`?',
          options: ['Usando o método `.catch()` na chamada da função.', 'Usando um bloco `try...catch` dentro da função.', 'Ambas as opções acima são válidas.', 'Async functions não podem ter erros.'],
          correctAnswerIndex: 2,
          explanation: 'Podes usar um `try...catch` interno para lidar com o erro localmente, ou podes deixar a Promise rejeitada "borbulhar" e usar `.catch()` onde chamas a função `async`. Ambas as abordagens são comuns e úteis em diferentes cenários.'
        }
      ]
    },
    {
      id: '7.4',
      title: 'Desafio: Mini-App de Citações',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Vamos usar a API `fetch` com `async/await` para criar uma pequena aplicação que busca uma citação aleatória de uma API pública e a exibe na página.'),
        React.createElement('p', { className: 'mb-4' }, 'O desafio combina o que aprendemos sobre JavaScript Assíncrono com o que já sabemos sobre manipulação do DOM.'),
        React.createElement('p', { className: 'mb-4' }, 'Usaremos a API gratuita "Quotable": ', React.createElement('a', { href: 'https://github.com/lukePeavey/quotable', target: '_blank', className: 'text-green hover:underline' }, 'https://github.com/lukePeavey/quotable')),
        React.createElement('p', { className: 'bg-lightest-navy p-2 rounded' }, React.createElement('code', null, 'Endpoint para uma citação aleatória: https://api.quotable.io/random'))
      ),
      practice: {
        examples: [
          {
            title: 'Passo 1: O HTML',
            description: 'Precisamos de um local para mostrar a citação e o autor, e um botão para buscar uma nova citação.',
            code: `<!-- HTML -->
<div id="citacao-container">
  <blockquote id="citacao">A carregar...</blockquote>
  <cite id="autor"></cite>
</div>
<button id="nova-citacao">Nova Citação</button>`
          },
          {
            title: 'Passo 2: A Função Assíncrona',
            description: 'Cria uma `async function` que faz o `fetch` à API, processa o JSON, e atualiza o DOM com os dados recebidos.',
            code: `// JavaScript
const citacaoEl = document.getElementById('citacao');
const autorEl = document.getElementById('autor');
const novaCitacaoBtn = document.getElementById('nova-citacao');

async function buscarCitacao() {
  try {
    citacaoEl.textContent = 'A carregar...';
    autorEl.textContent = '';

    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
      throw new Error('Não foi possível buscar a citação');
    }
    const data = await response.json();

    citacaoEl.textContent = data.content;
    autorEl.textContent = \`- \${data.author}\`;
  } catch (error) {
    citacaoEl.textContent = 'Ocorreu um erro. Tente novamente.';
    console.error(error);
  }
}
`
          },
          {
            title: 'Passo 3: Adicionar o Event Listener',
            description: 'Finalmente, liga a função `buscarCitacao` ao evento de clique do botão. Também a chamamos uma vez no início para carregar a primeira citação.',
            code: `// ... (código anterior) ...

novaCitacaoBtn.addEventListener('click', buscarCitacao);

// Carregar a primeira citação quando a página abre
buscarCitacao();`
          }
        ]
      },
      quiz: [
        {
          question: "O que a linha `if (!response.ok)` faz?",
          options: ['Verifica se a resposta é um objeto.', 'Verifica se a resposta não está vazia.', 'Verifica se o status HTTP da resposta indica um erro (ex: 404, 500). `fetch` não rejeita a promise por erros HTTP.', 'Verifica se a conexão à internet está OK.'],
          correctAnswerIndex: 2,
          explanation: 'Um detalhe importante da API `fetch`: ela só rejeita a promise em caso de falha de rede. Erros de servidor (status 4xx ou 5xx) contam como uma resposta "bem-sucedida" a nível de rede. Por isso, temos de verificar manualmente a propriedade `.ok` (que é true para status 200-299) e lançar um erro se necessário.'
        },
        {
          question: "Porque é boa prática mostrar uma mensagem como 'A carregar...'?",
          options: ['Para preencher espaço na página.', 'Para dar feedback visual ao utilizador de que a aplicação está a trabalhar e não bloqueou.', 'Para testar a velocidade da API.', 'É obrigatório pela API `fetch`.'],
          correctAnswerIndex: 1,
          explanation: 'Dar feedback ao utilizador sobre o estado da aplicação é um princípio fundamental de uma boa experiência de utilizador (UX). Mostra que o pedido foi recebido e que algo está a acontecer em segundo plano.'
        }
      ]
    }
  ]
};