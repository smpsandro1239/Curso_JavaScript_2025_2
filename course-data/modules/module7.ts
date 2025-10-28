import * as React from 'react';
import type { Module } from '../../types';

export const module7: Module = {
  id: '7',
  title: 'Módulo 7: JS Moderno e Próximos Passos',
  lessons: [
    {
      id: '7.1',
      title: 'Métodos de Array: map, filter, reduce',
      theory: React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'mb-4' },
          'Os ciclos `for` são ótimos, mas o JavaScript moderno oferece métodos de array mais expressivos e poderosos que te permitem escrever código mais limpo e declarativo.'
        ),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '.map()'), ': É como uma ', React.createElement('strong', { className: 'text-lightest-slate' }, 'linha de montagem'), '. Recebe um array, aplica uma transformação a cada item, e devolve um novo array do mesmo tamanho com os itens transformados.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '.filter()'), ': É como um ', React.createElement('strong', { className: 'text-lightest-slate' }, 'sítio de segurança'), '. Recebe um array, verifica cada item contra uma condição, e devolve um novo array, possivelmente mais pequeno, apenas com os itens que passaram a verificação.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '.reduce()'), ': É como ', React.createElement('strong', { className: 'text-lightest-slate' }, 'fazer um sumo'), '. Recebe um array de vários itens (frutas) e combina-nos num único valor final (o sumo).')
        )
      ),
      practice: {
        examples: [
            {
                title: "Exemplo 1: O Básico - `.map()`",
                description: "Vamos pegar num array de números e criar um novo array com o dobro de cada número, sem modificar o original.",
                code: `const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);

console.log(dobrados); // [2, 4, 6, 8, 10]
console.log(numeros);  // [1, 2, 3, 4, 5] (o original fica intacto)`
            },
            {
                title: "Exemplo 2: O Caso Comum - `.filter()`",
                description: "Vamos pegar num array de produtos (objetos) e filtrar apenas aqueles que estão em promoção.",
                code: `const produtos = [
  { nome: 'Maçã', emPromocao: true },
  { nome: 'Pêra', emPromocao: false },
  { nome: 'Laranja', emPromocao: true }
];

const emPromocao = produtos.filter(p => p.emPromocao === true);
console.log(emPromocao); // Array com os objetos Maçã e Laranja`
            },
            {
                title: "Exemplo 3: A Nuance - `.reduce()`",
                description: "O `.reduce()` é o mais flexível. Vamos usá-lo para somar o total de um carrinho de compras. Ele recebe um 'acumulador' (o valor que está a ser construído) e o 'valorAtual' em cada iteração. O `0` no final é o valor inicial do acumulador.",
                code: `const carrinho = [
  { nome: 'Livro', preco: 20 },
  { nome: 'Caneta', preco: 2 },
  { nome: 'Caderno', preco: 5 }
];

const total = carrinho.reduce((acumulador, itemAtual) => {
  return acumulador + itemAtual.preco;
}, 0); // 0 é o valor inicial

console.log("Total do carrinho:", total); // 27`
            }
        ]
      },
      quiz: [
        {
          question: "Se tiveres um array de produtos e quiseres criar um novo array contendo apenas os produtos com preço superior a 50€, qual método seria mais apropriado?",
          options: [
            '.map()',
            '.forEach()',
            '.reduce()',
            '.filter()'
          ],
          correctAnswerIndex: 3,
          explanation: '.filter() é a ferramenta perfeita para esta tarefa. Ele itera sobre o array e cria um novo array contendo apenas os elementos que retornam `true` para a condição especificada (neste caso, `produto.preco > 50`).'
        },
        {
            question: "O que é que o método `.map()` retorna sempre?",
            options: [
                "Um único valor.",
                "O primeiro elemento que satisfaz a condição.",
                "Um novo array com exatamente o mesmo número de elementos que o original.",
                "O valor `undefined`."
            ],
            correctAnswerIndex: 2,
            explanation: "A principal característica do `.map()` é a transformação 1-para-1. Ele devolve sempre um novo array do mesmo tamanho que o array de origem, onde cada elemento é o resultado da aplicação da função de callback ao elemento original correspondente."
        },
        {
            question: "Qual o valor de `soma`? `const nums = [1, 2, 3]; const soma = nums.reduce((acc, val) => acc + val, 10);`",
            options: [
                "6",
                "10",
                "16",
                "Vai dar erro"
            ],
            correctAnswerIndex: 2,
            explanation: "O segundo argumento de `.reduce()` é o valor inicial do acumulador (`acc`). A primeira iteração será `10 + 1`, a segunda `11 + 2`, e a terceira `13 + 3`, resultando em 16."
        }
      ],
      challenge: {
          description: "Dado o array de utilizadores, usa uma combinação (encadeamento) de `.filter()` e `.map()` para criar um novo array que contenha apenas os emails dos utilizadores com mais de 30 anos.",
          starterCode: `const utilizadores = [
  { nome: 'Ana', idade: 25, email: 'ana@exemplo.com' },
  { nome: 'Rui', idade: 40, email: 'rui@exemplo.com' },
  { nome: 'Marta', idade: 35, email: 'marta@exemplo.com' },
  { nome: 'João', idade: 22, email: 'joao@exemplo.com' }
];

// O teu código aqui
const emails = /* ... */;

console.log(emails); // ['rui@exemplo.com', 'marta@exemplo.com']`,
          solution: `const utilizadores = [
  { nome: 'Ana', idade: 25, email: 'ana@exemplo.com' },
  { nome: 'Rui', idade: 40, email: 'rui@exemplo.com' },
  { nome: 'Marta', idade: 35, email: 'marta@exemplo.com' },
  { nome: 'João', idade: 22, email: 'joao@exemplo.com' }
];

const emails = utilizadores
  .filter(utilizador => utilizador.idade > 30)
  .map(utilizador => utilizador.email);

console.log(emails);`
      }
    }
  ]
};
