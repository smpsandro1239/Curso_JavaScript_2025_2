
import * as React from 'react';
import type { Module } from '../../types';

export const module6: Module = {
  id: '6',
  title: 'Módulo 6: JavaScript Assíncrono',
  lessons: [
    {
      id: '6.1',
      title: 'Introdução à Assincronia e Callbacks',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Até agora, todo o nosso código foi síncrono, ou seja, executado linha a linha, uma de cada vez. Se uma tarefa demora muito tempo (como pedir dados a um servidor), a página inteira "congela" até que ela termine. O JavaScript Assíncrono resolve este problema.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia é ir a um restaurante. Síncrono seria o empregado ficar parado ao teu lado à espera que escolhas, sem fazer mais nada. Assíncrono é o empregado anotar o teu pedido e ir atender outras mesas enquanto a cozinha o prepara. Ele "volta mais tarde" (callback) com a comida.'),
        React.createElement('p', { className: 'mb-4' }, 'O primeiro mecanismo para lidar com assincronia em JS foram as Funções de Callback. Um callback é uma função que é passada como argumento para outra função, para ser executada mais tarde, quando a operação assíncrona terminar.'),
        React.createElement('p', { className: 'mt-2 mb-4 p-4 bg-lightest-navy rounded-md text-sm text-light-slate border-l-4 border-yellow-400' }, React.createElement('strong', { className: 'font-bold text-yellow-300' }, 'Callback Hell: '), 'Quando tens múltiplas operações assíncronas que dependem umas das outras, podes acabar com callbacks dentro de callbacks, criando uma estrutura de código difícil de ler conhecida como "Callback Hell" ou "Pyramid of Doom".')
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - `setTimeout`",
            description: '`setTimeout` é uma função assíncrona clássica. Ela executa uma função de callback após um determinado período de tempo, sem bloquear o resto do código.',
            code: `console.log("Pedido feito. A aguardar pela resposta...");

setTimeout(() => {
  console.log("Resposta recebida!");
}, 2000); // Executa após 2000 milissegundos (2 segundos)

console.log("Enquanto isso, posso continuar a fazer outras coisas.");`
          },
          {
            title: "Exemplo 2: O Caso Comum - Simular um Pedido de Dados",
            description: 'Vamos simular um pedido a um servidor. A função `obterDadosUtilizador` aceita um `id` e um `callback` para executar quando os dados "chegarem".',
            code: `function obterDadosUtilizador(id, callback) {
  console.log(\`A procurar utilizador com id: \${id}...\`);
  setTimeout(() => {
    const utilizador = { id: id, nome: 'Ana' };
    callback(utilizador); // Chama o callback com os dados
  }, 1500);
}

obterDadosUtilizador(123, (dados) => {
  console.log("Utilizador encontrado:", dados);
});`
          },
          {
            title: "Exemplo 3: A Armadilha - Callback Hell",
            description: 'Aqui está um exemplo de "Callback Hell". Precisamos de obter o utilizador, depois as suas publicações, e depois os comentários da primeira publicação. A estrutura aninhada torna-se rapidamente confusa.',
            code: `function obterPublicacoes(userId, callback) { /* ... */ }
function obterComentarios(postId, callback) { /* ... */ }

// Supondo que as funções acima existem
function obterDadosUtilizador(id, callback) {
  setTimeout(() => callback({id}), 500);
}

obterDadosUtilizador(123, (utilizador) => {
  console.log(utilizador);
  obterPublicacoes(utilizador.id, (publicacoes) => {
    console.log(publicacoes);
    obterComentarios(publicacoes[0].id, (comentarios) => {
      console.log(comentarios);
      // E se precisasses de mais dados?...
    });
  });
});`
          }
        ]
      },
      quiz: [
        {
          question: 'O que é código assíncrono?',
          options: [
            'Código que é executado mais rapidamente.',
            'Código que permite que tarefas demoradas sejam executadas em segundo plano, sem bloquear a thread principal.',
            'Código que só pode ser escrito com callbacks.',
            'Um erro no código que o faz executar fora de ordem.'
          ],
          correctAnswerIndex: 1,
          explanation: 'A principal vantagem da assincronia é a não-bloqueante, permitindo que a interface do utilizador permaneça responsiva enquanto operações demoradas, como pedidos de rede, estão a decorrer.'
        },
        {
          question: "No contexto de `setTimeout(minhaFuncao, 1000)`, o que é `minhaFuncao`?",
          options: [
            'Uma função que é executada imediatamente.',
            'Uma função de callback.',
            'Uma Promise.',
            'Uma variável.'
          ],
          correctAnswerIndex: 1,
          explanation: '`minhaFuncao` é uma função de callback, passada para `setTimeout` para ser executada (chamada de volta) após o tempo especificado ter passado.'
        }
      ],
      challenge: {
        description: "Cria uma função `processarArray(array, callback)` que recebe um array de números e uma função de callback. A função deve iterar sobre o array e chamar o callback para cada número. Testa a função passando um callback que imprime o dobro de cada número.",
        starterCode: `function processarArray(array, callback) {
  // O teu código aqui
}

const numeros = [1, 2, 3];
processarArray(numeros, (numero) => {
  console.log("O dobro é:", numero * 2);
});`,
        solution: `function processarArray(array, callback) {
  for (const item of array) {
    callback(item);
  }
}

const numeros = [1, 2, 3];
processarArray(numeros, (numero) => {
  console.log("O dobro é:", numero * 2);
});`
      }
    },
    {
      id: '6.2',
      title: 'Promises',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'As Promises são a solução moderna do JavaScript para o "Callback Hell". Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia é encomendar algo online. Quando fazes a encomenda, recebes um número de seguimento (a Promise). Não tens o produto ainda, mas tens uma "promessa" de que ele vai chegar. A encomenda pode ter dois resultados:'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Fulfilled (Realizada)'), ': A encomenda chegou. O produto está aqui. Corresponde ao `.then()` da promise.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Rejected (Rejeitada)'), ': A encomenda foi cancelada ou perdeu-se. Houve um problema. Corresponde ao `.catch()` da promise.')
        ),
        React.createElement('p', { className: 'mt-4' }, 'As Promises permitem-nos encadear operações assíncronas de uma forma muito mais limpa e legível do que os callbacks aninhados.')
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Criar e Usar uma Promise",
            description: 'Vamos criar uma promise que simula um sucesso ou uma falha aleatória. Depois, vamos consumi-la com `.then()` e `.catch()`.',
            code: `const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = Math.random() > 0.5;
  setTimeout(() => {
    if (sucesso) {
      resolve("Dados recebidos com sucesso!");
    } else {
      reject("Erro ao obter os dados.");
    }
  }, 1000);
});

minhaPromise
  .then((resultado) => {
    console.log("Sucesso:", resultado);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  });`
          },
          {
            title: "Exemplo 2: O Caso Comum - Encadeamento de Promises (Chaining)",
            description: 'A grande vantagem das promises é o encadeamento. O valor retornado por um `.then()` é passado como argumento para o `.then()` seguinte. Isto evita o aninhamento.',
            code: `function obterIdUtilizador() {
  return new Promise(resolve => setTimeout(() => resolve(123), 500));
}
function obterDados(id) {
  return new Promise(resolve => setTimeout(() => resolve({ id: id, nome: 'Rui' }), 500));
}

obterIdUtilizador()
  .then(id => obterDados(id)) // O id (123) é passado para obterDados
  .then(utilizador => { // o resultado de obterDados (o objeto utilizador) é recebido aqui
    console.log(utilizador);
  })
  .catch(erro => console.error(erro));`
          },
          {
            title: "Exemplo 3: A Nuance - `Promise.all`",
            description: 'E se quisermos fazer vários pedidos ao mesmo tempo e esperar que todos terminem? `Promise.all()` recebe um array de promises e resolve quando TODAS as promises estiverem resolvidas.',
            code: `const promise1 = Promise.resolve("Primeira promise");
const promise2 = new Promise(resolve => setTimeout(() => resolve("Segunda promise"), 1000));
const promise3 = Promise.resolve("Terceira promise");

Promise.all([promise1, promise2, promise3])
  .then(resultados => {
    console.log("Todas as promises foram resolvidas:", resultados);
    // resultados é um array com os resultados de cada promise, na mesma ordem
  });`
          }
        ]
      },
      quiz: [
        {
          question: 'Uma Promise em JavaScript pode estar em que três estados?',
          options: [
            'start, running, end',
            'pending, fulfilled, rejected',
            'success, failure, waiting',
            'async, sync, complete'
          ],
          correctAnswerIndex: 1,
          explanation: 'Uma promise começa no estado `pending` (pendente). Ela pode depois transitar para `fulfilled` (realizada com sucesso) ou `rejected` (rejeitada com um erro).'
        },
        {
          question: "O que é que o método `.catch()` de uma promise faz?",
          options: [
            'É executado quando a promise tem sucesso.',
            'É um alias para `.then()`.',
            'É executado apenas se a promise for rejeitada (rejected).',
            'Pára a execução de todas as promises.'
          ],
          correctAnswerIndex: 2,
          explanation: 'O bloco `.catch()` é o local designado para tratar erros. Ele é invocado se `reject()` for chamado dentro da promise, ou se ocorrer um erro num bloco `.then()` anterior.'
        }
      ],
      challenge: {
        description: "Cria uma função `verificarNumero(num)` que retorna uma promise. A promise deve resolver se o número for maior que 10, e rejeitar caso contrário. Depois, chama a função e trata os casos de sucesso e de erro com `.then()` e `.catch()`.",
        starterCode: `function verificarNumero(num) {
  // O teu código da promise aqui
}

verificarNumero(15)
  .then(resultado => console.log(resultado)) // Deve imprimir "Sucesso: O número é maior que 10"
  .catch(erro => console.error(erro));

verificarNumero(5)
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro)); // Deve imprimir "Erro: O número não é maior que 10"`,
        solution: `function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(\`Sucesso: O número \${num} é maior que 10\`);
    } else {
      reject(\`Erro: O número \${num} não é maior que 10\`);
    }
  });
}`
      }
    },
    {
      id: '6.3',
      title: 'Async/Await',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, '`async/await` é uma sintaxe mais recente (ES2017) que torna o trabalho com promises ainda mais fácil e o código assíncrono muito parecido com código síncrono. É "açúcar sintático" por cima das promises, o que significa que não substitui as promises, apenas oferece uma forma mais limpa de as usar.'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'async'), ': A palavra-chave `async` é colocada antes de uma declaração de função. Ela faz duas coisas: 1) faz com que a função retorne implicitamente uma promise, e 2) permite o uso da palavra-chave `await` dentro dela.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'await'), ': A palavra-chave `await` só pode ser usada dentro de uma função `async`. Ela "pausa" a execução da função até que a promise à sua frente seja resolvida, e depois retoma a execução, devolvendo o valor resolvido da promise.')
        ),
        React.createElement('p', { className: 'mt-4' }, 'Para tratar erros, em vez de usar `.catch()`, usamos o familiar bloco `try...catch`, tal como no código síncrono.')
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Converter uma Promise",
            description: 'Vamos pegar num exemplo de promise e reescrevê-lo com `async/await`. Repara como o código fica mais linear e fácil de ler.',
            code: `function obterMensagem() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Olá, mundo assíncrono!"), 1000);
  });
}

// Com .then()
// obterMensagem().then(msg => console.log(msg));

// Com async/await
async function mostrarMensagem() {
  console.log("A aguardar pela mensagem...");
  const msg = await obterMensagem(); // Pausa aqui até a promise resolver
  console.log(msg);
}

mostrarMensagem();`
          },
          {
            title: "Exemplo 2: O Caso Comum - Tratamento de Erros",
            description: 'Vamos simular uma promise que pode falhar e tratar o erro com um bloco `try...catch`.',
            code: `function podeFalhar() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      reject("Oh não, falhou!");
    } else {
      resolve("Tudo correu bem!");
    }
  });
}

async function executarOperacao() {
  try {
    const resultado = await podeFalhar();
    console.log("Sucesso:", resultado);
  } catch (erro) {
    console.error("Apanhámos um erro:", erro);
  }
}

executarOperacao();`
          },
          {
            title: "Exemplo 3: A Nuance - Execução Paralela",
            description: 'Se usares `await` em várias promises seguidas, elas são executadas em série. Se não dependem umas das outras, é mais eficiente executá-las em paralelo com `Promise.all`.',
            code: `async function obterDadosParalelos() {
  console.time("Tempo total");
  
  const promise1 = new Promise(r => setTimeout(() => r('Dados 1'), 1000));
  const promise2 = new Promise(r => setTimeout(() => r('Dados 2'), 1000));

  // Executa as duas promises em paralelo
  const resultados = await Promise.all([promise1, promise2]);
  
  console.log(resultados);
  console.timeEnd("Tempo total"); // Cerca de 1 segundo, não 2!
}

obterDadosParalelos();`
          }
        ]
      },
      quiz: [
        {
          question: 'Onde podes usar a palavra-chave `await`?',
          options: [
            'Em qualquer função.',
            'Apenas dentro de funções marcadas com a palavra-chave `async`.',
            'Apenas no escopo global.',
            'Apenas dentro de um bloco `.catch()`.'
          ],
          correctAnswerIndex: 1,
          explanation: 'A sintaxe `await` está intrinsecamente ligada às funções `async`. Tentar usá-la fora de uma função `async` resultará num erro de sintaxe (exceto em alguns ambientes modernos de nível superior).'
        },
        {
          question: 'Qual é a forma recomendada de tratar erros ao usar `async/await`?',
          options: [
            'Usar o método `.catch()` na chamada da função.',
            'Envolver o código `await` num bloco `try...catch`.',
            'Verificar se o resultado é `undefined`.',
            '`async/await` não pode ter erros.'
          ],
          correctAnswerIndex: 1,
          explanation: 'O bloco `try...catch` é a forma idiomática de tratar rejeições de promises quando se usa `async/await`, permitindo que o tratamento de erros assíncronos se assemelhe ao tratamento de erros síncronos.'
        }
      ],
      challenge: {
        description: "Reescreve o encadeamento de promises do desafio da lição anterior (`verificarNumero`) usando `async/await` e um bloco `try...catch`.",
        starterCode: `function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) resolve(\`Sucesso: \${num}\`);
    else reject(\`Erro: \${num}\`);
  });
}

async function testarNumero(numero) {
  // O teu código com try/catch e await aqui
}

testarNumero(15);
testarNumero(5);`,
        solution: `async function testarNumero(numero) {
  try {
    const resultado = await verificarNumero(numero);
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
}`
      }
    },
    {
      id: '6.4',
      title: 'A API Fetch',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'A API Fetch é a interface moderna do navegador para fazer pedidos de rede (HTTP), como obter dados de uma API. Ela é baseada em Promises, tornando-a perfeita para ser usada com `.then()` ou `async/await`.'),
        React.createElement('p', { className: 'mb-4' }, 'Fazer um pedido `fetch` é um processo de dois passos:'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, '1. Chamar `fetch(url)`. Isto inicia o pedido e retorna uma promise que resolve com um objeto `Response` assim que o servidor responde com os cabeçalhos.'),
          React.createElement('li', null, '2. O objeto `Response` não contém os dados diretamente. Precisamos de chamar um método nele para extrair o corpo da resposta no formato que queremos, como `.json()` (para dados JSON) ou `.text()` (para texto). Estes métodos também retornam uma promise!')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Fetch com `.then()`",
            description: 'Vamos fazer um pedido a uma API pública de teste (JSONPlaceholder) para obter uma lista de tarefas (to-dos).',
            code: `const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
  .then(response => {
    // Verificar se o pedido foi bem sucedido (status 200-299)
    if (!response.ok) {
      throw new Error('A resposta da rede não foi OK');
    }
    return response.json(); // Retorna uma promise com os dados
  })
  .then(data => {
    console.log("Dados recebidos:", data);
  })
  .catch(error => {
    console.error("Houve um problema com o fetch:", error);
  });`
          },
          {
            title: "Exemplo 2: O Caso Comum - Fetch com `async/await`",
            description: 'A mesma operação, mas escrita com `async/await`. Repara como o código fica mais limpo e síncrono na aparência.',
            code: `const url = 'https://jsonplaceholder.typicode.com/todos/1';

async function obterTarefa() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`Erro HTTP! Status: \${response.status}\`);
    }
    const data = await response.json();
    console.log("Tarefa obtida:", data);
  } catch (error) {
    console.error("Não foi possível obter a tarefa:", error);
  }
}

obterTarefa();`
          },
          {
            title: "Exemplo 3: A Nuance - Enviar Dados (POST)",
            description: 'Para enviar dados (ex: criar um novo recurso), passamos um segundo argumento para `fetch` com um objeto de configuração, especificando o método (`POST`), os cabeçalhos (`headers`), e o corpo da mensagem (`body`), que geralmente é uma string JSON.',
            code: `async function criarPublicacao() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const novaPublicacao = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaPublicacao),
    });
    
    const data = await response.json();
    console.log("Publicação criada:", data);
  } catch (error) {
    console.error("Erro ao criar publicação:", error);
  }
}

criarPublicacao();`
          }
        ]
      },
      quiz: [
        {
          question: "O que é que a chamada `fetch(url)` retorna imediatamente?",
          options: [
            'Os dados JSON da resposta.',
            'O texto da resposta.',
            'Uma Promise que resolve com um objeto Response.',
            'O status do pedido HTTP.'
          ],
          correctAnswerIndex: 2,
          explanation: '`fetch()` retorna uma promise quase instantaneamente. Essa promise representa o pedido de rede em andamento. Ela resolve com o objeto `Response` assim que os cabeçalhos da resposta são recebidos, não o corpo completo.'
        },
        {
          question: "Depois de receberes um objeto `response` de um `fetch`, que método usas para o converter para um objeto JavaScript se a API retornou JSON?",
          options: ['response.parse()', 'response.json()', 'response.text()', 'JSON.parse(response)'],
          correctAnswerIndex: 1,
          explanation: 'O método `.json()` no objeto `Response` lê o corpo da resposta até ao fim, analisa-o como JSON, e retorna uma promise que resolve com o objeto JavaScript resultante.'
        }
      ],
      challenge: {
        description: "Usa a API Fetch para obter uma piada aleatória sobre o Chuck Norris da API `https://api.chucknorris.io/jokes/random`. Depois, exibe a piada (a propriedade `value` do objeto retornado) na consola. Usa a sintaxe `async/await`.",
        starterCode: `async function obterPiada() {
  const url = "https://api.chucknorris.io/jokes/random";
  // O teu código async/await aqui
}

obterPiada();`,
        solution: `async function obterPiada() {
  const url = "https://api.chucknorris.io/jokes/random";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Não foi possível contactar a API");
    }
    const data = await response.json();
    console.log("Piada:", data.value);
  } catch (error) {
    console.error(error);
  }
}`
      }
    }
  ]
};
