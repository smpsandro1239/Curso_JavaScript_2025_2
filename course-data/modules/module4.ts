
import * as React from 'react';
import type { Module } from '../../types';

const FunctionsIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Inputs
  React.createElement('text', { x: "10", y: "30", fontSize: "10", fill: "#a8b2d1" }, "Input A"),
  React.createElement('rect', { x: "10", y: "35", width: "10", height: "10", fill: "#a8b2d1" }),
  React.createElement('path', { d: "M 20 40 H 40", stroke: "#a8b2d1", strokeWidth: "1" }),
  
  React.createElement('text', { x: "10", y: "60", fontSize: "10", fill: "#a8b2d1" }, "Input B"),
  React.createElement('rect', { x: "10", y: "65", width: "10", height: "10", fill: "#a8b2d1" }),
  React.createElement('path', { d: "M 20 70 H 40", stroke: "#a8b2d1", strokeWidth: "1" }),

  // Function box
  React.createElement('rect', { x: "40", y: "20", width: "120", height: "60", fill: "#112240", stroke: "#233554", rx: "5" }),
  React.createElement('text', { x: "100", y: "15", textAnchor: "middle", fontSize: "10", fill: "#64ffda", fontWeight: "bold" }, "Função (Receita)"),
  React.createElement('path', { d: "M 60 40 L 70 50 L 90 30 L 100 60 L 110 45", stroke: "#64ffda", strokeWidth: "2", fill: "none" }),

  // Output
  React.createElement('path', { d: "M 160 50 H 180", stroke: "#64ffda", strokeWidth: "2" }),
  React.createElement('rect', { x: "180", y: "45", width: "10", height: "10", fill: "#64ffda" }),
  React.createElement('text', { x: "185", y: "40", fontSize: "10", fill: "#64ffda", textAnchor: "middle" }, "Output")
);

