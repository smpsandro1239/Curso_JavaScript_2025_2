import * as React from 'react';
import type { Module } from '../../types';

// Illustrations
const DestructuringIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('rect', { x: "10", y: "10", width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "50", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Objeto"),
    React.createElement('text', { x: "20", y: "45", fontSize: "8", fill: "#ccd6f6" }, "nome: 'Ana'"),
    React.createElement('text', { x: "20", y: "65", fontSize: "8", fill: "#ccd6f6" }, "idade: 30"),
    React.createElement('path', { d: "M 90 42 L 110 32", stroke: "#64ffda", strokeWidth: "1" }),
    React.createElement('text', { x: "120", y: "35", fontSize: "8", fill: "#64ffda" }, "const nome"),
    React.createElement('path', { d: "M 90 62 L 110 72", stroke: "#64ffda", strokeWidth: "1" }),
    React.createElement('text', { x: "120", y: "75", fontSize: "8", fill: "#64ffda" }, "const idade")
);

const ESModulesIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    // File 1 (export)
    React.createElement('g', { transform: "translate(10, 20)" },
        React.createElement('rect', { x: "0", y: "0", width: "60", height: "60", fill: "#112240", stroke: "#233554", rx: "3" }),
        React.createElement('text', { x: "30", y: "15", textAnchor: "middle", fontSize: "7", fill: "#a8b2d1" }, "utils.js"),
        React.createElement('text', { x: "30", y: "40", textAnchor: "middle", fontSize: "8", fill: "#64ffda" }, "export"),
        React.createElement('path', { d: "M 60 40 L 80 40", stroke: "#64ffda", strokeWidth: "1.5" })
    ),
    // File 2 (import)
    React.createElement('g', { transform: "translate(130, 20)" },
        React.createElement('rect', { x: "0", y: "0", width: "60", height: "60", fill: "#112240", stroke: "#233554", rx: "3" }),
        React.createElement('text', { x: "30", y: "15", textAnchor: "middle", fontSize: "7", fill: "#a8b2d1" }, "main.js"),
        React.createElement('text', { x: "30", y: "40", textAnchor: "middle", fontSize: "8", fill: "#64ffda" }, "import"),
        React.createElement('path', { d: "M 0 40 L -20 40", stroke: "#64ffda", strokeWidth: "1.5", markerEnd: "url(#arrowhead-green)" })
    ),
    React.createElement('defs', null, 
      React.createElement('marker', { id: "arrowhead-green", markerWidth: "5", markerHeight: "3.5", refX: "5", refY: "1.75", orient: "auto" },
        React.createElement('polygon', { points: "0 0, 5 1.75, 0 3.5", fill: "#64ffda" })
      )
    )
);

const OptionalChainingIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('rect', { x: "10", y: "20", width: "50", height: "20", fill: "#112240", stroke: "#233554", rx: "3" }),
    React.createElement('text', { x: "35", y: "33", textAnchor: "middle", fontSize: "7", fill: "#ccd6f6" }, "user"),
    React.createElement('path', { d: "M 60 30 L 80 30", stroke: "#233554" }),
    React.createElement('text', { x: "70", y: "25", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "?."),
    React.createElement('rect', { x: "80", y: "20", width: "50", height: "20", fill: "#112240", stroke: "red", rx: "3", strokeDasharray: "2 2" }),
    React.createElement('text', { x: "105", y: "33", textAnchor: "middle", fontSize: "7", fill: "#ccd6f6" }, "address"),
    React.createElement('path', { d: "M 130 30 L 150 30", stroke: "#233554" }),
    React.createElement('rect', { x: "150", y: "20", width: "40", height: "20", fill: "#112240", stroke: "#233554", rx: "3" }),
    React.createElement('text', { x: "170", y: "33", textAnchor: "middle", fontSize: "7", fill: "#ccd6f6" }, "city"),
    React.createElement('text', { x: "100", y: "70", textAnchor: "middle", fontSize: "8", fill: "red" }, "Caminho interrompido sem erro!")
);

const PokedexIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('rect', { x: "10", y: "10", width: "180", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('circle', { cx: "30", cy: "25", r: "5", fill: "#64ffda" }),
    React.createElement('rect', { x: "50", y: "20", width: "120", height: "10", fill: "#233554" }),
    React.createElement('rect', { x: "50", y: "40", width: "80", height: "40", fill: "#0a192f", stroke: "#233554" }),
    React.createElement('text', { x: "150", y: "50", textAnchor: "middle", fontSize: "8", fill: "#ccd6f6" }, "Nome"),
    React.createElement('text', { x: "150", y: "70", textAnchor: "middle", fontSize: "8", fill: "#ccd6f6" }, "Tipo")
);


export const module7: Module = {
  id: '7',
  title: 'Módulo 7: JS Moderno e Próximos Passos',
  lessons: [
    {
      id: '7.1',
      title: 'Desestruturação e Spread/Rest',
      illustration: React.createElement(DestructuringIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'A desestruturação (destructuring) é uma sintaxe do ES6 que nos permite "desempacotar" valores de arrays ou propriedades de objetos em variáveis distintas. É um atalho muito conveniente que torna o código mais limpo.'),
        React.createElement('p', { className: 'mb-4' }, 'O operador Spread (`...`) "espalha" os elementos de um array ou as propriedades de um objeto noutro. O operador Rest (`...`) agrupa o "resto" dos elementos ou propriedades numa nova estrutura.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Desestruturação de Objetos',
            description: 'Em vez de aceder a cada propriedade individualmente, podemos extraí-las para variáveis com o mesmo nome numa única linha.',
            code: `const utilizador = { nome: "Bia", idade: 25 };
const { nome, idade } = utilizador;
console.log(nome);   // "Bia"`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Spread para copiar e combinar',
            description: 'Usamos o spread para criar uma cópia superficial de um array e para combinar dois objetos.',
            code: `const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }`
          },
          {
            title: 'Exemplo 3: A Nuance - Rest na desestruturação',
            description: 'Aqui, extraímos o primeiro elemento para a variável `primeiro` e o "resto" dos elementos são agrupados num novo array chamado `outros`.',
            code: `const numeros = [10, 20, 30, 40];
const [primeiro, ...outros] = numeros;
console.log(primeiro); // 10
console.log(outros);   // [20, 30, 40]`
          }
        ]
      },
      quiz: [
        {
          question: 'O que `const { nome } = { nome: "Ana", idade: 30 };` faz?',
          options: ['Cria um objeto chamado `nome`.', 'Cria uma variável `nome` com o valor "Ana".', 'Causa um erro.', 'Cria uma variável `nome` com o valor `{ nome: "Ana", idade: 30 }`.'],
          correctAnswerIndex: 1,
          explanation: 'Esta sintaxe de desestruturação extrai a propriedade `nome` do objeto e cria uma variável com o mesmo nome e o valor correspondente.'
        }
      ],
      challenge: {
        description: "Dado o objeto `filme`, usa a desestruturação para criar três variáveis: `titulo`, `realizador` e `ano`. Depois, cria um novo objeto `filmeComRating` que tenha todas as propriedades do objeto original mais uma nova propriedade `rating: 9`.",
        starterCode: `const filme = {
  titulo: "Inception",
  realizador: "Christopher Nolan",
  ano: 2010
};

// Desestrutura aqui

// Cria o novo objeto com spread aqui`,
        solution: `const { titulo, realizador, ano } = filme;
console.log(\`Filme: \${titulo} (\${ano}) por \${realizador}\`);

const filmeComRating = { ...filme, rating: 9 };
console.log(filmeComRating);`
      }
    },
    {
      id: '7.2',
      title: 'Módulos ES (import/export)',
      illustration: React.createElement(ESModulesIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'À medida que as nossas aplicações crescem, não podemos ter todo o nosso código num único ficheiro. Os Módulos ES permitem-nos dividir o nosso código em múltiplos ficheiros para o mantermos organizado e reutilizável.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`export`:'), ' Usado num ficheiro para disponibilizar variáveis, funções ou classes para outros ficheiros.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`import`:'), ' Usado noutro ficheiro para "puxar" o que foi exportado.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - `export` e `import` nomeados',
            description: 'No ficheiro `utils.js`, exportamos duas funções. No `main.js`, importamo-las pelo nome, dentro de chaves `{}`.',
            code: `// Ficheiro: utils.js
export const PI = 3.14;
export function somar(a, b) {
  return a + b;
}

// Ficheiro: main.js
import { PI, somar } from './utils.js';
console.log(somar(5, 2) * PI);`
          },
          {
            title: 'Exemplo 2: O Caso Comum - `export default`',
            description: 'Cada ficheiro pode ter uma (e apenas uma) exportação padrão. Ao importar, não usamos chaves e podemos dar-lhe o nome que quisermos.',
            code: `// Ficheiro: saudacao.js
export default function saudar(nome) {
  return \`Olá, \${nome}\`;
}

// Ficheiro: main.js
import minhaSaudacao from './saudacao.js';
console.log(minhaSaudacao("Mundo"));`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é a principal vantagem de usar módulos?',
          options: ['Tornar o código mais rápido.', 'Organizar o código em ficheiros separados e reutilizáveis.', 'Funciona melhor em servidores.', 'Reduz o tamanho dos ficheiros.'],
          correctAnswerIndex: 1,
          explanation: 'Os módulos são a base da arquitetura de software moderna, promovendo a organização, a manutenção e a reutilização de código.'
        }
      ]
    },
    {
      id: '7.3',
      title: 'Código Mais Seguro: Optional Chaining e Nullish Coalescing',
      illustration: React.createElement(OptionalChainingIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Estas duas funcionalidades modernas do ES2020 ajudam-nos a escrever código mais robusto ao lidar com valores que podem ser `null` ou `undefined`.'),
         React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Optional Chaining (`?.`):'), ' Impede que o código quebre ao tentar aceder a propriedades de um objeto que não existe. Se o valor antes de `?.` for `null` ou `undefined`, a expressão inteira retorna `undefined` em vez de lançar um erro.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Nullish Coalescing Operator (`??`):'), ' Retorna o valor do lado direito apenas se o valor do lado esquerdo for `null` ou `undefined`. É uma alternativa mais segura ao `||` para definir valores padrão, pois o `||` também reage a outros valores "falsy" como `0` ou `""`.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Optional Chaining',
            description: 'Tentar aceder a `utilizador.morada.cidade` daria um erro se `morada` não existisse. Com `?.`, o código continua a funcionar e retorna `undefined`.',
            code: `const utilizador = { nome: "Ana" }; // sem morada

// Daria um erro: const cidade = utilizador.morada.cidade;
const cidade = utilizador.morada?.cidade;
console.log(cidade); // undefined`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Nullish Coalescing',
            description: 'Queremos que o volume 0 seja um valor válido, mas `||` tratá-lo-ia como "falsy". `??` só reage a `null` ou `undefined`, dando-nos o resultado correto.',
            code: `const config = { volume: 0 };

const volumeAntigo = config.volume || 50; // 50 (mau!)
const volumeNovo = config.volume ?? 50;   // 0 (bom!)
console.log(volumeNovo);`
          }
        ]
      },
      quiz: [
        {
          question: 'O que o operador `??` (Nullish Coalescing) faz?',
          options: ['Retorna o valor da direita se o da esquerda for "falsy".', 'Retorna o valor da direita se o da esquerda for `null` ou `undefined`.', 'Converte para booleano.', 'Causa um erro.'],
          correctAnswerIndex: 1,
          explanation: 'O `??` é mais específico que o `||`, reagindo apenas a `null` e `undefined`, o que o torna mais seguro para definir valores padrão quando `0` ou `""` são valores válidos.'
        }
      ]
    },
    {
      id: '7.4',
      title: 'Desafio Final: A Tua Pokédex',
      illustration: React.createElement(PokedexIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Parabéns por chegares até aqui! É hora de unir tudo o que aprendeste. Este desafio final não tem teoria nova, é um projeto prático para construíres uma mini-aplicação do mundo real.'),
        React.createElement('p', { className: 'mb-4' }, 'O objetivo é criar uma Pokédex simples. Terás um campo de texto e um botão. Ao escrever o nome de um Pokémon e clicar, a aplicação vai usar a PokéAPI para ir buscar os dados desse Pokémon e mostrá-los na página (nome, imagem e tipos).')
      ),
      practice: {
        examples: [
            {
                title: 'Passo 1: O HTML',
                description: 'A estrutura base da nossa aplicação.',
                code: `<h1>Pokédex</h1>
<input type="text" id="pokemon-input" placeholder="Nome do Pokémon">
<button id="buscar-btn">Buscar</button>
<div id="pokedex-display">
  <!-- Os dados do Pokémon aparecerão aqui -->
</div>`
            },
            {
                title: 'Passo 2: A Lógica Principal (Função de Fetch)',
                description: 'Criamos uma função `async` que recebe o nome de um Pokémon, faz o `fetch` à API, e trata dos erros.',
                code: `async function buscarPokemon(nome) {
  try {
    const resposta = await fetch(\`https://pokeapi.co/api/v2/pokemon/\${nome.toLowerCase()}\`);
    if (!resposta.ok) throw new Error("Pokémon não encontrado!");
    const dados = await resposta.json();
    mostrarPokemon(dados);
  } catch (erro) {
    alert(erro.message);
  }
}`
            },
            {
                title: 'Passo 3: A Lógica de Renderização e Eventos',
                description: 'Criamos a função que atualiza o DOM e ligamos tudo com um `event listener`.',
                code: `const input = document.getElementById('pokemon-input');
const botao = document.getElementById('buscar-btn');
const display = document.getElementById('pokedex-display');

botao.addEventListener('click', () => {
  if (input.value) buscarPokemon(input.value);
});

function mostrarPokemon(pokemon) {
  const tipos = pokemon.types.map(tipoInfo => \`<li>\${tipoInfo.type.name}</li>\`).join('');
  display.innerHTML = \`
    <h2>\${pokemon.name}</h2>
    <img src="\${pokemon.sprites.front_default}" alt="\${pokemon.name}">
    <h3>Tipos:</h3>
    <ul>\${tipos}</ul>
  \`;
}`
            }
        ]
      },
      quiz: [],
      challenge: {
        description: "Implementa o código completo da Pokédex. Junta as peças dos exemplos para criar a funcionalidade completa. Tenta adicionar o número da Pokédex (`pokemon.id`) ao display.",
        starterCode: `// Junta aqui o código dos exemplos e faz as ligações necessárias.`,
        solution: `const input = document.getElementById('pokemon-input');
const botao = document.getElementById('buscar-btn');
const display = document.getElementById('pokedex-display');

botao.addEventListener('click', () => {
  const nomePokemon = input.value.trim();
  if (nomePokemon) {
    buscarPokemon(nomePokemon);
  }
});

async function buscarPokemon(nome) {
  display.innerHTML = '<p>A procurar...</p>';
  try {
    const resposta = await fetch(\`https://pokeapi.co/api/v2/pokemon/\${nome.toLowerCase()}\`);
    if (!resposta.ok) {
      throw new Error("Pokémon não encontrado!");
    }
    const dados = await resposta.json();
    mostrarPokemon(dados);
  } catch (erro) {
    display.innerHTML = \`<p style="color: red;">\${erro.message}</p>\`;
  }
}

function mostrarPokemon(pokemon) {
  const tipos = pokemon.types.map(tipoInfo => \`<li>\${tipoInfo.type.name}</li>\`).join('');
  
  display.innerHTML = \`
    <h2>#\${pokemon.id} - \${pokemon.name}</h2>
    <img src="\${pokemon.sprites.front_default}" alt="\${pokemon.name}" style="width: 150px;">
    <h3>Tipos:</h3>
    <ul>\${tipos}</ul>
  \`;
}`
      }
    }
  ]
};