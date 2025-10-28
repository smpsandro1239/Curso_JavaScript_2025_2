import * as React from 'react';
import type { Module } from '../../types';

export const module4: Module = {
  id: '4',
  title: 'Módulo 4: Funções',
  lessons: [
    {
      id: '4.1',
      title: 'Declarar e Chamar Funções',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'As funções são um dos blocos de construção mais importantes em JavaScript. São blocos de código reutilizáveis que podes "chamar" para executar uma tarefa específica. Isto ajuda a manter o teu código organizado, eficiente e fácil de ler (princípio DRY - Don\'t Repeat Yourself).'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Pensa numa função como uma ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'receita para um bolo'),
          '. A receita em si é a ',
          React.createElement('strong', { className: 'text-green' }, 'declaração da função'),
          '. Ela define os ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'parâmetros'),
          ' (os ingredientes genéricos, como "açúcar", "farinha") e os passos a seguir.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Quando queres efetivamente fazer o bolo, tu ',
          React.createElement('strong', { className: 'text-green' }, 'chamas a função'),
          ' e forneces os ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'argumentos'),
          ' (os ingredientes específicos, como "200g de açúcar", "500g de farinha").'
        ),
         React.createElement(
          'p',
          null,
          'Muitas funções também devolvem um resultado usando a palavra-chave `return`. Na nossa analogia, `return` seria o bolo pronto a sair do forno.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Uma Função Simples",
            description: "Vamos criar uma função que simplesmente diz 'Olá'. Ela não tem parâmetros e não retorna nenhum valor.",
            code: `// Declaração da função
function saudar() {
  console.log("Olá, bem-vindo ao mundo das funções!");
}

// Chamada da função
saudar();`
          },
          {
            title: "Exemplo 2: O Caso Comum - Com Parâmetros e Retorno",
            description: "Esta é a forma mais comum de função: recebe dados (parâmetros), processa-os, e devolve um resultado (`return`).",
            code: `function calcularAreaRetangulo(largura, altura) {
  const area = largura * altura;
  return area;
}

const areaCalculada = calcularAreaRetangulo(10, 5); // 10 e 5 são os argumentos
console.log("A área é:", areaCalculada); // A área é: 50`
          },
          {
            title: "Exemplo 3: A Armadilha - Chamar vs. Referenciar",
            description: "Um erro comum é esquecer os parênteses `()` ao chamar uma função. Se o fizeres, não estás a executar a função; estás apenas a referenciar a própria função, como se fosse uma variável.",
            code: `function dizerAdeus() {
  return "Adeus!";
}

// Chamada correta (executa a função)
const mensagem1 = dizerAdeus();
console.log(mensagem1); // "Adeus!"

// Referência incorreta (não executa a função)
const mensagem2 = dizerAdeus;
console.log(mensagem2); // Imprime a definição da própria função`
          }
        ]
      },
      quiz: [
        {
          question: "No código `function multiplicar(x, y) { return x * y; }`, o que são `x` e `y`?",
          options: [
            'Argumentos',
            'Variáveis globais',
            'Parâmetros',
            'Constantes'
          ],
          correctAnswerIndex: 2,
          explanation: '`x` e `y` são os parâmetros da função. São como "espaços reservados" para os valores que serão fornecidos quando a função for chamada. Os valores reais passados (ex: em `multiplicar(3, 4)`) são os argumentos.'
        },
        {
          question: "Qual o output do código? `function somar(a, b) { return a + b; } console.log(somar(5, 3));`",
          options: [
            '5',
            '3',
            '8',
            'undefined'
          ],
          correctAnswerIndex: 2,
          explanation: 'A função `somar` é chamada com os argumentos 5 e 3. Ela retorna a sua soma, que é 8. O `console.log` imprime esse valor retornado.'
        },
        {
          question: "O que acontece se uma função não tiver uma declaração `return`?",
          options: [
            'Dá um erro.',
            'Retorna `null`.',
            'Retorna `0`.',
            'Retorna `undefined` por defeito.'
          ],
          correctAnswerIndex: 3,
          explanation: 'Se a execução de uma função terminar sem encontrar uma instrução `return`, ela devolve automaticamente o valor `undefined`.'
        }
      ],
      challenge: {
        description: "Escreve uma função chamada `converterCelsiusParaFahrenheit` que recebe uma temperatura em Celsius como parâmetro. A função deve calcular e retornar a temperatura equivalente em Fahrenheit. A fórmula é: `F = C * 1.8 + 32`.",
        starterCode: `function converterCelsiusParaFahrenheit(celsius) {
  // O teu código de conversão aqui
}

const tempCelsius = 20;
const tempFahrenheit = converterCelsiusParaFahrenheit(tempCelsius);
console.log(\`\${tempCelsius}°C é igual a \${tempFahrenheit}°F\`); // Deve ser 68°F`,
        solution: `function converterCelsiusParaFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

const tempCelsius = 20;
const tempFahrenheit = converterCelsiusParaFahrenheit(tempCelsius);
console.log(\`\${tempCelsius}°C é igual a \${tempFahrenheit}°F\`);`
      }
    },
    {
      id: '4.2',
      title: 'Funções Seta (Arrow Functions)',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'As Arrow Functions (Funções Seta) são uma forma mais concisa e moderna de escrever funções em JavaScript, introduzida no ES6. São especialmente úteis para funções pequenas e anónimas.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Imagina que a declaração de função tradicional é uma carta formal:'
        ),
        React.createElement(
          'code',
          { className: 'block bg-lightest-navy p-2 rounded mb-4 text-sm' },
          'const somar = function(a, b) {\n  return a + b;\n};'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Uma Arrow Function é como enviar uma mensagem de texto rápida para dizer o mesmo:'
        ),
         React.createElement(
          'code',
          { className: 'block bg-lightest-navy p-2 rounded mb-4 text-sm' },
          'const somar = (a, b) => a + b;'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'As principais diferenças são a sintaxe mais curta. A palavra `function` desaparece, e se a função tiver apenas uma linha que retorna um valor, podes omitir as chavetas `{}` e a palavra `return`.'
        ),
         React.createElement(
          'p',
          { className: 'mt-2 mb-4 p-4 bg-lightest-navy rounded-md text-sm text-light-slate border-l-4 border-yellow-400' },
           React.createElement('strong', { className: 'font-bold text-yellow-300' }, 'Nota avançada: '), 'As Arrow Functions também se comportam de forma diferente em relação à palavra-chave `this`, algo que se tornará muito importante quando trabalhares com classes e manipulação de eventos. Por agora, foca-te na sintaxe mais limpa.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Conversão de Sintaxe",
            description: "Vamos converter uma função tradicional numa arrow function. Repara como fica mais limpa.",
            code: `// Função tradicional
function duplicar(n) {
  return n * 2;
}

// Arrow function equivalente
const duplicarArrow = n => n * 2;

console.log(duplicar(5));       // 10
console.log(duplicarArrow(5)); // 10`
          },
          {
            title: "Exemplo 2: O Caso Comum - Com Métodos de Array",
            description: "As arrow functions brilham quando usadas como callbacks em métodos de array como `.map` ou `.filter`, tornando o código muito mais legível.",
            code: `const numeros = [1, 2, 3, 4];

// Mapear para o dobro de cada número
const dobrados = numeros.map(n => n * 2);

console.log(dobrados); // [2, 4, 6, 8]`
          },
          {
            title: "Exemplo 3: A Armadilha - Retornar um Objeto",
            description: "Se quiseres retornar um objeto literal numa única linha, tens de o envolver em parênteses `()`. Se usares apenas `{}` o JavaScript pensa que é o início de um bloco de função com várias linhas, e não um objeto.",
            code: `// Errado! Isto retorna 'undefined'
const criarPessoaErrado = (nome) => { nome: nome };

// Correto! Envolve o objeto em parênteses
const criarPessoaCerto = (nome) => ({ nome: nome });

console.log(criarPessoaErrado("Ana")); // undefined
console.log(criarPessoaCerto("Rui"));  // { nome: 'Rui' }`
          }
        ]
      },
      quiz: [
        {
          question: "Qual das seguintes opções é uma Arrow Function válida que duplica um número 'n'?",
          options: [
            'const duplicar = function(n) => n * 2;',
            'const duplicar = n => n * 2;',
            'const duplicar = (n) { return n * 2; }',
            'const duplicar => n * 2;'
          ],
          correctAnswerIndex: 1,
          explanation: 'A opção correta usa a sintaxe concisa de uma arrow function. `n` é o parâmetro, `=>` separa os parâmetros do corpo da função, e `n * 2` é o valor de retorno implícito.'
        },
        {
          question: "O que está errado nesta arrow function? `const somar = (a, b) => { a + b; }`",
          options: [
            "Faltam os parênteses nos parâmetros.",
            "Falta a palavra-chave `return`.",
            "Deveria usar a palavra `function`.",
            "Não há nada de errado."
          ],
          correctAnswerIndex: 1,
          explanation: "Quando usas chavetas `{}` numa arrow function, estás a criar um bloco de função. Dentro de um bloco, o retorno não é implícito. Precisas de usar explicitamente a palavra `return`. A versão correta seria `=> { return a + b; }` ou, de forma mais concisa, `=> a + b`."
        },
        {
          question: "Como se escreve uma arrow function sem parâmetros que retorna a string 'Olá'?",
          options: [
            "=> 'Olá'",
            "() => 'Olá'",
            "function => 'Olá'",
            "() 'Olá'"
          ],
          correctAnswerIndex: 1,
          explanation: "Mesmo que uma arrow function não tenha parâmetros, os parênteses `()` são obrigatórios para indicar a lista de parâmetros vazia."
        }
      ],
      challenge: {
        description: "Dado o array de palavras, usa o método `.filter()` com uma arrow function para criar um novo array que contenha apenas as palavras com 5 ou mais letras.",
        starterCode: `const palavras = ["carro", "sol", "javascript", "oi", "computador"];

// O teu código aqui
const palavrasLongas = palavras.filter(/* a tua arrow function aqui */);

console.log(palavrasLongas); // ["carro", "javascript", "computador"]`,
        solution: `const palavras = ["carro", "sol", "javascript", "oi", "computador"];

const palavrasLongas = palavras.filter(palavra => palavra.length >= 5);

console.log(palavrasLongas);`
      }
    },
    {
      id: '4.3',
      title: 'Parâmetros Padrão e Retorno',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Vamos aprofundar dois conceitos chave: o que entra numa função (parâmetros) e o que sai dela (retorno).'
        ),
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'Parâmetros Padrão'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Às vezes, queres que uma função tenha um comportamento "padrão" se não lhe for fornecida toda a informação. É como pedir um café: se não disseres nada, recebes um café simples. Se especificares "com leite", o barista usa esse ingrediente extra. Os parâmetros padrão funcionam da mesma forma.'
        ),
         React.createElement(
          'h3',
          { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'O Valor de Retorno'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'A palavra-chave `return` faz duas coisas: 1) especifica o valor que a função "devolve" para o local onde foi chamada e 2) pára imediatamente a execução da função. É como um funcionário que te entrega um documento (`return valor`) e diz "o meu trabalho aqui acabou". Qualquer instrução após o `return` dentro da função não será executada.'
        ),
        React.createElement(
          'p',
          null,
          'Se uma função não tiver uma declaração `return`, ela devolve automaticamente o valor `undefined`.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Parâmetro Padrão",
            description: "Vamos criar uma função que saúda um utilizador. Se nenhum nome for fornecido, ela usa 'visitante' como padrão.",
            code: `function saudar(nome = "visitante") {
  console.log(\`Olá, \${nome}!\`);
}

saudar("Ana");     // Olá, Ana!
saudar();          // Olá, visitante!`
          },
          {
            title: "Exemplo 2: O Caso Comum - Função de Cálculo",
            description: "Uma função que calcula o preço final, aplicando um desconto opcional. Se o desconto não for passado, o seu valor padrão é 0.",
            code: `function calcularPrecoFinal(preco, desconto = 0) {
  const precoComDesconto = preco * (1 - desconto);
  return precoComDesconto;
}

console.log(calcularPrecoFinal(100, 0.10)); // 90 (com 10% de desconto)
console.log(calcularPrecoFinal(100));       // 100 (sem desconto)`
          },
          {
            title: "Exemplo 3: A Armadilha - O Efeito do `return`",
            description: "Vê como a palavra `return` pára a execução da função imediatamente. O `console.log` dentro da função nunca é alcançado.",
            code: `function verificarIdade(idade) {
  if (idade < 18) {
    return "Menor de idade";
    // Esta linha nunca será executada
    console.log("Este código é inalcançável.");
  }
  return "Maior de idade";
}

console.log(verificarIdade(15)); // Menor de idade`
          }
        ]
      },
      quiz: [
        {
          question: 'O que é que a função `teste()` vai imprimir na consola? `function teste() { let a = 10; return a; a = 20; console.log(a); } teste();`',
          options: [
            '10',
            '20',
            'undefined',
            'Nada. A chamada da função não imprime nada.'
          ],
          correctAnswerIndex: 3,
          explanation: 'A função `teste()` retorna o valor 10. A linha `console.log(a)` nunca é executada porque vem depois da declaração `return`. A chamada `teste()` em si não está dentro de um `console.log`, por isso nada é impresso na consola.'
        },
        {
          question: "Qual será o output? `function cumprimentar(msg = 'Oi') { console.log(msg); } cumprimentar('Olá');`",
          options: [
            "'Oi'",
            "'Olá'",
            "undefined",
            "Vai dar erro"
          ],
          correctAnswerIndex: 1,
          explanation: "Apesar de a função ter um parâmetro padrão ('Oi'), nós fornecemos um argumento ('Olá') na chamada. O argumento fornecido tem sempre prioridade sobre o valor padrão."
        },
        {
          question: "Qual o valor de `resultado`? `function calcular() { let x = 5; } const resultado = calcular();`",
          options: [
            "5",
            "null",
            "undefined",
            "Vai dar erro"
          ],
          correctAnswerIndex: 2,
          explanation: "A função `calcular` não tem uma instrução `return`. Portanto, ela executa o seu código, mas no final retorna `undefined` por defeito. A variável `resultado` recebe este valor."
        }
      ],
      challenge: {
        description: "Cria uma função `criarPerfil` que recebe dois parâmetros: `nome` e `cidade`. O parâmetro `cidade` deve ter um valor padrão de 'Desconhecida'. A função deve retornar uma string no formato: 'Perfil: [nome] de [cidade]'.",
        starterCode: `function criarPerfil(nome, cidade = "Desconhecida") {
  // Retorna a string formatada
}

console.log(criarPerfil("Rui", "Lisboa")); // "Perfil: Rui de Lisboa"
console.log(criarPerfil("Ana"));          // "Perfil: Ana de Desconhecida"`,
        solution: `function criarPerfil(nome, cidade = "Desconhecida") {
  return \`Perfil: \${nome} de \${cidade}\`;
}

console.log(criarPerfil("Rui", "Lisboa"));
console.log(criarPerfil("Ana"));`
      }
    },
    {
      id: '4.4',
      title: 'Escopo (Scope) de Variáveis',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Escopo (ou "scope" em inglês) é um conceito fundamental que determina a acessibilidade de variáveis em diferentes partes do teu código. É o que impede que variáveis de uma parte do programa interfiram com outras.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Imagina o teu código como uma casa grande:'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Escopo Global'),
            ': É o jardim à volta da casa. Qualquer variável declarada aqui está visível de qualquer janela, em qualquer quarto. É útil, mas poluir o jardim com muitas coisas pode criar confusão.'
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Escopo de Função'),
            ': Cada função é como um quarto na casa. Variáveis declaradas dentro de um quarto (`let`, `const`, `var`) só são visíveis dentro desse quarto. Podes ver o jardim (escopo global) da janela do quarto, mas quem está no jardim não consegue ver o que está dentro do teu quarto.'
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Escopo de Bloco'),
            ': Introduzido com `let` e `const`. É como uma gaveta dentro de um quarto. Se declarares uma variável dentro de um ciclo `for` ou de um `if`, ela só existe dentro dessa "gaveta" (o bloco de código `{...}`).'
          )
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Global vs. Função",
            description: "Vamos ver como uma variável global pode ser acedida de qualquer lado, mas uma variável de função está 'presa' dentro da sua função.",
            code: `const variavelGlobal = "Estou em todo o lado!";

function minhaFuncao() {
  const variavelLocal = "Estou só aqui dentro.";
  console.log(variavelGlobal); // Funciona!
  console.log(variavelLocal);  // Funciona!
}

minhaFuncao();
// console.log(variavelLocal); // Erro! variavelLocal is not defined`
          },
          {
            title: "Exemplo 2: O Caso Comum - Escopo de Bloco com `let`",
            description: "O escopo de bloco é muito útil em ciclos. A variável `i` do ciclo `for` só existe dentro do ciclo e não 'polui' o escopo exterior.",
            code: `const numeros = [1, 2, 3];
for (let i = 0; i < numeros.length; i++) {
  console.log("Dentro do ciclo:", i);
}

// console.log("Fora do ciclo:", i); // Erro! i is not defined`
          },
          {
            title: "Exemplo 3: A Armadilha - Shadowing (Sombreado)",
            description: "Se declarares uma variável num escopo interior com o mesmo nome de uma variável num escopo exterior, a interior 'faz sombra' à exterior. Dentro desse escopo, só a variável interior será usada.",
            code: `const nome = "Global";

function mostrarNome() {
  const nome = "Local"; // Esta variável "faz sombra" à global
  console.log("Dentro da função:", nome); // Local
}

mostrarNome();
console.log("Fora da função:", nome); // Global`
          }
        ]
      },
      quiz: [
        {
          question: "Qual será o output do código? `let a = 1; function teste() { let a = 2; console.log(a); } teste(); console.log(a);`",
          options: [
            '1, depois 2',
            '2, depois 1',
            '2, depois 2',
            '1, depois 1'
          ],
          correctAnswerIndex: 1,
          explanation: 'A função `teste()` é chamada primeiro. Dentro dela, uma nova variável `a` com escopo de função é criada e tem o valor 2, que é impresso. Esta variável não afeta a variável `a` do escopo global. Depois da função executar, o segundo `console.log(a)` imprime o valor da variável global `a`, que ainda é 1.'
        },
        {
          question: "O código `if (true) { const segredo = '123'; } console.log(segredo);` vai funcionar?",
          options: [
            "Sim, vai imprimir '123'.",
            "Não, vai dar um erro porque `segredo` não está definido no escopo global.",
            "Sim, mas vai imprimir `undefined`.",
            "Não, vai dar um erro de sintaxe."
          ],
          correctAnswerIndex: 1,
          explanation: "`const` e `let` têm escopo de bloco. A variável `segredo` só existe dentro das chavetas `{}` do `if`. Tentar acedê-la fora desse bloco resulta num `ReferenceError`."
        },
        {
          question: "No escopo global, podes aceder a uma variável declarada dentro de uma função?",
          options: [
            "Sim, sempre.",
            "Apenas se a variável for declarada com `var`.",
            "Não, nunca.",
            "Apenas se a função já tiver sido executada."
          ],
          correctAnswerIndex: 2,
          explanation: "O escopo de função funciona como uma barreira unidirecional. O código dentro da função pode 'ver' o que está fora (no escopo global), mas o código fora não pode 'ver' o que está dentro."
        }
      ],
      challenge: {
        description: "Analisa o seguinte código e prevê, linha por linha, o que será impresso na consola. Anota a tua previsão e depois corre o código para ver se acertaste.",
        starterCode: `const livro = "Global";

function descobrirLivro() {
  const livro = "Função";
  console.log(livro); // Previsão 1: ?

  if (true) {
    const livro = "Bloco";
    console.log(livro); // Previsão 2: ?
  }

  console.log(livro); // Previsão 3: ?
}

descobrirLivro();
console.log(livro); // Previsão 4: ?`,
        solution: `/*
Previsão 1: "Função" (Usa a variável do escopo da função)
Previsão 2: "Bloco" (Usa a variável do escopo do bloco, que faz sombra às outras)
Previsão 3: "Função" (A variável do bloco já não existe, volta a usar a da função)
Previsão 4: "Global" (Usa a variável do escopo global)
*/`
      }
    },
    {
      id: '4.5',
      title: 'Aprofundando: Funções como Cidadãos de Primeira Classe',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Em JavaScript, as funções têm um estatuto especial: são "cidadãos de primeira classe". Isto não é apenas um nome pomposo; significa que uma função é tratada como qualquer outro valor (como um número, uma string ou um objeto).'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'A analogia é pensar numa função como uma ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'ferramenta especializada'),
          ' (ex: uma batedeira). Como qualquer outra ferramenta, tu podes:'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, '1. ', React.createElement('strong', { className: 'text-green' }, 'Guardá-la numa caixa'), ' (Atribuir a uma variável).'),
          React.createElement('li', null, '2. ', React.createElement('strong', { className: 'text-green' }, 'Entregá-la a um chef para ele usar'), ' (Passar como argumento para outra função - isto é um ', React.createElement('strong', { className: 'text-lightest-slate' }, 'Callback'), ').'),
          React.createElement('li', null, '3. ', React.createElement('strong', { className: 'text-green' }, 'Usar uma máquina que constrói uma ferramenta personalizada para ti'), ' (Retornar uma função de outra função - isto é uma ', React.createElement('strong', { className: 'text-lightest-slate' }, 'Higher-Order Function'), ').')
        ),
        React.createElement(
          'p',
          { className: 'mt-4' },
          'Esta flexibilidade é um dos aspetos mais poderosos do JavaScript e é a base para muitos padrões de programação avançados, incluindo os métodos de array como `map` e `filter` que já vimos.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Atribuir a uma Variável",
            description: "Aqui, guardamos uma função numa constante. A constante `saudacao` agora 'contém' a função, e podemos usá-la para chamar o código.",
            code: `const saudacao = function() {
  console.log("Olá!");
};

saudacao(); // "Olá!"`
          },
          {
            title: "Exemplo 2: O Caso Comum - Funções de Callback",
            description: "Vimos isto com métodos de array. `forEach` é uma função que aceita outra função (um callback) como argumento e executa-a para cada item.",
            code: `const nomes = ["Ana", "Rui"];

function imprimirNome(nome) {
  console.log(\`Nome: \${nome}\`);
}

// Passamos a função 'imprimirNome' como um argumento.
nomes.forEach(imprimirNome);`
          },
          {
            title: "Exemplo 3: A Nuance - Higher-Order Functions",
            description: "Uma Higher-Order Function é uma função que retorna outra função. `criarMultiplicador` não faz a multiplicação; ela 'cria' uma nova função que está pré-configurada para multiplicar por um certo número.",
            code: `function criarMultiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(duplicar(5));  // 10
console.log(triplicar(5));  // 15`
          }
        ]
      },
      quiz: [
        {
          question: "No código `setTimeout(minhaFuncao, 1000);`, o que é `minhaFuncao`?",
          options: [
            'Uma variável que será executada imediatamente.',
            'Uma função de callback, que será executada após 1000ms.',
            'Uma Higher-Order Function.',
            'Um erro de sintaxe.'
          ],
          correctAnswerIndex: 1,
          explanation: "Correto! `minhaFuncao` é uma função de callback. Estamos a passá-la como um argumento para `setTimeout` com a instrução de que ela deve ser \"chamada de volta\" (executed) após o tempo especificado ter decorrido."
        },
        {
          question: "O que é uma Higher-Order Function?",
          options: [
            "Uma função que usa letras maiúsculas.",
            "Uma função que é muito rápida.",
            "Uma função que aceita outra função como argumento, ou que retorna uma função.",
            "Uma função que só pode ser chamada uma vez."
          ],
          correctAnswerIndex: 2,
          explanation: "Esta é a definição exata. `setTimeout`, `forEach`, `map` são exemplos de funções que aceitam outras funções. O nosso `criarMultiplicador` é um exemplo de uma função que retorna outra."
        },
        {
          question: "O que será impresso? `const nums = [1, 2]; const dobrar = n => n * 2; const resultado = nums.map(dobrar); console.log(resultado);`",
          options: [
            "[1, 2]",
            "[2, 4]",
            "undefined",
            "Vai dar erro"
          ],
          correctAnswerIndex: 1,
          explanation: "`map` é uma higher-order function que aceita `dobrar` como callback. Ele aplica a função `dobrar` a cada elemento do array `nums` e retorna um novo array com os resultados."
        }
      ],
      challenge: {
        description: "Cria uma higher-order function chamada `operacaoComArray`. Esta função deve receber duas coisas: um array e uma função de callback. A função `operacaoComArray` deve iterar sobre o array e chamar o callback para cada elemento, imprimindo o resultado. Testa-a com duas callbacks diferentes: uma que duplica o número e outra que o eleva ao quadrado.",
        starterCode: `const numeros = [1, 2, 3];

function operacaoComArray(arr, callback) {
  // O teu código aqui
}

const duplicar = n => n * 2;
const quadrado = n => n * n;

console.log("A duplicar:");
operacaoComArray(numeros, duplicar);

console.log("\\nA elevar ao quadrado:");
operacaoComArray(numeros, quadrado);`,
        solution: `const numeros = [1, 2, 3];

function operacaoComArray(arr, callback) {
  for (const item of arr) {
    console.log(callback(item));
  }
}

const duplicar = n => n * 2;
const quadrado = n => n * n;

console.log("A duplicar:");
operacaoComArray(numeros, duplicar);

console.log("\\nA elevar ao quadrado:");
operacaoComArray(numeros, quadrado);`
      }
    }
  ]
};
