
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
          explanation: 'JavaScript lança um erro `TypeError` quando se tenta modificar uma constante, o que ajuda a apanhar bugs cedo no desenvolvimento.'
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
    }
  ]
};
