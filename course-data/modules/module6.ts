import * as React from 'react';
import type { Module } from '../../types';

export const module6: Module = {
  id: '6',
  title: 'Módulo 6: Tópicos Avançados',
  lessons: [
    {
      id: '6.1',
      title: 'JavaScript Assíncrono: Callbacks',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'O JavaScript, por natureza, é "single-threaded", o que significa que só consegue fazer uma coisa de cada vez. A isto chamamos comportamento ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'síncrono'),
          '.'
        ),
         React.createElement(
          'p',
          { className: 'mb-4' },
          'Imagina uma fila única num café. Não podes pedir o teu café até que a pessoa à tua frente tenha pago e recebido o dela. Se o pedido dela for complicado e demorar 5 minutos, toda a gente tem de esperar. Isto seria terrível num website; a página "congelaria" à espera que uma tarefa demorada (como ir buscar dados a um servidor) terminasse.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'É aqui que entra o código ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'assíncrono'),
          '. A analogia muda para um restaurante: tu fazes o teu pedido (inicias a tarefa demorada), o empregado dá-te um pager e tu vais sentar-te (o resto do teu código continua a executar). Quando o teu pedido estiver pronto (a tarefa termina), o pager vibra. Esse "aviso" é a ',
          React.createElement('strong', { className: 'text-green' }, 'função de callback'),
          ' - uma função que passas como argumento a outra, para ser executada mais tarde.'
        ),
         React.createElement(
          'p',
          { className: 'mt-4' },
          'A função `setTimeout` é o exemplo mais simples. Ela agenda a execução de uma função de callback após um certo período de tempo, sem bloquear o resto do código.'
        )
      ),
      practice: {
        examples: [
            {
                title: "Exemplo 1: O Básico - `setTimeout`",
                description: "Vamos ver como o código assíncrono funciona. O `setTimeout` agenda a execução da função, mas o programa não espera. Ele continua e imprime 'Terceiro' antes de o tempo acabar.",
                code: `console.log("Primeiro");

setTimeout(() => {
  console.log("Segundo (após 1 segundo)");
}, 1000); // 1000 milissegundos = 1 segundo

console.log("Terceiro");`
            },
            {
                title: "Exemplo 2: O Caso Comum - Simular um Download",
                description: "Uma função assíncrona muitas vezes aceita um callback para ser executado quando a tarefa termina. Isto permite-nos lidar com o resultado sem bloquear o programa.",
                code: `function fazerDownload(url, callback) {
  console.log(\`A iniciar download de \${url}...\`);
  
  setTimeout(() => {
    const dados = "Conteúdo do ficheiro";
    callback(dados); // Chama o callback com o resultado
  }, 2000);
}

fazerDownload("meus_dados.txt", (dadosRecebidos) => {
  console.log(\`Download concluído! Dados: \${dadosRecebidos}\`);
});

console.log("O programa continua a executar enquanto o download ocorre...");`
            },
            {
                title: "Exemplo 3: A Armadilha - Callback Hell",
                description: "Quando tens múltiplas operações assíncronas que dependem umas das outras, podes acabar com um aninhamento excessivo de callbacks. Isto é chamado de 'Callback Hell' ou 'Pyramid of Doom' e torna o código muito difícil de ler e manter. Promises e async/await foram criados para resolver este problema.",
                code: `setTimeout(() => {
  console.log("Operação 1 concluída.");
  setTimeout(() => {
    console.log("Operação 2 concluída.");
    setTimeout(() => {
      console.log("Operação 3 concluída.");
      // E assim por diante...
    }, 1000);
  }, 1000);
}, 1000);`
            }
        ]
      },
      quiz: [
        {
          question: "Qual será a ordem de impressão na consola do seguinte código? `console.log('Primeiro'); setTimeout(() => console.log('Segundo'), 0); console.log('Terceiro');`",
          options: [
            'Primeiro, Segundo, Terceiro',
            'Segundo, Primeiro, Terceiro',
            'Primeiro, Terceiro, Segundo',
            'Vai dar um erro.'
          ],
          correctAnswerIndex: 2,
          explanation: "Isto é um conceito chave do JavaScript! Mesmo com um atraso de 0ms, `setTimeout` coloca a sua função de callback na 'fila de eventos'. O motor do JavaScript executa primeiro todo o código síncrono (`console.log('Primeiro')` e `console.log('Terceiro')`), e só depois verifica a fila e executa o `console.log('Segundo')`."
        },
        {
            question: "O que é uma função de callback?",
            options: [
              "Uma função que se chama a si mesma.",
              "Uma função que é passada como argumento a outra função para ser executada mais tarde.",
              "Uma função que retorna sempre `true` ou `false`.",
              "Uma função que bloqueia a execução do código."
            ],
            correctAnswerIndex: 1,
            explanation: "Exato! É um mecanismo para dizer: 'executa esta função, e quando terminares, chama esta outra função que te estou a dar'."
        },
        {
            question: "O que significa dizer que JavaScript é 'single-threaded'?",
            options: [
              "Só pode executar uma instrução em todo o programa.",
              "Só pode executar uma operação de cada vez no seu fluxo principal.",
              "Só pode ter um ficheiro de script por página.",
              "Só pode usar um tipo de dados."
            ],
            correctAnswerIndex: 1,
            explanation: "Significa que tem apenas um 'Call Stack' (uma lista de tarefas a fazer). O código assíncrono (com a ajuda do navegador/Node.js) é a forma de contornar esta limitação e evitar que a aplicação 'congele'."
        }
      ],
      challenge: {
          description: "Cria uma função `processarArray` que recebe um array e uma função de callback. A função deve, após 2 segundos, aplicar o callback a cada elemento do array e imprimir os resultados. Testa a tua função com um array de números e um callback que os duplica.",
          starterCode: `const numeros = [1, 2, 3, 4];

function processarArray(arr, callback) {
  // O teu código aqui
}

const duplicar = (n) => n * 2;

processarArray(numeros, duplicar);`,
          solution: `const numeros = [1, 2, 3, 4];

function processarArray(arr, callback) {
  setTimeout(() => {
    const resultado = arr.map(callback);
    console.log(resultado);
  }, 2000);
}

const duplicar = (n) => n * 2;

processarArray(numeros, duplicar); // Imprime [2, 4, 6, 8] após 2 segundos.`
      }
    },
    {
      id: '6.2',
      title: 'JavaScript Assíncrono: Promises',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'As Promises são uma evolução dos callbacks para lidar com código assíncrono. Elas representam um valor que pode estar disponível ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'agora, no futuro, ou nunca'),
          '. Elas ajudam a evitar o "Callback Hell", um aninhamento excessivo de callbacks que torna o código difícil de ler.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'A analogia é uma ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'encomenda online'),
          '. Quando fazes a encomenda, recebes uma "promessa" de que o item chegará. Esta promessa pode ter três estados:'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Pending (Pendente):'), ' A encomenda foi feita e estás à espera.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Fulfilled (Realizada):'), ' A encomenda chegou com sucesso! É aqui que usas o método `.then()` para lidar com o resultado.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Rejected (Rejeitada):'), ' Houve um problema com a encomenda. É aqui que usas o método `.catch()` para lidar com o erro.')
        ),
         React.createElement(
          'p',
          { className: 'mt-4' },
          'A grande vantagem é que podes encadear vários `.then()`, tornando o fluxo assíncrono muito mais legível.'
        )
      ),
      practice: {
        examples: [
            {
                title: "Exemplo 1: O Básico - Criar uma Promise",
                description: "Vamos criar uma promise que simula uma tarefa que pode ter sucesso ou falhar. `resolve` é a função a chamar em caso de sucesso, `reject` em caso de falha.",
                code: `const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = true; // Tenta mudar para 'false' para ver o .catch() a funcionar
  
  setTimeout(() => {
    if (sucesso) {
      resolve("Operação bem-sucedida!");
    } else {
      reject("Algo correu mal.");
    }
  }, 2000);
});

minhaPromise
  .then((resultado) => console.log("Sucesso:", resultado))
  .catch((erro) => console.log("Erro:", erro));`
            },
            {
                title: "Exemplo 2: O Caso Comum - Encadeamento (Chaining)",
                description: "O poder das Promises está no encadeamento. O valor retornado por um `.then()` é passado como argumento para o `.then()` seguinte. Isto cria um fluxo de trabalho assíncrono limpo e sequencial.",
                code: `new Promise((resolve) => setTimeout(() => resolve(10), 1000))
  .then((resultado1) => {
    console.log("Primeiro then:", resultado1); // 10
    return resultado1 * 2; // Passa para o próximo then
  })
  .then((resultado2) => {
    console.log("Segundo then:", resultado2); // 20
    return resultado2 + 5;
  })
  .then((resultado3) => {
    console.log("Terceiro then:", resultado3); // 25
  })
  .catch((erro) => console.log("Apanhado no catch:", erro));`
            },
            {
                title: "Exemplo 3: A Armadilha - Esquecer o `.catch()`",
                description: "Se uma promise for rejeitada e não houver um bloco `.catch()` para lidar com o erro, o teu programa terá um 'Unhandled Promise Rejection', o que pode fazê-lo crashar ou comportar-se de forma inesperada. É uma boa prática terminar sempre uma cadeia de promises com um `.catch()`.",
                code: `const promiseComErro = new Promise((resolve, reject) => {
  reject("Erro deliberado!");
});

// Sem .catch(), este erro aparece na consola como "Uncaught (in promise)"
// promiseComErro.then(res => console.log(res));

// Com .catch(), o erro é tratado de forma graciosa
promiseComErro
  .then(res => console.log(res))
  .catch(err => console.error("Erro tratado:", err));`
            }
        ]
      },
      quiz: [
        {
          question: 'Numa Promise, para que serve o método `.catch()`?',
          options: [
            'Para executar código, quer a Promise tenha sucesso ou falhe.',
            'Para executar código apenas quando a Promise é bem-sucedida.',
            'Para lidar com qualquer erro que ocorra na Promise ou na cadeia de `.then()`.',
            'Para cancelar uma Promise que está pendente.'
          ],
          correctAnswerIndex: 2,
          explanation: 'O método `.catch()` é o "plano B". Ele apanha qualquer erro que aconteça, seja uma falha de rede ou um erro lançado intencionalmente, permitindo-te lidar com a falha de forma controlada.'
        },
        {
            question: "Uma Promise que ainda não foi resolvida nem rejeitada está em que estado?",
            options: [
                "fulfilled",
                "rejected",
                "settled",
                "pending"
            ],
            correctAnswerIndex: 3,
            explanation: "O estado inicial de qualquer promise é 'pending'. Ele permanece neste estado até que a operação assíncrona termine, altura em que transita para 'fulfilled' (com sucesso) ou 'rejected' (com erro)."
        },
        {
            question: "O que é passado como argumento para a função dentro de um `.then()`?",
            options: [
                "O motivo do erro da promise anterior.",
                "O valor com que a promise anterior foi resolvida (fulfilled).",
                "O objeto da promise em si.",
                "Nada."
            ],
            correctAnswerIndex: 1,
            explanation: "O método `.then(callback)` foi desenhado para lidar com o caso de sucesso. O `callback` recebe como seu primeiro (e único) argumento o valor que foi passado para a função `resolve()`."
        }
      ],
      challenge: {
          description: "Cria uma função `verificarNumero` que retorna uma Promise. A promise deve verificar um número: se for maior que 10, deve ser resolvida com a mensagem 'Número é válido'. Caso contrário, deve ser rejeitada com a mensagem 'Número inválido'. Testa a tua função chamando-a com os números 15 e 5, e usando `.then()` e `.catch()` para imprimir os resultados.",
          starterCode: `function verificarNumero(num) {
  // Retorna uma nova Promise aqui
}

// Testa com um número válido
verificarNumero(15)
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Testa com um número inválido
verificarNumero(5)
  .then(res => console.log(res))
  .catch(err => console.error(err));`,
          solution: `function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Número é válido");
    } else {
      reject("Número inválido");
    }
  });
}

// Testa com um número válido
verificarNumero(15)
  .then(res => console.log(res)) // "Número é válido"
  .catch(err => console.error(err));

// Testa com um número inválido
verificarNumero(5)
  .then(res => console.log(res))
  .catch(err => console.error(err)); // "Número inválido"`
      }
    },
    {
      id: '6.3',
      title: 'JavaScript Assíncrono: Async/Await',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          '`async/await` é "açúcar sintático" por cima das Promises. Não introduz nada de novo, mas permite-nos escrever código assíncrono que se ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'parece e comporta como código síncrono'),
          ', tornando-o muito mais fácil de ler e de raciocinar.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'A analogia é ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'seguir uma receita de cozinha passo a passo'),
          '. Em vez de usar vários temporizadores (`.then()`), tu simplesmente segues a receita:'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, '1. Marca a receita como `async` (a palavra-chave `async` antes de `function`).'),
          React.createElement('li', null, '2. Quando chegas a um passo que demora tempo (ex: "pré-aquecer o forno"), tu ', React.createElement('strong', { className: 'text-green' }, '`await`'), ' (esperas) que ele termine antes de passares ao passo seguinte.'),
          React.createElement('li', null, '3. Se algo pode correr mal (o forno avariar), metes esses passos dentro de um bloco `try...catch`, como um plano de contingência.')
        )
      ),
      practice: {
        examples: [
            {
                title: "Exemplo 1: O Básico - Converter uma Promise",
                description: "Vamos pegar na promise do exemplo anterior e consumi-la com async/await. Repara como o código fica mais 'plano' e fácil de seguir.",
                code: `function operacaoDemorada() {
  return new Promise(resolve => setTimeout(() => resolve("Terminou!"), 2000));
}

async function executar() {
  console.log("A iniciar...");
  const resultado = await operacaoDemorada(); // Pausa aqui até a promise resolver
  console.log(resultado); // "Terminou!"
  console.log("Fim.");
}

executar();`
            },
            {
                title: "Exemplo 2: O Caso Comum - Lidar com Erros",
                description: "O bloco `try...catch` é a forma padrão de lidar com erros (promises rejeitadas) quando se usa async/await. É muito similar à forma como lidamos com erros em código síncrono.",
                code: `function podeFalhar() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Sucesso!");
    } else {
      reject("Falhou!");
    }
  });
}

async function tentarOperacao() {
  try {
    const resultado = await podeFalhar();
    console.log("Resultado:", resultado);
  } catch (erro) {
    console.error("Apanhado no catch:", erro);
  }
}

tentarOperacao();`
            },
            {
                title: "Exemplo 3: A Armadilha - Esquecer o `await`",
                description: "Um erro muito comum é chamar uma função que retorna uma promise dentro de uma função async, mas esquecer de usar `await`. O que recebes não é o valor resolvido, mas sim o próprio objeto da promise no estado pendente.",
                code: `function obterDados() {
  return new Promise(resolve => setTimeout(() => resolve({ id: 1, nome: "Ana" }), 1000));
}

async function mostrarDados() {
  // ERRADO:
  const dadosErrados = obterDados();
  console.log("Sem await:", dadosErrados); // Imprime Promise { <pending> }

  // CORRETO:
  const dadosCorretos = await obterDados();
  console.log("Com await:", dadosCorretos); // Imprime { id: 1, nome: 'Ana' }
}

mostrarDados();`
            }
        ]
      },
      quiz: [
        {
          question: 'O que faz a palavra-chave `await`?',
          options: [
            'Executa uma função imediatamente.',
            'Pausa a execução de uma função `async` até que uma Promise seja resolvida ou rejeitada.',
            'Define uma função como sendo assíncrona.',
            'Ignora uma Promise e continua a executar o código.'
          ],
          correctAnswerIndex: 1,
          explanation: '`await` é a chave da magia! Só pode ser usado dentro de uma função `async` e efetivamente "pausa" a função naquele ponto, espera que a Promise termine, e depois continua a execução com o resultado da Promise.'
        },
        {
            question: "O que é que uma função declarada com `async` retorna sempre?",
            options: [
                "O valor `undefined`.",
                "O valor `null`.",
                "Uma Promise.",
                "Um objeto."
            ],
            correctAnswerIndex: 2,
            explanation: "Mesmo que não uses `return` explicitamente (o que faria com que ela resolvesse com `undefined`), uma função `async` envolve sempre o seu valor de retorno numa Promise. Se retornares um valor, a promise resolve com esse valor. Se lançares um erro, a promise é rejeitada."
        },
        {
            question: "Como lidas com erros de promises rejeitadas dentro de uma função `async`?",
            options: [
                "Usando um bloco `.catch()` no final da função.",
                "Envolvendo o código com `await` num bloco `try...catch`.",
                "Não é possível lidar com erros.",
                "Usando um bloco `if/else`."
            ],
            correctAnswerIndex: 1,
            explanation: "`try...catch` é a forma idiomática e síncrona de lidar com erros assíncronos quando se usa `async/await`. O código no bloco `catch` será executado se qualquer uma das promises dentro do `try` for rejeitada."
        }
      ],
      challenge: {
          description: "Converte a cadeia de Promises do desafio da lição anterior para a sintaxe `async/await`. Cria uma função `async` chamada `testarNumero` que chama a função `verificarNumero` (da lição anterior) e imprime o resultado ou o erro na consola, usando `try...catch`.",
          starterCode: `function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) resolve("Número é válido");
    else reject("Número inválido");
  });
}

async function testarNumero(numero) {
  // O teu código com try...catch aqui
}

testarNumero(15);
testarNumero(5);`,
          solution: `function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) resolve("Número é válido");
    else reject("Número inválido");
  });
}

async function testarNumero(numero) {
  try {
    const resultado = await verificarNumero(numero);
    console.log(\`Teste com \${numero}: \${resultado}\`);
  } catch (erro) {
    console.error(\`Teste com \${numero}: \${erro}\`);
  }
}

testarNumero(15);
testarNumero(5);`
      }
    },
    {
      id: '6.4',
      title: 'Fetch API e JSON',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'A `Fetch API` é a ferramenta moderna do navegador para fazer pedidos de rede (como obter dados de um servidor). É uma funcionalidade assíncrona baseada em Promises, o que a torna perfeita para usar com `.then()` ou `async/await`.'
        ),
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'API (Application Programming Interface)'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Uma API é como o ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'menu de um restaurante'),
          '. Não precisas de saber como a cozinha funciona; o menu dá-te uma lista de pratos (dados) que podes pedir e as regras para o fazer. Da mesma forma, uma API web define os "endpoints" (URLs) que podes aceder para obter ou enviar dados.'
        ),
         React.createElement(
          'h3',
          { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'JSON (JavaScript Object Notation)'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'JSON é o formato em que a comida (os dados) é servida. É um formato de texto leve e fácil de ler tanto para humanos como para máquinas. A sua sintaxe é praticamente idêntica à dos objetos e arrays de JavaScript, o que o torna perfeito para trabalhar com a linguagem.'
        ),
        React.createElement(
          'p',
          null,
          'Quando usas `fetch` para obter dados, a resposta do servidor vem num formato bruto. O método `.json()` lê essa resposta até ao fim e transforma o texto JSON num verdadeiro objeto ou array de JavaScript que podes usar no teu código.'
        )
      ),
      practice: {
        examples: [
            {
                title: "Exemplo 1: O Básico - Usando `.then()`",
                description: "Vamos fazer um pedido a uma API pública de teste (JSONPlaceholder) para obter uma lista de tarefas (to-dos). Repara nos dois passos: o primeiro `.then()` lida com a resposta HTTP, e o segundo lida com os dados já convertidos para JSON.",
                code: `const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => console.log("Dados recebidos:", data))
  .catch(error => console.error("Erro no fetch:", error));`
            },
            {
                title: "Exemplo 2: O Caso Comum - Usando `async/await`",
                description: "A mesma operação, mas escrita com `async/await`, que é geralmente considerada mais legível. A lógica do `try...catch` substitui o `.catch()` das promises.",
                code: `const url = 'https://jsonplaceholder.typicode.com/users/1';

async function obterUtilizador() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Utilizador:", data.name);
  } catch (error) {
    console.error("Falha ao obter utilizador:", error);
  }
}

obterUtilizador();`
            },
            {
                title: "Exemplo 3: A Armadilha - `fetch` só rejeita em falha de rede",
                description: "Ao contrário de outras bibliotecas, `fetch` não rejeita a promise por erros de HTTP como '404 Not Found' ou '500 Internal Server Error'. Ele só falha se houver um problema de rede. É boa prática verificar a propriedade `response.ok` (que é `true` para respostas com sucesso, como 200-299) antes de continuar.",
                code: `const urlErrada = 'https://jsonplaceholder.typicode.com/posts/9999'; // Não existe

async function verificarResposta() {
  try {
    const response = await fetch(urlErrada);
    
    if (!response.ok) {
      // Lança um erro para ser apanhado pelo catch
      throw new Error(\`Erro HTTP! Status: \${response.status}\`);
    }
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message); // "Erro HTTP! Status: 404"
  }
}

verificarResposta();`
            }
        ]
      },
      quiz: [
        {
          question: "Quando recebes uma resposta de uma chamada `fetch`, o que faz o método `.json()`?",
          options: [
            'Verifica se a resposta é válida.',
            'Converte a resposta para uma string de texto simples.',
            'Lê o corpo da resposta e transforma o texto em formato JSON num objeto/array de JavaScript.',
            'Envia dados em formato JSON para um servidor.'
          ],
          correctAnswerIndex: 2,
          explanation: 'Correto! O método `.json()` é um passo crucial que "desempacota" os dados da resposta do servidor, transformando-os numa estrutura de dados de JavaScript (como um objeto ou array) com a qual podes trabalhar facilmente.'
        },
        {
            question: "O que é que a função `fetch()` retorna?",
            options: [
              "Os dados em formato JSON diretamente.",
              "Uma string com o conteúdo da resposta.",
              "Uma Promise que resolve com o objeto Response.",
              "Um erro se o status não for 200."
            ],
            correctAnswerIndex: 2,
            explanation: "`fetch()` retorna imediatamente uma Promise. Essa Promise não contém os dados, mas sim um objeto `Response` que representa toda a resposta HTTP. Precisas de usar métodos como `.json()` nesse objeto para extrair os dados."
        },
        {
            question: "Qual a sintaxe de um ficheiro JSON?",
            options: [
              "É muito similar a objetos e arrays de JavaScript, mas as chaves têm de estar entre aspas duplas.",
              "É igual à sintaxe de objetos do Python.",
              "É um formato binário, não legível por humanos.",
              "É igual a XML."
            ],
            correctAnswerIndex: 0,
            explanation: "JSON é um subconjunto da sintaxe de objetos de JavaScript. A principal diferença é que os nomes das propriedades (chaves) devem sempre estar entre aspas duplas."
        }
      ],
      challenge: {
          description: "Usa a `Fetch API` para fazer um pedido ao endpoint `https://api.quotable.io/random`. Esta API devolve uma citação aleatória. Depois de receberes os dados, imprime a citação (`content`) e o autor (`author`) na consola.",
          starterCode: `const apiUrl = 'https://api.quotable.io/random';

async function obterCitacao() {
  // O teu código async/await com fetch e try/catch aqui
}

obterCitacao();`,
          solution: `const apiUrl = 'https://api.quotable.io/random';

async function obterCitacao() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Não foi possível obter a citação.");
    }
    const data = await response.json();
    
    console.log('Citação: "', data.content, '"');
    console.log('Autor:', data.author);
    
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

obterCitacao();`
      }
    },
    {
      id: '6.5',
      title: 'Aprofundando: O Event Loop',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Já vimos o "quê" do código assíncrono (callbacks, promises), mas agora vamos ver o "como". O Event Loop é o coração do modelo de concorrência do JavaScript e explica porque é que o código se comporta da forma que vemos.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'A analogia é uma cozinha de um restaurante com um único ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'Chef (o Call Stack)'),
          '. O Chef só pode fazer uma tarefa de cada vez. As tarefas demoradas (como cozinhar algo no forno) são entregues a ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'Ajudantes (as Web APIs)'),
          '. O Chef continua o seu trabalho.'
        ),
         React.createElement(
          'p',
          { className: 'mb-4' },
          'Quando um Ajudante termina uma tarefa, ele não interrompe o Chef. Ele coloca um "aviso" numa ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'Fila de Espera (Callback Queue ou Macrotask Queue)'),
          '. O ',
          React.createElement('strong', { className: 'text-green' }, 'Event Loop'),
          ' é como o maître do restaurante. Ele está constantemente a verificar: "O Chef está livre?". Se o Chef (Call Stack) estiver vazio, o Event Loop vai à Fila de Espera, pega no primeiro aviso e entrega-o ao Chef para ele o executar.'
        ),
        React.createElement(
          'p',
          null,
          'As Promises têm uma fila prioritária chamada Microtask Queue. O Event Loop verifica esta fila e esvazia-a *antes* de pegar em qualquer coisa da fila normal (Macrotask Queue). Isto explica porque é que o `.then()` de uma promise executa antes de um `setTimeout`.'
        )
      ),
      practice: {
        examples: [
            {
                title: "Exemplo 1: O Básico - Síncrono vs. Assíncrono",
                description: 'O exemplo clássico que demonstra o Event Loop. O código síncrono corre sempre primeiro, depois o Event Loop processa as tarefas assíncronas.',
                code: `console.log("Início (Síncrono)"); // 1º

setTimeout(() => {
  console.log("Timeout (Macrotask)"); // 3º
}, 0);

console.log("Fim (Síncrono)"); // 2º`
            },
            {
                title: "Exemplo 2: O Caso Comum - Microtasks vs. Macrotasks",
                description: "As Promises (`.then`, `.catch`, `.finally`) vão para a Microtask Queue, que tem prioridade sobre a Macrotask Queue (onde vão os `setTimeout`, `setInterval`). O Event Loop esvazia sempre a fila de microtasks primeiro.",
                code: `console.log("1. Síncrono");

setTimeout(() => console.log("2. Macrotask (setTimeout)"), 0);

Promise.resolve().then(() => console.log("3. Microtask (Promise)"));

console.log("4. Síncrono");

// Ordem do output: 1, 4, 3, 2`
            },
            {
                title: "Exemplo 3: A Armadilha - Bloquear o Event Loop",
                description: "Como o JavaScript é single-threaded, uma operação síncrona muito longa (como um ciclo gigante) pode 'bloquear' o Event Loop. Enquanto o Call Stack estiver ocupado com o ciclo, nenhuma tarefa assíncrona (como cliques ou timeouts) pode ser processada. A página 'congela'.",
                code: `console.log("A iniciar bloqueio...");

// Este ciclo vai bloquear o thread principal por alguns segundos.
// Nenhum outro código (incluindo timeouts ou eventos de clique)
// será processado até que este termine.
for (let i = 0; i < 3000000000; i++) {
  // A fazer trabalho pesado...
}

console.log("Bloqueio terminado.");`
            }
        ]
      },
      quiz: [
        {
          question: "No modelo do Event Loop, o que acontece quando chamas uma função como `fetch` ou `setTimeout`?",
          options: [
            'O Call Stack pausa e espera que a tarefa termine.',
            'A tarefa é executada imediatamente pelo Call Stack.',
            'A tarefa é entregue a uma Web API para ser processada em segundo plano, e o Call Stack continua a executar outro código.',
            'O Event Loop executa a tarefa imediatamente.'
          ],
          correctAnswerIndex: 2,
          explanation: 'Exatamente! A grande magia é que o Call Stack (o nosso Chef) não fica bloqueado. Ele delega tarefas demoradas às Web APIs (os Ajudantes) e continua a executar o código síncrono. Isto mantém a aplicação responsiva.'
        },
        {
            question: "O que tem maior prioridade para o Event Loop depois de o Call Stack ficar vazio?",
            options: [
                "A Macrotask Queue (ex: setTimeout)",
                "A Microtask Queue (ex: .then() de uma Promise)",
                "A ordem em que foram chamados.",
                "É aleatório."
            ],
            correctAnswerIndex: 1,
            explanation: "O Event Loop tem uma regra estrita: após cada tarefa, ele verifica e esvazia completamente a Microtask Queue antes de sequer considerar pegar numa nova tarefa da Macrotask Queue. É por isso que as Promises resolvem 'mais depressa' que os timeouts."
        },
        {
            question: "O que é o 'Call Stack'?",
            options: [
                "Uma lista de todos os eventos que aconteceram.",
                "Uma estrutura de dados que regista onde estamos na execução do programa (que funções estão a ser executadas).",
                "Uma API do navegador para fazer chamadas de rede.",
                "Uma fila para as callbacks do setTimeout."
            ],
            correctAnswerIndex: 1,
            explanation: "O Call Stack é como a lista de tarefas atual do nosso 'Chef'. Quando uma função é chamada, ela é adicionada ao topo da pilha. Quando termina, é removida. Código síncrono é basicamente o processo de encher e esvaziar esta pilha."
        }
      ],
      challenge: {
          description: "Sem executar o código, prevê a ordem exata em que as mensagens serão impressas na consola. Pensa no Call Stack, na Microtask Queue e na Macrotask Queue.",
          starterCode: `console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => {
  console.log('C');
  setTimeout(() => console.log('D'), 0);
});

Promise.resolve().then(() => console.log('E'));

console.log('F');`,
          solution: `// Ordem de execução:
// 1. 'A' (Síncrono)
// 2. 'F' (Síncrono)
// --- Call Stack fica vazio ---
// --- Processar Microtasks ---
// 3. 'C' (Primeiro .then())
// 4. 'E' (Segundo .then())
// --- Microtasks vazia ---
// --- Processar Macrotasks ---
// 5. 'B' (Primeiro setTimeout)
// 6. 'D' (setTimeout agendado dentro do .then())
//
// Output Final: A, F, C, E, B, D`
      }
    }
  ]
};
