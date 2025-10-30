import * as React from 'react';
import type { Module } from '../../types';

// Illustrations
const FunctionsIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('rect', { x: "50", y: "20", width: "100", height: "60", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "100", y: "15", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Função 'soma' (a, b)"),
    React.createElement('text', { x: "25", y: "55", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "2, 3"),
    React.createElement('path', { d: "M 40 52 L 50 52", stroke: "#64ffda", strokeWidth: "1.5" }),
    React.createElement('text', { x: "175", y: "55", textAnchor: "middle", fontSize: "12", fill: "#64ffda" }, "5"),
    React.createElement('path', { d: "M 150 52 L 160 52", stroke: "#64ffda", strokeWidth: "1.5" }),
    React.createElement('text', { x: "100", y: "55", textAnchor: "middle", fontSize: "8", fill: "#ccd6f6" }, "return a + b")
);

const ParametersIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-md h-auto text-lightest-slate" },
  // Machine Body
  React.createElement('rect', { x: "50", y: "10", width: "100", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
  React.createElement('text', { x: "100", y: "55", textAnchor: "middle", fontSize: "8", fill: "#ccd6f6" }, "function body"),
  
  // Regular Param
  React.createElement('path', { d: "M 20 25 L 50 25", stroke: "#a8b2d1", strokeWidth: "2" }),
  React.createElement('text', { x: "35", y: "20", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Param 'a'"),
  
  // Default Param
  React.createElement('path', { d: "M 20 45 L 50 45", stroke: "#a8b2d1", strokeWidth: "2" }),
  React.createElement('text', { x: "35", y: "40", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Param 'b' (default)"),
  React.createElement('rect', { x: "10", y: "41", width: "10", height: "8", fill: "#64ffda", opacity: "0.5" }),

  // Rest Param
  React.createElement('path', { d: "M 20 70 L 50 70", stroke: "#a8b2d1", strokeWidth: "2" }),
  React.createElement('text', { x: "35", y: "65", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Rest '...c'"),
  React.createElement('circle', { cx: "15", cy: "70", r: "2", fill: "#64ffda" }),
  React.createElement('circle', { cx: "22", cy: "70", r: "2", fill: "#64ffda" }),
  React.createElement('circle', { cx: "29", cy: "70", r: "2", fill: "#64ffda" }),

  // Output
  React.createElement('path', { d: "M 150 50 L 180 50", stroke: "#a8b2d1", strokeWidth: "2" }),
  React.createElement('text', { x: "165", y: "45", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "return")
);


const ArrowFunctionIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('text', { x: "100", y: "15", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Função Tradicional vs. Arrow"),
    // Traditional Path
    React.createElement('path', { d: "M 20 40 Q 50 20, 80 40 T 140 40", fill: "none", stroke: "#233554", strokeWidth: "2" }),
    React.createElement('text', { x: "80", y: "50", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "function() { ... }"),
    // Arrow Path (shortcut)
    React.createElement('path', { d: "M 20 70 L 140 70", stroke: "#64ffda", strokeWidth: "2", markerEnd: "url(#arrowhead-green)" }),
    React.createElement('text', { x: "80", y: "80", textAnchor: "middle", fontSize: "8", fill: "#64ffda" }, "() => ..."),
    React.createElement('defs', null, 
      React.createElement('marker', { id: "arrowhead-green", markerWidth: "5", markerHeight: "3.5", refX: "0", refY: "1.75", orient: "auto" },
        React.createElement('polygon', { points: "0 0, 5 1.75, 0 3.5", fill: "#64ffda" })
      )
    )
);

const ScopeIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('rect', { x: "5", y: "5", width: "190", height: "90", fill: "#0a192f", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "15", y: "20", fontSize: "8", fill: "#a8b2d1" }, "Escopo Global"),
    React.createElement('text', { x: "25", y: "40", fontSize: "8", fill: "#ccd6f6" }, "let planeta = 'Terra'"),
    React.createElement('rect', { x: "50", y: "50", width: "100", height: "40", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "60", y: "65", fontSize: "8", fill: "#a8b2d1" }, "Escopo da Função"),
    React.createElement('text', { x: "70", y: "80", fontSize: "8", fill: "#64ffda" }, "let satelite = 'Lua'"),
    React.createElement('path', { d: "M 100 45 L 100 50", stroke: "#64ffda", strokeWidth: "1"}),
    React.createElement('path', { d: "M 100 90 L 100 95", stroke: "red", strokeWidth: "1"}),
    React.createElement('path', { d: "M 98 97 L 102 93 M 102 97 L 98 93", stroke: "red", strokeWidth: "1"})
);

const FirstClassIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-md h-auto text-lightest-slate" },
    React.createElement('text', { x: "100", y: "15", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Função como Ferramenta"),
    // Toolbox
    React.createElement('rect', { x: "10", y: "30", width: "180", height: "50", fill: "#112240", stroke: "#233554", rx: "5" }),
    // Function Icon (wrench)
    React.createElement('g', { id: "function-icon" },
        React.createElement('path', { d: "M 50 40 L 40 50 L 60 70 L 70 60 Z", fill: "#64ffda" }),
        React.createElement('circle', { cx: "75", cy: "55", r: "5", stroke: "#64ffda", fill: "none", strokeWidth: "2" })
    ),
    // Pass as argument
    React.createElement('text', { x: "55", y: "25", textAnchor: "middle", fontSize: "7", fill: "#a8b2d1" }, "Passar como argumento"),
    React.createElement('path', { d: "M 80 30 L 80 45", stroke: "#a8b2d1", strokeWidth: "1", strokeDasharray: "2 2" }),
    // Store in variable
    React.createElement('text', { x: "145", y: "25", textAnchor: "middle", fontSize: "7", fill: "#a8b2d1" }, "Guardar em variável"),
    React.createElement('path', { d: "M 145 30 L 145 50", stroke: "#a8b2d1", strokeWidth: "1", strokeDasharray: "2 2" }),
    React.createElement('rect', { x: "135", y: "50", width: "20", height: "20", fill: "#233554" })
);

const ClosureIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    // Outer scope (fading)
    React.createElement('rect', { x: "10", y: "10", width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5", opacity: "0.5" }),
    React.createElement('text', { x: "50", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1", opacity: "0.5" }, "Escopo Exterior"),
    React.createElement('text', { x: "50", y: "50", textAnchor: "middle", fontSize: "10", fill: "#64ffda", opacity: "0.5" }, "senha"),
    // Traveler (function)
    React.createElement('circle', { cx: "140", cy: "60", r: "10", fill: "#64ffda" }),
    React.createElement('rect', { x: "135", y: "70", width: "10", height: "20", fill: "#64ffda" }),
    // Backpack (closure)
    React.createElement('rect', { x: "145", y: "55", width: "15", height: "15", fill: "#233554", stroke: "#ccd6f6", rx: "2" }),
    React.createElement('text', { x: "152.5", y: "65", textAnchor: "middle", fontSize: "8", fill: "#64ffda" }, "S"),
    // Path
    React.createElement('path', { d: "M 90 50 C 110 50, 120 70, 130 70", fill: "none", stroke: "#a8b2d1", strokeWidth: "1" })
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
        React.createElement('p', { className: 'mb-4' }, 'Funções são um dos pilares da programação. São blocos de código nomeados que executam uma tarefa específica e que podemos reutilizar as vezes que quisermos. A analogia é uma receita de bolo: defines os passos uma vez (a função) e podes fazê-la sempre que te apetecer.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, 'Declaração:'), ' Define a função com a palavra-chave `function`, um nome, e os seus "ingredientes" (parâmetros).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, 'Chamada (Invocação):'), ' Executa o código dentro da função, usando o seu nome seguido de parênteses `()`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, '`return`:'), ' A palavra-chave que especifica o "bolo pronto" - o valor que a função devolve para quem a chamou.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Declarar e Chamar',
            description: 'Uma função simples que não recebe "ingredientes" nem devolve nada específico, apenas executa uma ação.',
            code: `// 1. Declarar a função
function cumprimentar() {
  console.log("Olá! Bem-vindo ao Módulo 4.");
}

// 2. Chamar a função para a executar
cumprimentar();`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Parâmetros e Retorno',
            description: 'Esta função é como uma máquina que recebe dois números (parâmetros `a` e `b`), soma-os, e devolve (`return`) o resultado. Podemos guardar esse resultado numa variável.',
            code: `function somar(a, b) {
  const resultado = a + b;
  return resultado;
}

const total = somar(10, 5); // 'total' vai guardar o valor 15
console.log(total);`
          },
          {
            title: 'Exemplo 3: A Armadilha - Função sem `return` explícito',
            description: 'Se não usares a palavra-chave `return`, a função executa o seu código, mas devolve `undefined` por defeito.',
            code: `function mostrarSoma(a, b) {
  console.log(a + b); // Mostra 7 na consola
}

const valorDevolvido = mostrarSoma(4, 3);
console.log(valorDevolvido); // Imprime undefined`
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
          question: 'Qual é a diferença entre um parâmetro e um argumento?',
          options: ['Nenhuma, são a mesma coisa.', 'Parâmetro é o valor, argumento é o nome.', 'Parâmetro é o nome na declaração da função, argumento é o valor passado na chamada.', 'Argumentos são sempre números.'],
          correctAnswerIndex: 2,
          explanation: 'Parâmetros são as "variáveis" na definição da função, enquanto argumentos são os "valores" que preenchem esses parâmetros quando a função é chamada.'
        },
        {
          question: 'No código `function teste() { console.log(5); } const res = teste();`, qual será o valor da constante `res`?',
          options: ['`5`', '`null`', '`undefined`', 'Um erro'],
          correctAnswerIndex: 2,
          explanation: 'Uma função sem uma instrução `return` explícita devolve `undefined` por defeito. O `console.log` apenas imprime um valor, não o retorna da função.'
        }
      ],
      challenge: {
        description: "Cria uma função chamada `calcularArea` que recebe dois parâmetros, `largura` e `altura`. A função deve multiplicar estes dois valores e retornar o resultado. Depois, chama a função com os valores 10 e 5 e imprime o resultado na consola.",
        starterCode: `// Define a tua função aqui

// Chama a função e imprime o resultado`,
        solution: `function calcularArea(largura, altura) {
  return largura * altura;
}

const area = calcularArea(10, 5);
console.log("A área é:", area); // A área é: 50`
      }
    },
    {
        id: '4.2',
        title: 'Parâmetros: Detalhes e Padrões',
        illustration: React.createElement(ParametersIllustration),
        theory: React.createElement('div', null, 
          React.createElement('p', {className: 'mb-4'}, 'Apesar de serem usados de forma intercambiável, há uma diferença técnica: `Parâmetros` são os nomes listados na definição da função (os ingredientes na receita). `Argumentos` são os valores reais passados à função quando ela é chamada (os ingredientes que vais usar).'),
          React.createElement('ul', {className: 'list-disc list-inside mb-4 pl-4 space-y-2'},
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Parâmetros Padrão:'), ' Podes definir um valor por defeito para um parâmetro, que será usado se nenhum argumento for fornecido.'),
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Parâmetro Rest (`...`):'), ' Permite que uma função aceite um número indefinido de argumentos como um array.')
          )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Parâmetros vs. Argumentos',
                    description: '`nome` e `linguagem` são parâmetros. `"Ana"` e `"Python"` são argumentos.',
                    code: `function saudarProgramador(nome, linguagem) {
  console.log(\`Olá, \${nome}! Vejo que gostas de \${linguagem}.\`);
}

saudarProgramador("Ana", "Python");`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - Parâmetros Padrão',
                    description: 'Se não passarmos um `cumprimento`, a função usa "Olá" por defeito, evitando erros.',
                    code: `function criarMensagem(nome, cumprimento = "Olá") {
  return \`\${cumprimento}, \${nome}!\`;
}

console.log(criarMensagem("Rui"));          // "Olá, Rui!"
console.log(criarMensagem("Sara", "Bom dia")); // "Bom dia, Sara!"`
                },
                {
                    title: 'Exemplo 3: A Nuance - Parâmetro Rest',
                    description: 'A função `somarTudo` pode receber quantos argumentos quisermos. O `...numeros` agrupa-os todos num array chamado `numeros`.',
                    code: `function somarTudo(...numeros) {
  let total = 0;
  for (const num of numeros) {
    total += num;
  }
  return total;
}

console.log(somarTudo(1, 2, 3));       // 6
console.log(somarTudo(10, 20, 30, 40)); // 100`
                }
            ]
        },
        quiz: [
            {
                question: 'Numa função `function f(a, b=1)`, se a chamarmos com `f(5)`, qual o valor de `b`?',
                options: ['`undefined`', '`5`', '`1`', '`Error`'],
                correctAnswerIndex: 2,
                explanation: 'Como nenhum segundo argumento foi fornecido, o parâmetro `b` assume o seu valor padrão, que é 1.'
            },
            {
                question: 'O que o parâmetro Rest (`...args`) faz?',
                options: ['Ignora todos os argumentos.', 'Aceita apenas o resto da divisão.', 'Agrupa todos os argumentos restantes num array.', 'Causa um erro.'],
                correctAnswerIndex: 2,
                explanation: 'O parâmetro Rest é uma forma conveniente de permitir que uma função aceite um número variável de argumentos, que são depois disponibilizados como um array.'
            },
            {
                question: 'A declaração de função `function fn(a, ...b, c)` é válida?',
                options: ['Sim, funciona sem problemas.', 'Não, porque o parâmetro Rest deve ser o último parâmetro.', 'Sim, mas `c` será sempre `undefined`.', 'Não, porque não se pode misturar parâmetros normais com Rest.'],
                correctAnswerIndex: 1,
                explanation: 'A sintaxe do parâmetro Rest exige que ele seja o último na lista de parâmetros de uma função, pois ele agrupa todos os argumentos restantes.'
            }
        ],
        challenge: {
            description: "Cria uma função `apresentar` que recebe dois parâmetros: `nome` e `saudacao` (com o valor padrão 'Olá'). A função deve retornar uma string como 'Olá, [nome]!'. Testa a função chamando-a com um e com dois argumentos.",
            starterCode: `// Define a tua função aqui

// Testa aqui`,
            solution: `function apresentar(nome, saudacao = "Olá") {
  return \`\${saudacao}, \${nome}!\`;
}

console.log(apresentar("Maria")); // Olá, Maria!
console.log(apresentar("João", "Bem-vindo")); // Bem-vindo, João!`
        }
    },
    {
      id: '4.3',
      title: 'Arrow Functions (=>)',
      illustration: React.createElement(ArrowFunctionIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'As Arrow Functions (Funções Seta) são uma sintaxe mais concisa para escrever funções, introduzida no ES6. São como um atalho que torna o código mais limpo, especialmente para funções pequenas.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Removem a palavra-chave `function` e usam uma "seta" `=>`.'),
          React.createElement('li', null, 'Se houver apenas um parâmetro, os parênteses `()` são opcionais.'),
          React.createElement('li', null, 'Se a função tiver apenas uma linha de código que é um `return`, as chaves `{}` e a palavra `return` são opcionais (isto chama-se "retorno implícito").')
        ),
        React.createElement(
            'div',
            { className: 'mt-6 p-4 bg-lightest-navy rounded-lg border-l-4 border-slate' },
            React.createElement('h4', { className: 'font-bold text-lightest-slate mb-2' }, '💡 Comportamento de `this`'),
            React.createElement(
                'p',
                { className: 'text-sm' },
                React.createElement('strong', null, '`this` não é redefinido'),
                ' em arrow functions. Ele herda o `this` do escopo onde a função foi criada. Isto é ótimo para callbacks, mas pode ser problemático para métodos de objetos.'
            )
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Conversão de uma função',
            description: 'Vamos converter uma expressão de função tradicional para a sintaxe de arrow function.',
            code: `// Função Tradicional
const multiplicar_trad = function(a, b) {
  return a * b;
};

// Arrow Function
const multiplicar_arrow = (a, b) => {
  return a * b;
};

console.log(multiplicar_trad(5, 4) === multiplicar_arrow(5, 4)); // true`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Retorno Implícito',
            description: 'Como a nossa função tem apenas uma linha (`return ...`), podemos simplificá-la drasticamente. Esta é a forma mais comum de ver arrow functions.',
            code: `const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 4)); // 20`
          },
          {
            title: 'Exemplo 3: A Armadilha - Retornar um objeto',
            description: 'Se quiseres retornar um objeto literal numa única linha, tens de o envolver em parênteses `()` para que o JavaScript não confunda as chaves `{}` do objeto com as chaves de um bloco de função.',
            code: `// Errado! Tenta retornar um bloco de código, não um objeto
// const criarPessoaErrado = (nome) => { nome: nome };

// Correto! Envolvemos o objeto em parênteses
const criarPessoa = (nome) => ({ nome: nome });

console.log(criarPessoa("Ana")); // { nome: "Ana" }`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é a sintaxe correta para uma arrow function que recebe `x` e retorna `x * x`?',
          options: ['`x => x * x;`', '`function(x) => x * x;`', '`x => { x * x };`', '`=> x * x;`'],
          correctAnswerIndex: 0,
          explanation: 'Com um único parâmetro, os parênteses são opcionais. Com um retorno de uma única linha, as chaves e o `return` são implícitos. A forma mais curta e correta é `x => x * x;`.'
        },
        {
          question: 'Arrow functions são sempre a melhor escolha?',
          options: ['Sim, são a forma moderna e devem substituir todas as outras.', 'Não, por exemplo, o seu comportamento com `this` é diferente, o que as torna inadequadas para métodos de objetos que precisam do `this` tradicional.', 'Sim, exceto para funções muito longas.', 'Não, porque são mais lentas.'],
          correctAnswerIndex: 1,
          explanation: 'As Arrow Functions não têm o seu próprio `this`, elas herdam-no do escopo exterior. Isto é ótimo para callbacks, mas problemático para métodos de objetos ou construtores onde se espera que `this` se refira ao próprio objeto.'
        },
        {
            question: 'Quando é obrigatório usar chaves `{}` numa arrow function?',
            options: ['Sempre.', 'Apenas quando tem mais de um parâmetro.', 'Quando o corpo da função tem mais do que uma instrução.', 'Nunca.'],
            correctAnswerIndex: 2,
            explanation: 'Se o corpo da função precisar de múltiplas linhas para a sua lógica, é necessário usar chaves `{}`. Nestes casos, se quiseres retornar um valor, tens de usar a palavra-chave `return` explicitamente.'
        }
      ],
      challenge: {
        description: "Converte a seguinte função tradicional numa arrow function, usando a sintaxe mais concisa possível.",
        starterCode: `const saudar = function(nome) {
  return "Olá, " + nome + "!";
};`,
        solution: `const saudar = nome => \`Olá, \${nome}!\`;`
      }
    },
    {
      id: '4.4',
      title: 'Escopo (Scope)',
      illustration: React.createElement(ScopeIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Escopo ("scope") é o contexto onde as variáveis são acessíveis. É o que define as "fronteiras" do nosso código, dizendo-nos onde podemos e não podemos usar uma variável.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Escopo Global:'), ' Variáveis declaradas fora de qualquer função ou bloco. Estão disponíveis em todo o lado.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Escopo de Função (Local):'), ' Variáveis declaradas dentro de uma função. Só "vivem" e podem ser acedidas dentro dessa função.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Escopo de Bloco:'), ' Com `let` e `const`, as variáveis também têm escopo de bloco. Só existem dentro do par de chaves `{...}` mais próximo (ex: num `if` ou `for`).')
        ),
        React.createElement('p', { className: 'mt-4' }, 'Uma função pode aceder a variáveis do seu escopo e de escopos superiores (como o global), mas o contrário não é verdade.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Global vs. Local',
            description: 'A variável `planeta` é global e pode ser lida dentro da função. A variável `satelite` é local e tentar acedê-la fora da função daria um erro.',
            code: `const planeta = "Terra"; // Escopo Global

function mostrarAstros() {
  const satelite = "Lua"; // Escopo de Função
  console.log(\`Estou no planeta \${planeta} e a ver o satélite \${satelite}.\`);
}

mostrarAstros();
// console.log(satelite); // ReferenceError: satelite is not defined`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Escopo de Bloco',
            description: 'A variável `mensagem` só existe dentro do bloco `if`. Tentar usá-la fora causa um erro. Isto previne que variáveis "vazem" para fora do seu contexto.',
            code: `const logado = true;

if (logado) {
  const mensagem = "Bem-vindo!";
  console.log(mensagem);
}

// console.log(mensagem); // ReferenceError: mensagem is not defined`
          },
          {
            title: 'Exemplo 3: A Armadilha - Sombreamento de Variáveis (Shadowing)',
            description: 'Dentro da função, declaramos uma nova variável `animal` que "sombreia" a global. As alterações feitas à variável local não afetam a global.',
            code: `let animal = "Gato"; // Global

function exemplo() {
  let animal = "Cão"; // Local (sombreia a global)
  console.log("Dentro da função:", animal);
}

exemplo();
console.log("Fora da função:", animal);`
          }
        ]
      },
      quiz: [
        {
          question: 'Uma variável declarada com `let` dentro de um bloco `if` pode ser acedida fora desse `if`?',
          options: ['Sim, sempre', 'Não, porque `let` tem escopo de bloco', 'Apenas se for um número', 'Sim, mas terá o valor `undefined`'],
          correctAnswerIndex: 1,
          explanation: '`let` e `const` têm escopo de bloco, o que significa que só são acessíveis dentro do par de chaves `{...}` onde foram declaradas.'
        },
        {
          question: "No exemplo de 'shadowing', se a linha `let animal = 'Cão'` dentro da função fosse removida, o que seria impresso?",
          options: ["'Dentro da função: Cão'", "'Dentro da função: Gato'", "'Dentro da função: undefined'", "Um erro"],
          correctAnswerIndex: 1,
          explanation: "Se não houvesse uma declaração local de `animal`, a função procuraria no escopo superior (o global) e encontraria a variável `animal` com o valor 'Gato'."
        },
        {
            question: 'Se uma variável não é encontrada no escopo de uma função, o que o JavaScript faz a seguir?',
            options: ['Lança um `ReferenceError` imediatamente.', 'Procura no escopo da função "mãe", continuando até ao escopo global.', 'Cria a variável automaticamente.', 'Retorna `null`.'],
            correctAnswerIndex: 1,
            explanation: 'Este mecanismo é a "scope chain" (cadeia de escopos). O JavaScript procura a variável no escopo atual e vai subindo na hierarquia até a encontrar ou até chegar ao escopo global.'
        }
      ],
      challenge: {
        description: "Prevê o que o seguinte código vai imprimir na consola, linha a linha, e explica o porquê com base nas regras de escopo.",
        starterCode: `let a = 1;

function primeira() {
  let b = 2;
  console.log(a); // O que imprime aqui?

  function segunda() {
    let c = 3;
    console.log(b); // O que imprime aqui?
  }
  
  segunda();
  // console.log(c); // O que aconteceria aqui?
}

primeira();`,
        solution: `// 1. Imprime 1. A função 'primeira' tem acesso ao escopo global.
// 2. Imprime 2. A função 'segunda' tem acesso ao escopo da sua função "mãe", a 'primeira'.
// 3. Causaria um ReferenceError. A função 'primeira' não tem acesso ao escopo da sua função "filha", a 'segunda'.`
      }
    },
    {
        id: '4.5',
        title: 'Funções como Cidadãos de Primeira Classe',
        illustration: React.createElement(FirstClassIllustration),
        theory: React.createElement('div', null, 
          React.createElement('p', {className: 'mb-4'}, 'Em JavaScript, as funções não são apenas para executar código, elas são tratadas como valores. Isto significa que podes fazer com uma função praticamente o mesmo que farias com um número ou uma string. A esta caraterística chamamos "Funções de Primeira Classe".'),
           React.createElement('ul', {className: 'list-disc list-inside mb-4 pl-4 space-y-2'},
            React.createElement('li', null, 'Guardá-las numa variável (como já vimos com as "function expressions").'),
            React.createElement('li', null, 'Passá-las como argumento para outras funções. A função que é passada chama-se ', React.createElement('strong', { className: 'text-green' }, 'callback'), '.'),
            React.createElement('li', null, 'Retorná-las de outras funções. Uma função que aceita ou retorna outra função chama-se ', React.createElement('strong', { className: 'text-green' }, 'Higher-Order Function (Função de Ordem Superior)'), '.')
           )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Callbacks',
                    description: 'O método `.forEach` de um array é uma Higher-Order Function. Ele aceita uma função (callback) como argumento e executa-a para cada item do array.',
                    code: `const nomes = ["Ana", "Rui", "Bia"];

function imprimirNome(nome) {
  console.log(\`Olá, \${nome}!\`);
}

// Passamos a função 'imprimirNome' como um callback
nomes.forEach(imprimirNome);`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - Funções Anónimas como Callbacks',
                    description: 'É muito comum definir a função de callback diretamente no local onde ela é usada, como uma arrow function anónima.',
                    code: `const numeros = [1, 2, 3, 4];
const quadrados = numeros.map(n => n * n); // .map é outra HOF

console.log(quadrados); // [1, 4, 9, 16]`
                },
                {
                    title: 'Exemplo 3: A Nuance - Retornar uma função',
                    description: 'A função `criarMultiplicador` é uma HOF que retorna uma nova função. A função retornada "lembra-se" do valor do `fator`. (Isto é um vislumbre de "closures"!)',
                    code: `function criarMultiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(duplicar(10)); // 20
console.log(triplicar(10)); // 30`
                }
            ]
        },
        quiz: [
            {
                question: 'Uma função que é passada como argumento para outra função é chamada de...?',
                options: ['`return`', '`callback`', '`argumento`', '`HOF`'],
                correctAnswerIndex: 1,
                explanation: 'A função que "volta a chamar" (calls back) é o callback. A função que a recebe é a Higher-Order Function.'
            },
            {
                question: 'O método `.map()` é uma Higher-Order Function?',
                options: ['Sim, porque aceita uma função (callback) como argumento.', 'Não, porque apenas funciona em arrays.', 'Não, porque retorna um novo array.', 'Sim, porque usa `this`.'],
                correctAnswerIndex: 0,
                explanation: 'Qualquer função que aceite outra função como argumento ou retorne uma função é, por definição, uma Higher-Order Function. `.map`, `.filter`, `.reduce`, `.forEach` são todos exemplos.'
            },
            {
                question: 'Qual das seguintes opções descreve uma Higher-Order Function (HOF)?',
                options: ['Uma função que só aceita números.', 'Uma função que retorna `undefined`.', 'Uma função que opera sobre outras funções (aceitando-as como argumentos ou retornando-as).', 'Uma função declarada com `let`.'],
                correctAnswerIndex: 2,
                explanation: 'As HOFs são um pilar da programação funcional e permitem abstrair ações, tornando o código mais modular e reutilizável.'
            }
        ],
        challenge: {
            description: "Cria uma HOF chamada `operar`. Ela deve receber 3 argumentos: dois números e uma função de callback (a operação). A função `operar` deve executar a operação com os dois números e retornar o resultado.",
            starterCode: `function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }

function operar(x, y, operacao) {
  // O teu código aqui
}

// Testa aqui com somar e subtrair`,
            solution: `function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }

function operar(x, y, operacao) {
  return operacao(x, y);
}

console.log(operar(10, 5, somar)); // 15
console.log(operar(10, 5, subtrair)); // 5`
        }
    },
    {
        id: '4.6',
        title: 'O Superpoder das Funções: Closures',
        illustration: React.createElement(ClosureIllustration),
        theory: React.createElement('div', null, 
          React.createElement('p', {className: 'mb-4'}, 'Um closure (ou fechamento) é um conceito fundamental e poderoso em JavaScript. Ocorre quando uma função "se lembra" do seu escopo léxico (o ambiente onde foi criada), mesmo quando é executada fora desse ambiente.'),
          React.createElement('p', {className: 'mb-4'}, 'A analogia do viajante: Imagina uma função como um viajante. Quando ele sai da sua cidade natal (o escopo da função exterior), ele leva consigo uma mochila (o closure). Dentro dessa mochila estão todas as variáveis e referências que existiam na sua cidade. Ele pode aceder a essa mochila em qualquer lugar do mundo para onde vá (onde quer que a função interior seja chamada).'),
          React.createElement('p', {className: 'mb-4'}, 'Closures são a "magia" que permite coisas como variáveis privadas e padrões de programação avançados.')
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - O exemplo do Multiplicador',
                    description: 'Quando chamamos `criarMultiplicador(2)`, a função interior é criada. Ela cria um closure que "captura" a variável `fator` com o valor 2. Essa função retornada (`duplicar`) carrega essa "mochila" com ela para sempre.',
                    code: `function criarMultiplicador(fator) {
  // A função interior tem um closure sobre a variável 'fator'
  return function(numero) {
    return numero * fator;
  };
}

const duplicar = criarMultiplicador(2);
console.log(duplicar(5)); // 10`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - Variáveis Privadas',
                    description: 'A variável `contador` só existe dentro da função `criarContador`. É impossível acedê-la ou modificá-la de fora, exceto através da função que foi retornada. Isto é encapsulamento.',
                    code: `function criarContador() {
  let contador = 0; // 'contador' é privada

  return function() {
    contador++;
    console.log(contador);
  };
}

const meuContador = criarContador();
meuContador(); // 1
meuContador(); // 2
// console.log(contador); // ReferenceError: contador is not defined`
                },
                {
                    title: 'Exemplo 3: A Armadilha - Loops e Closures (Pergunta de Entrevista!)',
                    description: 'Um erro clássico e uma pergunta de entrevista muito comum! Se usássemos `var` no loop, todas as funções de timeout teriam um closure sobre a MESMA variável `i`, que no final teria o valor 3. Com `let`, cada iteração cria um novo escopo de bloco, e cada função tem um closure sobre uma `i` diferente, resolvendo o problema.',
                    code: `for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Imprime 0, 1, 2 (com 1 segundo de intervalo)
  }, 1000 * i);
}`
                }
            ]
        },
        quiz: [
            {
                question: 'O que é um closure?',
                options: ['Um tipo de erro em JavaScript.', 'Uma função que é executada imediatamente.', 'A combinação de uma função com o seu ambiente léxico, permitindo-lhe aceder a variáveis do seu escopo exterior.', 'Uma forma de fechar uma página web.'],
                correctAnswerIndex: 2,
                explanation: 'Um closure é a capacidade de uma função de "se lembrar" e aceder às variáveis do escopo onde foi criada, mesmo quando é executada num escopo diferente.'
            },
            {
              question: "No exemplo do contador, se chamarmos `criarContador()` duas vezes, teremos dois contadores independentes?",
              options: ["Não, ambos irão partilhar a mesma variável `contador`.", "Sim, cada chamada a `criarContador` cria um novo escopo e uma nova variável `contador` privada.", "Dará um erro na segunda chamada.", "Sim, mas só o primeiro irá funcionar."],
              correctAnswerIndex: 1,
              explanation: "Cada execução de `criarContador` cria um novo ambiente léxico (um novo 'saco'). Portanto, `const c1 = criarContador()` e `const c2 = criarContador()` criam dois contadores completamente independentes, cada um com a sua própria variável `contador` privada."
            },
            {
                question: 'Qual é um dos principais casos de uso prático para closures?',
                options: ['Criar loops `for`.', 'Permitir o encapsulamento e a criação de "variáveis privadas".', 'Operações matemáticas básicas.', 'Substituir o `if/else`.'],
                correctAnswerIndex: 1,
                explanation: 'Como as variáveis do escopo exterior não são acessíveis de fora, a não ser através da função retornada, os closures são o mecanismo que permite emular variáveis privadas em JavaScript.'
            }
        ],
        challenge: {
            description: "Cria uma função `criarCofre(senha)` que retorna outra função. A função retornada recebe uma tentativa de senha. Se a tentativa for igual à senha original, ela retorna 'Cofre aberto!'. Caso contrário, retorna 'Senha incorreta!'. A senha original deve ser privada e inacessível de fora.",
            starterCode: `const meuCofre = criarCofre("segredo123");

// Testa aqui com a senha correta e incorreta`,
            solution: `function criarCofre(senha) {
  return function(tentativa) {
    if (tentativa === senha) {
      return "Cofre aberto!";
    } else {
      return "Senha incorreta!";
    }
  };
}

const meuCofre = criarCofre("segredo123");
console.log(meuCofre("senha-errada")); // "Senha incorreta!"
console.log(meuCofre("segredo123"));   // "Cofre aberto!"`
        }
    }
  ]
};