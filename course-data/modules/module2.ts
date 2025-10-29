import * as React from 'react';
import type { Module } from '../../types';

const VariablesIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-md h-auto text-lightest-slate" },
    // Box for let (openable)
    React.createElement('g', { transform: "translate(20, 20)"},
        React.createElement('path', { d: "M 0 15 L 0 55 C 0 58, 2 60, 5 60 L 75 60 C 78 60, 80 58, 80 55 L 80 15", fill: "#112240", stroke: "#233554", strokeWidth: "2"}),
        React.createElement('path', { d: "M 0 15 L 10 0 L 90 0 L 80 15 Z", fill: "#233554", stroke: "#233554", strokeWidth: "2"}),
        React.createElement('text', { x: "40", y: "40", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "pontos"),
        React.createElement('text', { x: "40", y: "80", textAnchor: "middle", fontSize: "10", fill: "#a8b2d1" }, "let (caixa normal)")
    ),
    // Box for const (sealed)
    React.createElement('g', { transform: "translate(110, 20)"},
        React.createElement('rect', { x: "0", y: "0", width: "80", height: "60", fill: "rgba(35, 53, 84, 0.5)", stroke: "#64ffda", rx: "5", strokeDasharray: "4 2" }),
        React.createElement('text', { x: "40", y: "35", textAnchor: "middle", fontSize: "10", fill: "#ccd6f6" }, "PI = 3.14"),
        React.createElement('text', { x: "40", y: "80", textAnchor: "middle", fontSize: "10", fill: "#a8b2d1" }, "const (caixa selada)")
    )
);

const DataTypesIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-lg h-auto text-lightest-slate" },
    // String (scroll)
    React.createElement('g', { transform: "translate(15, 30)" },
      React.createElement('path', { d: "M 0 0 C 5 -10, 25 -10, 30 0 L 30 40 C 25 50, 5 50, 0 40 Z", fill: "#112240", stroke: "#233554" }),
      React.createElement('path', { d: "M 30 0 C 35 -10, 55 -10, 60 0 L 60 40 C 55 50, 35 50, 30 40 Z", fill: "#112240", stroke: "#233554", opacity: "0.5" }),
      React.createElement('text', { x: "15", y: "25", fontSize: "8", fill: "#64ffda"}, "'JS'"),
      React.createElement('text', { x: "15", y: "55", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1"}, "String")
    ),
    // Number (abacus)
    React.createElement('g', { transform: "translate(75, 30)" },
      React.createElement('rect', { x: "0", y: "0", width: "40", height: "40", fill: "none", stroke: "#233554" }),
      React.createElement('line', { x1: "5", y1: "10", x2: "35", y2: "10", stroke: "#233554" }),
      React.createElement('line', { x1: "5", y1: "20", x2: "35", y2: "20", stroke: "#233554" }),
      React.createElement('circle', { cx: "15", cy: "10", r: "3", fill: "#64ffda" }),
      React.createElement('circle', { cx: "25", cy: "20", r: "3", fill: "#64ffda" }),
      React.createElement('text', { x: "20", y: "55", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1"}, "Number")
    ),
    // Boolean (switch)
    React.createElement('g', { transform: "translate(135, 30)" },
        React.createElement('rect', { x: "0", y: "10", width: "40", height: "20", fill: "#112240", stroke: "#233554", rx: "10" }),
        React.createElement('circle', { cx: "30", cy: "20", r: "8", fill: "#64ffda" }),
        React.createElement('text', { x: "20", y: "55", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1"}, "Boolean")
    )
);

const ValueVsRefIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-md h-auto text-lightest-slate" },
    // Value (Photocopy)
    React.createElement('g', { transform: "translate(10, 20)" },
        React.createElement('rect', { x: "5", y: "5", width: "40", height: "50", fill: "#ccd6f6" }),
        React.createElement('text', { x: "25", y: "35", textAnchor: "middle", fontSize: "12", fill: "#0a192f" }, "A"),
        React.createElement('rect', { x: "0", y: "0", width: "40", height: "50", fill: "#a8b2d1" }),
        React.createElement('text', { x: "20", y: "30", textAnchor: "middle", fontSize: "12", fill: "#0a192f" }, "A"),
        React.createElement('path', { d: "M 50 25 L 70 25", stroke: "#64ffda", strokeWidth: "1.5" }),
        React.createElement('text', { x: "45", y: "75", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Cópia (Valor)"),
    ),
    // Reference (Shared Link)
    React.createElement('g', { transform: "translate(110, 20)" },
        React.createElement('rect', { x: "20", y: "0", width: "60", height: "50", fill: "#112240", stroke: "#233554", rx: "3" }),
        React.createElement('text', { x: "50", y: "30", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "[ ... ]"),
        React.createElement('path', { d: "M 20 25 L 0 25", stroke: "#64ffda", strokeWidth: "1.5" }),
        React.createElement('path', { d: "M 80 25 L 100 25", stroke: "#64ffda", strokeWidth: "1.5" }),
        React.createElement('text', { x: "50", y: "75", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Link (Referência)"),
    )
);


export const module2: Module = {
  id: '2',
  title: 'Módulo 2: Variáveis e Tipos de Dados',
  lessons: [
    {
      id: '2.1',
      title: 'Variáveis: let e const',
      illustration: React.createElement(VariablesIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Variáveis são como caixas etiquetadas onde podemos guardar informação para usar mais tarde no nosso programa. Em JavaScript moderno, temos duas formas principais de criar estas "caixas": `let` e `const`.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`let`:'), ' É uma caixa normal. Podes abri-la e trocar o seu conteúdo sempre que precisares. Usa-se para valores que se espera que mudem, como a pontuação de um jogador ou um contador.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`const`:'), ' É uma caixa de vidro selada. Uma vez que guardas algo lá dentro, não podes trocar esse algo por outra coisa. Usa-se para valores que devem permanecer constantes, como a data de nascimento de uma pessoa ou o valor matemático de PI.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-light-slate' }, '`var`:'), ' A forma antiga de declarar variáveis. Deve ser evitada em código moderno por ter um comportamento de "scope" (escopo) que pode ser confuso e levar a bugs.')
        ),
        React.createElement('p', { className: 'mt-4 font-bold' }, 'Regra de ouro: Começa sempre com `const`. Se mais tarde perceberes que precisas de reatribuir um novo valor à variável, então muda para `let`.')
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Usar `let` para valores que mudam",
            description: "Declaramos uma variável `pontos` com `let` porque esperamos que a pontuação do jogador mude ao longo do tempo. Podemos reatribuir um novo valor sem problemas.",
            code: `let pontos = 100;
console.log("Pontuação inicial:", pontos); // Imprime 100

pontos = 150; // Reatribuição válida
console.log("Pontuação atualizada:", pontos); // Imprime 150`
          },
          {
            title: "Exemplo 2: O Caso Comum - Usar `const` para valores fixos",
            description: "O número de minutos numa hora é um valor que nunca muda. Usar `const` garante que este valor não seja alterado acidentalmente noutra parte do programa.",
            code: `const MINUTOS_NUMA_HORA = 60;
console.log("Minutos numa hora:", MINUTOS_NUMA_HORA);

// A linha seguinte, se fosse descomentada, causaria um erro.
// MINUTOS_NUMA_HORA = 61; // TypeError: Assignment to constant variable.`
          },
          {
            title: "Exemplo 3: A Armadilha - `const` com Objetos e Arrays",
            description: 'Uma nuance importante: `const` impede a reatribuição da variável, mas não impede a modificação do conteúdo de um objeto ou array. A "caixa selada" contém uma referência para o objeto, e essa referência não pode mudar, mas o objeto em si pode.',
            code: `const utilizador = { nome: "Ana" };
console.log(utilizador.nome); // "Ana"

// Isto é permitido! Não estamos a reatribuir 'utilizador'.
utilizador.nome = "Bia"; 
console.log(utilizador.nome); // "Bia"

// Isto causaria um erro.
// utilizador = { nome: "Carlos" };`
          }
        ]
      },
      quiz: [
        {
          question: 'Quando deves usar `const` para declarar uma variável?',
          options: ['Sempre que o valor da variável possa mudar.', 'Apenas para números.', 'Quando tens a certeza que o valor da variável nunca será reatribuído.', 'Nunca, `let` é sempre melhor.'],
          correctAnswerIndex: 2,
          explanation: '`const` é ideal para valores que não devem ser reatribuídos, tornando o código mais seguro e previsível.'
        },
        {
          question: 'Qual palavra-chave usarias para guardar o número de vidas restantes num jogo?',
          options: ['`let`', '`const`', '`var`', '`game`'],
          correctAnswerIndex: 0,
          explanation: 'O número de vidas de um jogador é um valor que irá mudar (diminuir) durante o jogo, por isso `let` é a escolha apropriada.'
        },
        {
          question: "O que acontece se tentares executar `const nome = 'Rui'; nome = 'Sara';`?",
          options: ["A variável `nome` passa a ser 'Sara'.", "O código ignora a segunda linha.", "O código lança um `TypeError`.", "A variável `nome` fica `undefined`."],
          correctAnswerIndex: 2,
          explanation: "O JavaScript lança um `TypeError` porque não é permitido reatribuir um novo valor a uma variável declarada com `const`."
        }
      ],
      challenge: {
        description: "Declara uma constante `NOME_PLANETA` com o valor 'Terra'. Depois, declara uma variável `populacaoAtual` com o valor 8000. Simula um aumento da população, reatribuindo um novo valor a `populacaoAtual`. Imprime ambos os valores na consola.",
        starterCode: `// Escreve o teu código aqui`,
        solution: `const NOME_PLANETA = "Terra";
let populacaoAtual = 8000; // em milhões

console.log(\`Planeta: \${NOME_PLANETA}\`);
console.log(\`População: \${populacaoAtual} milhões\`);

populacaoAtual = 8010; // A população aumentou

console.log(\`Nova população: \${populacaoAtual} milhões\`);`
      }
    },
    {
      id: '2.2',
      title: 'Tipos de Dados Primitivos',
      illustration: React.createElement(DataTypesIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'As "caixas" (variáveis) podem guardar diferentes tipos de informação. Os tipos mais básicos e fundamentais, chamados "primitivos", são os blocos de construção de todos os dados em JavaScript:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'String:'), ' Representa texto. Deve ser envolvido por aspas simples `\'\'`, duplas `""` ou crases `` ``. Ex: `"Olá mundo"`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Number:'), ' Representa números, tanto inteiros como decimais. Ex: `42`, `3.14`. Não há distinção entre os dois.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Boolean:'), ' Representa um de dois valores: `true` (verdadeiro) ou `false` (falso). É a base da lógica e da tomada de decisões.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Undefined:'), ' Uma variável que foi declarada mas à qual ainda não foi atribuído um valor. É o "estado inicial" de uma caixa vazia.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Null:'), ' Representa la ausência intencional de um valor. É diferente de `undefined` porque é um valor que tu, programador, atribuis para dizer "esta caixa está vazia de propósito".')
        ),
        React.createElement('p', { className: 'mt-4' }, 'Podes usar o operador `typeof` para descobrir o tipo de uma variável, o que é muito útil para depuração.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Declarar diferentes tipos primitivos',
            description: 'Aqui declaramos uma variável para cada tipo primitivo e verificamos o seu tipo com `typeof`.',
            code: `const nome = "Sandro";     // String
const idade = 30;          // Number
const eEstudante = true;   // Boolean
let carro;                 // Undefined (não foi atribuído valor)
const telemovel = null;    // Null (valor intencionalmente vazio)

console.log(\`'nome' é do tipo: \${typeof nome}\`);
console.log(\`'idade' é do tipo: \${typeof idade}\`);
console.log(\`'eEstudante' é do tipo: \${typeof eEstudante}\`);
console.log(\`'carro' é do tipo: \${typeof carro}\`);
console.log(\`'telemovel' é do tipo: \${typeof telemovel}\`); // Peculiaridade: object`
          },
          {
            title: "Exemplo 2: O Caso Comum - Usar tipos em conjunto",
            description: "Numa aplicação real, os tipos de dados são usados em conjunto para descrever algo. Aqui, usamos diferentes tipos para guardar informação sobre um produto.",
            code: `const nomeProduto = "Monitor 4K";
const preco = 399.99;
const emStock = true;
let desconto = null; // Ainda não há desconto aplicado

console.log(\`Produto: \${nomeProduto}\`);
console.log(\`Preço: \${preco}€\`);
console.log(\`Disponível: \${emStock}\`);`
          },
          {
            title: "Exemplo 3: A Armadilha - `null` vs. `undefined`",
            description: "`undefined` significa que a variável existe, mas nunca lhe foi dado um valor. `null` é um valor que tu atribuis para indicar uma ausência de valor. Pensa em `undefined` como uma pergunta que ainda não foi respondida, e `null` como a resposta 'Não há resposta'.",
            code: `let proximaAula; // Não sabemos qual é a próxima aula ainda
console.log(proximaAula); // undefined

let vencedor = null; // A corrida terminou, mas não houve vencedor
console.log(vencedor); // null`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é o tipo de dado de `15.5`?',
          options: ['String', 'Number', 'Float', 'Boolean'],
          correctAnswerIndex: 1,
          explanation: 'Em JavaScript, tanto números inteiros como decimais são do tipo `Number`.'
        },
        {
            question: 'Uma variável declarada com `let nome;` terá que valor inicial?',
            options: ['`null`', '`0`', '`""`', '`undefined`'],
            correctAnswerIndex: 3,
            explanation: 'Se uma variável for declarada mas não inicializada, o JavaScript atribui-lhe automaticamente o valor `undefined`.'
        },
        {
          question: 'Qual será o resultado de `typeof "5"`?',
          options: ['"number"', '"string"', '"boolean"', '"undefined"'],
          correctAnswerIndex: 1,
          explanation: 'Como o "5" está entre aspas, é tratado como texto, ou seja, uma String.'
        }
      ],
      challenge: {
          description: "Cria 3 variáveis: `titulo` (string), `duracao` (number), e `assistido` (boolean). Atribui-lhes valores que descrevam um filme à tua escolha e imprime cada uma na consola.",
          starterCode: `// Descreve aqui o teu filme favorito`,
          solution: `const titulo = "Interstellar";
const duracao = 169; // em minutos
const assistido = true;

console.log(\`Filme: \${titulo}\`);
console.log(\`Duração: \${duracao} minutos\`);
console.log(\`Já assisti?: \${assistido}\`);`
      }
    },
    {
      id: '2.3',
      title: 'Trabalhar com Strings e Números',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, React.createElement('strong', { className: 'text-lightest-slate' }, 'Strings:'), ' Strings são mais do que simples texto. Elas vêm com "super-poderes" (métodos) e propriedades. Uma forma moderna de trabalhar com strings é usar ', React.createElement('strong', { className: 'text-green' }, 'Template Literals'), ' (crases `` ``), que permitem embutir variáveis diretamente no texto.'),
        React.createElement('p', { className: 'mb-4' }, React.createElement('strong', { className: 'text-lightest-slate' }, 'Números:'), ' Com números, podemos fazer todo o tipo de operações matemáticas. Os operadores básicos são:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, '`+` (adição), `-` (subtração), `*` (multiplicação), `/` (divisão).'),
          React.createElement('li', null, '`%` (módulo): Retorna o resto de uma divisão. Muito útil para saber se um número é par ou ímpar.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: O Básico - Template Literals',
            description: 'Usamos `${...}` para inserir variáveis diretamente numa string com crases. É muito mais legível do que a concatenação com `+`.',
            code: `const nome = "Carlos";
const idade = 42;

// Forma antiga (concatenação)
const fraseAntiga = "Olá, o meu nome é " + nome + " e tenho " + idade + " anos.";

// Forma moderna (template literal)
const fraseModerna = \`Olá, o meu nome é \${nome} e tenho \${idade} anos.\`;

console.log(fraseModerna);`
          },
          {
            title: 'Exemplo 2: O Caso Comum - Métodos de Strings',
            description: 'Strings têm propriedades e métodos úteis. `.length` dá o tamanho, `.toUpperCase()` converte para maiúsculas, etc. Estes métodos não alteram a string original, eles retornam uma nova.',
            code: `const mensagem = "JavaScript é incrível";

console.log(mensagem.length);        // 21
console.log(mensagem.toUpperCase()); // "JAVASCRIPT É INCRÍVEL"
console.log(mensagem.startsWith("Java")); // true
console.log(mensagem); // "JavaScript é incrível" (a original não mudou)`
          },
          {
            title: 'Exemplo 3: A Armadilha - Conversão de Tipos com `+`',
            description: "O operador `+` é especial. Se o usares entre um número e uma string, ele converte o número para string e concatena os dois. Os outros operadores matemáticos tentam converter a string para número.",
            code: `console.log("5" + 3); // "53" (concatenação)
console.log("5" - 3); // 2 (subtração)
console.log("5" * 3); // 15 (multiplicação)`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é a principal vantagem dos Template Literals (`` ``)?',
          options: ['São mais rápidos.', 'Permitem inserir variáveis e quebras de linha de forma mais fácil.', 'Só funcionam com números.', 'Mudam a cor do texto.'],
          correctAnswerIndex: 1,
          explanation: 'Template literals simplificam a interpolação de variáveis e a criação de strings com múltiplas linhas, tornando o código mais limpo.'
        },
        {
          question: 'O que o operador `%` (módulo) faz? `10 % 3` seria quanto?',
          options: ['3.33', '3', '1', '0'],
          correctAnswerIndex: 2,
          explanation: '10 dividido por 3 é 3, com resto 1. O operador módulo retorna esse resto.'
        },
        {
          question: 'Qual será o resultado da expressão `"10" + 5`?',
          options: ['15', '105', '"105"', '"15"'],
          correctAnswerIndex: 2,
          explanation: 'Quando o operador `+` é usado com uma string, ele realiza a concatenação, não a adição. O número 5 é convertido para a string "5", resultando em "10" + "5" = "105".'
        }
      ],
       challenge: {
        description: "Cria uma variável `const` com o teu nome e uma variável `let` com a tua idade. Depois, usa um template literal para criar uma frase que diga 'O meu nome é [NOME] e eu tenho [IDADE] anos.' e imprime-a na consola.",
        starterCode: `// Escreve o teu código aqui`,
        solution: `const meuNome = "Alex";
let minhaIdade = 28;

const frase = \`O meu nome é \${meuNome} e eu tenho \${minhaIdade} anos.\`;
console.log(frase);`
      }
    },
    {
        id: '2.4',
        title: 'Operadores Aritméticos e de Atribuição',
        theory: React.createElement('div', null,
            React.createElement('p', {className: 'mb-4'}, 'Já conheces os operadores aritméticos básicos. Vamos explorar mais alguns e também os de atribuição, que são atalhos úteis.'),
            React.createElement('ul', {className: 'list-disc list-inside mb-4 pl-4 space-y-2'},
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, 'Aritméticos:'), ' `+`, `-`, `*`, `/`, `%`. Adicionamos o `**` (exponenciação, ex: `2 ** 3` é 8).'),
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, 'Incremento/Decremento:'), ' `++` (adiciona 1) e `--` (subtrai 1).'),
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, 'Atribuição:'), ' O `=` é o básico. Os atalhos combinam uma operação aritmética com a atribuição: `+=`, `-=`, `*=`, `/=`.')
            )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Ordem de Operações',
                    description: 'JavaScript segue a ordem matemática padrão (PEMDAS/BODMAS). Parênteses primeiro, depois exponenciação, multiplicação/divisão, e por fim adição/subtração.',
                    code: `const resultado = 5 + 2 * 3; // 2 * 3 = 6, depois 5 + 6 = 11
console.log(resultado); // 11

const resultado2 = (5 + 2) * 3; // 5 + 2 = 7, depois 7 * 3 = 21
console.log(resultado2); // 21`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - Atalhos de Atribuição',
                    description: 'Estes atalhos são extremamente comuns para atualizar contadores ou totais.',
                    code: `let pontuacao = 100;

pontuacao += 50; // Equivalente a: pontuacao = pontuacao + 50;
console.log(pontuacao); // 150

pontuacao -= 20; // Equivalente a: pontuacao = pontuacao - 20;
console.log(pontuacao); // 130`
                },
                {
                    title: 'Exemplo 3: A Armadilha - `++` antes ou depois',
                    description: 'A posição do `++` (ou `--`) importa. Se vier antes (`++x`), ele incrementa e DEPOIS retorna o novo valor. Se vier depois (`x++`), ele retorna o valor original e DEPOIS incrementa.',
                    code: `let a = 5;
const b = a++; // b recebe 5, depois 'a' torna-se 6
console.log(\`a: \${a}, b: \${b}\`); // a: 6, b: 5

let c = 5;
const d = ++c; // 'c' torna-se 6, depois d recebe 6
console.log(\`c: \${c}, d: \${d}\`); // c: 6, d: 6`
                }
            ]
        },
        quiz: [
            {
                question: 'Qual é o resultado de `let x = 10; x *= 2;`?',
                options: ['12', '8', '20', '102'],
                correctAnswerIndex: 2,
                explanation: '`x *= 2` é um atalho para `x = x * 2`. Portanto, `10 * 2` é 20.'
            },
            {
                question: 'O que a expressão `4 ** 2` calcula?',
                options: ['4 vezes 2 (8)', 'A raiz quadrada de 4 (2)', '4 elevado à potência de 2 (16)', '4 dividido por 2 (2)'],
                correctAnswerIndex: 2,
                explanation: 'O operador `**` é o operador de exponenciação, introduzido no ES7.'
            }
        ],
        challenge: {
            description: 'Cria uma variável `totalCarrinho` initializada em 0. Adiciona o preço de três produtos (ex: 15, 50, e 8.50) usando o operador `+=`. No final, imprime o total.',
            starterCode: 'let totalCarrinho = 0;',
            solution: `let totalCarrinho = 0;
totalCarrinho += 15;
totalCarrinho += 50;
totalCarrinho += 8.50;
console.log(\`Total: \${totalCarrinho}€\`);`
        }
    },
    {
        id: '2.5',
        title: 'Operadores de Comparação e Lógicos',
        theory: React.createElement('div', null,
            React.createElement('p', {className: 'mb-4'}, 'Estes operadores são a base da tomada de decisões. Eles sempre resultam num valor booleano (`true` ou `false`).'),
            React.createElement('ul', {className: 'list-disc list-inside mb-4 pl-4 space-y-2'},
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, 'Comparação:'), ' `>`, `<`, `>=`, `<=`. Comparamos valores.'),
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, 'Igualdade:'), ' `===` (igualdade estrita) e `!==` (desigualdade estrita). Verificam se o valor E o tipo são iguais. (Evita `==` e `!=`!).'),
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, 'Lógicos:'), ' Combinam expressões booleanas: `&&` (E lógico), `||` (OU lógico), `!` (NÃO lógico).')
            )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Comparações',
                    description: 'Aqui vemos os operadores de comparação e igualdade em ação.',
                    code: `const idade = 25;
const nome = "Ana";

console.log(idade > 18);     // true
console.log(idade === 25);   // true
console.log(nome === "ana"); // false (sensível a maiúsculas)
console.log(10 !== 20);      // true`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - Combinar condições com `&&`',
                    description: 'Usamos o "E lógico" (`&&`) para criar verificações mais complexas. Para uma pessoa poder conduzir, tem de ter mais de 18 E ter carta.',
                    code: `const idade = 22;
const temCarta = true;

if (idade >= 18 && temCarta) {
  console.log("Pode conduzir.");
}`
                },
                {
                    title: 'Exemplo 3: A Nuance - Combinar condições com `||` e `!`',
                    description: 'O "OU lógico" (`||`) é útil para situações onde basta uma condição ser verdadeira. O "NÃO lógico" (`!`) inverte um booleano.',
                    code: `const fimDeSemana = true;
const feriado = false;

// Para descansar, basta ser fim de semana OU feriado
if (fimDeSemana || feriado) {
  console.log("Dia de descanso!");
}

const logado = false;
if (!logado) {
  console.log("Por favor, faça login."); // Executa porque !false é true
}`
                }
            ]
        },
        quiz: [
            {
                question: 'Qual é o resultado de `true && false`?',
                options: ['`true`', '`false`', '`undefined`', '`TypeError`'],
                correctAnswerIndex: 1,
                explanation: 'O operador `&&` (E) só retorna `true` se AMBAS as condições forem verdadeiras.'
            },
             {
                question: 'Qual é o resultado de `!false || (5 > 10)`?',
                options: ['`true`', '`false`'],
                correctAnswerIndex: 0,
                explanation: '`!false` é `true`. `(5 > 10)` é `false`. A expressão torna-se `true || false`. O operador `||` (OU) retorna `true` se PELO MENOS UMA das condições for verdadeira.'
            }
        ],
        challenge: {
            description: "Escreve uma expressão que verifique se a idade de uma pessoa está entre 18 e 65 (inclusive). Testa com diferentes idades.",
            starterCode: `const idade = 30; // Tenta mudar este valor
const estaNoIntervalo = /* A tua expressão aqui */;
console.log(estaNoIntervalo);`,
            solution: 'const estaNoIntervalo = idade >= 18 && idade <= 65;'
        }
    },
    {
        id: '2.6',
        title: 'Aprofundamento: Hoisting',
        theory: React.createElement('div', null,
            React.createElement('p', {className: 'mb-4'}, 'Hoisting (içamento) é um comportamento do JavaScript onde as declarações de variáveis e funções são "movidas" para o topo do seu escopo antes da execução do código. No entanto, o comportamento difere entre `var`, `let`/`const` e funções.'),
            React.createElement('ul', {className: 'list-disc list-inside mb-4 pl-4 space-y-2'},
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, '`var`:'), ' A declaração (`var x`) é içada, mas a sua inicialização (`= 10`) não. Isto significa que a variável existe desde o início do escopo, mas com o valor `undefined` até à linha onde foi declarada.'),
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, '`let` e `const`:'), ' As suas declarações também são içadas, mas elas não são inicializadas com `undefined`. Elas entram numa "Temporal Dead Zone" (TDZ) desde o início do bloco até à sua declaração. Tentar aceder-lhes na TDZ resulta num `ReferenceError`.'),
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, 'Declarações de Funções:'), ' São totalmente içadas. Podes chamar uma função antes de a teres declarado no código.')
            ),
            React.createElement('p', {className: 'mt-4'}, 'Este é o principal motivo para preferir `let`/`const` a `var`: o seu comportamento é mais previsível e ajuda a evitar bugs.')
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Hoisting com `var`',
                    description: 'Mesmo que a declaração venha depois, a variável `nome` já existe no escopo da função com o valor `undefined`.',
                    code: `function saudar() {
  console.log(nome); // undefined
  var nome = "Ana";
  console.log(nome); // "Ana"
}
saudar();`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - A Temporal Dead Zone (TDZ) com `let`',
                    description: 'Descomentar a primeira linha causaria um erro porque estamos a tentar aceder a `cidade` antes da sua declaração.',
                    code: `function visitar() {
  // console.log(cidade); // ReferenceError: Cannot access 'cidade' before initialization
  let cidade = "Porto";
  console.log(cidade); // "Porto"
}
visitar();`
                },
                {
                    title: 'Exemplo 3: A Nuance - Hoisting de Funções',
                    description: 'A declaração da função `cantar()` é içada na totalidade, por isso podemos chamá-la antes de a declararmos.',
                    code: `cantar(); // Funciona!

function cantar() {
  console.log("La la la");
}`
                }
            ]
        },
        quiz: [
            {
                question: 'O que será impresso na consola pelo código `console.log(x); var x = 5;`?',
                options: ['`5`', '`undefined`', '`ReferenceError`', '`null`'],
                correctAnswerIndex: 1,
                explanation: 'Com `var`, a declaração (`var x`) é içada, mas a atribuição (`= 5`) não. Por isso, quando o `console.log` é executado, `x` existe mas ainda não tem valor.'
            },
            {
                question: 'O que acontece se tentares aceder a uma variável `let` antes da sua declaração?',
                options: ['Recebes `undefined`.', 'O código funciona normalmente.', 'Recebes um `ReferenceError` por causa da TDZ.', 'Recebes `null`.'],
                correctAnswerIndex: 2,
                explanation: '`let` e `const` estão na Temporal Dead Zone (TDZ) até à sua linha de declaração, o que previne o uso de variáveis antes de serem declaradas, ao contrário de `var`.'
            }
        ],
        challenge: {
            description: "Prevê o output do seguinte código sem o executares. Qual será a ordem dos logs e o que cada um irá imprimir?",
            starterCode: `console.log("Primeiro log:", a);
// console.log("Log comentado:", b);

var a = 1;
let b = 2;

minhaFuncao();

function minhaFuncao() {
  console.log("Segundo log:", a);
}

console.log("Terceiro log:", b);`,
            solution: `// Output esperado:
// Primeiro log: undefined  (var 'a' é içada com undefined)
// (O segundo log daria um ReferenceError por causa da TDZ de 'b')
// Segundo log: 1          (a função tem acesso à variável global 'a', que já tem valor 1)
// Terceiro log: 2         ('b' já foi declarada e inicializada)`
        }
    },
    {
        id: '2.7',
        title: 'Aprofundamento: Valor vs. Referência',
        illustration: React.createElement(ValueVsRefIllustration),
        theory: React.createElement('div', null,
            React.createElement('p', {className: 'mb-4'}, 'Esta é uma das distinções mais importantes em JavaScript e a fonte de muitos bugs para iniciantes. A forma como o JavaScript atribui e passa variáveis difere consoante o tipo de dado.'),
            React.createElement('ul', {className: 'list-disc list-inside mb-4 pl-4 space-y-2'},
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, 'Passagem por Valor (Tipos Primitivos):'), ' Quando atribuis ou passas um tipo primitivo (`String`, `Number`, `Boolean`, etc.), o JavaScript cria uma CÓPIA do valor. A analogia é dar uma fotocópia de um documento. Se alterares a cópia, o original permanece intacto.'),
                React.createElement('li', null, React.createElement('strong', {className: 'text-green'}, 'Passagem por Referência (Tipos Complexos):'), ' Quando atribuis ou passas um tipo complexo (`Object`, `Array`), o JavaScript NÃO cria uma cópia do objeto. Em vez disso, ele cria uma "referência" (um ponteiro ou um link) que aponta para o MESMO objeto na memória. A analogia é partilhar o link de um Google Doc. Todos os que têm o link estão a editar o mesmo documento.')
            )
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - Passagem por Valor',
                    description: 'A variável `b` recebe uma cópia do valor de `a`. Mudar `b` não afeta `a`.',
                    code: `let a = 10;
let b = a; // 'b' recebe uma cópia do valor 10

b = 20;

console.log(a); // 10 (o original não mudou)
console.log(b); // 20`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - Passagem por Referência',
                    description: 'A variável `obj2` recebe uma referência para o mesmo objeto que `obj1`. Alterar a propriedade através de `obj2` afeta o que vemos através de `obj1`, porque ambos "apontam" para o mesmo sítio.',
                    code: `const obj1 = { nome: "Ana" };
const obj2 = obj1; // 'obj2' aponta para o MESMO objeto

obj2.nome = "Bia";

console.log(obj1.nome); // "Bia" (o original MUDOU!)
console.log(obj2.nome); // "Bia"`
                },
                {
                    title: 'Exemplo 3: A Nuance - Funções',
                    description: 'O mesmo comportamento aplica-se quando passamos variáveis para funções. Alterar um objeto dentro da função irá alterar o objeto original fora dela.',
                    code: `function mudarNome(utilizador) {
  utilizador.nome = "Carlos";
}

const pessoa = { nome: "David" };
console.log("Antes:", pessoa.nome); // "David"

mudarNome(pessoa);

console.log("Depois:", pessoa.nome); // "Carlos"`
                }
            ]
        },
        quiz: [
            {
                question: 'O que será impresso no final do código: `const arr1 = [1, 2]; const arr2 = arr1; arr2.push(3); console.log(arr1);`?',
                options: ['`[1, 2]`', '`[1, 2, 3]`', '`[3]`', '`undefined`'],
                correctAnswerIndex: 1,
                explanation: 'Arrays são objetos, logo são passados por referência. `arr1` e `arr2` apontam para o mesmo array na memória. Alterar um, altera ambos.'
            },
            {
                question: 'Qual dos seguintes tipos é passado por valor?',
                options: ['`Array`', '`Object`', '`Boolean`', '`Function`'],
                correctAnswerIndex: 2,
                explanation: '`Boolean` é um tipo de dado primitivo, e todos os primitivos (`String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`) são passados por valor.'
            }
        ],
        challenge: {
            description: "Cria um objeto `jogo` com uma propriedade `pontuacao`. Cria uma segunda variável `jogoCopia` e atribui-lhe `jogo`. Altera a pontuação através de `jogoCopia`. O que acontece à pontuação em `jogo`? Imprime ambos na consola para ver.",
            starterCode: `const jogo = { pontuacao: 1000 };`,
            solution: `const jogo = { pontuacao: 1000 };
const jogoCopia = jogo;

jogoCopia.pontuacao = 1500;

// Ambos vão mostrar a pontuação de 1500, porque apontam para o mesmo objeto.
console.log("Original:", jogo);
console.log("Cópia:", jogoCopia);`
        }
    },
    {
        id: '2.8',
        title: 'Aprofundamento: Coerção de Tipos (== vs ===)',
        theory: React.createElement('div', null,
            React.createElement('p', {className: 'mb-4'}, 'Coerção (ou conversão) de tipos é o processo pelo qual o JavaScript converte automaticamente um valor de um tipo para outro. Isto acontece frequentemente com o operador de igualdade lassa `==`.'),
            React.createElement('p', {className: 'mb-4'}, '`==` (Igualdade Lassa): Tenta converter os operandos para um tipo comum ANTES de fazer a comparação. Isto leva a resultados inesperados, como `5 == "5"` ser `true`.'),
            React.createElement('p', {className: 'mb-4'}, '`===` (Igualdade Estrita): NÃO faz conversão de tipos. Se os tipos forem diferentes, retorna imediatamente `false`. Se os tipos forem iguais, compara os valores. Esta é a forma recomendada e mais segura de comparar valores.'),
            React.createElement('p', {className: 'mt-4 font-bold'}, 'Regra de ouro: Usa sempre `===` e `!==`. Evita `==` e `!=` para prevenir bugs subtis e difíceis de encontrar.')
        ),
        practice: {
            examples: [
                {
                    title: 'Exemplo 1: O Básico - A diferença em ação',
                    description: '`==` converte a string "5" para um número antes de comparar. `===` vê que os tipos são diferentes (number vs string) e retorna `false`.',
                    code: `console.log(5 == "5");  // true (mau!)
console.log(5 === "5"); // false (bom!)`
                },
                {
                    title: 'Exemplo 2: O Caso Comum - `null` e `undefined`',
                    description: 'Uma das "exceções" onde `==` pode ser útil é para verificar se uma variável é `null` ou `undefined` de uma só vez. No entanto, ser explícito é muitas vezes mais claro.',
                    code: `let x; // undefined

console.log(x == null);  // true
console.log(x === null); // false`
                },
                {
                    title: 'Exemplo 3: A Armadilha - Casos estranhos de coerção',
                    description: 'A coerção de tipos pode levar a resultados muito estranhos que são famosos em JavaScript.',
                    code: `console.log(true == 1);       // true
console.log(false == 0);      // true
console.log('' == false);     // true
console.log([] == false);     // true (um array vazio é "truthy", mas na coerção \`==\` comporta-se de forma estranha)`
                }
            ]
        },
        quiz: [
            {
                question: 'Qual é o resultado de `0 === false`?',
                options: ['`true`', '`false`', '`TypeError`'],
                correctAnswerIndex: 1,
                explanation: 'Com a igualdade estrita (`===`), o JavaScript compara primeiro os tipos. Como `Number` é diferente de `Boolean`, o resultado é `false` sem sequer olhar para os valores.'
            },
            {
                question: 'Para garantir que estás a comparar o valor E o tipo, qual operador deves usar?',
                options: ['`=`', '`==`', '`===`', '`~=`'],
                correctAnswerIndex: 2,
                explanation: 'A igualdade estrita (`===`) é a escolha segura e recomendada para comparações em JavaScript, evitando surpresas com a coerção de tipos.'
            }
        ],
        challenge: {
            description: "Prevê o resultado de cada uma das seguintes comparações e depois testa-as na consola. Tenta entender o porquê de cada resultado.",
            starterCode: `console.log("1." , "0" == 0);
console.log("2." , "0" === 0);
console.log("3." , [] == ![]);
console.log("4." , 1 !== true);`,
            solution: `// 1. true  ("0" é coagido para o número 0)
// 2. false (string vs number)
// 3. true  ([] é truthy, ![] é false. [] == false é uma coerção estranha que dá true)
// 4. false (1 é coagido para true, e true não é diferente de true)`
        }
    }
  ]
};