import * as React from 'react';
import type { Module } from '../../types';

const ConditionalsIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Road
  React.createElement('path', { d: "M 100 100 V 50", stroke: "#233554", strokeWidth: "10" }),
  React.createElement('path', { d: "M 100 50 C 100 30, 80 30, 60 30 L 20 30", stroke: "#233554", strokeWidth: "10", fill: "none" }),
  React.createElement('path', { d: "M 100 50 C 100 30, 120 30, 140 30 L 180 30", stroke: "#233554", strokeWidth: "10", fill: "none" }),
  
  // Traffic light
  React.createElement('rect', { x: "90", y: "0", width: "20", height: "40", fill: "#112240", stroke: "#233554", rx: "3" }),
  React.createElement('circle', { cx: "100", cy: "10", r: "5", fill: "#64ffda" }), // Green light
  React.createElement('circle', { cx: "100", cy: "30", r: "5", fill: "grey" }),
  
  // Labels
  React.createElement('text', { x: "50", y: "20", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "if (true)"),
  React.createElement('text', { x: "150", y: "20", textAnchor: "middle", fontSize: "10", fill: "#a8b2d1" }, "else")
);


export const module3: Module = {
  id: '3',
  title: 'Módulo 3: Estruturas de Controlo',
  lessons: [
    {
      id: '3.1',
      title: 'Condicionais (if, else)',
      illustration: React.createElement(ConditionalsIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Raramente um programa executa todas as linhas de código na mesma ordem. Muitas vezes, precisamos de tomar decisões. A estrutura `if`/`else` é a forma mais básica de o fazer.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia é uma bifurcação na estrada:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`if` (Se):'), ' Executa um bloco de código SE uma condição for verdadeira (`true`). "Se estiver a chover, leva o guarda-chuva."'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`else if` (Senão se):'), ' Permite testar uma nova condição se a anterior for falsa. "Senão se estiver sol, leva os óculos de sol."'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`else` (Senão):'), ' Executa um bloco de código se NENHUMA das condições anteriores for verdadeira. "Senão, não leves nada."')
        ),
        React.createElement('p', { className: 'mb-4' }, 'Para casos com muitas opções baseadas na mesma variável, a estrutura `switch` pode ser mais limpa e legível.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: `if` simples',
            description: 'Verificamos se a idade é maior ou igual a 18. Se for, a mensagem é impressa. Se não, nada acontece.',
            code: `const idade = 20;

if (idade >= 18) {
  console.log("É maior de idade, pode entrar.");
}`
          },
          {
            title: 'Exemplo 2: `if` e `else`',
            description: 'Agora temos um caminho alternativo. Se a condição do `if` for falsa, o bloco `else` é executado.',
            code: `const temperatura = 15;

if (temperatura > 25) {
  console.log("Está calor, veste uma t-shirt.");
} else {
  console.log("Está frio, leva um casaco.");
}`
          },
          {
            title: 'Exemplo 3: `if`, `else if` e `else`',
            description: 'Podemos encadear múltiplas condições para cobrir vários cenários.',
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
          },
          {
            title: 'Exemplo 4: `switch`',
            description: 'O `switch` é uma alternativa ao `if`/`else if` quando se compara uma única variável com múltiplos valores. O `break` é crucial para sair do `switch` depois de um caso ser correspondido.',
            code: `const diaDaSemana = "segunda";

switch (diaDaSemana) {
  case "segunda":
    console.log("Começou a semana!");
    break;
  case "sexta":
    console.log("Sextou!");
    break;
  default:
    console.log("É um dia normal.");
    break;
}`
          }
        ]
      },
      quiz: [
        {
          question: 'O que acontece se a condição num `if` for `false` e não existir um bloco `else`?',
          options: ['O programa dá erro.', 'O código dentro do `if` é executado na mesma.', 'Nada acontece, o programa simplesmente continua a execução a seguir ao bloco `if`.', 'O programa pede uma nova condição.'],
          correctAnswerIndex: 2,
          explanation: 'Se a condição do `if` for falsa, o seu bloco de código é simplesmente ignorado. A execução continua na linha seguinte após o bloco.'
        },
        {
          question: 'Para que serve a palavra-chave `break` dentro de um `switch`?',
          options: ['Para terminar o programa.', 'Para quebrar a variável em partes mais pequenas.', 'Para impedir que o código continue a executar os casos seguintes (fall-through) depois de encontrar uma correspondência.', 'Para indicar um erro.'],
          correctAnswerIndex: 2,
          explanation: 'Sem `break`, a execução "cairia" para o próximo `case`, executando o seu código também, o que raramente é o comportamento desejado.'
        }
      ]
    },
    {
      id: '3.2',
      title: 'Loops (for, while)',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Loops, ou ciclos, são usados para repetir uma tarefa várias vezes sem ter de escrever o mesmo código repetidamente. É uma das ferramentas mais poderosas da programação.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`for` loop:'), ' O mais comum. É ideal quando sabes exatamente quantas vezes queres repetir a tarefa. Tem três partes: inicialização (começa o contador), condição (continua enquanto for `true`), e incremento (atualiza o contador).'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`while` loop:'), ' Repete um bloco de código ENQUANTO uma condição for verdadeira. É útil quando não sabes quantas iterações serão necessárias, mas sabes a condição para parar (ex: até o utilizador escrever "sair").'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`do...while` loop:'), ' Similar ao `while`, mas garante que o bloco de código é executado PELO MENOS UMA VEZ, pois a condição só é verificada no final.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: `for` loop - Contar até 5',
            description: 'Este loop vai executar 5 vezes. A variável `i` (de "index" ou "iterator") começa em 0 e aumenta 1 a cada iteração, até ser 4. Quando `i` se torna 5, a condição `i < 5` é falsa e o loop para.',
            code: `for (let i = 0; i < 5; i++) {
  console.log("O número é:", i);
}`
          },
          {
            title: 'Exemplo 2: `while` loop',
            description: 'Este loop faz o mesmo que o anterior. Repara que temos de declarar e incrementar a variável do contador manualmente. É crucial não te esqueceres de incrementar, senão crias um loop infinito!',
            code: `let contador = 0;
while (contador < 5) {
  console.log("O contador é:", contador);
  contador++;
}`
          },
          {
            title: 'Exemplo 3: Percorrendo um Array com `for`',
            description: 'Um uso extremamente comum dos loops `for` é para percorrer todos os itens de um Array (que veremos em detalhe mais à frente).',
            code: `const frutas = ["Maçã", "Banana", "Morango"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Gosto de:", frutas[i]);
}`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é o perigo de um `while` loop se a condição nunca se tornar `false`?',
          options: ['O programa fica mais lento.', 'Cria um "loop infinito", que pode bloquear o navegador.', 'Dá um erro de sintaxe.', 'O loop executa apenas uma vez.'],
          correctAnswerIndex: 1,
          explanation: 'Um loop infinito ocorre quando a condição de paragem nunca é atingida. Isto faz com que o navegador execute o mesmo código para sempre, consumindo todos os recursos e bloqueando a página.'
        },
        {
          question: 'Quando é que um `for` loop é geralmente preferível a um `while` loop?',
          options: ['Quando a condição é complexa.', 'Quando não sabemos quantas vezes o loop deve executar.', 'Quando sabemos o número exato de iterações necessárias.', 'Nunca, `while` é sempre melhor.'],
          correctAnswerIndex: 2,
          explanation: 'O `for` loop é mais conciso e menos propenso a erros (como esquecer o incremento) quando o número de iterações é conhecido à partida.'
        }
      ]
    },
    {
      id: '3.3',
      title: 'Truthy & Falsy',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Em JavaScript, quando uma expressão é avaliada num contexto booleano (como um `if` ou um loop `while`), nem tudo precisa de ser exatamente `true` ou `false`. A linguagem tem um conceito de valores "truthy" (que se comportam como `true`) e "falsy" (que se comportam como `false`).'),
        React.createElement('p', { className: 'mb-4' }, React.createElement('strong', { className: 'text-lightest-slate' }, 'Existem apenas 6 valores "falsy" em JavaScript:')),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'false')),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '0'), ' (o número zero)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '""'), ' ou ', React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, "''"), ' (uma string vazia)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'null')),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'undefined')),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'NaN'), ' (Not-a-Number)')
        ),
        React.createElement('p', { className: 'mb-4' }, React.createElement('strong', { className: 'text-lightest-slate' }, 'TUDO O RESTO É "TRUTHY".'), ' Isto inclui o número `-1`, a string `"false"`, um array vazio `[]`, e um objeto vazio `{}`.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Verificando se uma string não está vazia',
            description: 'Em vez de escrever `if (username !== "")`, podemos simplesmente usar `if (username)`. Se a string estiver vazia, é "falsy" e o `if` não executa. Se tiver qualquer texto, é "truthy".',
            code: `const username = "Ana";

if (username) {
  console.log(\`Bem-vinda, \${username}!\`);
} else {
  console.log("Por favor, insira o seu nome.");
}`
          },
          {
            title: 'Exemplo 2: Verificando se um número é zero',
            description: 'Se uma variável que devia conter um número for 0, ela será tratada como "falsy".',
            code: `let pontos = 0;

if (pontos) {
  console.log(\`A sua pontuação é \${pontos}.\`);
} else {
  console.log("Ainda não tem pontos.");
}`
          },
          {
            title: 'Exemplo 3: A armadilha do Truthy/Falsy',
            description: 'Cuidado! Um array ou objeto vazio é "truthy"! Isto pode ser contra-intuitivo. Para verificar se um array está vazio, tens de verificar o seu comprimento (`.length`).',
            code: `const listaDeCompras = [];

if (listaDeCompras) {
  console.log("Isto vai ser executado, o que pode não ser o que queres!");
}

if (listaDeCompras.length > 0) {
  console.log("A lista tem itens.");
} else {
  console.log("A lista está vazia. (Forma correta)");
}`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual dos seguintes valores é "truthy"?',
          options: ['0', '""', 'null', '"0"'],
          correctAnswerIndex: 3,
          explanation: 'A string "0" não está na lista dos 6 valores "falsy". Por não ser uma string vazia, ela é "truthy".'
        },
        {
          question: 'Como verificarias corretamente se um utilizador existe, sabendo que o seu nome pode ser `null` ou `undefined`?',
          options: ['`if (user === true)`', '`if (user)`', '`if (user !== false)`', '`if (typeof user === "string")`'],
          correctAnswerIndex: 1,
          explanation: '`if (user)` funciona perfeitamente aqui. Se `user` for `null` ou `undefined`, ambos são "falsy" e o `else` seria executado. Se contiver um nome (string não-vazia), será "truthy".'
        }
      ]
    },
    {
      id: '3.4',
      title: 'Desafio: FizzBuzz',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'O "FizzBuzz" é um problema de programação clássico, frequentemente usado em entrevistas. É uma excelente forma de praticar loops e condicionais.'),
        React.createElement('p', { className: 'mb-4' }, 'As regras são:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Escreve um programa que imprime os números de 1 a 100.'),
          React.createElement('li', null, 'Para múltiplos de 3, imprime "Fizz" em vez do número.'),
          React.createElement('li', null, 'Para múltiplos de 5, imprime "Buzz" em vez do número.'),
          React.createElement('li', null, 'Para números que são múltiplos de ambos 3 e 5, imprime "FizzBuzz".')
        ),
        React.createElement('p', { className: 'mb-4' }, 'Dica: Vais precisar de um loop `for` para ir de 1 a 100 e de uma estrutura `if`/`else if`/`else`. O operador módulo (`%`) será o teu melhor amigo para verificar se um número é múltiplo de outro (ex: `numero % 3 === 0`).')
      ),
      practice: {
        examples: [
          {
            title: 'Passo 1: Criar o loop',
            description: 'Começa por criar um loop `for` que itera de 1 até 100 (inclusive).',
            code: `for (let i = 1; i <= 100; i++) {
  // A nossa lógica virá aqui
  console.log(i); // Por agora, apenas imprime o número
}`
          },
          {
            title: 'Passo 2: Adicionar as condições',
            description: 'Dentro do loop, adiciona a lógica condicional. É importante verificar a condição mais específica primeiro (múltiplo de 3 E 5), para não ser apanhada por uma das condições mais gerais.',
            code: `for (let i = 1; i <= 100; i++) {
  // É importante verificar este caso primeiro!
  if (i % 3 === 0 && i % 5 === 0) {
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
        ]
      },
      quiz: [
        {
          question: 'Porque é que a condição `i % 3 === 0 && i % 5 === 0` deve ser verificada primeiro?',
          options: ['Porque é mais rápida.', 'Porque se verificasses `i % 3 === 0` primeiro, um número como 15 imprimiria "Fizz" e a verificação pararia aí, nunca chegando a "FizzBuzz".', 'Não importa a ordem.', 'Porque `&&` tem prioridade sobre `||`.'],
          correctAnswerIndex: 1,
          explanation: 'A ordem das condições num `if`/`else if` é crucial. O programa executa o primeiro bloco cuja condição seja verdadeira e ignora o resto. Se a condição mais específica não vier primeiro, nunca será alcançada.'
        },
        {
          question: 'Que número o operador `%` (módulo) testa?',
          options: ['A soma', 'O quociente da divisão', 'O resto da divisão', 'A multiplicação'],
          correctAnswerIndex: 2,
          explanation: 'O operador módulo retorna o resto. Se `numero % divisor` for 0, significa que o número é perfeitamente divisível pelo divisor, ou seja, é um múltiplo.'
        }
      ]
    }
  ]
};