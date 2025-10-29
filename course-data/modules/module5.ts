import * as React from 'react';
import type { Module } from '../../types';

const ArrayIllustration = () => React.createElement(
  'svg',
  { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
  // Boxes
  React.createElement('rect', { x: "10", y: "30", width: "40", height: "30", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "30", y: "50", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "'A'"),
  React.createElement('text', { x: "30", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "0"),
  React.createElement('rect', { x: "60", y: "30", width: "40", height: "30", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "80", y: "50", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "'B'"),
  React.createElement('text', { x: "80", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "1"),
  React.createElement('rect', { x: "110", y: "30", width: "40", height: "30", fill: "#112240", stroke: "#233554" }),
  React.createElement('text', { x: "130", y: "50", textAnchor: "middle", fontSize: "10", fill: "#64ffda" }, "'C'"),
  React.createElement('text', { x: "130", y: "25", textAnchor: "middle", fontSize: "8", fill: "#a8b2d1" }, "2"),
  React.createElement('text', { x: "100", y: "80", textAnchor: "middle", fontSize: "8", fill: "#ccd6f6" }, "Array (Índices)"),
);

const ObjectIllustration = () => React.createElement(
    'svg',
    { viewBox: "0 0 200 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-sm h-auto text-lightest-slate" },
    React.createElement('rect', { x: "50", y: "10", width: "100", height: "80", fill: "#112240", stroke: "#233554", rx: "5" }),
    // Key-value pairs
    React.createElement('text', { x: "60", y: "30", fontSize: "8", fill: "#a8b2d1" }, "nome:"),
    React.createElement('text', { x: "110", y: "30", fontSize: "8", fill: "#64ffda" }, "'Ana'"),
    React.createElement('text', { x: "60", y: "50", fontSize: "8", fill: "#a8b2d1" }, "idade:"),
    React.createElement('text', { x: "110", y: "50", fontSize: "8", fill: "#64ffda" }, "30"),
    React.createElement('text', { x: "60", y: "70", fontSize: "8", fill: "#a8b2d1" }, "cidade:"),
    React.createElement('text', { x: "110", y: "70", fontSize: "8", fill: "#64ffda" }, "'Porto'"),
    React.createElement('text', { x: "100", y: "95", textAnchor: "middle", fontSize: "8", fill: "#ccd6f6" }, "Objeto (Chave: Valor)"),
);

export const module5: Module = {
  id: '5',
  title: 'Módulo 5: Estruturas de Dados - Arrays e Objetos',
  lessons: [
    {
      id: '5.1',
      title: 'Arrays: Listas Ordenadas',
      illustration: React.createElement(ArrayIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Um Array é uma estrutura de dados fundamental que nos permite guardar uma coleção de múltiplos itens numa única variável. É como uma lista de compras ou uma prateleira de livros.'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'Os itens num array são ', React.createElement('strong', { className: 'text-light-slate' }, 'ordenados'), '.'),
          React.createElement('li', null, 'Acedemos aos itens através do seu ', React.createElement('strong', { className: 'text-green' }, 'índice (index)'), ', que é a sua posição na lista.'),
          React.createElement('li', null, 'Importante: A contagem dos índices começa em ', React.createElement('strong', { className: 'text-green' }, '0'), ', não em 1! O primeiro item está no índice 0.'),
          React.createElement('li', null, 'A propriedade ', React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '.length'), ' diz-nos quantos itens o array tem.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Criar e aceder a um Array',
            description: 'Criamos um array de frutas e acedemos a itens específicos usando o seu índice.',
            code: `const frutas = ["Maçã", "Banana", "Morango"];

console.log(frutas[0]); // "Maçã" (o primeiro item)
console.log(frutas[1]); // "Banana"
console.log(frutas.length); // 3`
          },
          {
            title: 'Exemplo 2: Modificar um Array',
            description: 'Podemos alterar um item num array acedendo ao seu índice e atribuindo-lhe um novo valor.',
            code: `const cores = ["Vermelho", "Verde", "Azul"];
console.log(cores); // ["Vermelho", "Verde", "Azul"]

cores[1] = "Amarelo"; // Substitui "Verde"
console.log(cores); // ["Vermelho", "Amarelo", "Azul"]`
          }
        ]
      },
      quiz: [
        {
          question: 'Dado o array `const letras = ["a", "b", "c"];`, como acederias à letra "c"?',
          options: ['`letras[3]`', '`letras[c]`', '`letras[2]`', '`letras.c`'],
          correctAnswerIndex: 2,
          explanation: 'Os índices começam em 0, por isso "a" é 0, "b" é 1, e "c" é 2.'
        }
      ]
    },
    {
      id: '5.2',
      title: 'Métodos Comuns de Arrays',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Arrays vêm com muitos "super-poderes" (métodos) para nos ajudar a manipulá-los. Os mais comuns para adicionar e remover são:'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '.push(item)'), ': Adiciona um item ao ', React.createElement('strong', { className: 'text-light-slate' }, 'final'), ' do array.'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '.pop()'), ': Remove o item do ', React.createElement('strong', { className: 'text-light-slate' }, 'final'), ' do array.'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '.unshift(item)'), ': Adiciona um item ao ', React.createElement('strong', { className: 'text-light-slate' }, 'início'), ' do array.'),
          React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '.shift()'), ': Remove o item do ', React.createElement('strong', { className: 'text-light-slate' }, 'início'), ' do array.')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo: Manipular uma lista de tarefas',
            description: 'Vamos usar os métodos para gerir uma lista de tarefas.',
            code: `const tarefas = ["Estudar JS"];

tarefas.push("Ir às compras"); // Adiciona ao final
console.log(tarefas); // ["Estudar JS", "Ir às compras"]

tarefas.unshift("Acordar"); // Adiciona ao início
console.log(tarefas); // ["Acordar", "Estudar JS", "Ir às compras"]

const tarefaRemovida = tarefas.pop(); // Remove do final
console.log(tarefaRemovida); // "Ir às compras"
console.log(tarefas); // ["Acordar", "Estudar JS"]`
          }
        ]
      },
      quiz: [
        {
          question: 'Qual método usarias para adicionar "Laranja" ao final do array `frutas`?',
          options: ['`frutas.add("Laranja")`', '`frutas.shift("Laranja")`', '`frutas.push("Laranja")`', '`frutas.pop("Laranja")`'],
          correctAnswerIndex: 2,
          explanation: '`push` é o método para adicionar elementos ao final de um array.'
        }
      ]
    },
    {
      id: '5.3',
      title: 'Objetos: Pares Chave-Valor',
      illustration: React.createElement(ObjectIllustration),
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Se os Arrays são listas ordenadas, os Objetos são coleções não-ordenadas de pares ', React.createElement('strong', { className: 'text-green' }, 'chave-valor'), '. São perfeitos para descrever uma única "coisa" com várias características.'),
        React.createElement('p', { className: 'mb-4' }, 'A analogia é um dicionário: tens uma palavra (a chave) e a sua definição (o valor).'),
        React.createElement(
          'ul',
          { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
          React.createElement('li', null, 'As chaves são strings que dão nome às propriedades.'),
          React.createElement('li', null, 'Os valores podem ser qualquer tipo de dado (string, number, boolean, outro array, ou até outro objeto).'),
          React.createElement('li', null, 'Acedemos aos valores usando a ', React.createElement('strong', { className: 'text-green' }, 'notação de ponto'), ' (`objeto.chave`) ou a ', React.createElement('strong', { className: 'text-green' }, 'notação de parênteses retos'), ' (`objeto[\'chave\']`).')
        )
      ),
      practice: {
        examples: [
          {
            title: 'Exemplo 1: Criar e aceder a um Objeto',
            description: 'Criamos um objeto para representar um utilizador.',
            code: `const utilizador = {
  nome: "Ana Silva",
  idade: 28,
  isPremium: true
};

// Aceder com notação de ponto
console.log(utilizador.nome); // "Ana Silva"

// Aceder com notação de parênteses retos
console.log(utilizador['idade']); // 28`
          },
          {
            title: 'Exemplo 2: Modificar e adicionar propriedades',
            description: 'Podemos facilmente alterar valores existentes ou adicionar novas propriedades a um objeto.',
            code: `const carro = {
  marca: "Tesla",
  modelo: "Model 3"
};

carro.modelo = "Model Y"; // Modificar uma propriedade
carro.cor = "Branco";    // Adicionar uma nova propriedade

console.log(carro); // { marca: "Tesla", modelo: "Model Y", cor: "Branco" }`
          }
        ]
      },
      quiz: [
        {
          question: 'Dado o objeto `const pessoa = { nome: "Rui" };`, como acederias ao nome?',
          options: ['`pessoa[0]`', '`pessoa.nome`', '`pessoa(nome)`', '`pessoa.get("nome")`'],
          correctAnswerIndex: 1,
          explanation: 'A notação de ponto (`objeto.propriedade`) é a forma mais comum e direta de aceder a propriedades de um objeto.'
        }
      ],
      challenge: {
        description: "Cria um objeto para descrever o teu filme ou livro favorito. Deve ter pelo menos três propriedades: `titulo` (string), `ano` (number), e `genero` (string). Depois, imprime na consola uma frase que use estas três propriedades.",
        starterCode: `// Cria o teu objeto aqui

// Imprime a frase na consola aqui`,
        solution: `const meuFilme = {
  titulo: "Inception",
  ano: 2010,
  genero: "Ficção Científica"
};

console.log(\`O meu filme favorito é "\${meuFilme.titulo}", um filme de \${meuFilme.genero} de \${meuFilme.ano}.\`);`
      }
    }
  ]
};
