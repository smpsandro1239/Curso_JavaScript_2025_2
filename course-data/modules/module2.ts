import * as React from 'react';
import type { Module } from '../../types';

const VariablesIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 300 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-xl h-auto text-lightest-slate" },
  // const box
  React.createElement('g', { transform: "translate(20, 20)" },
    React.createElement('rect', { x: "0", y: "0", width: "80", height: "60", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('rect', { x: "0", y: "0", width: "80", height: "15", fill: "#233554" }),
    React.createElement('text', { x: "40", y: "10", textAnchor: "middle", fontSize: "8", fill: "#64ffda", fontWeight: "bold" }, "const"),
    React.createElement('text', { x: "40", y: "40", textAnchor: "middle", fontSize: "10", fill: "#ccd6f6" }, "'Valor Fixo'"),
    React.createElement('path', { d: "M-5 35 h 90 M-5 45 h 90", stroke: "rgb(239 68 68)", strokeWidth: "1" }) // Locked
  ),
  // let box
  React.createElement('g', { transform: "translate(110, 20)" },
    React.createElement('rect', { x: "0", y: "0", width: "80", height: "60", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('rect', { x: "0", y: "0", width: "80", height: "15", fill: "#233554" }),
    React.createElement('text', { x: "40", y: "10", textAnchor: "middle", fontSize: "8", fill: "#64ffda", fontWeight: "bold" }, "let"),
    React.createElement('text', { x: "40", y: "40", textAnchor: "middle", fontSize: "10", fill: "#ccd6f6" }, "10"),
    React.createElement('path', { d: "M 130 50 C 140 60, 160 60, 170 50", fill: "none", stroke: "#a8b2d1", strokeWidth: "1", strokeDasharray: "2 2" }),
    React.createElement('text', { x: "150", y: "70", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "11")
  ),
  // var box (old)
  React.createElement('g', { transform: "translate(200, 20)" },
    React.createElement('rect', { x: "0", y: "0", width: "80", height: "60", fill: "#112240", stroke: "#233554", rx: "5", opacity: "0.5" }),
    React.createElement('rect', { x: "0", y: "0", width: "80", height: "15", fill: "#233554", opacity: "0.5" }),
    React.createElement('text', { x: "40", y: "10", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1", fontWeight: "bold", opacity: "0.5" }, "var"),
     React.createElement('text', { x: "40", y: "40", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1", opacity: "0.5" }, "(antigo)")
  )
);

const ValueVsReferenceIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 220 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-lg h-auto text-lightest-slate" },
    // Value (Copy)
    React.createElement('g', { transform: "translate(10, 10)" },
        React.createElement('rect', { x: "0", y: "0", width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
        React.createElement('text', { x: "40", y: "15", textAnchor: "middle", fontSize: "10", fill: "#ccd6f6" }, "Por Valor"),
        React.createElement('rect', { x: "15", y: "25", width: "20", height: "30", fill: "#233554", stroke: "#8892b0"}),
        React.createElement('text', { x: "25", y: "45", textAnchor: "middle", fontSize: "12", fill: "#64ffda" }, "A"),
        React.createElement('path', { d: "M 40 40 H 50", stroke: "#64ffda", strokeWidth: "1", strokeDasharray: "2 2" }),
        React.createElement('rect', { x: "55", y: "25", width: "20", height: "30", fill: "#233554", stroke: "#8892b0" }),
        React.createElement('text', { x: "65", y: "45", textAnchor: "middle", fontSize: "12", fill: "#a8b2d1" }, "A"),
        React.createElement('text', { x: "40", y: "70", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "(Fotocópia)")
    ),
    React.createElement('line', { x1: "110", y1: "10", x2: "110", y2: "90", stroke: "#233554" }),
    // Reference (Shared)
    React.createElement('g', { transform: "translate(130, 10)" },
        React.createElement('rect', { x: "0", y: "0", width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
        React.createElement('text', { x: "40", y: "15", textAnchor: "middle", fontSize: "10", fill: "#ccd6f6" }, "Por Referência"),
        React.createElement('rect', { x: "25", y: "30", width: "30", height: "20", fill: "#233554", stroke: "#8892b0" }),
        React.createElement('text', { x: "40", y: "44", textAnchor: "middle", fontSize: "12", fill: "#64ffda" }, "A"),
        React.createElement('path', { d: "M 15 25 L 30 35", stroke: "#a8b2d1", strokeWidth: "1"}),
        React.createElement('path', { d: "M 15 65 L 30 45", stroke: "#a8b2d1", strokeWidth: "1"}),
        React.createElement('text', { x: "40", y: "70", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "(Link Partilhado)")
    )
);

export const module2: Module = {
  id: '2',
  title: 'Módulo 2: Variáveis, Tipos e Operadores',
  lessons: [
    {
      id: '2.1',
      title: 'Variáveis (var, let, const)',
      illustration: React.createElement(VariablesIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Variáveis são como caixas onde guardamos informação. Em JavaScript, temos três formas de "declarar" uma caixa: `const`, `let`, e a mais antiga, `var`.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`const` (Constante):'), ' A tua escolha principal. A "caixa" é selada. Uma vez que guardas um valor, não podes atribuir um novo valor a essa variável. Isto previne muitos erros.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`let`:'), ' Para quando sabes que o valor da variável vai precisar de mudar. É uma "caixa" que podes abrir e trocar o conteúdo.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`var`:'), ' A forma antiga. Tem um comportamento de "scope" (alcance) que pode ser confuso. A regra geral é: evita `var` e usa `const` ou `let`.')
        ),
        React.createElement('p', { className: 'mb-4' }, 'Regra de ouro: Usa `const` por defeito. Só mudes para `let` se tiveres a certeza de que a variável precisa de ser reatribuída.')
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: `const` - O Fiel Amigo",
            description: "Declaramos uma constante `nome`. Se tentares mudar o seu valor (linha comentada), o JavaScript vai dar um erro. Isto é bom, pois protege-nos de mudanças acidentais.",
            code: `const nome = "Maria";
console.log(nome); // Imprime "Maria"

// nome = "Joana"; // Isto daria um erro: TypeError: Assignment to constant variable.`
          },
          {
            title: "Exemplo 2: `let` - O Mutável",
            description: "Aqui, a variável `pontuacao` precisa de ser atualizada. Por isso, usamos `let`. É o caso de uso perfeito para esta palavra-chave.",
            code: `let pontuacao = 100;
console.log("Pontuação inicial:", pontuacao);

pontuacao = 120;
console.log("Pontuação atualizada:", pontuacao);`
          },
          {
            title: "Exemplo 3: A Armadilha do `var`",
            description: "Este exemplo mostra porque `var` é problemático. Mesmo dentro de um bloco `if`, a variável `idade` \"escapa\" para fora. Com `let` ou `const`, isto não aconteceria, resultando num código mais previsível.",
            code: `if (true) {
  var idade = 25;
}
console.log(idade); // Imprime 25. Com let/const, daria erro.`
          }
        ]
      },
      quiz: [
        {
          question: 'Quando deves usar `let` em vez de `const`?',
          options: ['Sempre, é mais flexível.', 'Quando o valor da variável nunca vai mudar.', 'Apenas quando sabes que o valor da variável precisará de ser reatribuído mais tarde.', 'Nunca, `const` é sempre melhor.'],
          correctAnswerIndex: 2,
          explanation: '`let` deve ser usado especificamente para variáveis cujo valor se espera que mude, como contadores em loops ou pontuações num jogo. Para todo o resto, `const` é mais seguro.'
        },
        {
          question: 'O que acontece se tentares reatribuir um valor a uma variável declarada com `const`?',
          options: ['O valor é atualizado silenciosamente.', 'O programa avisa, mas continua.', 'O programa pára com um erro do tipo TypeError.', 'O valor antigo e o novo são somados.'],
          correctAnswerIndex: 2,
          explanation: 'JavaScript lança um erro `TypeError` quando se tenta modificar uma constante, o que ajuda a apanhar bugs cedo no desenvolvimento. A excepção são os objetos e arrays, cujas propriedades internas podem ser alteradas.'
        }
      ]
    },
    {
      id: '2.2',
      title: 'Tipos de Dados Primitivos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'O valor que guardamos numa variável tem um "tipo". O JavaScript tem vários tipos de dados "primitivos" (básicos). Os mais importantes são:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'String:'), ' Texto. Sempre rodeado por aspas (simples ou duplas). Ex: `"Olá"`, `\'Mundo\'`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Number:'), ' Números, tanto inteiros como decimais. Ex: `10`, `3.14`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Boolean:'), ' Representa verdadeiro (`true`) ou falso (`false`). Fundamental para tomar decisões no código.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`undefined`:'), ' Uma variável que foi declarada, mas à qual ainda não foi atribuído um valor.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`null`:'), ' Representa a ausência intencional de um valor. É como uma caixa vazia de propósito.')
        ),
        React.createElement('p', { className: 'mt-4' }, 'Podes usar o operador `typeof` para verificar o tipo de uma variável.')
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: Strings e Template Literals",
            description: "Strings são usadas para texto. A forma moderna de as usar é com 'template literals' (crases ``), que permitem incorporar variáveis diretamente no texto com `${...}`.",
            code: `const nome = "Carlos";
const saudacao = \`Olá, o meu nome é \${nome}.\`;
console.log(saudacao);
console.log(typeof saudacao); // "string"`
          },
          {
            title: "Exemplo 2: Numbers e Booleans",
            description: "`Number` para qualquer tipo de número e `Boolean` para estados de verdadeiro/falso.",
            code: `const idade = 30;
const preco = 9.99;
const eAdmin = true;

console.log(typeof idade); // "number"
console.log(typeof eAdmin); // "boolean"`
          },
          {
            title: "Exemplo 3: `undefined` vs `null`",
            description: "Uma variável declarada com `let` sem valor inicial é `undefined`. `null` tem de ser atribuído explicitamente.",
            code: `let semValor;
const valorNulo = null;

console.log(semValor); // undefined
console.log(valorNulo); // null
console.log(typeof semValor); // "undefined"
console.log(typeof valorNulo); // "object" (isto é um bug histórico do JS!)`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é o tipo de dado de `true`?',
          options: ['String', 'Number', 'Boolean', 'undefined'],
          correctAnswerIndex: 2,
          explanation: '`true` e `false` são os dois únicos valores do tipo Boolean, usados para lógica condicional.'
        },
        {
          question: 'O que o operador `typeof` retorna para `null`?',
          options: ['"null"', '"undefined"', '"object"', '"none"'],
          correctAnswerIndex: 2,
          explanation: 'Devido a um erro nas primeiras versões do JavaScript que nunca foi corrigido para não quebrar código antigo, `typeof null` retorna "object". É uma peculiaridade importante de se conhecer.'
        }
      ]
    },
    {
      id: '2.3',
      title: 'Operadores',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Operadores são os símbolos que usamos para realizar operações em variáveis e valores. Podemos dividi-los em três grandes grupos:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Aritméticos:'), ' Para matemática. `+` (soma), `-` (subtração), `*` (multiplicação), `/` (divisão), `%` (módulo/resto da divisão).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Comparação:'), ' Para comparar valores. Resultam sempre num booleano (`true` ou `false`). `>` (maior que), `<` (menor que), `===` (igualdade estrita), `!==` (desigualdade estrita).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Lógicos:'), ' Para combinar expressões booleanas. `&&` (E lógico), `||` (OU lógico), `!` (NÃO lógico).')
        ),
        React.createElement('p', { className: 'mt-4' }, React.createElement('strong', { className: 'text-lightest-slate' }, 'Dica Importante:'), ' Usa sempre `===` e `!==` (igualdade estrita) em vez de `==` e `!=`. A versão estrita não tenta converter os tipos antes de comparar, o que evita muitos bugs. `5 === "5"` é `false`, mas `5 == "5"` é `true`.')
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: Operadores Aritméticos",
            description: "Operações matemáticas básicas. O operador `%` é muito útil para verificar se um número é par ou ímpar.",
            code: `const a = 10;
const b = 4;

console.log("Soma:", a + b); // 14
console.log("Resto:", a % b); // 2`
          },
          {
            title: "Exemplo 2: Operadores de Comparação (e o perigo do `==`)",
            description: "Comparações resultam em `true` ou `false`. Vê a diferença crucial entre a igualdade estrita (`===`) e a normal (`==`).",
            code: `const num = 5;
const str = "5";

console.log(num === str); // false (tipos diferentes)
console.log(num == str);  // true (tipos convertidos, perigoso!)
console.log(num > 3);   // true`
          },
          {
            title: "Exemplo 3: Operadores Lógicos",
            description: "`&&` só é `true` se ambos os lados forem `true`. `||` é `true` se pelo menos um dos lados for `true`.",
            code: `const temIdade = true;
const temBilhete = false;

console.log("Pode entrar na festa (&&):", temIdade && temBilhete); // false
console.log("Pode entrar no comboio (||):", temIdade || temBilhete); // true (assumindo que idosos não pagam)
console.log("Não tem bilhete (!):", !temBilhete); // true`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual será o resultado de `10 % 3`?',
          options: ['3', '1', '0', '0.33'],
          correctAnswerIndex: 1,
          explanation: 'O operador módulo (`%`) retorna o resto da divisão. 10 a dividir por 3 é 3, com um resto de 1.'
        },
        {
          question: 'Qual é o resultado de `"2" + 2` em JavaScript?',
          options: ['4', '"22"', 'Erro', '22'],
          correctAnswerIndex: 1,
          explanation: 'Quando o operador `+` é usado com uma string, ele realiza uma concatenação, não uma soma. Ele converte o número 2 para a string "2" e junta-as.'
        }
      ]
    },
    {
      id: '2.4',
      title: 'Valor vs. Referência',
      illustration: React.createElement(ValueVsReferenceIllustration),
      theory: React.createElement(
          'div',
          null,
          React.createElement('p', { className: 'mb-4' }, 'Este é um dos conceitos mais importantes (e que causa mais confusão) em JavaScript. A forma como o JS lida com variáveis depende do seu tipo:'),
          React.createElement(
            'ul',
            { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Tipos Primitivos (String, Number, etc.):'), ' São passados "por valor". Quando atribuis um primitivo a outra variável, estás a criar uma cópia. É como dar uma fotocópia de um documento. A cópia é independente do original.'),
            React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Tipos Complexos (Objetos, Arrays):'), ' São passados "por referência". Quando atribuis um objeto a outra variável, não estás a criar uma cópia do objeto. Em vez disso, ambas as variáveis ficam a apontar para o MESMO objeto na memória. É como partilhar um link para um Google Doc. Todos editam o mesmo documento.')
          )
      ),
      practice: {
        examples: [
            {
                title: "Exemplo 1: Passagem por Valor (Primitivos)",
                description: "Repara como a variável `original` não é afetada quando a `copia` é alterada. São independentes.",
                code: `let original = 10;
let copia = original; // 'copia' recebe uma cópia do valor 10

copia = 20;

console.log(original); // 10
console.log(copia);    // 20`
            },
            {
                title: "Exemplo 2: Passagem por Referência (Objetos)",
                description: "Vê como ao alterar a propriedade no `objetoCopia`, o `objetoOriginal` também é modificado. Isto acontece porque ambas as variáveis apontam para o mesmo objeto.",
                code: `const objetoOriginal = { nome: "Ana" };
const objetoCopia = objetoOriginal; // 'objetoCopia' aponta para o MESMO objeto

objetoCopia.nome = "Bia";

console.log(objetoOriginal.nome); // "Bia"
console.log(objetoCopia.nome);    // "Bia"`
            },
            {
                title: "Exemplo 3: A Nuance com Funções",
                description: "Este comportamento é especialmente importante em funções. Mudar um objeto dentro de uma função afeta o objeto original fora dela.",
                code: `function mudarNome(pessoa) {
  pessoa.nome = "Carlos"; // Modifica o objeto original
}

const joao = { nome: "João" };
console.log("Antes:", joao.nome); // "João"

mudarNome(joao);
console.log("Depois:", joao.nome); // "Carlos"`
            }
        ]
      },
      quiz: [
          {
              question: '`let a = [1, 2]; let b = a; b.push(3);`. Qual é o valor de `a`?',
              options: ['[1, 2]', '[1, 2, 3]', '[3]', 'Erro'],
              correctAnswerIndex: 1,
              explanation: 'Arrays são objetos (tipo complexo), por isso são passados por referência. `a` e `b` apontam para o mesmo array. Modificar `b` também modifica `a`.'
          },
          {
              question: '`let x = "olá"; let y = x; y = "mundo";`. Qual é o valor de `x`?',
              options: ['"mundo"', '"olá"', '"olámundo"', 'undefined'],
              correctAnswerIndex: 1,
              explanation: 'Strings são tipos primitivos, passados por valor. `y` recebe uma cópia de "olá". Mudar `y` não tem qualquer efeito sobre a variável `x` original.'
          }
      ]
    }
  ]
};