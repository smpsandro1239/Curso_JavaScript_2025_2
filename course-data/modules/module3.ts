import * as React from 'react';
import type { Module } from '../../types';

// Illustrations
const IfElseIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Start point
  React.createElement('circle', { cx: "20", cy: "50", r: "5", fill: "#64ffda" }),
  // Path to decision
  React.createElement('path', { d: "M 25 50 L 70 50", stroke: "#233554", strokeWidth: "2" }),
  // Diamond decision block
  React.createElement('path', { d: "M 70 50 L 100 20 L 130 50 L 100 80 Z", fill: "#112240", stroke: "#64ffda" }),
  React.createElement('text', { x: "100", y: "53", textAnchor: "middle", fontSize: "10", fill: "#ccd6f6" }, "?"),
  // Path if true
  React.createElement('path', { d: "M 100 20 L 175 20", stroke: "#233554", strokeWidth: "2" }),
  React.createElement('text', { x: "140", y: "15", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "if (true)"),
  React.createElement('circle', { cx: "180", cy: "20", r: "5", fill: "#233554", stroke:"#64ffda" }),
  // Path if false
  React.createElement('path', { d: "M 100 80 L 175 80", stroke: "#233554", strokeWidth: "2" }),
  React.createElement('text', { x: "140", y: "90", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "else (false)"),
  React.createElement('circle', { cx: "180", cy: "80", r: "5", fill: "#233554", stroke:"#a8b2d1" })
);

const ForLoopIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Cog wheel
  React.createElement('circle', { cx: "100", cy: "50", r: "20", fill: "none", stroke: "#64ffda", strokeWidth: "2" }),
  ...Array.from({ length: 8 }).map((_, i) =>
    React.createElement('path', {
      d: `M ${100 + 20 * Math.cos(i * Math.PI / 4)} ${50 + 20 * Math.sin(i * Math.PI / 4)} L ${100 + 25 * Math.cos(i * Math.PI / 4)} ${50 + 25 * Math.sin(i * Math.PI / 4)}`,
      stroke: "#64ffda",
      strokeWidth: "3"
    })
  ),
  // Looping arrow
  React.createElement('path', {
    d: "M 100,10 A 40,40 0 1,1 90,12",
    fill: "none",
    stroke: "#a8b2d1",
    strokeWidth: "2",
    strokeDasharray: "4 4"
  }),
  React.createElement('path', { d: "M 90 12 L 85 15 L 88 10 Z", fill: "#a8b2d1" }),
  React.createElement('text', { x: "100", y: "53", textAnchor: "middle", fontSize: "8", fill: "#ccd6f6" }, "Ação"),
  React.createElement('text', { x: "150", y: "50", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "i++")
);


export const module3: Module = {
  id: '3',
  title: 'Módulo 3: Controlo de Fluxo',
  lessons: [
    {
      id: '3.1',
      title: 'Condicionais: if / else',
      illustration: React.createElement(IfElseIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Até agora, o nosso código correu sempre de cima para baixo. Mas na programação, muitas vezes queremos executar código diferente com base em certas condições. É aqui que entra o controlo de fluxo.'),
        React.createElement('p', { className: 'mb-4' }, 'A declaração `if` é a ferramenta mais básica para tomar decisões. A analogia é simples: "SE (if) estiver a chover, ENTÃO levo o guarda-chuva."'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`if`'), ': Executa um bloco de código se uma condição for `true`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`else`'), ': Executa um bloco de código se a condição do `if` for `false`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`else if`'), ': Permite-te testar uma nova condição se a primeira condição `if` for `false`.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Uma condição `if` simples",
            description: "Verificamos a idade de uma pessoa. Se for maior ou igual a 18, mostramos uma mensagem. Se não, nada acontece.",
            code: `const idade = 20;

if (idade >= 18) {
  console.log("É maior de idade.");
}`
          },
          {
            title: "Exemplo 2: O Caso Comum - `if...else`",
            description: "Aqui, temos uma ação para ambos os casos: se a condição for verdadeira ou se for falsa. Desta forma, o nosso programa responde sempre.",
            code: `const temperatura = 15;

if (temperatura > 25) {
  console.log("Está calor. Podes usar t-shirt.");
} else {
  console.log("Está frio. Leva um casaco.");
}`
          },
          {
            title: "Exemplo 3: A Nuance - Múltiplas condições com `else if`",
            description: "Podemos encadear várias verificações. O programa para na primeira que for verdadeira.",
            code: `const nota = 85;

if (nota >= 90) {
  console.log("Excelente (A)");
} else if (nota >= 80) {
  console.log("Muito Bom (B)");
} else if (nota >= 50) {
  console.log("Suficiente (C)");
} else {
  console.log("Insuficiente (F)");
}`
          }
        ]
      },
      quiz: [
        {
          question: 'O que acontece se a condição num `if` for `false` e não houver um `else`?',
          options: ['O programa dá um erro.', 'O código dentro do `if` é executado na mesma.', 'O bloco de código do `if` é simplesmente ignorado.', 'O programa pede uma nova condição.'],
          correctAnswerIndex: 2,
          explanation: 'Se a condição do `if` for falsa, o JavaScript simplesmente salta esse bloco de código e continua a execução a partir da linha seguinte.'
        },
        {
          question: 'Na estrutura `if (A) { ... } else if (B) { ... }`, quando é que a condição `B` é testada?',
          options: ['Sempre.', 'Apenas se a condição `A` for verdadeira.', 'Apenas se a condição `A` for falsa.', 'Nunca.'],
          correctAnswerIndex: 2,
          explanation: 'A cadeia `if/else if` é sequencial. A segunda condição (`B`) só é avaliada se a primeira (`A`) falhar.'
        }
      ],
      challenge: {
        description: "Cria uma variável `hora` com um valor numérico entre 0 e 23. Escreve uma estrutura `if/else if/else` que imprima 'Bom dia' se a hora for menor que 12, 'Boa tarde' se for menor que 18, e 'Boa noite' caso contrário.",
        starterCode: "const hora = 14;",
        solution: `const hora = 14;

if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}`
      }
    },
    {
      id: '3.2',
      title: 'Valores Truthy e Falsy',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Em JavaScript, num contexto booleano (como um `if`), nem todos os valores são literalmente `true` ou `false`. O JavaScript usa coerção de tipos para decidir se um valor é "verdadeiro" ou "falso".'),
        React.createElement('p', { className: 'mb-4' }, 'Existem apenas 6 valores ', React.createElement('strong', { className: 'text-red-400' }, 'falsy'), ' em JavaScript:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, '`false`'),
          React.createElement('li', null, '`0` (o número zero)'),
          React.createElement('li', null, '`""` (uma string vazia)'),
          React.createElement('li', null, '`null`'),
          React.createElement('li', null, '`undefined`'),
          React.createElement('li', null, '`NaN` (Not-a-Number)')
        ),
        React.createElement('p', { className: 'mt-4' }, 'Qualquer outro valor é considerado ', React.createElement('strong', { className: 'text-green' }, 'truthy'), '. Isto inclui qualquer número diferente de zero (até negativos), qualquer string não-vazia (até `" "`), arrays (mesmo vazios `[]`), e objetos (mesmo vazios `{}`).')
      ),
      practice: {
        examples: [
            {
                title: "Exemplo 1: O Básico - Verificação Falsy",
                description: "Como `nomeUtilizador` é uma string vazia, é um valor 'falsy', e o bloco `if` não executa, indo para o `else`.",
                code: `const nomeUtilizador = "";

if (nomeUtilizador) {
  console.log(\`Olá, \${nomeUtilizador}\`);
} else {
  console.log("Por favor, insira um nome.");
}`
            },
            {
                title: "Exemplo 2: O Caso Comum - Verificação Truthy",
                description: "Como o número de `vidas` é 3 (e não 0), é um valor 'truthy', e a mensagem 'Game Over!' não é mostrada.",
                code: `let vidas = 3;

if (vidas) {
  console.log("Ainda tens vidas!");
} else {
  console.log("Game Over!");
}`
            },
            {
                title: "Exemplo 3: A Armadilha - `[]` e `{}` são Truthy!",
                description: "Um array vazio `[]` e um objeto vazio `{}` são 'truthy'! Isto pode ser uma surpresa. O bloco `if` executa. Para verificar se um array tem itens, deves testar o seu `.length`.",
                code: `const carrinho = [];

if (carrinho) {
  console.log("Isto vai ser impresso!"); // Porque [] é truthy
}

if (carrinho.length > 0) {
  console.log("O carrinho tem itens."); // Isto não é impresso
} else {
  console.log("O carrinho está vazio.");
}`
            }
        ]
      },
      quiz: [
        {
            question: 'Qual dos seguintes valores é "truthy"?',
            options: ['`0`', '`""`', '`" "` (uma string com um espaço)', '`null`'],
            correctAnswerIndex: 2,
            explanation: 'Uma string que contém apenas espaços não está vazia, por isso é considerada "truthy".'
        },
        {
            question: 'O que o código `if ([]) { console.log("olá") }` faz?',
            options: ['Não imprime nada.', 'Dá um erro.', 'Imprime "olá".', 'Imprime `true`.'],
            correctAnswerIndex: 2,
            explanation: 'Um array vazio, apesar de vazio, é um objeto, e todos os objetos em JavaScript (exceto `null`) são "truthy".'
        }
      ],
      challenge: {
        description: "Cria uma variável `resposta` e atribui-lhe diferentes valores (ex: 0, 'Olá', `null`, `[]`). Usa uma estrutura `if/else` para imprimir 'Valor Truthy' ou 'Valor Falsy' com base no valor da variável.",
        starterCode: `const resposta = "Olá"; // Tenta mudar este valor

if (resposta) {
  // O teu código aqui
} else {
  // O teu código aqui
}`,
        solution: `const resposta = "Olá"; // Tenta mudar este valor

if (resposta) {
  console.log("Valor Truthy");
} else {
  console.log("Valor Falsy");
}`
      }
    },
    {
      id: '3.3',
      title: 'Loops: for e while',
      illustration: React.createElement(ForLoopIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Loops (ou laços de repetição) permitem-nos executar o mesmo bloco de código várias vezes sem o ter de reescrever.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`for`'), ': Ideal quando sabemos exatamente quantas vezes queremos que o loop seja executado. Tem três partes: inicialização, condição e incremento.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`while`'), ': Executa um bloco de código ENQUANTO (while) uma condição for verdadeira. A condição é testada ANTES de cada iteração. Ideal quando não sabemos o número de iterações.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Contar de 1 a 5 com `for`",
            description: "Este é o uso mais simples de um loop `for`. A variável `i` começa em 1, o loop continua enquanto `i` for menor ou igual a 5, e `i` aumenta 1 a cada iteração.",
            code: `for (let i = 1; i <= 5; i++) {
  console.log(\`Contagem: \${i}\`);
}`
          },
          {
            title: "Exemplo 2: O Caso Comum - Loop `while`",
            description: "Este loop continua a correr enquanto `contador` for menor que 5. É crucial que dentro do loop haja algo que mude a condição (neste caso, `contador++`), caso contrário teríamos um loop infinito!",
            code: `let contador = 0;

while (contador < 5) {
  console.log(\`O contador é \${contador}\`);
  contador++; // Muito importante!
}`
          },
          {
            title: "Exemplo 3: A Armadilha - O Loop Infinito",
            description: "Se a condição de um loop `while` nunca se tornar falsa, o programa ficará preso para sempre, bloqueando o navegador. O código abaixo é um exemplo do que NÃO fazer.",
            code: `let i = 0;
// Cuidado: Este código vai bloquear a tua página!
while (i < 5) {
  console.log("Isto nunca vai parar!");
  // Esquecemo-nos de incrementar o 'i'
}`
          }
        ]
      },
      quiz: [
        {
          question: 'Num loop `for (let i = 0; i < 10; i++)`, qual será o último valor de `i` a ser impresso na consola?',
          options: ['10', '9', '11', '0'],
          correctAnswerIndex: 1,
          explanation: 'O loop corre enquanto `i < 10`. A última vez que isto é verdade é quando `i` é 9. Quando `i` se torna 10, a condição `10 < 10` é falsa, e o loop termina.'
        },
        {
          question: 'Quando é que um loop `while` é geralmente preferível a um `for`?',
          options: ['Sempre', 'Nunca', 'Quando sabemos o número exato de iterações', 'Quando o número de iterações é desconhecido e depende de uma condição'],
          correctAnswerIndex: 3,
          explanation: '`while` brilha quando a continuação do loop depende de uma condição que pode mudar de forma imprevisível, como input do utilizador ou respostas de rede.'
        }
      ],
      challenge: {
        description: "Usa um loop `for` para imprimir a tabuada do 5, de 5x1 até 5x10.",
        starterCode: `// Escreve o teu loop for aqui`,
        solution: `for (let i = 1; i <= 10; i++) {
  const resultado = 5 * i;
  console.log(\`5 x \${i} = \${resultado}\`);
}`
      }
    },
    {
      id: '3.4',
      title: 'Como Percorrer um Array',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Iterar sobre os elementos de um array é uma das tarefas mais comuns. Existem várias formas de o fazer, umas mais clássicas, outras mais modernas e legíveis.'),
         React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, 'Loop `for` clássico:'), ' Funciona, mas pode ser verboso. Dá-te controlo total sobre o índice.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`forEach`:'), ' Um método de array que executa uma função (callback) para cada elemento. É mais declarativo e geralmente mais legível. Não podes usar `break` dentro dele.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`for...of`:'), ' A forma mais moderna e limpa de iterar sobre os VALORES de um iterável (como um array). É a escolha recomendada na maioria dos casos.')
        )
      ),
      practice: {
        examples: [
            {
                title: 'Exemplo 1: O Básico - Loop `for` clássico',
                description: 'A forma tradicional, usando o índice para aceder a cada elemento.',
                code: `const frutas = ["Maçã", "Banana", "Morango"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}`
            },
            {
                title: 'Exemplo 2: O Caso Comum - `.forEach`',
                description: 'Mais limpo e sem a necessidade de gerir um índice manualmente.',
                code: `const frutas = ["Maçã", "Banana", "Morango"];
frutas.forEach(function(fruta) {
  console.log(fruta);
});`
            },
            {
                title: 'Exemplo 3: A Nuance - `for...of` (Recomendado)',
                description: 'Esta sintaxe é a mais concisa e direta para aceder a cada valor do array.',
                code: `const frutas = ["Maçã", "Banana", "Morango"];
for (const fruta of frutas) {
  console.log(fruta);
}`
            }
        ]
      },
      quiz: [
        {
            question: 'Qual loop é considerado o mais moderno e legível para iterar sobre os valores de um array?',
            options: ['`for` clássico', '`while`', '`for...of`', '`forEach`'],
            correctAnswerIndex: 2,
            explanation: '`for...of` foi introduzido no ES6 e é geralmente preferido pela sua sintaxe limpa e foco direto nos valores, não nos índices.'
        },
        {
            question: 'Qual é a principal limitação do método `.forEach` em comparação com um `for` clássico?',
            options: ['É mais lento', 'Não podes parar o loop a meio com `break`', 'Não funciona com strings', 'Só funciona com números'],
            correctAnswerIndex: 1,
            explanation: 'Não podes usar `break` ou `continue` dentro de um `forEach`. Se precisares de sair do loop prematuramente, um `for` clássico ou `for...of` são melhores opções.'
        }
      ],
      challenge: {
        description: "Dado um array de números, usa o loop `for...of` para calcular a soma de todos os números e imprimi-la no final.",
        starterCode: `const numeros = [10, 20, 30, 40];
let soma = 0;

// O teu loop aqui

console.log("A soma é:", soma);`,
        solution: `const numeros = [10, 20, 30, 40];
let soma = 0;

for (const numero of numeros) {
  soma += numero;
}

console.log("A soma é:", soma); // 100`
      }
    },
    {
        id: '3.5',
        title: 'Como Percorrer um Objeto',
        theory: React.createElement(
          'div', 
          null,
          React.createElement('p', { className: 'mb-4' }, 'Iterar sobre um objeto é um pouco diferente de um array, pois não temos índices numéricos. Em vez disso, iteramos sobre as suas chaves (propriedades).'),
          React.createElement(
            'ul',
            { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
            React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, '`for...in`'), ': A forma clássica de iterar sobre as chaves de um objeto. Pode ter alguns efeitos secundários indesejados (itera sobre a cadeia de protótipos), por isso os métodos modernos são preferidos.'),
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`Object.keys(obj)`'), ': Retorna um array com todas as chaves do objeto. A partir daí, podes usar qualquer método de iteração de arrays (como `forEach` ou `for...of`) para aceder aos valores.'),
             React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`Object.entries(obj)`'), ': Retorna um array de pares `[chave, valor]`, o que pode ser ainda mais direto.')
          )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - `for...in`',
                    description: 'O loop `for...in` dá-nos cada chave do objeto. Depois, usamos a notação de parênteses retos `objeto[chave]` para obter o valor correspondente.',
                    code: `const utilizador = { nome: "Ana", idade: 30, cidade: "Porto" };
for (const chave in utilizador) {
  console.log(\`\${chave}: \${utilizador[chave]}\`);
}`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - `Object.keys()` com `forEach` (Recomendado)',
                    description: 'Esta é uma abordagem mais robusta. `Object.keys()` dá-nos um array seguro das chaves do próprio objeto, que podemos depois iterar.',
                    code: `const utilizador = { nome: "Ana", idade: 30, cidade: "Porto" };
const chaves = Object.keys(utilizador); // ["nome", "idade", "cidade"]

chaves.forEach(chave => {
  console.log(\`\${chave}: \${utilizador[chave]}\`);
});`
                },
                {
                    title: 'Exemplo 3: A Nuance - `Object.entries()`',
                    description: 'Este método moderno retorna um array de pares `[chave, valor]`, o que pode ser ainda mais direto usando desestruturação no loop.',
                    code: `const utilizador = { nome: "Ana", idade: 30, cidade: "Porto" };

for (const [chave, valor] of Object.entries(utilizador)) {
  console.log(\`\${chave}: \${valor}\`);
}`
                }
            ]
        },
        quiz: [
            {
                question: 'O que `Object.keys({a: 1, b: 2})` retorna?',
                options: ['`[1, 2]`', '`[{a: 1}, {b: 2}]`', '`["a", "b"]`', '`"a, b"`'],
                correctAnswerIndex: 2,
                explanation: '`Object.keys()` extrai as chaves (propriedades) de um objeto e retorna-as como um array de strings.'
            },
            {
                question: 'Por que motivo `for...in` pode ser problemático?',
                options: ['É muito lento', 'Só funciona com arrays', 'Pode iterar sobre propriedades herdadas (do protótipo)', 'Não funciona em navegadores modernos'],
                correctAnswerIndex: 2,
                explanation: '`for...in` não itera apenas sobre as propriedades do próprio objeto, mas também sobre as da sua cadeia de protótipos, o que pode levar a resultados inesperados se não for usado com cuidado.'
            }
        ],
        challenge: {
            description: "Dado o objeto `produto`, usa `Object.entries()` e um loop `for...of` para imprimir cada par chave-valor no formato 'chave -> valor'.",
            starterCode: `const produto = {
  id: "A42",
  nome: "Teclado Mecânico",
  preco: 99.99
};

// O teu loop aqui`,
            solution: `const produto = {
  id: "A42",
  nome: "Teclado Mecânico",
  preco: 99.99
};

for (const [chave, valor] of Object.entries(produto)) {
  console.log(\`\${chave} -> \${valor}\`);
}`
        }
    },
    {
        id: '3.6',
        title: 'Atalhos: Ternário, break e continue',
        theory: React.createElement(
          'div', 
          null,
          React.createElement('p', { className: 'mb-4' }, 'Existem algumas ferramentas para tornar o nosso controlo de fluxo mais conciso e poderoso.'),
          React.createElement(
            'ul',
            { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Operador Ternário:'), ' Um atalho para um `if/else` simples. A sintaxe é `condição ? exprSeTrue : exprSeFalse`.'),
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`break`:'), ' Sai imediatamente do loop atual (`for`, `while`, `switch`).'),
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`continue`:'), ' Pula a iteração atual do loop e avança para a próxima.')
          )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Operador Ternário',
                    description: 'Em vez de um bloco `if/else` de 4 ou 5 linhas, podemos decidir o valor de uma variável numa única linha.',
                    code: `const idade = 20;
const status = idade >= 18 ? "Adulto" : "Menor";
console.log(status); // "Adulto"`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - `break` para encontrar um item',
                    description: 'Quando encontramos o que procuramos num loop, não faz sentido continuar a iterar. `break` poupa processamento.',
                    code: `const numeros = [1, 5, 10, 15, 20];
for (const num of numeros) {
  if (num === 10) {
    console.log("Encontrado o 10!");
    break; // Sai do loop
  }
  console.log(num); // Só imprime 1 e 5
}`
                },
                {
                    title: 'Exemplo 3: A Nuance - `continue` para ignorar itens',
                    description: '`continue` é útil para saltar certas iterações sem terminar o loop por completo.',
                    code: `const numeros = [1, 2, 3, 4, 5];
// Imprimir apenas os números ímpares
for (const num of numeros) {
  if (num % 2 === 0) { // Se for par...
    continue; // ...salta para a próxima iteração
  }
  console.log(num);
}`
                }
            ]
        },
        quiz: [
            {
                question: 'O que a palavra-chave `continue` faz dentro de um loop?',
                options: ['Termina o loop.', 'Pula a iteração atual e continua na seguinte.', 'Causa um erro.', 'Reinicia o loop desde o início.'],
                correctAnswerIndex: 1,
                explanation: '`continue` é o oposto de `break`: em vez de sair, ele apenas "salta" a volta atual.'
            },
            {
              question: "Qual o resultado de `const x = 10; const res = x > 5 ? 'Maior' : 'Menor';`?",
              options: ["`10`", "`'Maior'`", "`'Menor'`", "`true`"],
              correctAnswerIndex: 1,
              explanation: "O operador ternário avalia a condição `10 > 5`, que é verdadeira, e portanto retorna o primeiro valor após o `?`."
            }
        ],
        challenge: {
            description: "Dado um array de números, cria um novo array usando um ciclo. Se o número for negativo, usa `continue` para o ignorar. Se o número for 0, usa `break` para parar o ciclo. Caso contrário, adiciona o dobro do número ao novo array.",
            starterCode: `const entrada = [2, 5, -3, 8, 0, 10];
const saida = [];

// O teu loop aqui

console.log(saida);`,
            solution: `const entrada = [2, 5, -3, 8, 0, 10];
const saida = [];

for (const num of entrada) {
  if (num < 0) {
    continue;
  }
  if (num === 0) {
    break;
  }
  saida.push(num * 2);
}

console.log(saida); // [4, 10, 16]`
        }
    },
    {
        id: '3.7',
        title: 'Desafio do Módulo: FizzBuzz',
        theory: React.createElement(
          'div', 
          null,
          React.createElement('p', { className: 'mb-4' }, 'FizzBuzz é um desafio de programação clássico, frequentemente usado em entrevistas, para testar a compreensão básica de loops e condicionais. O objetivo é simples, mas requer a combinação de vários conceitos que aprendeste neste módulo.'),
          React.createElement('p', { className: 'mb-4' }, 'Regras: Escreve um programa que imprime os números de 1 a 100. Para múltiplos de três, imprime "Fizz" em vez do número. Para múltiplos de cinco, imprime "Buzz". Para números que são múltiplos de ambos, imprime "FizzBuzz".')
        ),
        practice: {
            examples: [
                {
                    title: 'Pista 1: O Loop',
                    description: 'Vais precisar de um loop que conte de 1 a 100. Um loop `for` é perfeito para isto.',
                    code: `for (let i = 1; i <= 100; i++) {
  // A tua lógica vai aqui dentro
}`
                },
                {
                    title: 'Pista 2: O Operador Módulo (`%`)',
                    description: 'Lembra-te do operador módulo. `numero % 3 === 0` é a forma de verificar se um número é múltiplo de 3.',
                    code: `if (i % 3 === 0) { /* ... */ }`
                },
                {
                    title: 'Pista 3: A Ordem dos `if`s',
                    description: 'A ordem das tuas verificações `if/else if` é muito importante. O que deves verificar primeiro?',
                    code: `if (/* Múltiplo de 3 e 5 */) {
  // ...
} else if (/* Múltiplo de 3 */) {
  // ...
} else if (/* Múltiplo de 5 */) {
  // ...
} else {
  // ...
}`
                }
            ]
        },
        quiz: [
            {
                question: 'No desafio FizzBuzz, por que motivo a verificação `i % 3 === 0 && i % 5 === 0` deve vir primeiro?',
                options: ['Não importa a ordem.', 'Porque é a condição mais restritiva. Se verificasses `i % 3` primeiro, um número como 15 imprimiria "Fizz" e nunca chegaria a ser verificado como "FizzBuzz".', 'Porque é mais rápido.', 'Porque o JavaScript exige essa ordem.'],
                correctAnswerIndex: 1,
                explanation: 'A lógica condicional `if/else if` para na primeira condição verdadeira. Se não verificarmos o caso mais específico (múltiplo de ambos) primeiro, ele será incorretamente apanhado por uma das condições mais gerais (`i % 3` ou `i % 5`).'
            },
            {
              question: "Qual operador é essencial para resolver o FizzBuzz?",
              options: ["`**` (Exponenciação)", "`++` (Incremento)", "`%` (Módulo)", "`&&` (E Lógico)"],
              correctAnswerIndex: 2,
              explanation: "O operador Módulo (`%`) é a chave para determinar se um número é múltiplo de outro, ao verificar se o resto da divisão é zero."
            }
        ],
        challenge: {
            description: "Implementa a solução completa para o desafio FizzBuzz.",
            starterCode: `for (let i = 1; i <= 100; i++) {
  // Implementa a lógica aqui
}`,
            solution: `for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // Ou i % 15 === 0
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`
        }
    }
  ]
};