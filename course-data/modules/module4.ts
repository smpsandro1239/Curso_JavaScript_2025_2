import * as React from 'react';
import type { Module } from '../../types';

const FunctionsIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Machine
  React.createElement('rect', { x: "50", y: "20", width: "100", height: "60", fill: "#112240", stroke: "#233554", rx: "5" }),
  React.createElement('text', { x: "100", y: "15", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Função 'soma'"),
  // Input
  React.createElement('text', { x: "20", y: "45", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "2, 3"),
  React.createElement('path', { d: "M 35 42 L 50 42", stroke: "#64ffda", strokeWidth: "1.5", markerEnd: "url(#arrowhead)" }),
  // Output
  React.createElement('text', { x: "180", y: "55", textAnchor: "middle", fontSize: "12", fill: "#64ffda" }, "5"),
  React.createElement('path', { d: "M 150 52 L 165 52", stroke: "#64ffda", strokeWidth: "1.5", markerEnd: "url(#arrowhead)" })
);

const ScopeIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    // Global Scope
    React.createElement('rect', { x: "5", y: "5", width: "190", height: "90", fill: "none", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "15", y: "20", fontSize: "8", fill: "#a8b2d1" }, "Escopo Global"),
    React.createElement('text', { x: "25", y: "40", fontSize: "8", fill: "#ccd6f6" }, "let planeta = 'Terra'"),
    // Function Scope
    React.createElement('rect', { x: "50", y: "50", width: "100", height: "40", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "60", y: "65", fontSize: "8", fill: "#a8b2d1" }, "Escopo da Função"),
    React.createElement('text', { x: "70", y: "80", fontSize: "8", fill: "#64ffda" }, "let satelite = 'Lua'"),
    // Arrow
    React.createElement('path', { d: "M 100 45 L 100 50", stroke: "#64ffda", strokeWidth: "1", markerEnd: "url(#arrowhead)"}),
    React.createElement('path', { d: "M 100 90 L 100 95", stroke: "red", strokeWidth: "1"}),
    React.createElement('path', { d: "M 98 97 L 102 93 M 102 97 L 98 93", stroke: "red", strokeWidth: "1"})
);


export const module4: Module = {
  id: '4',
  title: 'Módulo 4: Funções e Escopo',
  lessons: [
    {
      id: '4.1',
      title: 'Funções: Blocos Reutilizáveis',
      illustration: React.createElement(FunctionsIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Funções são um dos blocos de construção fundamentais em JavaScript. Uma função é um bloco de código desenhado para executar uma tarefa específica.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia é uma máquina de sumos: metes fruta (os ', React.createElement('strong', { className: 'text-green' }, 'parâmetros'), ') e a máquina devolve-te sumo (o ', React.createElement('strong', { className: 'text-green' }, 'valor de retorno'), '). Podes usar a máquina (chamar a função) as vezes que quiseres, com frutas diferentes.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, 'Declaração:'), ' Define a função com a palavra-chave `function`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, 'Parâmetros:'), ' As "variáveis" que a função aceita, listadas na sua definição.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, '`return`:'), ' A palavra-chave que especifica o valor que a função "devolve". Se nada for retornado, a função devolve `undefined`.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Função sem parâmetros',
            description: 'Uma função simples que executa sempre a mesma tarefa.',
            code: `function dizerOla() {
  console.log("Olá, mundo!");
}

dizerOla(); // Chama a função`
          },
          {
            title: 'Exemplo 2: Função com parâmetros e retorno',
            description: 'Esta função aceita dois números, soma-os e retorna o resultado. Podemos guardar esse resultado numa variável.',
            code: `function somar(a, b) {
  return a + b;
}

const resultado = somar(5, 3); // resultado será 8
console.log(resultado);`
          },
          {
            title: 'Exemplo 3: Expressão de Função',
            description: 'Também podemos atribuir uma função a uma variável. Isto é chamado de "function expression".',
            code: `const multiplicar = function(a, b) {
  return a * b;
};

const resultado = multiplicar(4, 7); // resultado será 28
console.log(resultado);`
          }
        ]
      },
      quiz: [
        {
          question: 'O que a palavra-chave `return` faz numa função?',
          options: ['Imprime um valor na consola.', 'Termina a execução da função e especifica um valor a ser devolvido.', 'Cria uma nova variável.', 'Chama outra função.'],
          correctAnswerIndex: 1,
          explanation: 'O `return` é essencial para obter um resultado de uma função. Assim que um `return` é executado, a função para imediatamente.'
        },
        {
          question: 'Na chamada `somar(10, 20)`, o que são 10 e 20?',
          options: ['Parâmetros', 'Argumentos', 'Variáveis', 'Constantes'],
          correctAnswerIndex: 1,
          explanation: 'Os valores que passas quando chamas uma função são os "argumentos". Os nomes das "caixas" que os recebem na definição da função (`function somar(num1, num2)`) são os "parâmetros".'
        }
      ]
    },
    {
      id: '4.2',
      title: 'Arrow Functions (=>)',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'As Arrow Functions foram introduzidas no ES6 e oferecem uma sintaxe mais curta para escrever expressões de função. São especialmente úteis para funções pequenas e anónimas.'),
        React.createElement('p', { className: 'mb-4' }, 'Características principais:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Removem a palavra-chave `function`.'),
          React.createElement('li', null, 'Se houver apenas um parâmetro, os parênteses `()` são opcionais.'),
          React.createElement('li', null, 'Se a função tiver apenas uma linha e for um `return`, as chaves `{}` e a palavra `return` são opcionais (retorno implícito).')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Conversão básica',
            description: 'Vamos converter uma expressão de função normal para uma arrow function.',
            code: `// Expressão de função normal
const somar_normal = function(a, b) {
  return a + b;
};

// Com Arrow Function
const somar_arrow = (a, b) => {
  return a + b;
};`
          },
          {
            title: 'Exemplo 2: Retorno implícito',
            description: 'Como a nossa função de soma tem apenas uma linha (`return ...`), podemos simplificá-la ainda mais.',
            code: `const somar = (a, b) => a + b;

console.log(somar(10, 5)); // 15`
          },
          {
            title: 'Exemplo 3: Parâmetro único',
            description: 'Se a função só aceita um parâmetro, os parênteses à volta dele são opcionais.',
            code: `const quadrado = x => x * x;

console.log(quadrado(9)); // 81`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é a sintaxe correta para uma arrow function que recebe `nome` e retorna `Olá, ${nome}`?',
          options: ['`nome => { return `Olá, ${nome}`; }`', '`(nome) => `Olá, ${nome}``', 'Ambas estão corretas', 'Nenhuma está correta'],
          correctAnswerIndex: 2,
          explanation: 'Ambas as formas são válidas. A segunda é a versão mais curta com retorno implícito, que é muito comum.'
        }
      ]
    },
    {
      id: '4.3',
      title: 'Escopo (Scope)',
      illustration: React.createElement(ScopeIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Escopo (ou "scope") em programação refere-se à visibilidade ou acessibilidade das variáveis. Onde é que o meu código pode "ver" ou aceder a uma determinada variável?'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Escopo Global:'), ' Variáveis declaradas fora de qualquer função. São acessíveis em qualquer parte do teu código.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Escopo de Função (ou Local):'), ' Variáveis declaradas dentro de uma função. Só são acessíveis DENTRO dessa função.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Escopo de Bloco:'), ' Variáveis declaradas com `let` e `const` dentro de um bloco (`{...}`, como num `if` ou `for`). Só são acessíveis dentro desse bloco.')
        ),
        React.createElement('p', { className: 'mt-4' }, 'O escopo ajuda a evitar conflitos de nomes entre variáveis e a manter o teu código organizado e seguro.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Global vs. Local',
            description: 'A variável `animalGlobal` está acessível em todo o lado, mas `animalLocal` só existe dentro da função.',
            code: `const animalGlobal = "Cão";

function mostrarAnimais() {
  const animalLocal = "Gato";
  console.log(animalGlobal); // "Cão"
  console.log(animalLocal);  // "Gato"
}

mostrarAnimais();
// console.log(animalLocal); // Daria um erro: animalLocal is not defined`
          },
          {
            title: 'Exemplo 2: Escopo de Bloco',
            description: 'A variável `mensagem` declarada com `let` só existe dentro do bloco `if`.',
            code: `const logado = true;

if (logado) {
  let mensagem = "Bem-vindo!";
  console.log(mensagem); // "Bem-vindo!"
}

// console.log(mensagem); // Daria um erro: mensagem is not defined`
          }
        ]
      },
      quiz: [
        {
          question: 'Uma variável declarada com `let` dentro de uma função pode ser acedida fora dela?',
          options: ['Sim, sempre', 'Não, nunca', 'Apenas se for um número', 'Apenas se tiver o mesmo nome de uma variável global'],
          correctAnswerIndex: 1,
          explanation: 'Variáveis declaradas dentro de uma função têm escopo local e estão "presas" a essa função.'
        }
      ],
      challenge: {
        description: "Escreve uma arrow function chamada `calcularArea` que aceita dois parâmetros, `largura` e `altura`. A função deve retornar a área (largura * altura). Testa a função chamando-a com dois números e imprimindo o resultado na consola.",
        starterCode: `// Escreve a tua arrow function aqui

// Testa a função aqui`,
        solution: `const calcularArea = (largura, altura) => largura * altura;

const area = calcularArea(10, 5);
console.log("A área é:", area); // A área é: 50`
      }
    }
  ]
};