export const module4: Module = {
  id: '4',
  title: 'Módulo 4: Funções',
  lessons: [
    {
      id: '4.1',
      title: 'Declarar e Chamar Funções',
      illustration: React.createElement(FunctionsIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Funções são um dos blocos de construção mais fundamentais em JavaScript. Uma função é um bloco de código reutilizável que realiza uma tarefa específica.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia perfeita é uma receita de cozinha. Tu defines a receita (a função) uma vez, com todos os passos. Depois, sempre que quiseres fazer o prato, tu "chamas" a receita, em vez de reescrever todos os passos.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Declaração:'), ' É o ato de criar a função, usando a palavra-chave `function`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Chamada (ou Invocação):'), ' É o ato de executar o código dentro da função. Fazes isto usando o nome da função seguido de parêntesis `()`.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Declarar e Chamar',
            description: 'Primeiro, declaramos uma função chamada `dizerOla`. Ela não faz nada até ser chamada. Depois, chamamo-la duas vezes.',
            code: `// 1. Declarar a função
function dizerOla() {
  console.log("Olá, bem-vindo ao JavaScript!");
}

// 2. Chamar a função
dizerOla();
dizerOla();`
          },
          {
            title: 'Exemplo 2: Expressão de Função',
            description: 'Também podes atribuir uma função a uma variável. Isto é chamado de "expressão de função". O resultado é o mesmo, mas a sintaxe é ligeiramente diferente. A chamada é feita através do nome da variável.',
            code: `const mostrarMensagem = function() {
  console.log("Esta é uma mensagem de uma expressão de função.");
};

mostrarMensagem();`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é a palavra-chave usada para declarar uma função da forma mais tradicional?',
          options: ['`func`', '`def`', '`function`', '`procedure`'],
          correctAnswerIndex: 2,
          explanation: 'A palavra-chave `function` é usada para iniciar uma declaração de função em JavaScript.'
        },
        {
          question: 'Como se chama o código `minhaFuncao()`?',
          options: ['Declaração de função', 'Atribuição de função', 'Chamada de função', 'Definição de função'],
          correctAnswerIndex: 2,
          explanation: 'Usar o nome da função seguido de parêntesis `()` é a forma de a invocar ou chamar, ou seja, de executar o seu código.'
        }
      ]
    },
    {
      id: '4.2',
      title: 'Parâmetros e Retorno',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Funções tornam-se verdadeiramente poderosas quando podem aceitar dados (parâmetros) e devolver um resultado (retorno).'),
        React.createElement('p', { className: 'mb-4' }, 'Continuando a analogia da receita:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Parâmetros (ou Argumentos):'), ' São os ingredientes que a tua receita precisa. São variáveis listadas na definição da função.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`return` (Retorno):'), ' É o prato final. A palavra-chave `return` pára a execução da função e devolve um valor para onde a função foi chamada.')
        ),
        React.createElement('p', { className: 'mt-4' }, 'Uma função que não tem uma declaração `return` devolve `undefined` por defeito.')
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Função com Parâmetros',
            description: 'Esta função aceita um parâmetro `nome`. O valor passado quando a função é chamada ("Ana" ou "Pedro") é atribuído a `nome` dentro da função.',
            code: `function cumprimentar(nome) {
  console.log(\`Olá, \${nome}!\`);
}

cumprimentar("Ana");
cumprimentar("Pedro");`
          },
          {
            title: 'Exemplo 2: Função com Retorno',
            description: 'A função `somar` aceita dois números, calcula a soma, e `return`a o resultado. Podemos guardar esse resultado numa variável.',
            code: `function somar(a, b) {
  return a + b;
}

const resultado = somar(5, 3);
console.log("O resultado é:", resultado); // 8`
          },
          {
            title: 'Exemplo 3: Juntando Tudo',
            description: 'Uma função pode ter parâmetros e um valor de retorno. Esta função calcula a área de um retângulo.',
            code: `function calcularArea(largura, altura) {
  const area = largura * altura;
  return area;
}

const areaDaSala = calcularArea(10, 5);
console.log(\`A área da sala é \${areaDaSala} metros quadrados.\`);`
          }
        ]
      },
      quiz: [
        {
          question: 'O que a palavra-chave `return` faz numa função?',
          options: ['Imprime um valor na consola.', 'Pára a execução da função e devolve um valor.', 'Define um parâmetro.', 'Cria um loop.'],
          correctAnswerIndex: 1,
          explanation: '`return` tem duas funções: termina a execução da função imediatamente e envia um valor de volta para o código que a chamou.'
        },
        {
          question: 'Na chamada `minhaFunc(10)`, o que é `10`?',
          options: ['Um parâmetro', 'Um argumento', 'Uma variável', 'Um retorno'],
          correctAnswerIndex: 1,
          explanation: 'Tecnicamente, a variável na definição da função é o "parâmetro" (`function minhaFunc(num)`), e o valor real passado na chamada é o "argumento" (`minhaFunc(10)`). No dia-a-dia, os termos são usados de forma intercambiável.'
        }
      ]
    },
    {
      id: '4.3',
      title: 'Arrow Functions',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'O ES6 (uma versão mais moderna do JavaScript) introduziu uma nova sintaxe para escrever funções, chamada "Arrow Function" (Função Seta). Elas são mais concisas e têm um comportamento ligeiramente diferente em cenários avançados (relacionado com a palavra-chave `this`).'),
        React.createElement('p', { className: 'mb-4' }, 'A sintaxe básica é `(parametros) => { corpo da função }`.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Se a função tiver apenas uma linha e essa linha for um `return`, podes omitir as chaves `{}` e a palavra-chave `return`. A isto chama-se "retorno implícito".'),
          React.createElement('li', null, 'Se tiver apenas um parâmetro, podes omitir os parêntesis `()`.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Conversão Simples',
            description: 'Aqui está uma função tradicional e a sua conversão para uma arrow function. São funcionalmente equivalentes.',
            code: `// Função tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function equivalente
const somarArrow = (a, b) => {
  return a + b;
};

console.log(somarArrow(2, 3)); // 5`
          },
          {
            title: 'Exemplo 2: Retorno Implícito',
            description: 'Como a nossa função `somarArrow` só tem uma linha que é um `return`, podemos simplificá-la ainda mais.',
            code: `const somarSimplificada = (a, b) => a + b;

console.log(somarSimplificada(10, 5)); // 15`
          },
          {
            title: 'Exemplo 3: Um Único Parâmetro',
            description: 'Quando temos apenas um parâmetro, os parêntesis à volta dele são opcionais.',
            code: `const duplicar = numero => numero * 2;

console.log(duplicar(7)); // 14`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é a sintaxe correta para uma arrow function que recebe `x` e retorna `x + 1`?',
          options: ['`x => x + 1;`', '`function(x) { x + 1; }`', '`=> x { return x + 1; }`', '`x -> x + 1;`'],
          correctAnswerIndex: 0,
          explanation: 'Com um único parâmetro, os parêntesis são opcionais. Com um retorno implícito, as chaves e a palavra `return` são omitidas.'
        },
        {
          question: 'Arrow functions são mais usadas em que contexto?',
          options: ['Apenas para matemática.', 'Como "callbacks" para métodos de array como `.map()` e `.filter()`.', 'Para substituir todas as outras funções.', 'Apenas em ficheiros antigos.'],
          correctAnswerIndex: 1,
          explanation: 'A sintaxe concisa das arrow functions torna-as perfeitas para serem passadas como funções anónimas (callbacks) para outros métodos, tornando o código muito mais limpo.'
        }
      ]
    },
     {
      id: '4.4',
      title: 'Desafio: Conversor de Temperatura',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Vamos criar uma função que converte uma temperatura de Celsius para Fahrenheit. Esta é uma ótima prática para usar parâmetros e o `return`.'),
        React.createElement('p', { className: 'mb-4' }, 'A fórmula de conversão é: Fahrenheit = (Celsius × 9/5) + 32.')
      ),
      practice: {
        examples: [
          {
            title: 'Passo 1: Criar a função',
            description: 'Cria uma função (podes usar a sintaxe normal ou arrow function) chamada `converterParaFahrenheit` que aceita um parâmetro, `celsius`.',
            code: `function converterParaFahrenheit(celsius) {
  // A nossa lógica virá aqui
}`
          },
          {
            title: 'Passo 2: Implementar a fórmula e retornar o valor',
            description: 'Dentro da função, calcula o valor em Fahrenheit usando a fórmula e usa a palavra-chave `return` para o devolver.',
            code: `function converterParaFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}`
          },
          {
            title: 'Passo 3: Testar a função',
            description: 'Chama a tua função com diferentes valores para garantir que funciona. 0°C devem ser 32°F. 100°C devem ser 212°F.',
            code: `const temp1 = converterParaFahrenheit(0);
console.log(\`0°C é igual a \${temp1}°F\`); // Deve ser 32

const temp2 = converterParaFahrenheit(100);
console.log(\`100°C é igual a \${temp2}°F\`); // Deve ser 212`
          }
        ]
      },
      quiz: [
        {
          question: 'Se a tua função não tivesse `return`, o que a variável `temp1` conteria?',
          options: ['0', '32', '`undefined`', '`null`'],
          correctAnswerIndex: 2,
          explanation: 'Uma função sem uma declaração `return` explícita retorna `undefined` por defeito.'
        },
        {
          question: 'Como ficaria a função do desafio como uma arrow function com retorno implícito?',
          options: ['`const conv = celsius => { (celsius * 9/5) + 32 }`', '`const conv = celsius => (celsius * 9/5) + 32;`', '`const conv = (celsius) => return (celsius * 9/5) + 32;`', 'Não é possível.'],
          correctAnswerIndex: 1,
          explanation: 'A sintaxe `parametro => expressao` é a forma mais concisa de escrever uma arrow function com um único parâmetro e um retorno implícito.'
        }
      ]
    }
  ]
};
