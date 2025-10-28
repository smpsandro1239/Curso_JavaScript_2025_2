import * as React from 'react';
import type { Module } from '../../types';

export const module2: Module = {
  id: '2',
  title: 'Módulo 2: Variáveis e Tipos de Dados',
  lessons: [
    {
      id: '2.1',
      title: 'Variáveis: var, let e const',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'As variáveis são um dos conceitos fundamentais na programação. Pensa nelas como ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'caixas etiquetadas'),
          ' onde podes guardar informação. Em JavaScript, temos três formas de "criar" estas caixas: ',
          React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'let'),
          ', ',
          React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'const'),
          ', e a mais antiga, ',
          React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'var'),
          '.'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'let'),
            ': Cria uma "caixa normal". Podes guardar algo nela e, mais tarde, ',
            React.createElement('strong', { className: 'text-lightest-slate' }, 'trocar o conteúdo'),
            ' por outra coisa.',
            React.createElement('br'),
            React.createElement('code', { className: 'text-sm text-slate' }, 'let idade = 30; idade = 31; // Funciona!')
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'const'),
            ' (constante): Cria uma "caixa de vidro selada". Podes ver o que está dentro, mas ',
            React.createElement('strong', { className: 'text-lightest-slate' }, 'não podes trocar o conteúdo'),
            ' depois de o teres guardado pela primeira vez. É ideal para valores que não devem mudar, como a data de nascimento ou o valor de PI.',
            React.createElement('br'),
            React.createElement('code', { className: 'text-sm text-slate' }, 'const anoNascimento = 1990; // Tentar mudar daria um erro!')
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'var'),
            ': É a forma antiga de criar caixas. É uma "caixa um pouco estranha e imprevisível". Funciona de forma diferente das outras em termos de "escopo" (onde a variável é visível), o que pode causar erros inesperados. A recomendação moderna é: ',
            React.createElement('strong', { className: 'text-lightest-slate' }, 'evita usar `var`'),
            ' e prefere sempre ',
            React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'let'),
            ' ou ',
            React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'const'),
            '.'
          )
        ),
        React.createElement(
          'p',
          null,
          'A regra geral é: começa por declarar tudo com ',
          React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'const'),
          '. Se perceberes que o valor precisa de ser alterado mais tarde, muda para ',
          React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'let'),
          '.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico",
            description: "Vamos declarar algumas variáveis. `let` para um valor que muda (pontuação num jogo) e `const` para um valor que não muda (nome do jogador).",
            code: `let pontuacao = 100;
console.log("Pontuação inicial:", pontuacao);

pontuacao = 125; // A pontuação aumentou
console.log("Nova pontuação:", pontuacao);

const nomeJogador = "Alex";
console.log("Bem-vindo,", nomeJogador);`
          },
          {
            title: "Exemplo 2: O Caso Comum - Calcular um Total",
            description: "Num cenário de compras, a taxa de IVA é constante, mas o total do carrinho muda à medida que adicionamos produtos. `const` e `let` são perfeitos para isto.",
            code: `const TAXA_IVA = 0.23; // 23%
let totalCarrinho = 150; // Em euros

let valorIva = totalCarrinho * TAXA_IVA;
let totalFinal = totalCarrinho + valorIva;

console.log("Total com IVA:", totalFinal);`
          },
          {
            title: "Exemplo 3: A Armadilha - `const` com Objetos",
            description: "Uma fonte de confusão comum: `const` não torna um objeto imutável. Apenas impede que a variável seja reatribuída para OUTRO objeto. Podes perfeitamente alterar as propriedades do objeto original.",
            code: `const utilizador = { nome: "Ana", idade: 28 };

// Isto funciona perfeitamente!
utilizador.idade = 29;
console.log(utilizador.idade); // 29

// Isto causaria um erro. Descomenta para ver!
// utilizador = { nome: "Rui", idade: 40 }; // TypeError`
          }
        ]
      },
      quiz: [
        {
          question: 'Quando deves usar `const` para declarar uma variável?',
          options: [
            'Sempre que o valor da variável possa mudar.',
            'Apenas para números.',
            'Quando tens a certeza que o valor da variável nunca será reatribuído.',
            'Nunca, `let` é sempre melhor.'
          ],
          correctAnswerIndex: 2,
          explanation: '`const` significa "constante". Usa-se para garantir que a referência a um valor não seja alterada após a sua inicialização, o que torna o código mais seguro e previsível.'
        },
        {
          question: "Qual será o output do código? `let cor = 'azul'; cor = 'verde'; console.log(cor);`",
          options: [
            'azul',
            'verde',
            'undefined',
            'Vai dar erro'
          ],
          correctAnswerIndex: 1,
          explanation: 'A variável `cor` foi declarada com `let`, o que permite que o seu valor seja reatribuído. O `console.log` irá imprimir o valor mais recente, que é "verde".'
        },
        {
          question: "O que acontece ao executar este código? `const animal = 'cão'; animal = 'gato';`",
          options: [
            'A variável `animal` passa a ser "gato".',
            'A variável `animal` fica `undefined`.',
            'O código ignora a segunda linha.',
            'O código produz um erro (TypeError).'
          ],
          correctAnswerIndex: 3,
          explanation: "Uma variável declarada com `const` não pode ser reatribuída. Tentar fazê-lo resulta num `TypeError`, uma das formas do JavaScript nos proteger de erros lógicos."
        },
        {
          question: "Qual é a recomendação moderna sobre o uso de `var`?",
          options: [
            'Usar `var` para todas as variáveis.',
            'Usar `var` para variáveis que mudam e `let` para as que não mudam.',
            'Evitar o uso de `var` e preferir `let` e `const`.',
            '`var`, `let` e `const` são todos iguais.'
          ],
          correctAnswerIndex: 2,
          explanation: "Devido ao seu comportamento com hoisting e escopo, `var` pode levar a bugs difíceis de encontrar. A convenção moderna é usar `let` para variáveis que mudam e `const` para as que não mudam, evitando `var` por completo."
        }
      ],
      challenge: {
        description: "Cria um pequeno programa que calcula o preço final de um produto. Declara o preço base (ex: 50) e a taxa de IVA (ex: 0.23) usando o tipo de variável mais apropriado para cada valor. Depois, calcula e imprime o preço final na consola.",
        starterCode: `// Declara as tuas variáveis aqui

// Calcula o preço final

// Imprime o resultado`,
        solution: `const precoBase = 50;
const taxaIva = 0.23;

const precoFinal = precoBase * (1 + taxaIva);

console.log("O preço final é:", precoFinal);`
      }
    },
    {
      id: '2.2',
      title: 'Tipos de Dados Primitivos',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Se as variáveis são as caixas, os tipos de dados são os ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'diferentes tipos de coisas'),
          ' que podemos guardar dentro delas. JavaScript tem vários tipos de dados "primitivos" (os mais básicos).'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'String'),
            ": Texto. Qualquer coisa entre aspas simples (''), aspas duplas (\"\") ou crases (``). Ex: ",
            React.createElement('code', { className: 'text-sm text-slate' }, '"Olá"'),
            ', ',
            React.createElement('code', { className: 'text-sm text-slate' }, "'JavaScript'")
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Number'),
            ': Números, tanto inteiros como decimais. Ex: ',
            React.createElement('code', { className: 'text-sm text-slate' }, '10'),
            ', ',
            React.createElement('code', { className: 'text-sm text-slate' }, '3.14')
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Boolean'),
            ': Um interruptor de luz. Só pode ter dois valores: ',
            React.createElement('code', { className: 'text-sm text-slate' }, 'true'),
            ' (ligado) ou ',
            React.createElement('code', { className: 'text-sm text-slate' }, 'false'),
            ' (desligado).'
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Undefined'),
            ': Uma caixa que foi criada, mas à qual ainda ',
            React.createElement('strong', { className: 'text-lightest-slate' }, 'não atribuímos nada'),
            '. Está vazia por definição.'
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Null'),
            ': Uma caixa que foi ',
            React.createElement('strong', { className: 'text-lightest-slate' }, 'intencionalmente esvaziada'),
            '. É um programador a dizer "esta caixa está vazia de propósito".'
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Symbol'),
            ' e ',
            React.createElement('strong', { className: 'text-green' }, 'BigInt'),
            ': Tipos mais avançados que verás mais tarde. Não te preocupes com eles por agora.'
          )
        ),
        React.createElement(
          'p',
          { className: 'mt-4' },
          'Podes usar o operador ',
          React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'typeof'),
          ' para verificar o tipo de dado de uma variável.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Declarar e Verificar",
            description: "Vamos criar variáveis para cada tipo de dado primitivo e usar `typeof` para ver o que a consola nos diz sobre cada uma.",
            code: `const nome = "Ana";        // String
const idade = 25;          // Number
const eEstudante = true;   // Boolean
let morada;                // Undefined (não foi atribuído valor)
const carro = null;        // Null (valor nulo intencional)

console.log('Tipo de nome:', typeof nome);
console.log('Tipo de idade:', typeof idade);
console.log('Tipo de eEstudante:', typeof eEstudante);
console.log('Tipo de morada:', typeof morada);`
          },
          {
            title: "Exemplo 2: O Caso Comum - Concatenação de Strings",
            description: "O operador `+` comporta-se de forma diferente com strings e números. Quando usado com uma string, ele 'concatena' (junta) os valores. As crases (``) permitem uma forma mais moderna e legível de o fazer, chamada 'template literals'.",
            code: `const nome = "Alex";
const idade = 30;

// Forma antiga
const bemVindo = "Bem-vindo, " + nome + "!";
console.log(bemVindo);

// Forma moderna (Template Literals)
const perfil = \`O utilizador \${nome} tem \${idade} anos.\`;
console.log(perfil);`
          },
          {
            title: "Exemplo 3: A Armadilha - A Peculiaridade do `typeof null`",
            description: "Por razões históricas, o JavaScript tem uma peculiaridade (quirk) famosa: `typeof null` devolve 'object', não 'null'. É um bug que foi mantido para não quebrar código antigo na web. Lembra-te disto!",
            code: `const valorNulo = null;
console.log(typeof valorNulo); // Output: "object"`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual será o resultado da expressão `typeof 42`?',
          options: [
            '"integer"',
            '"number"',
            '"string"',
            '"float"'
          ],
          correctAnswerIndex: 1,
          explanation: 'Em JavaScript, tanto números inteiros (42) como decimais (3.14) são do tipo "number". Não existe uma distinção entre "integer" e "float" como noutras linguagens.'
        },
        {
          question: 'O que é que a variável `resultado` irá conter? `let resultado;`',
          options: [
            'null',
            '0',
            '"" (string vazia)',
            'undefined'
          ],
          correctAnswerIndex: 3,
          explanation: 'Quando uma variável é declarada com `let` mas não lhe é atribuído um valor, o JavaScript atribui-lhe automaticamente o valor primitivo `undefined`.'
        },
        {
          question: "Qual o output de `console.log('5' + 3);`?",
          options: [
            '8',
            '"53"',
            'undefined',
            'Vai dar erro'
          ],
          correctAnswerIndex: 1,
          explanation: "Quando o operador `+` é usado e um dos operandos é uma string, o JavaScript converte o outro operando para uma string e concatena-os. Assim, 3 torna-se '3', e '5' + '3' resulta em '53'."
        },
        {
            question: "Qual a melhor descrição para a diferença entre `null` e `undefined`?",
            options: [
                "São a mesma coisa.",
                "`null` é um erro, `undefined` não.",
                "`undefined` significa que um valor não foi atribuído, enquanto `null` é uma atribuição intencional de 'nenhum valor'.",
                "`null` é para números e `undefined` para texto."
            ],
            correctAnswerIndex: 2,
            explanation: "Exato. `undefined` é o estado 'padrão' de uma variável vazia. `null` é um valor que o programador atribui para indicar a ausência intencional de um valor de objeto."
        }
      ],
      challenge: {
        description: "Declara 5 variáveis, cada uma com um tipo de dado primitivo diferente: String, Number, Boolean, Null e Undefined. De seguida, usa `console.log()` e o operador `typeof` para imprimir o tipo de cada uma na consola.",
        starterCode: `// Declara as tuas 5 variáveis aqui

// Imprime o tipo de cada uma`,
        solution: `const nome = "JavaScript";
const versao = 2023;
const eDivertido = true;
const valorNulo = null;
let valorIndefinido;

console.log("Tipo de nome:", typeof nome);
console.log("Tipo de versao:", typeof versao);
console.log("Tipo de eDivertido:", typeof eDivertido);
console.log("Tipo de valorNulo:", typeof valorNulo); // Lembra-te da peculiaridade!
console.log("Tipo de valorIndefinido:", typeof valorIndefinido);`
      }
    },
    {
      id: '2.3',
      title: 'Tipos Complexos: Objetos e Arrays',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Além dos tipos primitivos, o JavaScript tem dois tipos de dados complexos que são essenciais: Objetos e Arrays. Eles permitem-nos agrupar e organizar dados de formas mais poderosas.'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Objetos'),
            ': Pensa num objeto como um ',
            React.createElement('strong', { className: 'text-lightest-slate' }, 'cartão de contacto detalhado'),
            '. Em vez de ter variáveis soltas como `nome`, `idade`, `email`, podes agrupar tudo num único "contacto". Objetos usam pares de `chave: valor`.',
            React.createElement('br'),
            React.createElement('code', { className: 'text-sm text-slate' }, "const pessoa = { nome: 'Maria', idade: 28 };")
          ),
          React.createElement(
            'li',
            null,
            React.createElement('strong', { className: 'text-green' }, 'Arrays'),
            ': Pensa num array como uma ',
            React.createElement('strong', { className: 'text-lightest-slate' }, 'lista de compras numerada'),
            '. É uma coleção ordenada de valores. Cada item na lista tem uma posição, chamada de índice, que começa em 0.',
            React.createElement('br'),
            React.createElement('code', { className: 'text-sm text-slate' }, "const compras = ['pão', 'leite', 'ovos'];")
          )
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'A grande vantagem é que podes combinar estes tipos. Um objeto pode ter um array como valor de uma das suas chaves (ex: uma lista de hobbies de uma pessoa), e um array pode conter objetos (ex: uma lista de contactos).'
        ),
         React.createElement(
          'p',
          null,
          'Para aceder aos dados, usamos a notação de ponto (`.`) ou de parênteses retos (`[]`) para objetos, e a notação de parênteses retos com o índice para arrays.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Utilizador e Tarefas",
            description: 'Vamos criar um objeto para descrever um utilizador e um array para a sua lista de tarefas. Depois, acederemos a partes específicas dessa informação.',
            code: `const utilizador = {
  nome: "Carlos",
  idade: 35,
  isAdmin: true,
  tarefas: ["Responder emails", "Reunião às 15h", "Regar as plantas"]
};

// Aceder com notação de ponto
console.log("Nome do utilizador:", utilizador.nome);

// Aceder a um item do array dentro do objeto
console.log("A primeira tarefa é:", utilizador.tarefas[0]);`
          },
          {
            title: "Exemplo 2: O Caso Comum - Lista de Produtos",
            description: "Um caso de uso muito comum é ter um array onde cada elemento é um objeto. Isto permite-nos representar listas de dados complexos, como um catálogo de produtos.",
            code: `const produtos = [
  { id: 1, nome: "Portátil", preco: 1200 },
  { id: 2, nome: "Rato", preco: 25 },
  { id: 3, nome: "Teclado", preco: 80 }
];

// Aceder ao segundo produto na lista
const segundoProduto = produtos[1];
console.log("O segundo produto é:", segundoProduto.nome);
console.log("O seu preço é:", segundoProduto.preco);`
          },
          {
            title: "Exemplo 3: A Nuance - Notação de Ponto vs. Parênteses Retos",
            description: "Podes aceder a propriedades de objetos com `objeto.propriedade` ou `objeto['propriedade']`. A segunda forma é útil quando o nome da propriedade está numa variável ou contém caracteres especiais.",
            code: `const carro = {
  marca: "Ford",
  "ano de fabrico": 2021
};

// Notação de ponto funciona para nomes simples
console.log("Marca:", carro.marca);

// Para propriedades com espaços, temos de usar parênteses retos
console.log("Ano:", carro["ano de fabrico"]);

// Também funciona com variáveis
const propriedadeAProcurar = "marca";
console.log("Acedido via variável:", carro[propriedadeAProcurar]);`
          }
        ]
      },
      quiz: [
        {
          question: "Dado o array `const cores = ['vermelho', 'verde', 'azul'];`, como acederias à cor 'verde'?",
          options: [
            'cores(1)',
            'cores.1',
            'cores[1]',
            'cores{"verde"}'
          ],
          correctAnswerIndex: 2,
          explanation: "Correto! Arrays em JavaScript usam índices numéricos que começam em 0. Para aceder ao segundo elemento ('verde'), usamos o índice 1 com parênteses retos: `cores[1]`."
        },
        {
          question: "Dado o objeto `const user = { nome: 'Rui' };`, como acedes ao seu nome?",
          options: [
            'user[0]',
            'user.get("nome")',
            'user["nome"]',
            'user(nome)'
          ],
          correctAnswerIndex: 2,
          explanation: "Tanto `user.nome` como `user['nome']` funcionariam. A notação de parênteses retos é uma das formas corretas de aceder a propriedades de um objeto."
        },
        {
          question: 'Qual é o índice do primeiro elemento de um array?',
          options: [
            '1',
            'primeiro',
            'A',
            '0'
          ],
          correctAnswerIndex: 3,
          explanation: 'Em JavaScript, como na maioria das linguagens de programação, a contagem dos índices de arrays começa em 0. O primeiro elemento está sempre no índice 0.'
        },
        {
          question: "Como adicionarias o número 4 ao final do array `const nums = [1, 2, 3];`?",
          options: [
            'nums.add(4);',
            'nums.push(4);',
            'nums[4] = 4;',
            'nums += 4;'
          ],
          correctAnswerIndex: 1,
          explanation: "O método `.push()` é usado para adicionar um ou mais elementos ao final de um array."
        }
      ],
      challenge: {
        description: "Cria um objeto chamado `livro`. Este objeto deve ter as seguintes propriedades: `titulo` (string), `autor` (string), `anoPublicacao` (number), e `generos` (um array de strings com pelo menos dois géneros). Depois, imprime o título do livro e o primeiro género da lista na consola.",
        starterCode: `// Cria o teu objeto 'livro' aqui

// Imprime a informação pedida`,
        solution: `const livro = {
  titulo: "A Descoberta do JavaScript",
  autor: "Alex Coder",
  anoPublicacao: 2024,
  generos: ["Técnico", "Aventura"]
};

console.log("Título:", livro.titulo);
console.log("Primeiro Género:", livro.generos[0]);`
      }
    },
    {
      id: '2.4',
      title: 'Operadores Aritméticos e de Atribuição',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Agora que temos dados nas nossas "caixas" (variáveis), precisamos de formas de os manipular. Os operadores são as ferramentas para isso.'
        ),
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'Operadores Aritméticos'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Funcionam como a tua calculadora básica:'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '+'), ' (Soma)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '-'), ' (Subtração)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '*'), ' (Multiplicação)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '/'), ' (Divisão)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '%'), ' (Módulo - o resto de uma divisão)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '**'), ' (Exponenciação - ex: 2 ** 3 é 8)')
        ),
         React.createElement(
          'h3',
          { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'Operadores de Atribuição'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'São atalhos úteis para modificar o valor de uma variável. Em vez de dizer "o novo valor do cesto é o valor antigo mais 5", dizes apenas "adiciona 5 ao cesto".'
        ),
         React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'x += y'), ' é o mesmo que ', React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'x = x + y')),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'x -= y'), ' é o mesmo que ', React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'x = x - y')),
          React.createElement('li', null, '(e assim por diante para *, /, % e **)')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Calculadora Simples",
            description: 'Vamos fazer umas contas simples e ver os atalhos de atribuição em ação.',
            code: `let a = 10;
let b = 3;

console.log("Soma:", a + b);       // 13
console.log("Resto da divisão (módulo):", a % b); // 1

let pontuacao = 100;
pontuacao += 50; // Adiciona 50 à pontuação
console.log("Nova pontuação:", pontuacao); // 150`
          },
          {
            title: "Exemplo 2: O Caso Comum - Ordem das Operações",
            description: "O JavaScript respeita a ordem matemática das operações (primeiro exponenciação, depois multiplicação/divisão, depois soma/subtração). Podes usar parênteses `()` para forçar uma ordem diferente.",
            code: `let resultado1 = 5 + 3 * 2; // 5 + 6
console.log("Sem parênteses:", resultado1); // 11

let resultado2 = (5 + 3) * 2; // 8 * 2
console.log("Com parênteses:", resultado2); // 16`
          },
          {
            title: "Exemplo 3: A Nuance - Incremento e Decremento",
            description: "Existem atalhos ainda mais curtos para adicionar ou subtrair 1: `++` (incremento) e `--` (decremento). São muito comuns em ciclos (loops).",
            code: `let vidas = 3;
console.log("Vidas iniciais:", vidas);

vidas--; // O jogador perdeu uma vida
console.log("Vidas restantes:", vidas); // 2

vidas++; // O jogador ganhou uma vida
console.log("Vidas agora:", vidas); // 3`
          }
        ]
      },
      quiz: [
        {
          question: "Qual o valor final da variável 'pontos'? `let pontos = 50; pontos -= 10;`",
          options: [
            '50',
            '10',
            '60',
            '40'
          ],
          correctAnswerIndex: 3,
          explanation: "`pontos -= 10;` é um atalho para `pontos = pontos - 10;`. Logo, o cálculo é 50 - 10, que resulta em 40."
        },
        {
          question: "Qual o resultado de `10 % 3`?",
          options: [
            '1',
            '3',
            '3.33',
            '0'
          ],
          correctAnswerIndex: 0,
          explanation: "O operador módulo (`%`) devolve o resto de uma divisão. 10 a dividir por 3 é 3, com um resto de 1."
        },
        {
          question: "Qual o valor final de `x`? `let x = 5; x++;`",
          options: [
            '5',
            '4',
            '6',
            'undefined'
          ],
          correctAnswerIndex: 2,
          explanation: "O operador de incremento `++` adiciona 1 ao valor da variável. Assim, `x` passa de 5 para 6."
        },
        {
          question: "Qual o valor final de `total`? `let total = 15; total %= 4;`",
          options: [
            '3.75',
            '4',
            '3',
            '1'
          ],
          correctAnswerIndex: 2,
          explanation: "O operador `%=` calcula o resto da divisão de `total` por 4 e atribui o resultado de volta a `total`. 15 dividido por 4 dá 3, com um resto de 3."
        }
      ],
      challenge: {
        description: "Calcula a área de um círculo. Guarda o valor de PI (3.14159) numa constante e o raio (ex: 5) noutra. A fórmula é `Área = PI * raio²`. Imprime o resultado na consola. (Dica: `raio²` pode ser escrito como `raio * raio` ou `raio ** 2`).",
        starterCode: `const PI = 3.14159;
const raio = 5;

// Calcula a área aqui
let area;

console.log("A área do círculo é:", area);`,
        solution: `const PI = 3.14159;
const raio = 5;

const area = PI * raio ** 2;

console.log("A área do círculo é:", area);`
      }
    },
     {
      id: '2.5',
      title: 'Operadores de Comparação e Lógicos',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Estes operadores são a base da tomada de decisões no código. Eles não devolvem números, mas sim um booleano: `true` ou `false`.'
        ),
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'Operadores de Comparação'
        ),
         React.createElement(
          'p',
          { className: 'mb-4' },
          'É como fazer uma pergunta de "sim" ou "não" ao computador:'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '>'), ' (Maior que), ', React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '<'), ' (Menor que)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '>='), ' (Maior ou igual), ', React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '<='), ' (Menor ou igual)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '==='), ' (Igualdade Estrita - compara valor E tipo)'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '!=='), ' (Diferença Estrita - compara valor E tipo)')
        ),
        React.createElement(
          'p',
          { className: 'mt-2 mb-4 p-4 bg-lightest-navy rounded-md text-sm text-light-slate border-l-4 border-yellow-400' },
          React.createElement('strong', { className: 'font-bold text-yellow-300' }, 'Atenção: '), 'Usa sempre `===` e `!==` (igualdade estrita) em vez de `==` e `!=`. Os últimos tentam converter os tipos antes de comparar (ex: `5 == "5"` é `true`), o que pode causar erros inesperados.'
        ),
         React.createElement(
          'h3',
          { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'Operadores Lógicos'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Servem para combinar várias condições. Pensa num segurança de uma discoteca: "És maior de 18 (condição 1) E (&&) tens o nome na lista (condição 2)?"'
        ),
         React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '&&'), ' (E / AND) - Ambas as condições têm de ser `true`.'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '||'), ' (OU / OR) - Pelo menos uma condição tem de ser `true`.'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '!'), ' (NÃO / NOT) - Inverte o valor booleano (`!true` é `false`).')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Controlo de Acesso",
            description: 'Vamos testar se um utilizador tem idade para entrar num local e se tem bilhete.',
            code: `const idade = 20;
const temBilhete = true;

const podeEntrar = idade >= 18 && temBilhete;
console.log("Pode entrar na festa?", podeEntrar); // true`
          },
          {
            title: "Exemplo 2: O Caso Comum - Descontos",
            description: 'Um cinema dá desconto a crianças (menores de 12) ou a idosos (maiores de 65). O operador OU (`||`) é perfeito para isto.',
            code: `const idadeCliente = 70;

const temDesconto = idadeCliente < 12 || idadeCliente > 65;
console.log("Cliente tem direito a desconto?", temDesconto); // true`
          },
          {
            title: "Exemplo 3: A Armadilha - Igualdade Estrita (`===`) vs. Lassa (`==`)",
            description: "Este é um dos erros mais comuns em iniciantes. `==` tenta converter os tipos, o que pode levar a resultados inesperados. `===` é mais seguro porque compara o valor E o tipo.",
            code: `console.log("5 === 5:", 5 === 5);       // true (number === number)
console.log("5 === '5':", 5 === '5');   // false (number !== string)

console.log("-----");

console.log("5 == 5:", 5 == 5);         // true
console.log("5 == '5':", 5 == '5');     // true (perigoso! '5' é convertido para 5)`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual o resultado da expressão: `(10 > 5) && ("a" === "b")`?',
          options: [
            'true',
            'false',
            'undefined',
            'Vai dar erro'
          ],
          correctAnswerIndex: 1,
          explanation: "A primeira parte, `(10 > 5)`, é `true`. A segunda parte, `(\"a\" === \"b\")`, é `false`. A expressão final torna-se `true && false`, e o operador `&&` (E) só retorna `true` se ambos os lados forem `true`. Portanto, o resultado é `false`."
        },
        {
          question: "Qual o resultado de `true || false`?",
          options: [
            'true',
            'false',
            'undefined',
            'true false'
          ],
          correctAnswerIndex: 0,
          explanation: "O operador OU (`||`) retorna `true` se pelo menos um dos seus operandos for `true`. Como o primeiro já é `true`, o resultado é `true`."
        },
        {
          question: "Qual operador de igualdade é recomendado usar e porquê?",
          options: [
            '`==`, porque é mais flexível.',
            '`===`, porque compara valor e tipo, evitando conversões inesperadas.',
            'Ambos são iguais, não faz diferença.',
            '`!=`, porque é mais rápido.'
          ],
          correctAnswerIndex: 1,
          explanation: "A igualdade estrita (`===`) é a escolha mais segura e previsível. Evita a coerção de tipo, uma fonte comum de bugs, garantindo que estás a comparar exatamente o que pretendes."
        },
         {
          question: "O que faz o operador `!` (NÃO)?",
          options: [
            'Compara se dois valores são diferentes.',
            'Inverte um valor booleano.',
            'Causa um erro.',
            'Verifica se um valor é nulo.'
          ],
          correctAnswerIndex: 1,
          explanation: "O operador `!` é o operador de negação lógica. Ele inverte o valor booleano: `!true` torna-se `false`, e `!false` torna-se `true`."
        }
      ],
      challenge: {
        description: "Uma loja online oferece portes grátis se o valor da compra for superior a 50€ OU se o cliente for um membro 'Premium'. Cria variáveis para `valorCompra` e `eMembroPremium` (booleano). Escreve uma única expressão lógica que resulte em `true` se o cliente tiver portes grátis e `false` caso contrário. Testa com diferentes valores.",
        starterCode: `const valorCompra = 60;
const eMembroPremium = false;

// Escreve a tua expressão lógica aqui
const portesGratis = /* a tua condição */;

console.log("Portes grátis?", portesGratis);`,
        solution: `const valorCompra = 60;
const eMembroPremium = false;

const portesGratis = valorCompra > 50 || eMembroPremium;

console.log("Portes grátis?", portesGratis);`
      }
    },
    {
      id: '2.6',
      title: 'Aprofundando: Hoisting',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Hoisting (içamento) é um comportamento do JavaScript que pode parecer estranho no início, mas é crucial para entender como o código é executado. É um dos motivos pelos quais preferimos `let` e `const` em vez de `var`.'),
        React.createElement('p', { className: 'mb-4' }, 'Imagine que o interpretador de JavaScript lê o teu código em duas passagens. Na primeira, ele "iça" (hoists) todas as declarações de variáveis com `var` e declarações de funções para o topo do seu escopo (seja global ou de uma função).'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Com `var`'), ': Apenas a ', React.createElement('strong', { className: 'text-lightest-slate' }, 'declaração'), ' da variável é içada, não a sua atribuição de valor. A variável é inicializada com `undefined` por defeito. É como se o JS dissesse: "Eu sei que esta caixa existe, mas ainda não sei o que tem dentro".'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Com `let` e `const`'), ': Estas variáveis também são "içadas", mas de forma diferente. Elas não são inicializadas. Tentar acedê-las antes da sua declaração resulta num erro (`ReferenceError`). A zona entre o início do escopo e a declaração da variável é chamada de ', React.createElement('strong', { className: 'text-lightest-slate' }, 'Temporal Dead Zone (TDZ)'), '.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Declarações de Funções'), ': São içadas por completo, tanto o nome como o corpo da função. Podes chamar uma função antes de a teres escrito no código.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - Hoisting com `var`",
            description: 'Vamos ver o hoisting em ação. Presta atenção como `nome` é `undefined` na primeira linha, mas não dá erro.',
            code: `console.log(nome); // Output: undefined
var nome = "Ana";
console.log(nome); // Output: "Ana"

/* O que o JS "vê" é algo como isto:
var nome;
console.log(nome);
nome = "Ana";
console.log(nome);
*/`
          },
          {
            title: "Exemplo 2: O Caso Seguro - `let` e a Temporal Dead Zone",
            description: "Tentar fazer o mesmo com `let` resulta num erro. Isto é bom! O JavaScript está a proteger-nos de usar uma variável antes de ela ser devidamente declarada.",
            code: `// A linha abaixo está comentada porque causaria um erro.
// console.log(idade); // ReferenceError: Cannot access 'idade' before initialization

let idade = 30;
console.log("Idade é:", idade);`
          },
          {
            title: "Exemplo 3: A Magia - Hoisting de Funções",
            description: "As declarações de função (`function nome() {}`) são totalmente içadas. Isto permite-nos organizar o código de forma mais legível, com as funções de mais alto nível no início e os detalhes da implementação mais abaixo.",
            code: `// Podemos chamar a função antes de a declarar
iniciarPrograma();

function iniciarPrograma() {
  console.log("Programa iniciado!");
  saudar();
}

function saudar() {
  console.log("Olá, mundo!");
}`
          }
        ]
      },
      quiz: [
        {
          question: "Qual será o output do código: `console.log(minhaVar); var minhaVar = 'Olá';`?",
          options: [
            "'Olá'",
            'ReferenceError: minhaVar is not defined',
            'undefined',
            'null'
          ],
          correctAnswerIndex: 2,
          explanation: 'Devido ao hoisting, a declaração `var minhaVar` é movida para o topo do escopo, mas a atribuição ` = \'Olá\'` não. A variável existe quando `console.log` é chamado, mas o seu valor é `undefined`.'
        },
        {
          question: "O que é a Temporal Dead Zone (TDZ)?",
          options: [
            'Um erro que acontece quando usas `var`.',
            'O período entre o início de um escopo e a declaração de uma variável `let` ou `const`, onde a variável não pode ser acedida.',
            'Uma funcionalidade que atrasa a execução do código.',
            'Um nome antigo para o escopo global.'
          ],
          correctAnswerIndex: 1,
          explanation: 'A TDZ é a razão pela qual `let` e `const` são mais seguros. Elas forçam-nos a declarar uma variável antes de a podermos usar, evitando erros relacionados com o hoisting.'
        },
        {
          question: "O que acontece com as arrow functions atribuídas a uma variável (`const fn = () => {}`) em relação ao hoisting?",
          options: [
            'São totalmente içadas, como as declarações de função.',
            'Não são içadas de todo.',
            'A variável é içada, mas o seu valor (a função) é `undefined` até à atribuição (no caso de `var`) ou inacessível (no caso de `let`/`const`).',
            'Causam sempre um erro.'
          ],
          correctAnswerIndex: 2,
          explanation: 'Excelente pergunta! Elas seguem as regras da variável (`let`/`const`/`var`). Se usares `const fn = ...`, a variável `fn` será içada mas ficará na TDZ, dando um `ReferenceError`. Se usares `var fn = ...`, `fn` será `undefined` até à linha da atribuição, dando um `TypeError` se tentares chamá-la. Só `function fn() {}` é que é içada por completo.'
        },
        {
          question: "O que será impresso? `dizerAdeus(); const dizerAdeus = () => { console.log('Adeus'); };`",
          options: [
            "`Adeus`",
            "`undefined`",
            "`ReferenceError`",
            "`TypeError`"
          ],
          correctAnswerIndex: 2,
          explanation: "A variável `dizerAdeus` foi declarada com `const`, por isso ela é içada mas permanece na Temporal Dead Zone (TDZ) até à sua linha de declaração. Tentar chamá-la antes disso resulta num `ReferenceError`."
        }
      ],
      challenge: {
        description: "O código abaixo não funciona por causa do hoisting. Reorganiza o código para que ele imprima a mensagem 'O meu animal favorito é o cão.' sem alterar a lógica fundamental.",
        starterCode: `imprimirAnimalFavorito();

const animal = "cão";

const imprimirAnimalFavorito = () => {
  console.log("O meu animal favorito é o " + animal);
};`,
        solution: `// Solução 1: Mover a chamada para o fim
const animal = "cão";

const imprimirAnimalFavorito = () => {
  console.log("O meu animal favorito é o " + animal);
};

imprimirAnimalFavorito();

// Solução 2: Mudar para uma declaração de função (que é içada)
const animal2 = "gato";

imprimirAnimalFavorito2();

function imprimirAnimalFavorito2() {
  console.log("O meu animal favorito é o " + animal2);
}`
      }
    },
    {
      id: '2.7',
      title: 'Aprofundando: Valor vs. Referência',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Este é um dos conceitos mais importantes e que mais confusão causa no início. A forma como o JavaScript lida com variáveis depende do seu tipo.'
        ),
        React.createElement('h3', { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'Tipos Primitivos (Passagem por Valor)'),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Quando atribuis um tipo primitivo (`String`, `Number`, `Boolean`, etc.) a outra variável, o JavaScript cria uma ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'cópia do valor'),
          '. As duas variáveis ficam completamente independentes.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          React.createElement('strong', { className: 'text-green' }, 'Analogia:'), ' É como dar a alguém uma ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'fotocópia de um documento'),
          '. Eles podem rabiscar à vontade na sua cópia que o teu documento original permanece intacto.'
        ),
        React.createElement('h3', { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'Tipos Complexos (Passagem por Referência)'),
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Quando trabalhas com `Objetos` ou `Arrays`, as coisas mudam. Ao atribuir um objeto/array a outra variável, não estás a criar uma cópia. Estás a copiar a ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'referência'),
          ' — o "endereço" na memória onde o objeto/array original está guardado.'
        ),
        React.createElement(
          'p',
          { className: 'mb-4' },
          React.createElement('strong', { className: 'text-green' }, 'Analogia:'), ' É como partilhar um ',
          React.createElement('strong', { className: 'text-lightest-slate' }, 'link para um Google Doc'),
          '. Ambas as pessoas (variáveis) estão a olhar e a editar o mesmo documento. Uma alteração feita por uma é imediatamente visível pela outra.'
        ),
        React.createElement(
          'p',
          null,
          'Isto é especialmente crucial quando passas objetos ou arrays como argumentos para funções.'
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - A Diferença na Prática",
            description: 'Vamos ver a diferença na prática. Primeiro, com um número (primitivo) e depois com um objeto. Repara como o original se comporta de forma diferente em cada caso.',
            code: `// Exemplo com Valor (Primitivo)
let a = 10;
let b = a; // 'b' é uma cópia de 'a'
b = 20;

console.log("a:", a); // 10 (não foi afetado)
console.log("b:", b); // 20

// Exemplo com Referência (Objeto)
const obj1 = { valor: 10 };
const obj2 = obj1; // 'obj2' aponta para o MESMO objeto que 'obj1'
obj2.valor = 20;

console.log("obj1.valor:", obj1.valor); // 20 (foi afetado!)
console.log("obj2.valor:", obj2.valor); // 20`
          },
          {
            title: "Exemplo 2: O Caso Comum - Funções que Modificam Objetos",
            description: 'Este comportamento é muito importante ao passar dados para funções. Uma função pode modificar um objeto ou array que lhe é passado.',
            code: `const utilizador = { nome: "Alex", hobbies: ["jogar"] };

function adicionarHobby(user, novoHobby) {
  // 'user' aponta para o MESMO objeto que 'utilizador'
  user.hobbies.push(novoHobby);
}

adicionarHobby(utilizador, "ler");
console.log("Hobbies do utilizador:", utilizador.hobbies);
// O original foi modificado! O output será ['jogar', 'ler']`
          },
          {
            title: "Exemplo 3: A Armadilha - Comparar Objetos",
            description: "Como as variáveis de objetos guardam referências, compará-las com `===` verifica se apontam para o mesmo local na memória, não se têm as mesmas propriedades. Dois objetos podem parecer idênticos, mas se forem criados separadamente, não são `===`.",
            code: `const pessoa1 = { nome: "Ana" };
const pessoa2 = { nome: "Ana" };
const pessoa3 = pessoa1;

console.log("pessoa1 === pessoa2:", pessoa1 === pessoa2); // false
console.log("pessoa1 === pessoa3:", pessoa1 === pessoa3); // true`
          }
        ]
      },
      quiz: [
        {
          question: "O que será impresso na consola no final? `const meuCarro = { cor: 'azul' }; function pintar(carro) { carro.cor = 'vermelho'; } pintar(meuCarro); console.log(meuCarro.cor);`",
          options: [
            "'azul'",
            "'vermelho'",
            'undefined',
            'Vai dar erro'
          ],
          correctAnswerIndex: 1,
          explanation: "Quando `meuCarro` é passado para a função `pintar`, é a referência (o 'endereço') do objeto que é passada. A função usa essa referência para modificar a propriedade `cor` do objeto original. Por isso, a mudança é visível fora da função."
        },
        {
          question: "Qual o output? `let x = 50; let y = x; y = 100; console.log(x);`",
          options: [
            '100',
            '50',
            'undefined',
            'Vai dar erro'
          ],
          correctAnswerIndex: 1,
          explanation: "`Number` é um tipo primitivo. Quando `y = x` é executado, `y` recebe uma cópia do valor de `x`. Alterar `y` mais tarde não tem qualquer efeito sobre a variável original `x`."
        },
        {
          question: "Qual o output? `const arr1 = [1, 2]; const arr2 = arr1; arr2.push(3); console.log(arr1);`",
          options: [
            '[1, 2]',
            '[1, 2, 3]',
            '[3]',
            'Vai dar erro'
          ],
          correctAnswerIndex: 1,
          explanation: "Arrays são objetos (passados por referência). `arr2` e `arr1` apontam para o mesmo array na memória. Quando `arr2.push(3)` modifica o array, a mudança é visível através de ambas as variáveis."
        },
        {
          question: "O que será impresso? `let idade = 30; function celebrarAniversario(num) { num += 1; } celebrarAniversario(idade); console.log(idade);`",
          options: [
            "`31`",
            "`30`",
            "`undefined`",
            "Vai dar erro"
          ],
          correctAnswerIndex: 1,
          explanation: "`idade` é um tipo primitivo (Number). Quando é passada para `celebrarAniversario`, o seu valor é copiado para o parâmetro `num`. A alteração `num += 1` afeta apenas a cópia local, não a variável original `idade`."
        }
      ],
      challenge: {
        description: "Dado o array `original`, cria uma cópia exata chamada `copia` que seja independente do original. Depois, adiciona um novo item à `copia`. Finalmente, imprime ambos os arrays na consola para provar que o `original` não foi modificado. (Dica: o operador spread `...` é ótimo para isto).",
        starterCode: `const original = ["maçã", "banana"];

// Cria a cópia aqui

// Modifica a cópia aqui

// Imprime os dois arrays`,
        solution: `const original = ["maçã", "banana"];

const copia = [...original];

copia.push("laranja");

console.log("Original:", original); // ["maçã", "banana"]
console.log("Cópia:", copia); // ["maçã", "banana", "laranja"]`
      }
    },
    {
      id: '2.8',
      title: 'Aprofundando: Coerção de Tipos',
      theory: React.createElement(
          'div',
          null,
          React.createElement('p', { className: 'mb-4' }, 'A coerção de tipos (Type Coercion) é um dos comportamentos mais "mágicos" e, ao mesmo tempo, perigosos do JavaScript. Acontece quando a linguagem tenta converter automaticamente um tipo de dado noutro para que uma operação faça sentido.'),
          React.createElement('p', { className: 'mb-4' }, 'Imagina que pedes a um chef para "juntar 5 e maçã". Ele pode ficar confuso. O JavaScript, em vez de parar, tenta adivinhar o que queres dizer. Neste caso, ele transforma o 5 num texto e junta-o, resultando em "5maçã".'),
          React.createElement('h3', { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'Igualdade Lassa (`==`) vs. Estrita (`===`)'),
          React.createElement('p', { className: 'mb-4' }, 'Esta é a área onde a coerção mais causa problemas. O operador `==` (igualdade lassa) permite a coerção de tipos, enquanto o `===` (igualdade estrita) não. Ele verifica se o valor E o tipo são idênticos.'),
          React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
            React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '5 == "5"'), ' é `true` (o JS converte a string "5" para o número 5).'),
            React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '5 === "5"'), ' é `false` (o JS vê que um é `number` e o outro é `string`).')
          ),
          React.createElement('p', { className: 'p-4 bg-lightest-navy rounded-md text-sm text-light-slate border-l-4 border-yellow-400' },
            React.createElement('strong', { className: 'font-bold text-yellow-300' }, 'Regra de Ouro: '), 'Usa sempre `===` e `!==`. Evita `==` e `!=` a todo o custo para escreveres código mais previsível e seguro.')
      ),
      practice: {
          examples: [
              {
                  title: "Exemplo 1: O Básico - O Problema do `==`",
                  description: 'Vamos ver lado a lado a diferença entre a igualdade lassa e a estrita. Repara como `==` pode dar resultados que não esperas, especialmente com `true`, `1`, `0` e `false`.',
                  code: `console.log("5 == '5':", 5 == '5');     // true
console.log("5 === '5':", 5 === '5');   // false

console.log("1 == true:", 1 == true);     // true
console.log("1 === true:", 1 === true);   // false

console.log("0 == false:", 0 == false);   // true
console.log("0 === false:", 0 === false); // false`
              },
              {
                  title: "Exemplo 2: O Caso Comum - Coerção com Operadores",
                  description: "A coerção não acontece só com `==`. O operador `+` tende a converter para string, enquanto outros operadores matemáticos (`-`, `*`, `/`) tendem a converter para número.",
                  code: `// O '+' favorece a string
console.log('O ano é ' + 2024); // "O ano é 2024"

// Outros operadores favorecem o número
console.log('10' - 5);   // 5
console.log('10' * 2);   // 20
console.log('10' / 2);   // 5`
              },
              {
                  title: "Exemplo 3: A Armadilha - Casos Estranhos",
                  description: "O JavaScript tem alguns resultados de coerção que se tornaram famosos (e são ótimas perguntas de entrevista). Não precisas de os decorar, apenas de entender que a coerção pode ser imprevisível.",
                  code: `console.log("[] + []:", [] + []); // "" (string vazia)
console.log("[] + {}:", [] + {}); // "[object Object]"
console.log("{} + []:", {} + []); // 0 (em alguns ambientes)

console.log("null == undefined:", null == undefined); // true (único caso onde \`==\` é por vezes útil)
console.log("null === undefined:", null === undefined); // false`
              }
          ]
      },
      quiz: [
          {
              question: "Qual será o resultado de `true + false`?",
              options: [
                  '`true`',
                  '`false`',
                  '`1`',
                  'Vai dar erro'
              ],
              correctAnswerIndex: 2,
              explanation: 'Ao usar o operador `+`, o JavaScript coage os booleanos para números: `true` torna-se `1` e `false` torna-se `0`. Portanto, a operação é `1 + 0`, que resulta em `1`.'
          },
          {
              question: "Qual o output de `if (' ') { console.log('Olá'); }`?",
              options: [
                  "'Olá'",
                  "Nada",
                  "Vai dar erro",
                  "false"
              ],
              correctAnswerIndex: 0,
              explanation: "Uma string que contém apenas um espaço não é uma string vazia. Portanto, é 'truthy'. A condição do `if` é verdadeira e 'Olá' é impresso."
          },
          {
              question: "Qual o resultado de `'5' - 3`?",
              options: [
                  "'53'",
                  "2",
                  "8",
                  "NaN (Not a Number)"
              ],
              correctAnswerIndex: 1,
              explanation: "O operador de subtração `-` força a coerção de ambos os operandos para o tipo `Number`. A string '5' é convertida para o número 5, e a operação `5 - 3` resulta em 2."
          }
      ],
      challenge: {
          description: "Prevê o resultado booleano (`true` ou `false`) de cada uma das seguintes comparações. Escreve a tua previsão e depois corre o código para verificar. Tenta explicar o porquê de cada resultado.",
          starterCode: `console.log("[] == 0:", [] == 0);             // Previsão: ?
console.log("[] === 0:", [] === 0);            // Previsão: ?
console.log("'\\n' == 0:", '\\n' == 0);       // Previsão: ? (\\n é uma nova linha)
console.log("true == '1':", true == '1');     // Previsão: ?
console.log("false == '0':", false == '0');   // Previsão: ?`,
          solution: `// Resultados e Explicações:
// [] == 0:             -> true. O array vazio é coagido para a string vazia "", que é coagida para o número 0.
// [] === 0:            -> false. O tipo 'object' (array) não é o mesmo que 'number'.
// '\\n' == 0:         -> true. A string de nova linha '\\n' é coagida para 0.
// true == '1':       -> true. \`true\` é coagido para 1, '1' é coagido para 1.
// false == '0':      -> true. \`false\` é coagido para 0, '0' é coagido para 0.`
      }
    }
  ]
};
