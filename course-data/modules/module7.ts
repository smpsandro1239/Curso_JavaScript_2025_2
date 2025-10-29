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
    // FIX: Corrected syntax error in string literal and closed React.createElement call.
    React.createElement('text', { x: "70", y: "25", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "?.")
);

// FIX: Added missing module export to resolve import error in course-data/index.ts
export const module7: Module = {
    id: '7',
    title: 'Módulo 7: Tópicos Modernos de JS (ES6+)',
    lessons: [
      {
        id: '7.1',
        title: 'Desestruturação (Destructuring)',
        illustration: React.createElement(DestructuringIllustration),
        theory: React.createElement(
          'div',
          null,
          React.createElement('p', { className: 'mb-4' }, 'A desestruturação é uma sintaxe que permite extrair valores de arrays ou propriedades de objetos para variáveis distintas. É como desempacotar uma caixa com vários itens de uma só vez.'),
          React.createElement(
            'ul',
            { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Objetos:'), ' Extrai propriedades pelo nome.'),
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Arrays:'), ' Extrai valores pela posição.')
          )
        ),
        practice: {
          examples: [
            {
              title: 'Exemplo 1: O Básico - Desestruturação de Objetos',
              description: 'Extraímos as propriedades `nome` e `idade` do objeto `utilizador` para constantes com o mesmo nome.',
              code: `const utilizador = { nome: "Ana", idade: 30, cidade: "Lisboa" };

const { nome, idade } = utilizador;

console.log(nome); // "Ana"
console.log(idade); // 30`
            },
            {
              title: 'Exemplo 2: O Caso Comum - Desestruturação de Arrays',
              description: 'Extraímos os valores do array para variáveis com base na sua posição.',
              code: `const coordenadas = [10, 20, 30];

const [x, y] = coordenadas;

console.log(x); // 10
console.log(y); // 20`
            },
            {
                title: 'Exemplo 3: A Nuance - Renomear e Valores Padrão',
                description: 'Podemos renomear uma variável e fornecer um valor padrão caso a propriedade não exista no objeto.',
                code: `const produto = { id: 1, preco: 99 };

const { id: produtoId, preco, emStock = false } = produto;

console.log(produtoId); // 1
console.log(emStock); // false`
            }
          ]
        },
        quiz: [
          {
            question: 'O que o código `const { nome } = { nome: "Rui" };` faz?',
            options: ['Cria um objeto.', 'Cria uma constante `nome` com o valor "Rui".', 'Causa um erro.'],
            correctAnswerIndex: 1,
            explanation: 'Esta é a sintaxe de desestruturação de objeto, que extrai a propriedade `nome` para uma constante com o mesmo nome.'
          }
        ],
      },
      {
        id: '7.2',
        title: 'Operadores Spread (...) e Rest (...)',
        theory: React.createElement(
            'div',
            null,
            React.createElement('p', { className: 'mb-4' }, 'A sintaxe de três pontos `...` tem duas funções opostas, dependendo de onde é usada:'),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Spread (espalhar):'), ' "Espalha" os elementos de um array ou as propriedades de um objeto noutro. É usado para criar cópias ou combinar arrays/objetos.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Rest (agrupar):'), ' Agrupa o "resto" dos elementos num array. É usado em desestruturação ou em parâmetros de função.')
            )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Spread com Arrays',
                    description: 'Criamos uma cópia de um array e combinamos dois arrays num só.',
                    code: `const original = [1, 2, 3];
const copia = [...original]; // [1, 2, 3]

const outros = [4, 5];
const combinado = [...original, ...outros]; // [1, 2, 3, 4, 5]`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - Rest com Desestruturação',
                    description: 'Capturamos o primeiro elemento e agrupamos o resto num novo array.',
                    code: `const numeros = [10, 20, 30, 40];
const [primeiro, ...resto] = numeros;

console.log(primeiro); // 10
console.log(resto); // [20, 30, 40]`
                }
            ]
        },
        quiz: [
            {
                question: 'O que o operador Spread faz?',
                options: ['Agrupa elementos num array.', 'Expande os elementos de um iterável (como um array) noutro sítio.', 'Remove elementos de um array.'],
                correctAnswerIndex: 1,
                explanation: 'O operador Spread "espalha" os elementos, sendo muito útil para criar cópias e combinar arrays/objetos de forma imutável.'
            }
        ]
      },
      {
        id: '7.3',
        title: 'Módulos ES (import/export)',
        illustration: React.createElement(ESModulesIllustration),
        theory: React.createElement(
            'div',
            null,
            React.createElement('p', { className: 'mb-4' }, 'À medida que as aplicações crescem, precisamos de dividir o nosso código em múltiplos ficheiros para o manter organizado. Os Módulos ES são a forma padrão e moderna de o fazer em JavaScript.'),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`export`:'), ' Torna variáveis, funções ou classes disponíveis para outros ficheiros.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`import`:'), ' Traz as funcionalidades exportadas de outros ficheiros para o ficheiro atual.')
            )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Exportação Nomeada',
                    description: 'Exportamos várias funções de um ficheiro de utilitários.',
                    code: `// ficheiro: utils.js
export const PI = 3.14;
export function somar(a, b) {
  return a + b;
}

// ficheiro: main.js
import { PI, somar } from './utils.js';
console.log(somar(5, 2) * PI);`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - Exportação Padrão (Default)',
                    description: 'Cada ficheiro pode ter uma exportação padrão. É útil para exportar a "coisa" principal do ficheiro.',
                    code: `// ficheiro: User.js
export default class User {
  // ...
}

// ficheiro: main.js
import User from './User.js'; // sem chaves {}
const user = new User();`
                }
            ]
        },
        quiz: [
            {
                question: 'Qual é a principal vantagem de usar módulos?',
                options: ['O código corre mais rápido.', 'Permite a organização do código em ficheiros reutilizáveis e com escopo próprio.', 'Reduz o tamanho final do ficheiro.'],
                correctAnswerIndex: 1,
                explanation: 'Os módulos são essenciais para a manutenibilidade e escalabilidade de projetos grandes, evitando poluição do escopo global e promovendo a reutilização.'
            }
        ]
      },
      {
        id: '7.4',
        title: 'Optional Chaining (?.) e Nullish Coalescing (??)',
        illustration: React.createElement(OptionalChainingIllustration),
        theory: React.createElement(
            'div',
            null,
            React.createElement('p', { className: 'mb-4' }, 'Estes dois operadores modernos ajudam a lidar com valores que podem ser `null` ou `undefined` de forma muito mais limpa.'),
             React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Optional Chaining (`?.`):'), ' Para de avaliar uma cadeia de propriedades se encontrar `null` ou `undefined`, retornando `undefined` em vez de causar um erro.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Nullish Coalescing (`??`):'), ' Retorna o operando do lado direito se o do lado esquerdo for `null` ou `undefined`. Caso contrário, retorna o do lado esquerdo. (Ignora outros valores falsy como 0 ou "".)')
            )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Optional Chaining',
                    description: 'Evita um erro ao tentar aceder a uma propriedade de algo que é `undefined`.',
                    code: `const user = { nome: "Ana" };
// user.endereco é undefined. Sem o '?.' a linha seguinte daria erro.
const rua = user.endereco?.rua;
console.log(rua); // undefined`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - Nullish Coalescing',
                    description: 'Atribui um valor padrão apenas se a variável for nula ou indefinida.',
                    code: `const volume = 0;
// Se usássemos ||, o resultado seria 50, o que está errado.
const volumeFinal = volume ?? 50;
console.log(volumeFinal); // 0`
                }
            ]
        },
        quiz: [
            {
                question: 'Qual é o resultado de `null ?? "padrão"`?',
                options: ['`null`', '`"padrão"`', '`undefined`', '`true`'],
                correctAnswerIndex: 1,
                explanation: 'O operador `??` retorna o valor do lado direito se o da esquerda for `null` ou `undefined`.'
            }
        ],
        challenge: {
            description: "Dado um objeto `config`, usa o optional chaining e o nullish coalescing para obter o `tema` ou, se não existir, usar 'claro' como padrão.",
            starterCode: `const config1 = { user: { theme: 'dark' } };
const config2 = { user: {} };
const config3 = {};

function getTheme(config) {
  // A tua lógica aqui numa só linha
}

// Deve imprimir 'dark', 'claro', 'claro'`,
            solution: `function getTheme(config) {
  return config.user?.theme ?? 'claro';
}`
        }
      }
    ]
};
