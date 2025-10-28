import * as React from 'react';
import type { Module } from '../../types';

export const module3: Module = {
  id: '3',
  title: 'Módulo 3: Controlo de Fluxo e Loops',
  lessons: [
    {
      id: '3.1',
      title: 'Tomada de Decisões: if/else',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Até agora, o nosso código correu de cima para baixo, linha por linha. Mas a programação real precisa de tomar decisões. O `if...else` é a estrutura mais fundamental para isto.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia é simples: seguir um mapa. "Se o semáforo estiver verde, avança. Senão (else), para."'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'if (condição)'), ': O bloco de código aqui dentro só é executado se a condição for `true`.'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'else if (outra_condição)'), ': Podes adicionar quantos `else if` quiseres para testar múltiplas condições em sequência.'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'else'), ': O bloco de código final que é executado se nenhuma das condições anteriores for `true`.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Verificar a Idade",
            description: "Vamos verificar se uma pessoa é maior de idade.",
            code: `const idade = 20;

if (idade >= 18) {
  console.log("É maior de idade. Pode entrar.");
} else {
  console.log("É menor de idade. Acesso negado.");
}`
          },
          {
            title: "Exemplo 2: O Caso Comum - Múltiplas Condições",
            description: "Verificar a nota de um aluno e atribuir uma classificação.",
            code: `const nota = 85;

if (nota >= 90) {
  console.log("Classificação: A");
} else if (nota >= 80) {
  console.log("Classificação: B");
} else if (nota >= 70) {
  console.log("Classificação: C");
} else {
  console.log("Classificação: Reprovado");
}`
          },
          {
            title: "Exemplo 3: A Armadilha - O Operador Ternário",
            description: "Para condições `if/else` simples, podes usar uma sintaxe mais curta chamada operador ternário: `condição ? valor_se_true : valor_se_false`. É útil para atribuições rápidas.",
            code: `const temperatura = 15;
const tempo = temperatura > 20 ? "Está calor" : "Está frio";

console.log(tempo); // "Está frio"`
          }
        ]
      },
      quiz: [
        {
          question: "Qual será o output do código? `const x = 10; if (x > 10) { console.log('Maior'); } else { console.log('Não Maior'); }`",
          options: ['Maior', 'Não Maior', 'undefined', 'Vai dar erro'],
          correctAnswerIndex: 1,
          explanation: "A condição `x > 10` é falsa, porque 10 não é estritamente maior que 10. Portanto, o bloco `else` é executado."
        },
        {
          question: "No operador ternário `const msg = idade >= 18 ? 'Adulto' : 'Menor';`, o que acontece se `idade` for 18?",
          options: ["`msg` será 'Adulto'", "`msg` será 'Menor'", "Vai dar erro", "`msg` será `undefined`"],
          correctAnswerIndex: 0,
          explanation: "A condição `idade >= 18` é verdadeira, pois 18 é igual a 18. O operador ternário retorna o primeiro valor ('Adulto')."
        }
      ],
      challenge: {
        description: "Escreve uma função `verificarSinal` que recebe um número e imprime na consola se ele é 'Positivo', 'Negativo' ou 'Zero'.",
        starterCode: `function verificarSinal(numero) {
  // O teu código com if/else if/else aqui
}

verificarSinal(10);  // Deve imprimir "Positivo"
verificarSinal(-5);  // Deve imprimir "Negativo"
verificarSinal(0);   // Deve imprimir "Zero"`,
        solution: `function verificarSinal(numero) {
  if (numero > 0) {
    console.log("Positivo");
  } else if (numero < 0) {
    console.log("Negativo");
  } else {
    console.log("Zero");
  }
}`
      }
    },
    {
      id: '3.2',
      title: 'Alternativas: A Declaração switch',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Quando tens uma longa cadeia de `else if` que está a verificar o mesmo valor contra diferentes possibilidades, a declaração `switch` pode ser uma alternativa mais limpa e legível.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia é um menu de um restaurante com opções numeradas. Em vez de perguntar "É a opção 1? Não? É a opção 2? Não?...", tu simplesmente dizes "Dá-me a opção 3" e o sistema vai diretamente para essa escolha.'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'switch (valor)'), ': A variável que queres avaliar.'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'case valor_a_comparar:'), ': Um caso específico. Se o `valor` corresponder, o código deste `case` é executado.'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'break;'), ': Crucial! Pára a execução do `switch`. Se te esqueceres, o código continua a executar nos `case` seguintes (fall-through).'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'default:'), ': Similar ao `else`. É executado se nenhum dos `case` corresponder.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Dias da Semana",
            description: "Vamos obter o nome do dia da semana a partir de um número.",
            code: `const diaNumero = 3;
let nomeDia;

switch (diaNumero) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  // ... outros dias
  default:
    nomeDia = "Dia inválido";
}

console.log("Hoje é:", nomeDia);`
          },
          {
            title: "Exemplo 2: O Caso Comum - Agrupar Casos (Fall-through)",
            description: "Podes agrupar vários `case` para executar o mesmo bloco de código. Aqui, verificamos se um dia é fim de semana ou dia útil.",
            code: `const dia = "Sábado";
let tipoDia;

switch (dia) {
  case "Sábado":
  case "Domingo":
    tipoDia = "Fim de semana";
    break;
  case "Segunda-feira":
  case "Terça-feira":
  // ... etc
  default:
    tipoDia = "Dia útil";
}

console.log(\`\${dia} é um \${tipoDia}.\`);`
          },
          {
            title: "Exemplo 3: A Armadilha - Esquecer o `break`",
            description: "Se te esqueceres do `break`, o código continua a executar os `case` seguintes até encontrar um `break` ou o fim do `switch`. Isto raramente é o que queres.",
            code: `const nivel = 1;

switch (nivel) {
  case 1:
    console.log("Acesso ao nível 1."); // Imprime
  case 2:
    console.log("Acesso ao nível 2."); // Também imprime!
  case 3:
    console.log("Acesso ao nível 3."); // E também imprime!
    break; // Pára aqui
  default:
    console.log("Nível desconhecido.");
}`
          }
        ]
      },
      quiz: [
        {
          question: "Para que serve a palavra-chave `break` numa declaração `switch`?",
          options: ['Para iniciar o switch', 'Para terminar o programa', 'Para saltar para o `case` seguinte', 'Para sair do bloco `switch` após um `case` ser executado'],
          correctAnswerIndex: 3,
          explanation: "`break` é essencial para evitar o comportamento de 'fall-through', garantindo que apenas o código do `case` correspondente seja executado."
        },
        {
          question: "O que acontece se nenhum `case` corresponder ao valor do `switch` e houver um bloco `default`?",
          options: ['O código dentro do `default` é executado', 'O programa dá um erro', 'O `switch` não faz nada', 'O primeiro `case` é executado'],
          correctAnswerIndex: 0,
          explanation: "O bloco `default` funciona como o `else` numa estrutura `if/else`, apanhando todos os casos que não correspondem a nenhuma das opções especificadas."
        }
      ],
      challenge: {
        description: "Cria uma função `obterEstacao` que recebe um mês (string, ex: 'Janeiro') e retorna a estação do ano correspondente no hemisfério norte ('Inverno', 'Primavera', 'Verão', 'Outono'). Usa um `switch` e agrupa os meses.",
        starterCode: `function obterEstacao(mes) {
  let estacao;
  switch (mes) {
    // O teu código aqui
  }
  return estacao;
}

console.log(obterEstacao("Março")); // Primavera`,
        solution: `function obterEstacao(mes) {
  let estacao;
  switch (mes) {
    case "Dezembro":
    case "Janeiro":
    case "Fevereiro":
      estacao = "Inverno";
      break;
    case "Março":
    case "Abril":
    case "Maio":
      estacao = "Primavera";
      break;
    case "Junho":
    case "Julho":
    case "Agosto":
      estacao = "Verão";
      break;
    case "Setembro":
    case "Outubro":
    case "Novembro":
      estacao = "Outono";
      break;
    default:
      estacao = "Mês inválido";
  }
  return estacao;
}`
      }
    },
    {
      id: '3.3',
      title: 'Repetição: O Ciclo for',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Loops (ou ciclos) são usados para executar o mesmo bloco de código várias vezes. O ciclo `for` é o mais comum e é ideal quando sabes exatamente quantas vezes queres repetir a ação.'),
        React.createElement('p', { className: 'mb-4' }, 'A estrutura do `for` tem três partes, separadas por ponto e vírgula:'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Inicialização:'), ' `let i = 0;` - Cria uma variável de contador. É executada apenas uma vez, no início.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Condição:'), ' `i < 5;` - O ciclo continua a executar enquanto esta condição for `true`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Incremento:'), ' `i++` - É executado no final de cada iteração, geralmente para atualizar o contador.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Contar até 5",
            description: "Vamos imprimir os números de 0 a 4 na consola.",
            code: `for (let i = 0; i < 5; i++) {
  console.log("O número é:", i);
}`
          },
          {
            title: "Exemplo 2: O Caso Comum - Percorrer um Array",
            description: "O uso mais comum do ciclo `for` é para iterar sobre os elementos de um array.",
            code: `const frutas = ["Maçã", "Banana", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(\`Fruta na posição \${i}: \${frutas[i]}\`);
}`
          },
          {
            title: "Exemplo 3: A Nuance - Ciclos `for...of` e `for...in`",
            description: "O JavaScript moderno oferece sintaxes mais simples. `for...of` é excelente para percorrer os *valores* de arrays. `for...in` é usado para percorrer as *chaves* (propriedades) de objetos.",
            code: `const cores = ["Vermelho", "Verde", "Azul"];
// for...of (para arrays)
for (const cor of cores) {
  console.log(cor);
}

const carro = { marca: "Ford", modelo: "Mustang" };
// for...in (para objetos)
for (const chave in carro) {
  console.log(\`\${chave}: \${carro[chave]}\`);
}`
          }
        ]
      },
      quiz: [
        {
          question: "No ciclo `for (let i = 0; i < 3; i++)`, quantas vezes o bloco de código será executado?",
          options: ['2 vezes', '3 vezes', '4 vezes', 'Infinitas vezes'],
          correctAnswerIndex: 1,
          explanation: "O ciclo executa para i=0, i=1, e i=2. Quando i se torna 3, a condição `3 < 3` é falsa, e o ciclo termina. Portanto, executa 3 vezes."
        },
        {
          question: "Qual é a melhor forma de percorrer os valores de um array chamado `dados`?",
          options: ['`for (const valor in dados)`', '`for (let i = 0; i <= dados.length; i++)`', '`for (const valor of dados)`', '`for (dados)`'],
          correctAnswerIndex: 2,
          explanation: "O ciclo `for...of` foi especificamente desenhado para iterar sobre os valores de iteráveis como arrays, tornando o código mais limpo e menos propenso a erros."
        }
      ],
      challenge: {
        description: "Dado um array de números, usa um ciclo `for` para calcular a soma de todos os números no array e imprime o resultado final.",
        starterCode: `const numeros = [10, 20, 30, 40];
let soma = 0;

// O teu ciclo for aqui

console.log("A soma é:", soma); // Deve ser 100`,
        solution: `const numeros = [10, 20, 30, 40];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log("A soma é:", soma);`
      }
    },
    {
      id: '3.4',
      title: 'Outros Ciclos: while e do...while',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Além do `for`, existem outros tipos de ciclos que são úteis em situações diferentes.'),
        React.createElement('h3', { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'O Ciclo `while`'),
        React.createElement('p', { className: 'mb-4' }, 'O ciclo `while` (enquanto) é mais simples. Ele executa um bloco de código repetidamente enquanto uma condição for `true`. É ideal quando não sabes de antemão quantas iterações serão necessárias.'),
        React.createElement('p', { className: 'mb-4' }, 'Analogia: Tentar abrir uma fechadura com um molho de chaves. "Enquanto a porta não abrir, tenta a próxima chave."'),
        React.createElement('h3', { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'O Ciclo `do...while`'),
        React.createElement('p', { className: 'mb-4' }, 'O `do...while` é uma variante do `while`. A grande diferença é que a condição é verificada *no final* da iteração. Isto garante que o bloco de código é executado *pelo menos uma vez*, mesmo que a condição seja inicialmente falsa.'),
        React.createElement('p', { className: 'mb-4' }, 'Analogia: Entrar num restaurante. "Pede a comida (executa o bloco uma vez), e depois, enquanto tiveres fome, continua a pedir."')
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Ciclo `while`",
            description: "Vamos simular um jogo onde precisas de um número superior a 8 para ganhar. O ciclo continua até que essa condição seja satisfeita.",
            code: `let numeroAleatorio = 0;

while (numeroAleatorio <= 8) {
  console.log("Número atual:", numeroAleatorio, "- A tentar de novo...");
  numeroAleatorio = Math.floor(Math.random() * 10) + 1;
}

console.log("Ganhaste! O número é:", numeroAleatorio);`
          },
          {
            title: "Exemplo 2: O Caso Comum - `do...while`",
            description: "Um menu de opções é um bom caso de uso. Queres sempre mostrar o menu pelo menos uma vez.",
            code: `let escolha;

do {
  // Num cenário real, isto viria de um prompt() do utilizador
  escolha = prompt("Escolha uma opção (digite 'sair' para terminar):");
  console.log("Você escolheu:", escolha);
} while (escolha !== "sair");

console.log("Programa terminado.");`
          },
          {
            title: "Exemplo 3: A Armadilha - Ciclos Infinitos",
            description: "O maior perigo com `while` e `do...while` é criar um ciclo infinito. Se a condição nunca se tornar falsa, o teu programa vai 'congelar'. Certifica-te sempre de que a variável da condição é atualizada dentro do ciclo.",
            code: `let contador = 0;

// CUIDADO: CICLO INFINITO!
// A variável 'contador' nunca muda, então a condição 'contador < 5' será sempre verdadeira.
/*
while (contador < 5) {
  console.log("Isto nunca vai parar!");
}
*/

// A forma correta:
while (contador < 5) {
  console.log(contador);
  contador++; // Atualizar a variável!
}`
          }
        ]
      },
      quiz: [
        {
          question: "Qual é a principal diferença entre um ciclo `while` e um ciclo `do...while`?",
          options: ['`while` é mais rápido', '`do...while` executa o seu corpo de código pelo menos uma vez', 'Não há diferença', '`while` só funciona com números'],
          correctAnswerIndex: 1,
          explanation: "O `do...while` verifica a condição no final, garantindo uma execução inicial. O `while` verifica no início, o que significa que o seu corpo pode nunca ser executado se a condição for inicialmente falsa."
        },
        {
          question: "O que acontece se a condição de um ciclo `while` for inicialmente `false`?",
          options: ['O ciclo executa uma vez', 'O programa dá um erro', 'O ciclo executa infinitamente', 'O corpo do ciclo nunca é executado'],
          correctAnswerIndex: 3,
          explanation: "Como a condição é avaliada antes da primeira iteração, se ela for falsa, o programa simplesmente salta o bloco de código do ciclo `while` e continua a execução."
        }
      ],
      challenge: {
        description: "Cria um jogo simples de 'Adivinha o Número'. Gera um número secreto entre 1 e 10. Usa um ciclo `while` para continuar a pedir ao utilizador (simulado com uma variável) para adivinhar o número até ele acertar. Mantém um contador de tentativas.",
        starterCode: `const numeroSecreto = 7; // Num jogo real, isto seria aleatório
let tentativa = 0;
let tentativas = 0;

while (tentativa !== numeroSecreto) {
  // Simula uma nova tentativa do utilizador
  tentativa = Math.floor(Math.random() * 10) + 1;
  // O teu código aqui
}

console.log(\`Acertaste em \${tentativas} tentativas! O número era \${numeroSecreto}.\`);`,
        solution: `const numeroSecreto = 7;
let tentativa = 0;
let tentativas = 0;

while (tentativa !== numeroSecreto) {
  tentativa = Math.floor(Math.random() * 10) + 1;
  tentativas++;
  console.log(\`Tentativa \${tentativas}: \${tentativa}\`);
}

console.log(\`Acertaste em \${tentativas} tentativas! O número era \${numeroSecreto}.\`);`
      }
    }
  ]
};
