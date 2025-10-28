import * as React from 'react';
import type { Module } from '../../types';

export const module7: Module = {
  id: '7',
  title: 'Módulo 7: JS Moderno e Próximos Passos',
  lessons: [
    {
      id: '7.1',
      title: 'Métodos de Array: map, filter, reduce',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Os ciclos `for` são ótimos, mas o JavaScript moderno oferece métodos de array mais expressivos e poderosos que te permitem escrever código mais limpo e declarativo.'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '.map()'), ': É como uma ', React.createElement('strong', { className: 'text-lightest-slate' }, 'linha de montagem'), '. Recebe um array, aplica uma transformação a cada item, e devolve um novo array do mesmo tamanho com os itens transformados.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '.filter()'), ': É como um ', React.createElement('strong', { className: 'text-lightest-slate' }, 'sítio de segurança'), '. Recebe um array, verifica cada item contra uma condição, e devolve um novo array, possivelmente mais pequeno, apenas com os itens que passaram a verificação.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '.reduce()'), ': É como ', React.createElement('strong', { className: 'text-lightest-slate' }, 'fazer um sumo'), '. Recebe um array de vários itens (frutas) e combina-nos num único valor final (o sumo).')
        )
      ),
      practice: {
        examples: [
            {
                title: "Exemplo 1: O Básico - `.map()`",
                description: "Vamos pegar num array de números e criar um novo array com o dobro de cada número, sem modificar o original.",
                code: `const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);

console.log(dobrados); // [2, 4, 6, 8, 10]
console.log(numeros);  // [1, 2, 3, 4, 5] (o original fica intacto)`
            },
            {
                title: "Exemplo 2: O Caso Comum - `.filter()`",
                description: "Vamos pegar num array de produtos (objetos) e filtrar apenas aqueles que estão em promoção.",
                code: `const produtos = [
  { nome: 'Maçã', emPromocao: true },
  { nome: 'Pêra', emPromocao: false },
  { nome: 'Laranja', emPromocao: true }
];

const emPromocao = produtos.filter(p => p.emPromocao === true);
console.log(emPromocao); // Array com os objetos Maçã e Laranja`
            },
            {
                title: "Exemplo 3: A Nuance - `.reduce()`",
                description: "O `.reduce()` é o mais flexível. Vamos usá-lo para somar o total de um carrinho de compras. Ele recebe um 'acumulador' (o valor que está a ser construído) e o 'valorAtual' em cada iteração. O `0` no final é o valor inicial do acumulador.",
                code: `const carrinho = [
  { nome: 'Livro', preco: 20 },
  { nome: 'Caneta', preco: 2 },
  { nome: 'Caderno', preco: 5 }
];

const total = carrinho.reduce((acumulador, itemAtual) => {
  return acumulador + itemAtual.preco;
}, 0); // 0 é o valor inicial

console.log("Total do carrinho:", total); // 27`
            }
        ]
      },
      quiz: [
        {
          question: "Se tiveres um array de produtos e quiseres criar um novo array contendo apenas os produtos com preço superior a 50€, qual método seria mais apropriado?",
          options: [
            '.map()',
            '.forEach()',
            '.reduce()',
            '.filter()'
          ],
          correctAnswerIndex: 3,
          explanation: '.filter() é a ferramenta perfeita para esta tarefa. Ele itera sobre o array e cria um novo array contendo apenas os elementos que retornam `true` para a condição especificada (neste caso, `produto.preco > 50`).'
        },
        {
            question: "O que é que o método `.map()` retorna sempre?",
            options: [
                "Um único valor.",
                "O primeiro elemento que satisfaz a condição.",
                "Um novo array com exatamente o mesmo número de elementos que o original.",
                "O valor `undefined`."
            ],
            correctAnswerIndex: 2,
            explanation: "A principal característica do `.map()` é a transformação 1-para-1. Ele devolve sempre um novo array do mesmo tamanho que o array de origem, onde cada elemento é o resultado da aplicação da função de callback ao elemento original correspondente."
        },
        {
            question: "Qual o valor de `soma`? `const nums = [1, 2, 3]; const soma = nums.reduce((acc, val) => acc + val, 10);`",
            options: [
                "6",
                "10",
                "16",
                "Vai dar erro"
            ],
            correctAnswerIndex: 2,
            explanation: "O segundo argumento de `.reduce()` é o valor inicial do acumulador (`acc`). A primeira iteração será `10 + 1`, a segunda `11 + 2`, e a terceira `13 + 3`, resultando em 16."
        }
      ],
      challenge: {
          description: "Dado o array de utilizadores, usa uma combinação (encadeamento) de `.filter()` e `.map()` para criar um novo array que contenha apenas os emails dos utilizadores com mais de 30 anos.",
          starterCode: `const utilizadores = [
  { nome: 'Ana', idade: 25, email: 'ana@exemplo.com' },
  { nome: 'Rui', idade: 40, email: 'rui@exemplo.com' },
  { nome: 'Marta', idade: 35, email: 'marta@exemplo.com' },
  { nome: 'João', idade: 22, email: 'joao@exemplo.com' }
];

// O teu código aqui
const emails = /* ... */;

console.log(emails); // ['rui@exemplo.com', 'marta@exemplo.com']`,
          solution: `const utilizadores = [
  { nome: 'Ana', idade: 25, email: 'ana@exemplo.com' },
  { nome: 'Rui', idade: 40, email: 'rui@exemplo.com' },
  { nome: 'Marta', idade: 35, email: 'marta@exemplo.com' },
  { nome: 'João', idade: 22, email: 'joao@exemplo.com' }
];

const emails = utilizadores
  .filter(utilizador => utilizador.idade > 30)
  .map(utilizador => utilizador.email);

console.log(emails);`
      }
    },
    {
      id: '7.2',
      title: 'Destructuring e Operadores Spread/Rest',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'O ES6 introduziu uma sintaxe poderosa que torna o trabalho com arrays e objetos muito mais conveniente.'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Destructuring (Desestruturação)'), ': É como ', React.createElement('strong', { className: 'text-lightest-slate' }, 'desfazer uma mala'), '. Em vez de acederes a `mala.camisa`, `mala.calcas`, podes simplesmente tirar tudo para fora de uma vez e dar-lhes nomes de variáveis locais.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Spread Operator (`...`)'), ': É como ', React.createElement('strong', { className: 'text-lightest-slate' }, 'clonar ou espalhar'), '. Podes usá-lo para criar cópias de arrays/objetos ou para "espalhar" os elementos de um array noutro.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Rest Operator (`...`)'), ': É como ', React.createElement('strong', { className: 'text-lightest-slate' }, 'juntar o resto'), '. Parece igual ao Spread, mas é usado em parâmetros de funções ou no destructuring para agrupar o resto dos elementos/propriedades num novo array/objeto.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Destructuring",
            description: "Vamos extrair valores de um objeto e de um array para variáveis locais de forma muito mais limpa.",
            code: `const utilizador = { nome: 'Marta', idade: 35 };
const { nome, idade } = utilizador; // Destructuring de objeto
console.log(nome, idade); // Marta 35

const cores = ['vermelho', 'verde', 'azul'];
const [primeiraCor, segundaCor] = cores; // Destructuring de array
console.log(primeiraCor, segundaCor); // vermelho verde`
          },
          {
            title: "Exemplo 2: O Caso Comum - Spread Operator",
            description: "O Spread é incrivelmente útil para criar cópias (evitando problemas de referência), e para combinar arrays e objetos.",
            code: `const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrCopia = [...arr1]; // Cria uma cópia independente
const arrCombinado = [...arr1, ...arr2]; // Combina os dois
console.log(arrCombinado); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const objCombinado = { ...obj1, ...obj2, c: 3 };
console.log(objCombinado); // { a: 1, b: 2, c: 3 }`
          },
          {
            title: "Exemplo 3: A Nuance - Rest Operator",
            description: "O Rest Operator agrupa o 'resto'. Numa função, permite ter um número infinito de argumentos. No destructuring, apanha os elementos restantes.",
            code: `function somar(...numeros) { // Rest
  return numeros.reduce((soma, num) => soma + num, 0);
}
console.log(somar(1, 2, 3, 4)); // 10

const [vencedor, ...restoDosJogadores] = ['Rui', 'Ana', 'João']; // Rest
console.log(vencedor); // Rui
console.log(restoDosJogadores); // ['Ana', 'João']`
          }
        ]
      },
      quiz: [
        {
          question: "O que será impresso? `const pessoa = { nome: 'Carlos', pais: 'Portugal' }; const { nome } = pessoa; console.log(nome);`",
          options: ["{ nome: 'Carlos' }", "'Carlos'", "'pessoa.nome'", "undefined"],
          correctAnswerIndex: 1,
          explanation: "A sintaxe de destructuring `{ nome }` extrai a propriedade `nome` do objeto `pessoa` e cria uma nova constante com esse mesmo nome e valor."
        },
        {
          question: "Qual o valor de `arr2`? `const arr1 = [10, 20]; const arr2 = [...arr1, 30];`",
          options: ["[10, 20, 30]", "[[10, 20], 30]", "[10, 20, [30]]", "Vai dar erro"],
          correctAnswerIndex: 0,
          explanation: "O operador Spread `...arr1` 'espalha' os elementos de `arr1` dentro do novo array. O resultado é um único array achatado com todos os elementos."
        }
      ],
      challenge: {
        description: "Cria uma função `apresentarUtilizador` que recebe um objeto de utilizador. Dentro da função, usa destructuring para extrair `nome` e `idade`. A função deve retornar a string: `[Nome] tem [Idade] anos.`",
        starterCode: `const user = { nome: 'Beatriz', idade: 28, email: 'bia@exemplo.com' };

function apresentarUtilizador(utilizador) {
  // O teu código com destructuring aqui
}

console.log(apresentarUtilizador(user));`,
        solution: `const user = { nome: 'Beatriz', idade: 28, email: 'bia@exemplo.com' };

function apresentarUtilizador(utilizador) {
  const { nome, idade } = utilizador;
  return \`\${nome} tem \${idade} anos.\`;
}`
      }
    },
    {
      id: '7.3',
      title: 'Módulos ES: import e export',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'À medida que as tuas aplicações crescem, é insustentável manter todo o código num único ficheiro. Os Módulos ES permitem-te dividir o teu código em ficheiros (módulos) reutilizáveis, mantendo tudo organizado.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Imagina uma biblioteca. Cada módulo é um livro sobre um tema específico (ex: matemática, história).',
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'export'), ': É como publicar o livro. Decides o que dentro do teu ficheiro queres disponibilizar para outros ficheiros usarem. Existem dois tipos:',
          React.createElement('ul', { className: 'list-disc list-inside ml-6' },
            React.createElement('li', null, React.createElement('strong', { className: 'text-lightest-slate' }, 'Named Exports (Exportações Nomeadas):'), ' Permitem exportar várias coisas de um ficheiro. É como um livro com vários capítulos que podes consultar individualmente.'),
            React.createElement('li', null, React.createElement('strong', { className: 'text-lightest-slate' }, 'Default Export (Exportação Padrão):'), ' Cada ficheiro só pode ter uma. É a "coisa principal" que o ficheiro exporta, como o título do livro.')
          )
        ),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'import'), ': É como requisitar um livro da biblioteca. Vais a outro ficheiro e dizes explicitamente o que queres "importar" para o poderes usar.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Named Exports",
            description: "Vamos criar um ficheiro `matematica.js` que exporta duas funções, e depois importá-las num ficheiro `app.js`.",
            code: `// Ficheiro: matematica.js
export const somar = (a, b) => a + b;
export const subtrair = (a, b) => a - b;

// Ficheiro: app.js
import { somar, subtrair } from './matematica.js';
console.log(somar(5, 3)); // 8
console.log(subtrair(5, 3)); // 2`
          },
          {
            title: "Exemplo 2: O Caso Comum - Default Export",
            description: "Agora, um ficheiro `utilizador.js` que exporta uma classe ou objeto como a sua funcionalidade principal.",
            code: `// Ficheiro: utilizador.js
export default class Utilizador {
  constructor(nome) {
    this.nome = nome;
  }
}

// Ficheiro: app.js
import MinhaClasseUtilizador from './utilizador.js'; // Podes dar-lhe qualquer nome
const user = new MinhaClasseUtilizador('Ana');
console.log(user.nome); // Ana`
          },
          {
            title: "Exemplo 3: A Nuance - Misturar Exports",
            description: "Podes ter um `default export` e vários `named exports` no mesmo ficheiro. A sintaxe para importar ambos é um pouco diferente.",
            code: `// Ficheiro: stringUtils.js
export const maiusculas = str => str.toUpperCase();
const versao = "1.0";
export default versao; // Exportação padrão

// Ficheiro: app.js
import versaoDefault, { maiusculas } from './stringUtils.js';
console.log(versaoDefault); // "1.0"
console.log(maiusculas("olá")); // "OLÁ"`
          }
        ]
      },
      quiz: [
        {
          question: "Qual a principal diferença entre um `export default` e um `export` nomeado?",
          options: [
            "Só podes ter um `export default` por ficheiro, mas podes ter vários `export` nomeados.",
            "`export default` é mais rápido.",
            "Não podes importar um `export default`.",
            "São a mesma coisa."
          ],
          correctAnswerIndex: 0,
          explanation: "Esta é a regra fundamental. Um módulo tem uma única exportação principal (default) e pode ter múltiplas exportações secundárias (named)."
        },
        {
          question: "Qual a sintaxe correta para importar uma função nomeada `minhaFuncao` do ficheiro `./utils.js`?",
          options: [
            "import minhaFuncao from './utils.js';",
            "import { minhaFuncao } from './utils.js';",
            "import * as utils from './utils.js';",
            "Qualquer uma das anteriores."
          ],
          correctAnswerIndex: 1,
          explanation: "Para importar `named exports`, tens de usar chavetas `{}` e o nome exato da função que foi exportada."
        }
      ],
      challenge: {
        description: "Cria dois ficheiros. Em `conversor.js`, cria e exporta (named export) uma função `celsiusParaFahrenheit(c)`. Em `app.js`, importa essa função e usa-a para converter 25 graus Celsius, imprimindo o resultado.",
        starterCode: `// Ficheiro: conversor.js
// A tua função e export aqui

// Ficheiro: app.js
// O teu import e a chamada da função aqui`,
        solution: `// Ficheiro: conversor.js
export const celsiusParaFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

// Ficheiro: app.js
import { celsiusParaFahrenheit } from './conversor.js';

const temperatura = 25;
const resultado = celsiusParaFahrenheit(temperatura);
console.log(\`\${temperatura}°C são \${resultado}°F\`); // 77°F`
      }
    },
    {
      id: '7.4',
      title: 'Código Mais Seguro: Optional Chaining e Nullish Coalescing',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Ao lidar com dados de APIs ou objetos complexos, é comum tentarmos aceder a propriedades que podem não existir, resultando em erros. O JavaScript moderno oferece duas ferramentas fantásticas para lidar com isto de forma elegante.'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Optional Chaining (`?.`)'), ': É como ', React.createElement('strong', { className: 'text-lightest-slate' }, 'verificar gavetas de forma segura'), '. Em vez de `utilizador.morada.rua`, que daria um erro se `morada` não existisse, podes escrever `utilizador.morada?.rua`. Se qualquer parte do caminho for `null` ou `undefined`, a expressão pára e devolve `undefined` em vez de causar um erro.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Nullish Coalescing Operator (`??`)'), ': É como dizer: ', React.createElement('strong', { className: 'text-lightest-slate' }, '"Se o valor for nulo ou indefinido, usa este valor padrão"'), '. É semelhante ao operador `||` (OU), mas mais rigoroso. O `||` reage a qualquer valor "falsy" (como `0`, `''` ou `false`), enquanto o `??` reage *apenas* a `null` ou `undefined`.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Optional Chaining",
            description: "Vamos tentar aceder ao nome da rua de um utilizador que pode ou não ter uma morada definida.",
            code: `const utilizadorComMorada = { nome: 'Ana', morada: { rua: 'Rua Principal' } };
const utilizadorSemMorada = { nome: 'Rui' };

// Acesso seguro. Devolve a rua ou undefined.
const rua1 = utilizadorComMorada.morada?.rua;
const rua2 = utilizadorSemMorada.morada?.rua;

console.log(rua1); // "Rua Principal"
console.log(rua2); // undefined (sem erro!)`
          },
          {
            title: "Exemplo 2: O Caso Comum - Nullish Coalescing",
            description: "Vamos definir um volume para um leitor de vídeo. Se o volume não estiver definido, queremos que o padrão seja 100. Repara na diferença entre `??` e `||` quando o valor é `0`.",
            code: `const config = { volume: 0, velocidade: 1.5 };

// Com ??, 0 é um valor válido
const volume = config.volume ?? 100;
console.log(\`Volume (com ??): \${volume}\`); // 0

// Com ||, 0 é "falsy", então usa o padrão
const volumeErrado = config.volume || 100;
console.log(\`Volume (com ||): \${volumeErrado}\`); // 100 (errado!)`
          },
          {
            title: "Exemplo 3: A Nuance - Combinar os Dois",
            description: "A combinação de `?.` e `??` é extremamente poderosa para obter dados de forma segura e fornecer valores padrão numa única linha.",
            code: `const utilizador = { nome: 'Marta' }; // Sem morada

const cidade = utilizador.morada?.cidade ?? "Cidade não fornecida";

console.log(cidade); // "Cidade não fornecida"`
          }
        ]
      },
      quiz: [
        {
          question: "Qual o valor de `rua`? `const user = {}; const rua = user.endereco?.rua;`",
          options: ["'rua'", "null", "undefined", "Vai dar erro"],
          correctAnswerIndex: 2,
          explanation: "O Optional Chaining `?.` verifica se `user.endereco` é `null` ou `undefined`. Como é `undefined`, a expressão pára e retorna `undefined` imediatamente, sem tentar aceder a `.rua` e sem causar um erro."
        },
        {
          question: "Qual o valor de `resultado`? `const valor = 0; const resultado = valor ?? 'padrão';`",
          options: ["0", "'padrão'", "true", "null"],
          correctAnswerIndex: 0,
          explanation: "O Nullish Coalescing Operator (`??`) só ativa o valor padrão se o lado esquerdo for `null` ou `undefined`. Como `0` não é nenhum desses, ele é retornado como um valor válido."
        }
      ],
      challenge: {
        description: "Dado um objeto de produto que pode ou não ter uma propriedade `detalhes.desconto.percentagem`, escreve uma única linha de código que obtenha a percentagem de desconto ou devolva `0` se qualquer parte do caminho não existir. Usa a combinação de `?.` e `??`.",
        starterCode: `const produtoComDesconto = { nome: 'Livro', detalhes: { desconto: { percentagem: 10 } } };
const produtoSemDesconto = { nome: 'Caneta' };

const desconto1 = /* A tua linha de código para produtoComDesconto */;
const desconto2 = /* A tua linha de código para produtoSemDesconto */;

console.log(desconto1); // 10
console.log(desconto2); // 0`,
        solution: `const produtoComDesconto = { nome: 'Livro', detalhes: { desconto: { percentagem: 10 } } };
const produtoSemDesconto = { nome: 'Caneta' };

const desconto1 = produtoComDesconto.detalhes?.desconto?.percentagem ?? 0;
const desconto2 = produtoSemDesconto.detalhes?.desconto?.percentagem ?? 0;

console.log(desconto1);
console.log(desconto2);`
      }
    },
    {
      id: '7.5',
      title: 'Desafio Final: A Tua Pokédex',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Parabéns! Chegaste ao final do curso. A melhor forma de solidificar tudo o que aprendeste, desde variáveis e funções até à manipulação do DOM e pedidos `fetch` assíncronos, é construir um pequeno projeto do início ao fim.'),
        React.createElement('p', { className: 'mb-4' }, React.createElement('strong', { className: 'text-lightest-slate' }, 'O teu desafio é construir uma Pokédex simples.')),
        React.createElement('h3', { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'Requisitos'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Um campo de texto (`<input>`) e um botão (`<button>`) para procurar por um Pokémon pelo nome ou número.'),
          React.createElement('li', null, 'Ao clicar no botão, usa a ', React.createElement('a', { href: "https://pokeapi.co/", target: "_blank", className: "text-green hover:underline" }, 'PokéAPI'), ' para ir buscar os dados do Pokémon.'),
          React.createElement('li', null, 'Usa `async/await` para o teu pedido `fetch`.'),
          React.createElement('li', null, 'Usa um bloco `try...catch` para lidar com erros (ex: Pokémon não encontrado).'),
          React.createElement('li', null, 'Quando os dados chegarem, usa manipulação do DOM para criar e mostrar um "cartão" com o nome, a imagem e os tipos do Pokémon.'),
          React.createElement('li', null, 'Se um Pokémon tiver vários tipos, usa o método `.map()` para criar um elemento para cada tipo.')
        ),
        React.createElement('p', { className: 'mt-4' }, 'Este projeto vai testar a tua capacidade de juntar todas as peças. Boa sorte!')
      ),
      practice: {
        examples: [
          {
            title: "Passo 1: Estrutura HTML",
            description: "Começa com o HTML básico para a interface. Precisamos de um formulário, um input, um botão, e um `div` onde o cartão do Pokémon será inserido.",
            code: `<!-- No teu body -->
<form id="pokedex-form">
  <input type="text" id="pokemon-search" placeholder="Nome ou número do Pokémon" required>
  <button type="submit">Procurar</button>
</form>
<div id="pokemon-card-container"></div>`
          },
          {
            title: "Passo 2: Lógica Principal (a Função `fetch`)",
            description: "Cria uma função `async` que recebe o nome/número do Pokémon, constrói o URL da API, faz o pedido `fetch` e trata a resposta. Lembra-te de tratar os erros!",
            code: `async function procurarPokemon(nomeOuNumero) {
  const url = \`https://pokeapi.co/api/v2/pokemon/\${nomeOuNumero.toLowerCase()}\`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Pokémon não encontrado!');
    }
    const data = await response.json();
    criarCartaoPokemon(data);
  } catch (error) {
    alert(error.message);
  }
}`
          },
          {
            title: "Passo 3: Criar o Cartão (Manipulação do DOM)",
            description: "Esta função recebe os dados da API e usa `createElement`, `textContent`, etc., para construir o HTML do cartão e inseri-lo na página.",
            code: `const container = document.getElementById('pokemon-card-container');

function criarCartaoPokemon(pokemon) {
  container.innerHTML = ''; // Limpa o cartão anterior

  const nome = pokemon.name;
  const imagemUrl = pokemon.sprites.front_default;
  const tipos = pokemon.types.map(tipoInfo => tipoInfo.type.name);

  const cardHTML = \`
    <div class="pokemon-card">
      <h2>\${nome.toUpperCase()}</h2>
      <img src="\${imagemUrl}" alt="\${nome}">
      <div class="tipos">
        \${tipos.map(tipo => \`<span class="tipo">\${tipo}</span>\`).join('')}
      </div>
    </div>
  \`;
  container.innerHTML = cardHTML;
}`
          }
        ]
      },
      quiz: [], // Sem quiz para o desafio final
      challenge: {
        description: "Agora é a tua vez! Junta todas as peças do código dos exemplos. Seleciona os elementos do DOM, adiciona o `event listener` ao formulário para chamar a tua função `procurarPokemon`, e implementa a função `criarCartaoPokemon` para mostrar os resultados. Não te esqueças de adicionar algum CSS para o cartão ficar bonito!",
        starterCode: `// 1. Seleciona os elementos do DOM (formulário, input, container)

// 2. Adiciona o event listener ao 'submit' do formulário
//    - Não te esqueças do event.preventDefault()
//    - Obtém o valor do input e chama a função de procurar

async function procurarPokemon(nomeOuNumero) {
  // A tua lógica de fetch e try/catch
}

function criarCartaoPokemon(pokemon) {
  // A tua lógica de manipulação do DOM
}`,
        solution: `const form = document.getElementById('pokedex-form');
const input = document.getElementById('pokemon-search');
const container = document.getElementById('pokemon-card-container');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const pokemonProcurado = input.value;
  await procurarPokemon(pokemonProcurado);
});

async function procurarPokemon(nomeOuNumero) {
  if (!nomeOuNumero) return;
  const url = \`https://pokeapi.co/api/v2/pokemon/\${nomeOuNumero.toLowerCase()}\`;
  try {
    container.innerHTML = '<p>A procurar...</p>';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Pokémon não encontrado!');
    }
    const data = await response.json();
    criarCartaoPokemon(data);
  } catch (error) {
    container.innerHTML = \`<p class="erro">\${error.message}</p>\`;
  }
}

function criarCartaoPokemon(pokemon) {
  container.innerHTML = '';

  const nome = pokemon.name;
  const imagemUrl = pokemon.sprites.front_default;
  const tipos = pokemon.types.map(tipoInfo => tipoInfo.type.name);

  // Exemplo de como criar elementos (alternativa ao innerHTML)
  const cardDiv = document.createElement('div');
  cardDiv.className = 'pokemon-card'; // Adiciona uma classe para o CSS

  const nameEl = document.createElement('h2');
  nameEl.textContent = nome.toUpperCase();

  const imgEl = document.createElement('img');
  imgEl.src = imagemUrl;
  imgEl.alt = nome;

  const tiposDiv = document.createElement('div');
  tiposDiv.className = 'tipos';
  
  tipos.forEach(tipo => {
    const tipoSpan = document.createElement('span');
    tipoSpan.className = 'tipo';
    tipoSpan.textContent = tipo;
    tiposDiv.appendChild(tipoSpan);
  });

  cardDiv.appendChild(nameEl);
  cardDiv.appendChild(imgEl);
  cardDiv.appendChild(tiposDiv);

  container.appendChild(cardDiv);
}`
      }
    }
  ]
};
