import * as React from 'react';
import type { Module } from '../../types';

// Illustrations
const ArraysIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  React.createElement('rect', { x: "10", y: "30", width: "40", height: "40", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "30", y: "55", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "'A'"),
  React.createElement('text', { x: "30", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "0"),
  React.createElement('rect', { x: "50", y: "30", width: "40", height: "40", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "70", y: "55", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "'B'"),
  React.createElement('text', { x: "70", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "1"),
  React.createElement('rect', { x: "90", y: "30", width: "40", height: "40", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "110", y: "55", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "'C'"),
  React.createElement('text', { x: "110", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "2"),
  React.createElement('rect', { x: "130", y: "30", width: "40", height: "40", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "150", y: "55", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "'D'"),
  React.createElement('text', { x: "150", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "3")
);

const ObjectsIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  React.createElement('rect', { x: "50", y: "10", width: "100", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
  React.createElement('text', { x: "60", y: "30", fontSize: "8", fill: "#a8b2d1" }, "nome:"),
  React.createElement('text', { x: "120", y: "30", fontSize: "8", fill: "#64ffda" }, "'Ana'"),
  React.createElement('text', { x: "60", y: "50", fontSize: "8", fill: "#a8b2d1" }, "idade:"),
  React.createElement('text', { x: "120", y: "50", fontSize: "8", fill: "#64ffda" }, "30"),
  React.createElement('text', { x: "60", y: "70", fontSize: "8", fill: "#a8b2d1" }, "cidade:"),
  React.createElement('text', { x: "120", y: "70", fontSize: "8", fill: "#64ffda" }, "'Porto'")
);

const MapFilterReduceIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 300 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-xl h-auto text-lightest-slate" },
  // Map
  React.createElement('g', { transform: "translate(10, 10)" },
    React.createElement('text', { x: "40", y: "10", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, ".map"),
    React.createElement('circle', { cx: "20", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('circle', { cx: "40", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('circle', { cx: "60", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('path', { d: "M 40 40 L 40 50", stroke: "#64ffda", markerEnd: "url(#arrowhead-green)" }),
    React.createElement('rect', { x: "15", y: "60", width: "10", height: "10", fill: "#64ffda" }),
    React.createElement('rect', { x: "35", y: "60", width: "10", height: "10", fill: "#64ffda" }),
    React.createElement('rect', { x: "55", y: "60", width: "10", height: "10", fill: "#64ffda" })
  ),
  // Filter
  React.createElement('g', { transform: "translate(110, 10)" },
    React.createElement('text', { x: "40", y: "10", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, ".filter"),
    React.createElement('circle', { cx: "20", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('circle', { cx: "40", cy: "30", r: "5", fill: "#64ffda" }),
    React.createElement('circle', { cx: "60", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('path', { d: "M 40 40 L 40 50", stroke: "#64ffda", markerEnd: "url(#arrowhead-green)" }),
    React.createElement('circle', { cx: "40", cy: "65", r: "5", fill: "#64ffda" })
  ),
  // Reduce
  React.createElement('g', { transform: "translate(210, 10)" },
    React.createElement('text', { x: "40", y: "10", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, ".reduce"),
    React.createElement('circle', { cx: "20", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('circle', { cx: "40", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('circle', { cx: "60", cy: "30", r: "5", fill: "#a8b2d1" }),
    React.createElement('path', { d: "M 40 40 L 40 50", stroke: "#64ffda", markerEnd: "url(#arrowhead-green)" }),
    React.createElement('rect', { x: "30", y: "60", width: "20", height: "10", fill: "#64ffda" }),
    React.createElement('text', { x: "40", y: "68", textAnchor: "middle", fontSize: "6", fill: "#0a192f" }, "Valor")
  )
);

const DestructuringIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('rect', { x: "10", y: "10", width: "80", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    React.createElement('text', { x: "50", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "Objeto"),
    React.createElement('text', { x: "20", y: "45", fontSize: "8", fill: "#ccd6f6" }, "nome: 'Ana'"),
    React.createElement('text', { x: "20", y: "65", fontSize: "8", fill: "#ccd6f6" }, "idade: 30"),
    React.createElement('path', { d: "M 90 42 L 110 32", stroke: "#64ffda", strokeWidth: "1" }),
    React.createElement('text', { x: "120", y: "35", fontSize: "8", fill: "#64ffda" }, "const nome"),
    React.createElement('path', { d: "M 90 62 L 110 72", stroke: "#64ffda", strokeWidth: "1" }),
    React.createElement('text', { x: "120", y: "75", fontSize: "8", fill: "#64ffda" }, "const idade")
);

export const module6: Module = {
    id: '6',
    title: 'Módulo 6: Estruturas de Dados: Arrays e Objetos',
    lessons: [
        {
            id: '6.1',
            title: 'Revisão de Arrays',
            illustration: React.createElement(ArraysIllustration),
            theory: React.createElement(
                'div',
                null,
                React.createElement('p', { className: 'mb-4' }, 'Arrays são listas ordenadas de valores. Cada valor tem um índice (a sua posição), começando em 0. São uma das estruturas de dados mais fundamentais e usadas em programação.'),
                React.createElement(
                    'ul',
                    { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
                    React.createElement('li', null, 'Podem guardar qualquer tipo de dado: números, strings, booleanos, outros arrays, e até objetos.'),
                    React.createElement('li', null, 'Acedemos a um elemento usando o seu índice: `meuArray[0]`.'),
                    React.createElement('li', null, 'A propriedade `.length` diz-nos quantos elementos o array tem.')
                )
            ),
            practice: {
                examples: [
                    {
                        title: 'O Básico: Criar e Aceder',
                        description: 'Criamos um array e acedemos ao primeiro e terceiro elementos. Lembra-te que os índices começam em 0!',
                        code: `const cores = ["vermelho", "verde", "azul"];

console.log(cores[0]);      // "vermelho"
console.log(cores[2]);      // "azul"
console.log(cores.length);  // 3`
                    },
                    {
                        title: 'O Caso Comum: Modificar Arrays',
                        description: 'Arrays declarados com `const` ainda podem ser modificados! Podemos alterar elementos existentes ou adicionar novos com métodos como `.push()` (adiciona ao fim) e `.pop()` (remove do fim).',
                        code: `const frutas = ["Maçã", "Banana"];

frutas[1] = "Morango"; // Altera o segundo elemento
console.log(frutas);   // ["Maçã", "Morango"]

frutas.push("Laranja"); // Adiciona ao fim
console.log(frutas);    // ["Maçã", "Morango", "Laranja"]

frutas.pop(); // Remove o último
console.log(frutas);    // ["Maçã", "Morango"]`
                    }
                ]
            },
            quiz: [
                {
                    question: 'Dado `const letras = ["a", "b", "c"];`, como acedes à letra "b"?',
                    options: ['`letras[0]`', '`letras[1]`', '`letras[2]`', '`letras.b`'],
                    correctAnswerIndex: 1,
                    explanation: 'Os índices de um array começam em 0. "a" está no índice 0, "b" no índice 1, e "c" no 2.'
                }
            ]
        },
        {
            id: '6.2',
            title: 'Métodos de Arrays: map, filter, reduce',
            illustration: React.createElement(MapFilterReduceIllustration),
            theory: React.createElement(
                'div',
                null,
                React.createElement('p', { className: 'mb-4' }, 'Estes três métodos são Higher-Order Functions extremamente poderosas para trabalhar com arrays de forma declarativa (dizendo "o que" fazer, não "como"). Eles não modificam o array original; retornam um novo.'),
                React.createElement(
                    'ul',
                    { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
                    React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`.map()`:'), ' Transforma cada elemento de um array. Cria um novo array com os resultados da chamada de uma função para cada elemento.'),
                    React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`.filter()`:'), ' Filtra um array. Cria um novo array com todos os elementos que passam num teste (uma função que retorna `true` ou `false`).'),
                    React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '`.reduce()`:'), ' Reduz um array a um único valor. Executa uma função "redutora" em cada elemento, resultando num único valor de saída (ex: a soma de todos os números).')
                )
            ),
            practice: {
                examples: [
                    {
                        title: 'O Básico: `.map()` para transformar',
                        description: 'Apanhamos um array de números e criamos um novo array onde cada número é o dobro do original.',
                        code: `const numeros = [1, 2, 3, 4];
const duplos = numeros.map(n => n * 2);

console.log(duplos); // [2, 4, 6, 8]`
                    },
                    {
                        title: 'O Caso Comum: `.filter()` para selecionar',
                        description: 'Apanhamos um array de números e criamos um novo array apenas com os números pares.',
                        code: `const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(n => n % 2 === 0);

console.log(pares); // [2, 4, 6]`
                    },
                    {
                        title: 'A Nuance: `.reduce()` para agregar',
                        description: 'A função de callback do `.reduce` recebe dois argumentos: o `acumulador` (o valor total até agora) e o `valorAtual`. Somamos cada valor ao acumulador para obter o total.',
                        code: `const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0); // 0 é o valor inicial do acumulador

console.log(soma); // 10`
                    }
                ]
            },
            quiz: [
                {
                    question: 'Qual método usarias para criar um novo array contendo apenas os produtos com preço superior a 50?',
                    options: ['`.map()`', '`.forEach()`', '`.filter()`', '`.reduce()`'],
                    correctAnswerIndex: 2,
                    explanation: '`.filter()` é o método ideal para selecionar um subconjunto de elementos de um array com base numa condição.'
                }
            ]
        },
        {
            id: '6.3',
            title: 'Revisão de Objetos',
            illustration: React.createElement(ObjectsIllustration),
            theory: React.createElement(
                'div',
                null,
                React.createElement('p', { className: 'mb-4' }, 'Objetos são coleções de pares chave-valor. Em vez de um índice numérico como nos arrays, usamos "chaves" (strings) para aceder aos valores. São perfeitos para representar entidades do mundo real, como um utilizador, um produto ou um carro.'),
                React.createElement(
                    'ul',
                    { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
                    React.createElement('li', null, 'As chaves são strings ou Symbols.'),
                    React.createElement('li', null, 'Os valores podem ser qualquer tipo de dado, incluindo outras funções (métodos) e objetos.'),
                    React.createElement('li', null, 'Acedemos aos valores com a notação de ponto (`objeto.chave`) ou de parênteses retos (`objeto[\'chave\']`).')
                )
            ),
            practice: {
                examples: [
                    {
                        title: 'O Básico: Criar e Aceder',
                        description: 'Criamos um objeto para representar uma pessoa e acedemos às suas propriedades usando a notação de ponto.',
                        code: `const pessoa = {
  nome: "Ana",
  idade: 30,
  cidade: "Porto"
};

console.log(pessoa.nome); // "Ana"
console.log(pessoa.idade); // 30`
                    },
                    {
                        title: 'O Caso Comum: Modificar e Adicionar Propriedades',
                        description: 'Podemos facilmente alterar o valor de uma propriedade existente ou adicionar uma nova.',
                        code: `const carro = { marca: "Tesla", modelo: "Model 3" };

carro.modelo = "Model Y"; // Modificar
carro.ano = 2022;       // Adicionar

console.log(carro); // { marca: "Tesla", modelo: "Model Y", ano: 2022 }`
                    },
                    {
                        title: 'A Nuance: Notação de Ponto vs. Parênteses Retos',
                        description: 'A notação de ponto é mais limpa, mas a de parênteses retos é mais poderosa. Permite-nos usar chaves que não são identificadores válidos (ex: com espaços) ou usar uma variável para definir a chave.',
                        code: `const pessoa = { nome: "Rui" };
const propriedade = "nome";

console.log(pessoa.propriedade); // undefined (procura uma chave chamada "propriedade")
console.log(pessoa[propriedade]); // "Rui" (usa o valor da variável 'propriedade')`
                    }
                ]
            },
            quiz: [
                {
                    question: 'Qual a diferença entre a notação de ponto e a de parênteses retos para aceder a propriedades?',
                    options: ['Nenhuma, são iguais.', 'A notação de ponto é mais antiga.', 'A notação de parênteses retos permite usar variáveis para definir a chave a aceder.', 'A notação de ponto é mais rápida.'],
                    correctAnswerIndex: 2,
                    explanation: 'A notação de parênteses retos avalia a expressão dentro dos parênteses e usa o resultado como a chave, tornando-a mais dinâmica.'
                }
            ]
        },
        {
            id: '6.4',
            title: 'Desestruturação (Destructuring)',
            illustration: React.createElement(DestructuringIllustration),
            theory: React.createElement(
                'div',
                null,
                React.createElement('p', { className: 'mb-4' }, 'A desestruturação é uma sintaxe do ES6 que nos permite "desempacotar" valores de arrays ou propriedades de objetos em variáveis distintas. É um atalho muito conveniente que torna o código mais limpo e legível.')
            ),
            practice: {
                examples: [
                    {
                        title: 'O Básico: Desestruturação de Objetos',
                        description: 'Em vez de aceder a cada propriedade individualmente, podemos extraí-las para variáveis com o mesmo nome numa única linha.',
                        code: `const utilizador = { nome: "Bia", idade: 25 };

// Forma antiga
// const nome = utilizador.nome;
// const idade = utilizador.idade;

// Com desestruturação
const { nome, idade } = utilizador;

console.log(nome);   // "Bia"
console.log(idade);  // 25`
                    },
                    {
                        title: 'O Caso Comum: Desestruturação de Arrays',
                        description: 'Funciona de forma semelhante com arrays, mas a atribuição é feita pela posição, não pelo nome.',
                        code: `const coordenadas = [10, 20, 30];
const [x, y, z] = coordenadas;

console.log(x); // 10
console.log(y); // 20`
                    },
                    {
                        title: 'A Nuance: Renomear e Valores Padrão',
                        description: 'Podemos renomear as variáveis e fornecer valores padrão caso a propriedade não exista no objeto.',
                        code: `const config = { titulo: "O Meu Site", tema: "dark" };

const { titulo: tituloSite, tema, lang = "pt" } = config;

console.log(tituloSite); // "O Meu Site"
console.log(tema);       // "dark"
console.log(lang);       // "pt" (valor padrão)`
                    }
                ]
            },
            quiz: [
                {
                    question: 'O que `const { nome } = { nome: "Ana", idade: 30 };` faz?',
                    options: ['Cria um objeto chamado `nome`.', 'Cria uma variável `nome` com o valor "Ana".', 'Causa um erro.', 'Cria uma variável `nome` com o valor `{ nome: "Ana", idade: 30 }`.'],
                    correctAnswerIndex: 1,
                    explanation: 'Esta sintaxe de desestruturação extrai a propriedade `nome` do objeto e cria uma variável com o mesmo nome e o valor correspondente.'
                }
            ]
        },
        {
            id: '6.5',
            title: 'Spread (...) e Rest (...)',
            theory: React.createElement(
                'div',
                null,
                React.createElement('p', { className: 'mb-4' }, 'A sintaxe `...` pode significar duas coisas opostas, dependendo do contexto: Spread (espalhar) e Rest (resto).'),
                React.createElement(
                    'ul',
                    { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
                    React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Spread:'), ' "Espalha" os elementos de um array ou as propriedades de um objeto noutro. É usado para criar cópias ou combinar estruturas.'),
                    React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Rest:'), ' Agrupa o "resto" dos elementos ou propriedades numa nova estrutura. Já o vimos nos parâmetros de funções, mas também funciona na desestruturação.')
                )
            ),
            practice: {
                examples: [
                    {
                        title: 'O Básico: Spread para copiar arrays',
                        description: 'Usamos o spread para criar uma cópia superficial de um array. Mudar a cópia não afeta o original.',
                        code: `const original = [1, 2, 3];
const copia = [...original];

copia.push(4);

console.log(original); // [1, 2, 3]
console.log(copia);    // [1, 2, 3, 4]`
                    },
                    {
                        title: 'O Caso Comum: Spread para combinar objetos',
                        description: 'Podemos facilmente combinar as propriedades de dois objetos num novo objeto.',
                        code: `const infoBase = { nome: "Carlos", idade: 40 };
const infoExtra = { cidade: "Lisboa", profissao: "Engenheiro" };

const utilizadorCompleto = { ...infoBase, ...infoExtra };
console.log(utilizadorCompleto);`
                    },
                    {
                        title: 'A Nuance: Rest na desestruturação',
                        description: 'Aqui, extraímos o primeiro elemento para a variável `primeiro` e o "resto" dos elementos são agrupados num novo array chamado `outros`.',
                        code: `const numeros = [10, 20, 30, 40];
const [primeiro, ...outros] = numeros;

console.log(primeiro); // 10
console.log(outros);   // [20, 30, 40]`
                    }
                ]
            },
            quiz: [
                {
                    question: 'Qual é um uso comum do operador Spread (`...`)?',
                    options: ['Para dividir um array.', 'Para criar uma cópia superficial de um array ou objeto.', 'Para selecionar o último elemento de um array.', 'Para filtrar um array.'],
                    correctAnswerIndex: 1,
                    explanation: 'O operador spread é a forma moderna e preferida para criar cópias de arrays e objetos, substituindo métodos mais antigos como `slice()` ou `Object.assign()`.'
                }
            ]
        },
        {
            id: '6.6',
            title: 'Desafio do Módulo: Gestor de Tarefas Simples',
            theory: React.createElement(
                'div',
                null,
                React.createElement('p', { className: 'mb-4' }, 'Vamos aplicar o que aprendeste sobre arrays de objetos e métodos de arrays para criar uma pequena lista de tarefas. O objetivo é manipular uma lista de tarefas, onde cada tarefa é um objeto com um `id`, um `texto` e um estado `concluida`.')
            ),
            practice: {
                examples: [
                    {
                        title: 'Estrutura de Dados Inicial',
                        description: 'Começamos com um array de objetos que representa as nossas tarefas.',
                        code: `const tarefas = [
  { id: 1, texto: "Estudar JavaScript", concluida: true },
  { id: 2, texto: "Fazer o desafio do módulo", concluida: false },
  { id: 3, texto: "Descansar", concluida: false }
];`
                    },
                    {
                        title: 'Desafio 1: Obter os textos das tarefas',
                        description: 'Usa o método `.map()` para criar um novo array que contenha apenas o texto de cada tarefa.',
                        code: `// O teu código aqui
const textosDasTarefas = tarefas.map(tarefa => tarefa.texto);
console.log(textosDasTarefas); // ["Estudar JavaScript", "Fazer o desafio do módulo", "Descansar"]`
                    },
                    {
                        title: 'Desafio 2: Filtrar tarefas não concluídas',
                        description: 'Usa o método `.filter()` para criar um novo array que contenha apenas as tarefas que ainda não foram concluídas (onde `concluida` é `false`).',
                        code: `// O teu código aqui
const tarefasPorFazer = tarefas.filter(tarefa => !tarefa.concluida);
console.log(tarefasPorFazer);`
                    }
                ]
            },
            quiz: [
                {
                    question: 'Para obter os textos das tarefas não concluídas, qual a ordem correta de encadeamento dos métodos?',
                    options: [
                        '`.map(...).filter(...)`',
                        '`.filter(...).map(...)`',
                        'A ordem não importa.',
                        'É preciso usar .reduce()'
                    ],
                    correctAnswerIndex: 1,
                    explanation: 'Primeiro filtramos (`.filter`) para obter apenas as tarefas desejadas (as não concluídas), e depois transformamos (`.map`) o resultado para extrair apenas os textos. Fazer o inverso seria menos eficiente.'
                }
            ],
            challenge: {
                description: "Agora junta tudo. A partir do array de tarefas original, cria um novo array que contenha apenas os textos das tarefas que AINDA NÃO foram concluídas. Vais precisar de encadear dois métodos de array.",
                starterCode: `const tarefas = [
  { id: 1, texto: "Estudar JavaScript", concluida: true },
  { id: 2, texto: "Fazer o desafio do módulo", concluida: false },
  { id: 3, texto: "Descansar", concluida: false }
];

// Encadeia os métodos aqui
const textosPorFazer = /* ... */;
console.log(textosPorFazer);`,
                solution: `const textosPorFazer = tarefas
  .filter(tarefa => !tarefa.concluida)
  .map(tarefa => tarefa.texto);

console.log(textosPorFazer); // ["Fazer o desafio do módulo", "Descansar"]`
            }
        }
    ]
};