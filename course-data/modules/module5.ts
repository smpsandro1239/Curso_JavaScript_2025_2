import * as React from 'react';
import type { Module } from '../../types';

const ArrayMethodsIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 300 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-xl h-auto text-lightest-slate" },
  // Map
  React.createElement(
    'g',
    { transform: "translate(10, 10)" },
    React.createElement('rect', { width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('circle', { cx: "20", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('path', { d: "M 30 30 H 50", stroke: "#64ffda", strokeWidth: "1", strokeDasharray: "2,2" }),
    React.createElement('rect', { x: "55", y: "25", width: "10", height: "10", fill: "#64ffda" }),
    React.createElement('text', { x: "40", y: "70", textAnchor: "middle", fontSize: "10", fill: "#ccd6f6", fontWeight: "bold" }, ".map()"),
    React.createElement('text', { x: "40", y: "85", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "(Transforma)")
  ),
  // Filter
  React.createElement(
    'g',
    { transform: "translate(110, 10)" },
    React.createElement('rect', { width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('circle', { cx: "20", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('rect', { x: "25", y: "50", width: "10", height: "10", fill: "#64ffda" }),
    React.createElement('path', { d: "M 20 30 L 50 30 L 50 60 L 45 60", stroke: "#a8b2d1", strokeWidth: "1", fill: "none" }),
    React.createElement('path', { d: "M 30 55 L 60 55", stroke: "#64ffda", strokeWidth: "1", fill: "none" }),
    React.createElement('line', { x1: "45", y1: "20", x2: "45", y2: "70", stroke: "#233554", strokeWidth: "2" }),
    React.createElement('text', { x: "40", y: "70", textAnchor: "middle", fontSize: "10", fill: "#ccd6f6", fontWeight: "bold" }, ".filter()"),
    React.createElement('text', { x: "40", y: "85", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "(Seleciona)")
  ),
  // Reduce
  React.createElement(
    'g',
    { transform: "translate(210, 10)" },
    React.createElement('rect', { width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('circle', { cx: "20", cy: "20", r: "5", fill: "#a8b2d1" }),
    React.createElement('rect', { x: "25", y: "30", width: "10", height: "10", fill: "#64ffda" }),
    React.createElement('circle', { cx: "35", cy: "50", r: "5", fill: "#a8b2d1" }),
    React.createElement('path', { d: "M 20 20 L 40 40 M 30 35 L 40 40 M 35 50 L 40 40", stroke: "#233554", strokeWidth: "1" }),
    React.createElement('path', { d: "M 40 40 H 60", stroke: "#64ffda", strokeWidth: "1" }),
    React.createElement('rect', { x: "65", y: "35", width: "5", height: "10", fill: "#64ffda" }),
    React.createElement('text', { x: "40", y: "70", textAnchor: "middle", fontSize: "10", fill: "#ccd6f6", fontWeight: "bold" }, ".reduce()"),
    React.createElement('text', { x: "40", y: "85", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "(Combina)")
  )
);

export const module5: Module = {
  id: '5',
  title: 'Módulo 5: Tipos de Dados Complexos',
  lessons: [
    {
      id: '5.1',
      title: 'Objetos',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Enquanto os tipos primitivos guardam um único valor (um número, uma string), os tipos complexos permitem-nos agrupar múltiplos valores. O mais fundamental é o Objeto.'),
        React.createElement('p', { className: 'mb-4' }, 'Um objeto é uma coleção de pares chave-valor. A analogia é uma ficha de dados sobre algo ou alguém. A "chave" (ou propriedade) é como o rótulo do campo (ex: "Nome"), e o "valor" é a informação desse campo (ex: "Ana").'),
        React.createElement('p', { className: 'mb-4' }, 'Objetos são definidos com chaves `{}`.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'As chaves são geralmente strings.'),
          React.createElement('li', null, 'Os valores podem ser de qualquer tipo: string, number, boolean, outro objeto, ou até uma função (nesse caso, chama-se "método").')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Criar e Aceder a um Objeto',
            description: 'Criamos um objeto `utilizador`. Para aceder aos seus valores, usamos a "notação de ponto" (`objeto.propriedade`) ou a "notação de parêntesis" (`objeto[\'propriedade\']`). A notação de ponto é mais comum.',
            code: `const utilizador = {
  nome: "Ana Silva",
  idade: 28,
  email: "ana.silva@exemplo.com",
  isAdmin: false
};

console.log("Nome:", utilizador.nome);
console.log("Email:", utilizador['email']);`
          },
          {
            title: 'Exemplo 2: Modificar e Adicionar Propriedades',
            description: 'Podes facilmente alterar o valor de uma propriedade existente ou adicionar uma nova propriedade a um objeto.',
            code: `const carro = {
  marca: "Tesla",
  modelo: "Model 3"
};

// Modificar uma propriedade
carro.modelo = "Model Y";

// Adicionar uma nova propriedade
carro.cor = "vermelho";

console.log(carro);`
          },
          {
            title: 'Exemplo 3: Objetos com Métodos',
            description: 'Quando uma propriedade de um objeto é uma função, chamamos-lhe um método. Ele pode aceder a outras propriedades do mesmo objeto usando a palavra-chave `this`.',
            code: `const pessoa = {
  nome: "Rui",
  apelido: "Costa",
  nomeCompleto: function() {
    // 'this' refere-se ao próprio objeto 'pessoa'
    return this.nome + " " + this.apelido;
  }
};

console.log(pessoa.nomeCompleto()); // Chama o método`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é a sintaxe correta para aceder à propriedade `cor` de um objeto chamado `casa`?',
          options: ['`casa->cor`', '`casa(cor)`', '`casa.cor`', '`cor.casa`'],
          correctAnswerIndex: 2,
          explanation: 'A notação de ponto (`objeto.propriedade`) é a forma mais comum e direta de aceder a propriedades de um objeto.'
        },
        {
          question: 'O que é um "método" num objeto?',
          options: ['Qualquer propriedade do objeto.', 'Uma propriedade que guarda um número.', 'Uma propriedade cujo valor é uma função.', 'A primeira propriedade declarada.'],
          correctAnswerIndex: 2,
          explanation: 'Um método é uma função que "pertence" a um objeto, permitindo que o objeto realize ações.'
        }
      ]
    },
    {
      id: '5.2',
      title: 'Arrays',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Um Array (ou vetor) é outro tipo de objeto fundamental. A sua especialidade é ser uma lista ordenada de valores. A analogia é uma lista de compras ou uma fila de pessoas.'),
        React.createElement('p', { className: 'mb-4' }, 'Arrays são definidos com parêntesis retos `[]`.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Cada item num array tem um "índice" (a sua posição), que começa em `0`.'),
          React.createElement('li', null, 'Arrays podem conter qualquer tipo de dado, e até misturar tipos diferentes no mesmo array.'),
          React.createElement('li', null, 'A propriedade `.length` diz-nos quantos itens existem no array.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Criar e Aceder a um Array',
            description: 'Criamos um array de `frutas`. Para aceder a um item, usamos o seu índice. Lembra-te que o primeiro item está no índice 0!',
            code: `const frutas = ["Maçã", "Banana", "Laranja"];

console.log("A primeira fruta é:", frutas[0]); // Maçã
console.log("A terceira fruta é:", frutas[2]); // Laranja
console.log("Número total de frutas:", frutas.length); // 3`
          },
          {
            title: 'Exemplo 2: Modificar Itens e Adicionar Novos',
            description: 'Podes alterar um item acedendo ao seu índice. Para adicionar itens, os métodos `push` (adiciona ao fim) e `unshift` (adiciona ao início) são muito comuns.',
            code: `const cores = ["Vermelho", "Verde", "Azul"];

// Modificar o segundo item
cores[1] = "Amarelo";

// Adicionar um item ao fim
cores.push("Roxo");

console.log(cores); // ["Vermelho", "Amarelo", "Azul", "Roxo"]`
          },
          {
            title: 'Exemplo 3: Percorrendo um Array',
            description: 'Já vimos isto antes, mas é um padrão fundamental. A forma mais moderna de percorrer um array para apenas ler os seus valores é com o loop `for...of`.',
            code: `const numeros = [10, 20, 30, 40, 50];

// Forma clássica com for
for (let i = 0; i < numeros.length; i++) {
  console.log(\`Índice \${i}: \${numeros[i]}\`);
}

// Forma moderna com for...of
for (const numero of numeros) {
  console.log("Valor:", numero);
}`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual é o índice do primeiro elemento de um array?',
          options: ['1', '`primeiro`', '`a`', '0'],
          correctAnswerIndex: 3,
          explanation: 'Em JavaScript (e na maioria das linguagens de programação), a contagem de índices de arrays começa em 0.'
        },
        {
          question: 'Qual método adiciona um novo elemento ao FINAL de um array?',
          options: ['`.add()`', '`.push()`', '`.unshift()`', '`.pop()`'],
          correctAnswerIndex: 1,
          explanation: '`.push()` adiciona ao fim, `.pop()` remove do fim. `.unshift()` adiciona ao início, e `.shift()` remove do início.'
        }
      ]
    },
    {
      id: '5.3',
      title: 'Métodos de Arrays (map, filter, reduce)',
      illustration: React.createElement(ArrayMethodsIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Arrays vêm com um conjunto de "superpoderes" na forma de métodos incorporados. Eles permitem-nos manipular listas de dados de forma muito poderosa e declarativa, muitas vezes evitando a necessidade de escrever loops manuais. Vamos ver os três mais importantes:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`.map()`:'), ' Transforma. Passa por cada item do array, aplica-lhe uma função, e retorna um NOVO array com os resultados. O array original não é modificado.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`.filter()`:'), ' Filtra. Passa por cada item e retorna um NOVO array contendo apenas os itens para os quais a função de teste retornou `true`.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`.reduce()`:'), ' Reduz. Executa uma função em cada item do array para o "reduzir" a um único valor (ex: somar todos os números).')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: `.map()` - Duplicar Números',
            description: 'Temos um array de números e queremos um novo array com cada número duplicado. `.map()` é perfeito para isto.',
            code: `const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map(numero => numero * 2);

console.log(duplicados); // [2, 4, 6, 8, 10]
console.log(numeros); // [1, 2, 3, 4, 5] (o original não mudou)`
          },
          {
            title: 'Exemplo 2: `.filter()` - Encontrar Números Pares',
            description: 'Queremos um novo array que contenha apenas os números pares do array original.',
            code: `const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares); // [2, 4, 6]`
          },
          {
            title: 'Exemplo 3: `.reduce()` - Somar Todos os Números',
            description: 'Queremos somar todos os valores do array. `.reduce()` leva dois argumentos: uma função (o "acumulador" e o "valor atual") e um valor inicial para o acumulador (neste caso, 0).',
            code: `const numeros = [10, 20, 30, 40];

const somaTotal = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(somaTotal); // 100`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual método de array usarias para criar um novo array com todos os números de um array original, mas multiplicados por 10?',
          options: ['`.filter()`', '`.reduce()`', '`.map()`', 'um loop `for`'],
          correctAnswerIndex: 2,
          explanation: '`.map()` é o método ideal para transformar cada elemento de um array e criar um novo array com essas transformações.'
        },
        {
          question: 'O método `.filter()` modifica o array original?',
          options: ['Sim, remove os itens que não passam no teste.', 'Não, ele retorna um novo array com os itens filtrados.', 'Depende da função passada.', 'Apenas se forem números.'],
          correctAnswerIndex: 1,
          explanation: 'A maioria dos métodos modernos de array como `map`, `filter` e `reduce` são "imutáveis", o que significa que eles não alteram o array original, retornando em vez disso um novo array. Isto é uma prática muito boa em programação.'
        }
      ]
    },
    {
      id: '5.4',
      title: 'Desafio: Lista de Tarefas',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Vamos combinar objetos e arrays para criar uma estrutura de dados comum: uma lista de tarefas (to-do list).'),
        React.createElement('p', { className: 'mb-4' }, 'A estrutura será:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Teremos um array principal chamado `tarefas`.'),
          React.createElement('li', null, 'Cada item nesse array será um objeto.'),
          React.createElement('li', null, 'Cada objeto de tarefa terá três propriedades: `id` (um número), `texto` (uma string com a descrição da tarefa) e `concluida` (um boolean).')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Passo 1: Criar a Estrutura de Dados',
            description: 'Cria o array `tarefas` com pelo menos 3 objetos de tarefa, seguindo a estrutura descrita.',
            code: `const tarefas = [
  { id: 1, texto: "Estudar JavaScript", concluida: true },
  { id: 2, texto: "Fazer o desafio do Módulo 5", concluida: false },
  { id: 3, texto: "Passear o cão", concluida: false }
];`
          },
          {
            title: 'Passo 2: Filtrar Tarefas Concluídas',
            description: 'Usando o método `.filter()`, cria um novo array que contenha apenas as tarefas que já foram concluídas (`concluida: true`).',
            code: `// (continuação do código anterior)
const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida === true);

console.log("Tarefas Concluídas:", tarefasConcluidas);`
          },
          {
            title: 'Passo 3: Obter Apenas os Nomes das Tarefas',
            description: 'Usando o método `.map()`, cria um novo array que contenha apenas o texto de cada tarefa.',
            code: `// (continuação do código anterior)
const nomesDasTarefas = tarefas.map(tarefa => tarefa.texto);

console.log("Nomes das Tarefas:", nomesDasTarefas);`
          }
        ]
      },
      quiz: [
        {
          question: 'Como acederias ao texto da segunda tarefa no array original `tarefas`?',
          options: ['`tarefas[2].texto`', '`tarefas[1].texto`', '`tarefas.texto[1]`', '`tarefas.get(1).texto`'],
          correctAnswerIndex: 1,
          explanation: 'O acesso a arrays é feito por índice (começando em 0), então a segunda tarefa está em `tarefas[1]`. Depois, usamos a notação de ponto para aceder à propriedade `texto` desse objeto.'
        },
        {
          question: 'Que métodos poderias encadear para obter os nomes das tarefas PENDENTES?',
          options: ['`.map().reduce()`', '`.filter().map()`', '`.reduce().filter()`', '`.map().filter()`'],
          correctAnswerIndex: 1,
          explanation: 'Primeiro, usas `.filter()` para selecionar apenas as tarefas onde `concluida` é `false`. Depois, nesse novo array filtrado, usas `.map()` para extrair apenas a propriedade `texto` de cada tarefa.'
        }
      ]
    }
  ]
};