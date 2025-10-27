import React from 'react';
import type { CourseData } from '../types';

export const courseData: CourseData = {
  title: 'Curso Completo de JavaScript',
  modules: [
    {
      id: '1',
      title: 'Módulo 1: Introdução ao JavaScript',
      lessons: [
        {
          id: '1.1',
          title: 'O que é JavaScript?',
          // FIX: Converted JSX to React.createElement calls to be valid in a .ts file.
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Bem-vindo ao início da tua jornada em JavaScript! Vamos começar com uma analogia simples para perceber onde o JavaScript se encaixa.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Imagina que um website é uma casa:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement(
                'li',
                null,
                React.createElement('strong', { className: 'text-green' }, 'HTML (HyperText Markup Language)'),
                ': É a ',
                React.createElement('strong', { className: 'text-lightest-slate' }, 'estrutura'),
                ' da casa. As paredes, o telhado, as portas e as janelas. Define os elementos básicos da página.'
              ),
              React.createElement(
                'li',
                null,
                React.createElement('strong', { className: 'text-green' }, 'CSS (Cascading Style Sheets)'),
                ': É a ',
                React.createElement('strong', { className: 'text-lightest-slate' }, 'decoração'),
                '. A cor das paredes, o estilo dos móveis, a disposição dos quadros. Torna a página visualmente apelativa.'
              ),
              React.createElement(
                'li',
                null,
                React.createElement('strong', { className: 'text-green' }, 'JavaScript (JS)'),
                ': É a ',
                React.createElement('strong', { className: 'text-lightest-slate' }, 'eletricidade e canalização'),
                '. Permite acender as luzes (interatividade), abrir a torneira (enviar dados), ou ligar a televisão (reproduzir multimédia). Dá vida e funcionalidade à página.'
              )
            ),
            React.createElement(
              'p',
              null,
              'Resumindo, JavaScript é uma linguagem de programação que permite criar conteúdo dinâmico, controlar multimédia, animar imagens e praticamente tudo o resto. É o que torna os websites modernos interativos e funcionais.'
            )
          ),
          practice: {
            description: "O primeiro passo em qualquer linguagem é o famoso 'Olá, Mundo!'. Em JavaScript, usamos `console.log()` para imprimir mensagens na consola do navegador. É uma ferramenta essencial para depuração (debugging). Abre as ferramentas de programador do teu navegador (normalmente com F12 ou Ctrl+Shift+I) e vai ao separador 'Consola' para veres o resultado.",
            code: `console.log('Olá, Mundo!');`
          },
          quiz: [
            {
              question: 'Qual é o papel principal do JavaScript num website?',
              options: [
                'Definir a estrutura e os elementos da página.',
                'Estilizar a página, definindo cores e fontes.',
                'Adicionar interatividade e funcionalidade à página.',
                'Armazenar dados numa base de dados.'
              ],
              correctAnswerIndex: 2,
              explanation: 'Correto! JavaScript é a linguagem que dá "vida" a uma página, tornando-a interativa. A estrutura é definida pelo HTML e o estilo pelo CSS.'
            }
          ]
        },
        {
          id: '1.2',
          title: 'Adicionar JS a uma página',
          // FIX: Converted JSX to React.createElement calls to be valid in a .ts file.
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Existem três formas principais de incluir código JavaScript numa página HTML. Vamos usar uma analogia de dar instruções a alguém:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
              React.createElement(
                'li',
                null,
                React.createElement('strong', { className: 'text-green' }, 'Script Interno (Etiqueta <script>)'),
                ': É como escrever as instruções numa parede da casa. O código fica diretamente dentro do ficheiro HTML, envolvido pela etiqueta ',
                React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '<script>'),
                '. Útil para pequenos trechos de código específicos de uma página.'
              ),
              React.createElement(
                'li',
                null,
                React.createElement('strong', { className: 'text-green' }, 'Script Externo (Ficheiro .js)'),
                ': É como usar um manual de instruções detalhado. O código fica num ficheiro separado (ex: ',
                React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'script.js'),
                ') e é ligado ao HTML através da etiqueta ',
                React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '<script src="script.js"></script>'),
                '. Esta é a ',
                React.createElement('strong', { className: 'text-lightest-slate' }, 'melhor prática'),
                ' para a maioria dos casos, pois mantém o código organizado e reutilizável.'
              ),
              React.createElement(
                'li',
                null,
                React.createElement('strong', { className: 'text-green' }, 'Script Inline (Atributos de evento)'),
                ': É como gritar um comando rápido, tipo "Fecha a porta!". O código é colocado diretamente num atributo HTML, como ',
                React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, 'onclick="..."'),
                '. Deve ser evitado na maior parte das vezes, pois mistura estrutura e comportamento, dificultando a manutenção.'
              )
            )
          ),
          practice: {
            description: 'Abaixo, um exemplo de como ligar um ficheiro JavaScript externo a um HTML. Esta é a forma mais comum e recomendada.',
            code: `<!-- No teu ficheiro index.html -->
<head>
  ...
</head>
<body>
  <h1>O meu site</h1>

  <!-- O script é geralmente colocado antes de fechar a tag </body> -->
  <script src="o_meu_script.js"></script>
</body>`
          },
          quiz: [
            {
              question: 'Qual é a forma recomendada para adicionar uma quantidade significativa de código JavaScript a um website?',
              options: [
                'Usar um script inline no atributo onclick.',
                'Colocar todo o código dentro de uma etiqueta <script> no <head> do HTML.',
                'Criar um ficheiro .js externo e ligá-lo ao HTML.',
                'Escrever o código diretamente no ficheiro CSS.'
              ],
              correctAnswerIndex: 2,
              explanation: 'A melhor prática é usar ficheiros .js externos. Isto separa as responsabilidades (HTML para estrutura, JS para comportamento), melhora a organização, e permite que o navegador guarde o ficheiro em cache, acelerando o carregamento.'
            }
          ]
        }
      ]
    },
    {
      id: '2',
      title: 'Módulo 2: Variáveis e Tipos de Dados',
      lessons: [
        {
          id: '2.1',
          title: 'Variáveis: var, let e const',
          // FIX: Converted JSX to React.createElement calls to be valid in a .ts file.
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
            description: "Vamos declarar algumas variáveis. `let` para um valor que muda (pontuação num jogo) e `const` para um valor que não muda (nome do jogador).",
            code: `let pontuacao = 100;
console.log("Pontuação inicial:", pontuacao);

pontuacao = 125; // A pontuação aumentou
console.log("Nova pontuação:", pontuacao);

const nomeJogador = "Alex";
console.log("Bem-vindo,", nomeJogador);

// A linha abaixo causaria um erro, porque não se pode reatribuir uma constante.
// nomeJogador = "Sam";`
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
            }
          ]
        },
        {
          id: '2.2',
          title: 'Tipos de Dados Primitivos',
          // FIX: Converted JSX to React.createElement calls to be valid in a .ts file.
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
            description: "Vamos criar variáveis para cada tipo de dado primitivo e usar `typeof` para ver o que a consola nos diz sobre cada uma.",
            code: `const nome = "Ana";        // String
const idade = 25;          // Number
const eEstudante = true;   // Boolean
let morada;                // Undefined (não foi atribuído valor)
const carro = null;        // Null (valor nulo intencional)

console.log(typeof nome);       // "string"
console.log(typeof idade);      // "number"
console.log(typeof eEstudante); // "boolean"
console.log(typeof morada);     // "undefined"
console.log(typeof carro);      // "object" (isto é um quirk antigo do JS!)`
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
            }
          ]
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
            description: 'Vamos criar um objeto para descrever um utilizador e um array para a sua lista de tarefas. Depois, acederemos a partes específicas dessa informação.',
            code: `const utilizador = {
  nome: "Carlos",
  idade: 35,
  isAdmin: true,
  tarefas: ["Responder emails", "Reunião às 15h", "Regar as plantas"]
};

const primeiraTarefa = utilizador.tarefas[0]; // Aceder ao primeiro item do array 'tarefas'

console.log("Nome do utilizador:", utilizador.nome);
console.log("A primeira tarefa é:", primeiraTarefa);
console.log("A segunda tarefa é:", utilizador.tarefas[1]); // Acesso direto`
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
            }
          ]
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
              React.createElement('li', null, React.createElement('code', { className: 'bg-lightest-navy text-green rounded px-1' }, '%'), ' (Módulo - o resto de uma divisão)')
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
              React.createElement('li', null, '(e assim por diante para *, / e %)')
            )
          ),
          practice: {
            description: 'Vamos fazer umas contas simples e ver os atalhos de atribuição em ação.',
            code: `let a = 10;
let b = 3;

console.log("Soma:", a + b);       // 13
console.log("Resto:", a % b);      // 1 (10 a dividir por 3 dá 3 e sobra 1)

let pontuacao = 100;
pontuacao += 50; // Adiciona 50 à pontuação
console.log("Nova pontuação:", pontuacao); // 150

pontuacao -= 25; // Remove 25
console.log("Pontuação final:", pontuacao); // 125`
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
            }
          ]
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
            description: 'Vamos testar algumas condições. Repara bem na diferença entre `===` e `==`.',
            code: `const idade = 20;
const temBilhete = true;

console.log("É maior de idade?", idade > 18); // true

console.log("Comparação estrita (certa):", 5 === "5"); // false
console.log("Comparação lassa (errada):", 5 == "5");  // true

// Pode entrar na festa?
const podeEntrar = idade >= 18 && temBilhete;
console.log("Pode entrar na festa?", podeEntrar); // true

// Tem desconto? (Menor de 12 OU maior de 65)
const temDesconto = idade < 12 || idade > 65;
console.log("Tem desconto?", temDesconto); // false`
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
            }
          ]
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
            description: 'Vamos ver o hoisting em ação. Presta atenção às diferenças entre `var`, `let` e as funções.',
            code: `// Hoisting com 'var'
console.log(nome); // Output: undefined
var nome = "Ana";
console.log(nome); // Output: "Ana"

/* O que o JS "vê" é algo como isto:
var nome;
console.log(nome);
nome = "Ana";
console.log(nome);
*/

// Hoisting com 'let' (Temporal Dead Zone)
// A linha abaixo causaria um erro: ReferenceError
// console.log(idade);
let idade = 30;

// Hoisting de Funções
saudar(); // Funciona!

function saudar() {
  console.log("Olá!");
}`
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
            }
          ]
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
            description: 'Vamos ver a diferença na prática. Primeiro, com um número (primitivo) e depois com um objeto. Repara como o original se comporta de forma diferente em cada caso.',
            code: `// Exemplo com Valor (Primitivo)
let pontuacao = 100;

function tentarMudar(pontos) {
  pontos = 200; // 'pontos' é uma cópia local
  console.log("Dentro da função:", pontos); // 200
}

tentarMudar(pontuacao);
console.log("Fora da função:", pontuacao); // 100 - O original não mudou!

console.log("\\n--------------------\\n");

// Exemplo com Referência (Objeto)
const utilizador = { nome: "Alex", hobbies: ["jogar"] };

function adicionarHobby(user) {
  // 'user' aponta para o MESMO objeto que 'utilizador'
  user.hobbies.push("ler");
}

adicionarHobby(utilizador);
console.log("Fora da função, hobbies:", utilizador.hobbies);
// O original foi modificado! O output será ['jogar', 'ler']`
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
            }
          ]
        }
      ]
    },
    {
      id: '3',
      title: 'Módulo 3: Controlo de Fluxo',
      lessons: [
        {
          id: '3.1',
          title: 'Estruturas Condicionais: if/else',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Chegou a hora de usar os operadores lógicos para algo prático! As estruturas condicionais permitem que o nosso programa tome decisões e execute diferentes blocos de código com base nas condições que definimos.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'A analogia mais simples é planear o dia com base no tempo:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'SE (if)'), ' estiver a chover, ', React.createElement('strong', { className: 'text-lightest-slate' }, 'levo o guarda-chuva.')),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'SENÃO SE (else if)'), ' estiver sol, ', React.createElement('strong', { className: 'text-lightest-slate' }, 'levo óculos de sol.')),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'SENÃO (else)'),', ', React.createElement('strong', { className: 'text-lightest-slate' }, 'não levo nada de especial.'))
            ),
            React.createElement(
              'p',
              { className: 'mt-4' },
              'O código dentro de um bloco `if` só é executado se a sua condição for `true`. Se for `false`, o JavaScript salta para a próxima condição `else if` (se existir). Se nenhuma das condições `if` ou `else if` for `true`, o bloco `else` (se existir) será executado como um "plano B".'
            )
          ),
          practice: {
            description: 'Vamos criar um programa que dá uma mensagem diferente com base na idade de uma pessoa, e outro que avalia uma nota escolar.',
            code: `const idade = 17;

if (idade >= 18) {
  console.log("És maior de idade. Podes votar.");
} else {
  console.log("Ainda és menor de idade.");
}

// Exemplo com else if
const nota = 8;

if (nota >= 10) {
  console.log("Resultado: Aprovado!");
} else if (nota >= 8) {
  console.log("Resultado: Em recuperação.");
} else {
  console.log("Resultado: Reprovado.");
}`
          },
          quiz: [
            {
              question: "O que será impresso na consola? `const saldo = 50; if (saldo > 100) { console.log('Rico'); } else { console.log('Pobre'); }`",
              options: [
                'Rico',
                'Pobre',
                'Nada será impresso',
                'Vai dar erro'
              ],
              correctAnswerIndex: 1,
              explanation: "A condição `saldo > 100` (ou seja, 50 > 100) é `false`. Como a condição do `if` não foi satisfeita, o código dentro do bloco `else` é executado, imprimindo 'Pobre' na consola."
            }
          ]
        },
        {
          id: '3.2',
          title: 'Estruturas Condicionais: switch',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'A estrutura `switch` é uma alternativa ao `if/else if/else` quando tens uma única variável que queres comparar com múltiplos valores possíveis.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Pensa nela como o menu de uma máquina de vendas. Tu inseres o código de um produto (a variável), e a máquina verifica cada `case` (cada opção do menu) até encontrar uma correspondência. Se não encontrar nenhuma, devolve o item `default` (o "produto não encontrado").'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'A palavra-chave `break` é crucial. É como a máquina a entregar-te o produto e parar. Sem o `break`, a máquina continuaria a verificar as opções seguintes e a entregar todos os produtos a partir da tua escolha (um comportamento chamado "fall-through"), o que raramente é o que queres.'
            )
          ),
          practice: {
            description: 'Vamos usar um `switch` para determinar a mensagem a mostrar com base no dia da semana, representado por um número.',
            code: `const diaSemana = 3; // 1 = Domingo, 2 = Segunda, etc.
let mensagem = "";

switch (diaSemana) {
  case 1:
    mensagem = "Hoje é Domingo. Dia de descanso!";
    break;
  case 7:
    mensagem = "Hoje é Sábado. Bom fim de semana!";
    break;
  case 6:
    mensagem = "Sexta-feira! O fim de semana está a chegar!";
    break;
  default:
    mensagem = "É um dia de semana. Força no trabalho!";
    break;
}

console.log(mensagem);`
          },
          quiz: [
            {
              question: "O que acontece num `switch` se te esqueceres de usar a palavra-chave `break` num `case`?",
              options: [
                'O código para de executar e dá um erro.',
                'O `switch` termina imediatamente.',
                'A execução continua para o `case` seguinte, independentemente da sua condição.',
                'O `default` é executado automaticamente.'
              ],
              correctAnswerIndex: 2,
              explanation: 'Isto chama-se "fall-through". Se um `case` corresponde e não tem `break`, o código continua a executar nos `case` seguintes até encontrar um `break` ou o fim do `switch`. É uma fonte comum de bugs!'
            }
          ]
        },
        {
          id: '3.3',
          title: 'Ciclos (Loops): for',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Os ciclos, ou loops, são usados para repetir uma tarefa várias vezes sem teres de escrever o mesmo código repetidamente. O ciclo `for` é perfeito quando sabes exatamente quantas vezes queres repetir a tarefa.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Imagina que dás instruções a um robô: "Dá 10 passos para a frente". O robô precisa de saber três coisas:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Inicialização:'), ' Começa a contar os passos a partir do 1. (`let i = 1`)'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Condição:'), ' Continua a andar ENQUANTO o número de passos for menor ou igual a 10. (`i <= 10`)'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Incremento:'), ' Depois de cada passo, adiciona 1 à tua contagem. (`i++`)')
            ),
            React.createElement(
              'p',
              { className: 'mt-4' },
              'Estas três partes formam a estrutura de um ciclo `for`, permitindo-te controlar precisamente a repetição.'
            )
          ),
          practice: {
            description: 'Vamos usar um ciclo `for` para contar de 1 a 5. Depois, vamos usar outro para percorrer um array de frutas e imprimir cada uma.',
            code: `// Contar de 1 a 5
console.log("A contar até 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Percorrer um array
const frutas = ["Maçã", "Banana", "Morango"];
console.log("\\nAs minhas frutas favoritas:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}`
          },
          quiz: [
            {
              question: "No código `for (let i = 0; i < 3; i++)`, quantas vezes é que o código dentro do ciclo será executado?",
              options: [
                '2 vezes',
                '3 vezes',
                '4 vezes',
                'Infinitas vezes'
              ],
              correctAnswerIndex: 1,
              explanation: 'O ciclo executa para i = 0, i = 1, e i = 2. Quando `i` se torna 3, a condição `i < 3` torna-se `false` e o ciclo para. Portanto, executa 3 vezes.'
            }
          ]
        },
        {
          id: '3.4',
          title: 'Ciclos (Loops): while e do...while',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Enquanto o ciclo `for` é ótimo para um número definido de repetições, os ciclos `while` e `do...while` são ideais quando a repetição depende de uma condição que pode mudar.'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
              React.createElement(
                'li',
                null,
                React.createElement('strong', { className: 'text-green' }, 'while (Enquanto)'),
                ': É como um segurança numa festa. Ele primeiro ',
                React.createElement('strong', { className: 'text-lightest-slate' }, 'verifica a condição'),
                ' (ex: "a música está a tocar?") e só depois deixa a ação acontecer (as pessoas dançarem). Se a música já estiver parada, ninguém dança.'
              ),
              React.createElement(
                'li',
                null,
                React.createElement('strong', { className: 'text-green' }, 'do...while (Faz...Enquanto)'),
                ': É como provar um prato novo. Tu primeiro ',
                React.createElement('strong', { className: 'text-lightest-slate' }, 'executas a ação uma vez'),
                ' (dás uma garfada) e só depois verificas a condição (se gostaste) para decidir se continuas a comer. A ação acontece sempre, pelo menos uma vez.'
              )
            ),
            React.createElement(
              'p',
              { className: 'mt-2 mb-4 p-4 bg-lightest-navy rounded-md text-sm text-light-slate border-l-4 border-yellow-400' },
               React.createElement('strong', { className: 'font-bold text-yellow-300' }, 'Cuidado: '), 'É fácil criar um ciclo infinito com `while` se a condição nunca se tornar `false`. Certifica-te sempre de que algo dentro do ciclo faz a condição progredir para o seu fim!'
            )
          ),
          practice: {
            description: 'Vamos simular uma contagem decrescente com `while` e mostrar como `do...while` executa sempre pelo menos uma vez.',
            code: `// Exemplo com while
let contagem = 3;
console.log("Contagem decrescente para o lançamento!");
while (contagem > 0) {
  console.log(contagem);
  contagem--; // Essencial para evitar um ciclo infinito!
}
console.log("Lançar!");

// Exemplo com do...while
let tentativas = 5;
do {
  console.log("\\nTentativa número:", tentativas);
  // O código aqui executa mesmo que a condição 'tentativas < 5' seja falsa de início.
} while (tentativas < 5);`
          },
          quiz: [
            {
              question: "Qual é a principal diferença entre um ciclo `while` e um `do...while`?",
              options: [
                '`while` é mais rápido que `do...while`.',
                '`do...while` verifica a condição no início, e `while` no fim.',
                '`while` pode nunca executar, mas `do...while` executa sempre pelo menos uma vez.',
                'Não há nenhuma diferença, são intermutáveis.'
              ],
              correctAnswerIndex: 2,
              explanation: 'Correto! Como `do...while` verifica a condição no final, o bloco de código é sempre executado pelo menos uma vez. `while` verifica a condição no início, por isso o seu bloco de código pode nunca ser executado se a condição for inicialmente falsa.'
            }
          ]
        },
        {
          id: '3.5',
          title: 'Aprofundando: Como Percorrer um Array',
          theory: React.createElement(
            'div',
            null,
            React.createElement('p', { className: 'mb-4' }, 'Já vimos o ciclo `for` para percorrer arrays. Funciona, mas muitas vezes pode ser verboso e propenso a pequenos erros (ex: `i <=` em vez de `i <`). O JavaScript moderno oferece formas mais limpas e expressivas.'),
            React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Ciclo `for` clássico'), ': O "manual". Dá-te controlo total sobre o índice (`i`), o que é útil se precisares dele ou se quiseres percorrer o array de trás para a frente.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Método `.forEach()`'), ': É como dizer ao array: "Para cada um dos teus itens, executa esta ação". É muito legível, mas não podes usar `break` ou `continue` para sair do ciclo a meio.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Ciclo `for...of`'), ': A forma mais moderna e recomendada na maioria dos casos. É como pegar em cada item de uma passadeira rolante, um de cada vez. Dá-te diretamente o valor de cada elemento, de forma limpa e simples. É a combinação perfeita de legibilidade e poder (podes usar `break` e `continue`).')
            )
          ),
          practice: {
            description: 'Vamos ver as três formas de percorrer o mesmo array para comparar a sintaxe.',
            code: `const planetas = ['Mercúrio', 'Vénus', 'Terra'];

// 1. Clássico 'for'
console.log("--- Com 'for' clássico ---");
for (let i = 0; i < planetas.length; i++) {
  console.log(planetas[i]);
}

// 2. Método '.forEach()'
console.log("\\n--- Com '.forEach()' ---");
planetas.forEach(planeta => {
  console.log(planeta);
});

// 3. Moderno 'for...of'
console.log("\\n--- Com 'for...of' ---");
for (const planeta of planetas) {
  console.log(planeta);
}`
          },
          quiz: [
            {
              question: "Qual é a forma mais moderna e legível de simplesmente aceder a cada valor de um array, um por um?",
              options: [
                'for (let i = 0; i < arr.length; i++)',
                'arr.forEach(item => { /* ... */ })',
                'for (const item of arr)',
                'while (arr.length > 0)'
              ],
              correctAnswerIndex: 2,
              explanation: "`for...of` é a escolha ideal para uma simples iteração. É mais conciso que o ciclo `for` clássico e mais direto que o `forEach`, pois não necessita de uma função de callback. Dá-te diretamente o valor de cada item."
            }
          ]
        },
        {
            id: '3.6',
            title: 'Aprofundando: Como Percorrer um Objeto',
            theory: React.createElement(
              'div',
              null,
              React.createElement('p', { className: 'mb-4' }, 'Percorrer as propriedades de um objeto é uma tarefa comum, mas diferente de percorrer um array. Objetos não têm uma ordem garantida e não podem ser percorridos diretamente com um `for...of`.'),
              React.createElement('p', { className: 'mb-4' }, 'Pensa num objeto como um dicionário. Não o lês do início ao fim; procuras as palavras (chaves) que te interessam.'),
              React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
                React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Ciclo `for...in`'), ': A forma mais antiga. Percorre as chaves (propriedades) do objeto. É útil, mas tem uma desvantagem: pode percorrer também propriedades herdadas (do "protótipo"), o que nem sempre é desejável.'),
                React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Método `Object.keys()`'), ': A forma moderna e segura. Devolve um array contendo apenas as próprias chaves do objeto. Depois, podes usar `forEach` ou `for...of` nesse array para fazer o que quiseres.'),
                React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Método `Object.values()`'), ': Similar ao anterior, mas devolve um array com os valores do objeto.'),
                React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Método `Object.entries()`'), ': O mais poderoso. Devolve um array de pequenos arrays, onde cada um contém um par `[chave, valor]`. É perfeito para quando precisas de ambos ao mesmo tempo.')
              )
            ),
            practice: {
              description: 'Vamos usar um objeto que representa um carro e ver as diferentes formas de extrair e listar as suas propriedades.',
              code: `const carro = {
  marca: "Tesla",
  modelo: "Model S",
  ano: 2022,
  eEletrico: true
};

// 1. Moderno (recomendado): Object.keys()
console.log("--- Chaves com Object.keys() ---");
const chaves = Object.keys(carro);
chaves.forEach(chave => {
  console.log(\`\${chave}: \${carro[chave]}\`);
});

// 2. A forma mais poderosa: Object.entries()
console.log("\\n--- Pares com Object.entries() ---");
for (const [chave, valor] of Object.entries(carro)) {
  console.log(\`\${chave}: \${valor}\`);
}

// 3. Antigo: for...in (usar com cautela)
console.log("\\n--- Chaves com for...in ---");
for (const chave in carro) {
  // É boa prática verificar se a propriedade pertence mesmo ao objeto
  if (Object.hasOwn(carro, chave)) {
      console.log(\`\${chave}: \${carro[chave]}\`);
  }
}`
            },
            quiz: [
              {
                question: "Qual método usarias para obter um array com todos os valores de um objeto?",
                options: [
                  'Object.keys(obj)',
                  'Object.values(obj)',
                  'Object.entries(obj)',
                  'for...in'
                ],
                correctAnswerIndex: 1,
                explanation: "`Object.values()` é o método desenhado especificamente para esta tarefa. Ele extrai todos os valores das propriedades de um objeto e devolve-os num novo array."
              }
            ]
          }
      ]
    },
    {
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
            description: 'Vamos criar uma função simples para saudar uma pessoa e outra para somar dois números e devolver o resultado.',
            code: `// 1. Declarar a função 'saudar' com um parâmetro 'nome'
function saudar(nome) {
  console.log("Olá, " + nome + "! Bem-vindo(a).");
}

// 2. Chamar a função com diferentes argumentos
saudar("Ana");
saudar("Carlos");

// 3. Declarar uma função que retorna um valor
function somar(a, b) {
  return a + b;
}

// 4. Chamar a função e guardar o resultado numa variável
const resultado = somar(5, 10);
console.log("O resultado da soma é:", resultado); // 15`
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
            }
          ]
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
            description: 'Vamos reescrever uma função tradicional como uma arrow function para ver a diferença na prática. Depois, criamos uma que recebe um único parâmetro, onde a sintaxe é ainda mais simples.',
            code: `// Função tradicional
function calcularPrecoComIVA(preco) {
  return preco * 1.23;
}
console.log("Tradicional:", calcularPrecoComIVA(100));

// A mesma função como Arrow Function
const calcularPrecoComIVAArrow = (preco) => {
  return preco * 1.23;
};
console.log("Arrow (com corpo):", calcularPrecoComIVAArrow(100));

// Arrow Function simplificada (retorno implícito)
const calcularPrecoComIVAConcisa = preco => preco * 1.23;
console.log("Arrow (concisa):", calcularPrecoComIVAConcisa(100));`
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
            }
          ]
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
            description: 'Vamos criar uma função de saudação com um nome padrão. Depois, uma função que verifica se um número é positivo e pára a execução assim que encontra o `return`.',
            code: `// Parâmetros padrão
function saudar(nome = "visitante") {
  console.log(\`Olá, \${nome}!\`);
}

saudar("Maria"); // Olá, Maria!
saudar();        // Olá, visitante!

// A importância do 'return'
function getClassificacao(nota) {
  if (nota < 0 || nota > 20) {
    return "Nota inválida"; // A função pára aqui
  }
  
  if (nota >= 10) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log(getClassificacao(15));  // Aprovado
console.log(getClassificacao(25));  // Nota inválida`
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
            }
          ]
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
            description: 'Vamos observar o escopo em ação. Declaramos variáveis em diferentes escopos e tentamos acedê-las de vários locais para ver o que funciona e o que causa erros.',
            code: `const variavelGlobal = "Estou no jardim";

function meuQuarto() {
  const variavelDoQuarto = "Estou no meu quarto";
  console.log(variavelGlobal); // Consigo ver o jardim daqui

  if (true) {
    let variavelDaGaveta = "Estou na gaveta";
    console.log(variavelDaGaveta); // Funciona
  }
  
  // A linha abaixo daria um erro, porque a gaveta está fechada.
  // console.log(variavelDaGaveta); 
}

meuQuarto();

// A linha abaixo daria um erro, porque não conseguimos ver para dentro do quarto.
// console.log(variavelDoQuarto);`
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
            }
          ]
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
            description: 'Vamos demonstrar estes três super-poderes das funções em JavaScript.',
            code: `// 1. Guardar uma função numa variável
const saudar = function(nome) {
  console.log(\`Olá, \${nome}!\`);
};
saudar("Mundo");

// 2. Passar uma função como argumento (Callback)
function processarArray(array, acao) { // 'acao' é o callback
  for (const item of array) {
    acao(item); // Executa a ação para cada item
  }
}
const numeros = [1, 2, 3];
processarArray(numeros, (numero) => {
  console.log(\`O dobro é \${numero * 2}\`);
});

// 3. Retornar uma função (Higher-Order Function)
function criarMultiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}
const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log("Duplicado:", duplicar(10));   // 20
console.log("Triplicado:", triplicar(10));  // 30`
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
            }
          ]
        }
      ]
    },
    {
      id: '5',
      title: 'Módulo 5: JavaScript e o Navegador: O DOM',
      lessons: [
        {
          id: '5.1',
          title: 'O que é o DOM?',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Até agora, o nosso código tem vivido principalmente na consola. Está na hora de o fazer interagir com a própria página web. É aqui que entra o DOM.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              React.createElement('strong', { className: 'text-lightest-slate' }, 'DOM significa Document Object Model (Modelo de Objeto do Documento).'),
              ' É uma representação em estrutura de árvore do teu documento HTML que o navegador cria quando carrega uma página. O JavaScript pode interagir com esta árvore para alterar a estrutura, o estilo e o conteúdo da página.'
            ),
             React.createElement(
              'p',
              { className: 'mb-4' },
              'A analogia perfeita é uma ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'árvore genealógica'),
              '. O elemento `<html>` é o patriarca. O `<body>` e o `<head>` são os seus filhos. O `<body>` pode ter filhos como `<h1>`, `<div>` e `<p>`, que por sua vez podem ter outros filhos. O JavaScript é como um genealogista que pode:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, 'Encontrar qualquer pessoa na árvore (selecionar um elemento).'),
              React.createElement('li', null, 'Mudar o nome de uma pessoa (alterar o texto de um elemento).'),
              React.createElement('li', null, 'Mudar a cor da roupa de uma pessoa (alterar o estilo CSS).'),
              React.createElement('li', null, 'Adicionar novas pessoas à família (criar e inserir novos elementos).'),
              React.createElement('li', null, 'Remover pessoas da árvore (remover elementos).')
            ),
             React.createElement(
              'p',
              { className: 'mt-4' },
              'O ponto de partida para interagir com o DOM é quase sempre o objeto global `document`.'
            )
          ),
          practice: {
            description: 'Para interagir com o DOM, primeiro precisamos de selecionar um elemento. O método mais comum para começar é `document.getElementById()`, que seleciona um elemento pelo seu atributo `id` único. Vamos usá-lo para encontrar um parágrafo e alterar o seu texto.',
            code: `<!-- No teu ficheiro HTML: -->
<!-- <p id="mensagem">Este é o texto original.</p> -->

// No teu ficheiro JavaScript:

// 1. Selecionar o elemento com o id "mensagem"
const paragrafo = document.getElementById("mensagem");

// 2. Mudar o seu conteúdo de texto
paragrafo.textContent = "Olá, DOM! O texto foi alterado.";

// 3. Mudar o seu estilo (cor do texto)
paragrafo.style.color = "#64ffda"; // A nossa cor 'green'`
          },
          quiz: [
            {
              question: 'O que é o DOM?',
              options: [
                'Uma linguagem de programação.',
                'Uma representação em árvore do documento HTML, que pode ser manipulada por JavaScript.',
                'Um ficheiro que guarda os estilos da página, como o CSS.',
                'O servidor onde o website está alojado.'
              ],
              correctAnswerIndex: 1,
              explanation: 'Correto! O DOM é a ponte entre o teu código HTML e o teu código JavaScript. É um "modelo" da tua página que o JS consegue entender e modificar dinamicamente.'
            }
          ]
        },
        {
          id: '5.2',
          title: 'Selecionar Elementos (Avançado)',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Se `getElementById` é como chamar alguém pelo seu nome único, existem outras formas mais flexíveis de encontrar elementos, tal como encontrar pessoas pelas suas características.'
            ),
             React.createElement(
              'p',
              { className: 'mb-4' },
              'Os métodos modernos usam seletores de CSS, os mesmos que usas para estilizar a página, o que os torna extremamente poderosos:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'document.querySelector(seletor)'), ': É como dizer "encontra a ', React.createElement('strong', { className: 'text-lightest-slate' }, 'primeira pessoa'), ' que está a usar um chapéu vermelho". Devolve o primeiro elemento que corresponde ao seletor de CSS. Se não encontrar nada, devolve `null`.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'document.querySelectorAll(seletor)'), ': É como dizer "dá-me uma lista de ', React.createElement('strong', { className: 'text-lightest-slate' }, 'todas as pessoas'), ' que estão a usar um chapéu vermelho". Devolve uma `NodeList` (parecida com um array) com todos os elementos que correspondem. Se não encontrar nada, a lista vem vazia.')
            ),
             React.createElement(
              'p',
              { className: 'mt-4' },
              'Existem também métodos mais antigos como `getElementsByClassName` ou `getElementsByTagName`, mas `querySelector` e `querySelectorAll` são geralmente preferidos por serem mais versáteis.'
            )
          ),
          practice: {
            description: 'Vamos usar `querySelector` para apanhar o primeiro parágrafo com uma classe específica e `querySelectorAll` para apanhar todos os itens de uma lista.',
            code: `<!-- No teu HTML:
<h1 id="titulo">Título Principal</h1>
<p class="texto">Primeiro parágrafo.</p>
<p class="texto">Segundo parágrafo.</p>
<ul>
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
</ul>
-->

// No teu JS:

// Selecionar o primeiro elemento com a classe 'texto'
const primeiroParagrafo = document.querySelector('.texto');
console.log(primeiroParagrafo.textContent); // "Primeiro parágrafo."

// Selecionar todos os elementos com a classe 'item'
const todosOsItens = document.querySelectorAll('.item');

// Percorrer a lista de itens e imprimir o seu texto
todosOsItens.forEach(item => {
  console.log("Item da lista:", item.textContent);
});`
          },
          quiz: [
            {
              question: "Qual método usarias para selecionar todos os links `<a>` dentro de um `<div>` com o id `menu`?",
              options: [
                "document.querySelector('#menu a')",
                "document.getElementById('menu a')",
                "document.querySelectorAll('#menu a')",
                "document.getElementsByTagName('a')"
              ],
              correctAnswerIndex: 2,
              explanation: "Correto! `querySelectorAll` é o método ideal porque queremos 'todos' os elementos que correspondem. O seletor de CSS '#menu a' especifica exatamente o que procuramos: todos os elementos `<a>` que sejam descendentes do elemento com o id `menu`."
            }
          ]
        },
        {
          id: '5.3',
          title: 'Modificar Conteúdo, Atributos e Classes',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Depois de selecionares um elemento, podes modificá-lo de várias maneiras. É como ter um boneco e poder mudar-lhe a roupa, o que ele diz e os acessórios que usa.'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Conteúdo (O que ele diz)'), ': Podes mudar o texto com `.textContent` (seguro) ou o HTML interno com `.innerHTML` (cuidado! pode ser inseguro se usares texto vindo do utilizador).'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Atributos (Os acessórios)'), ': Podes mudar os atributos de um elemento, como o `src` de uma imagem ou o `href` de um link, com `.setAttribute(nome, valor)` e lê-los com `.getAttribute(nome)`.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Classes (A roupa)'), ': A propriedade `.classList` é a melhor forma de manipular classes. É um guarda-roupa com métodos úteis: `.add("classe")` para vestir, `.remove("classe")` para despir, e `.toggle("classe")` para vestir se estiver despido e vice-versa.')
            )
          ),
          practice: {
            description: 'Vamos selecionar uma imagem, alterar a sua fonte (o atributo `src`), o seu texto alternativo (`alt`), e depois adicionar uma classe que lhe mete uma borda bonita.',
            code: `<!-- No HTML:
<img id="avatar" src="imagem_original.png" alt="Avatar antigo">
<style>.borda-verde { border: 3px solid #64ffda; }</style>
-->

// No JS:
const imagem = document.getElementById('avatar');

// Mudar atributos
imagem.setAttribute('src', 'imagem_nova.png');
imagem.alt = 'Avatar novo e melhorado'; // Acesso direto também funciona para muitos atributos

// Adicionar uma classe
imagem.classList.add('borda-verde');

console.log("A imagem agora tem a classe:", imagem.className);`
          },
          quiz: [
            {
              question: "Qual é a principal razão para preferir `textContent` em vez de `innerHTML` ao inserir texto de fontes não confiáveis?",
              options: [
                'É mais rápido.',
                'É mais fácil de escrever.',
                'Evita ataques de Cross-Site Scripting (XSS) porque não interpreta o texto como HTML.',
                'Funciona em navegadores mais antigos.'
              ],
              correctAnswerIndex: 2,
              explanation: "`innerHTML` interpreta qualquer string como HTML, o que significa que um utilizador malicioso poderia injetar uma tag `<script>` e executar código na tua página. `textContent` trata tudo como texto simples, neutralizando este risco de segurança."
            }
          ]
        },
        {
          id: '5.4',
          title: 'Manipulação de Eventos',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'A interatividade num website vem da capacidade de responder a ações do utilizador. Estas ações são chamadas de "eventos". JavaScript permite-nos "ouvir" estes eventos e executar código em resposta.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'A analogia é como instalar um sensor de movimento. Usas a ferramenta `addEventListener` para o fazer. Precisas de três coisas:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, 'O ', React.createElement('strong', { className: 'text-lightest-slate' }, 'elemento'), ' onde instalar o sensor (ex: um botão).'),
              React.createElement('li', null, 'O ', React.createElement('strong', { className: 'text-lightest-slate' }, 'tipo de evento'), ' a que o sensor reage (ex: um `"click"`).'),
              React.createElement('li', null, 'A ', React.createElement('strong', { className: 'text-lightest-slate' }, 'função a executar'), ' (a "callback") quando o sensor dispara (ex: acender uma luz).')
            ),
            React.createElement(
              'p',
              { className: 'mt-4' },
              'Eventos comuns incluem `click`, `mouseover` (passar o rato por cima), `keydown` (pressionar uma tecla), e `submit` (submeter um formulário).'
            )
          ),
          practice: {
            description: 'Vamos criar um botão que, ao ser clicado, muda o texto de um parágrafo. Isto liga a seleção de elementos, a modificação do DOM e a manipulação de eventos numa única tarefa.',
            code: `<!-- No HTML:
<button id="meuBotao">Clica em mim!</button>
<p id="mensagem">Olá!</p>
-->

// No JS:
const botao = document.getElementById('meuBotao');
const paragrafo = document.getElementById('mensagem');

function alterarMensagem() {
  paragrafo.textContent = "Obrigado por clicares!";
  paragrafo.style.color = '#64ffda';
}

// Adicionar o "ouvinte de evento" ao botão
botao.addEventListener('click', alterarMensagem);`
          },
          quiz: [
            {
              question: "Qual é a sintaxe correta para executar a função `mostrarAlerta` quando um botão com o id 'meuBotao' é clicado?",
              options: [
                "meuBotao.addEventListener('click', mostrarAlerta());",
                "document.getElementById('meuBotao').addEventListener('click', mostrarAlerta);",
                "document.getElementById('meuBotao').onClick = mostrarAlerta();",
                "document.querySelector('#meuBotao').listen('click', mostrarAlerta);"
              ],
              correctAnswerIndex: 1,
              explanation: "Usamos `addEventListener` no elemento selecionado. O nome da função (`mostrarAlerta`) é passado como referência (sem os parênteses `()`), para que o navegador a possa chamar mais tarde quando o evento ocorrer."
            }
          ]
        },
        {
          id: '5.5',
          title: 'Criar e Remover Elementos',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'O JavaScript não se limita a manipular elementos existentes; ele pode criar novos elementos do zero e adicioná-los à página, ou remover elementos que já não são necessários. Isto é a base de todas as aplicações web dinâmicas.'
            ),
             React.createElement(
              'p',
              { className: 'mb-4' },
              'É um processo de dois passos, como construir um móvel do IKEA:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, '1. ', React.createElement('strong', { className: 'text-green' }, 'Construir o móvel (Criar o elemento)'), ': Usas `document.createElement("tagName")`. Isto cria o elemento, mas ele existe apenas em memória, fora da página.'),
              React.createElement('li', null, '2. ', React.createElement('strong', { className: 'text-green' }, 'Colocar o móvel no sítio (Anexar o elemento)'), ': Depois de o construíres e talvez personalizares (ex: com `.textContent`), precisas de o adicionar a um elemento que já está na página. Usas `elementoPai.appendChild(novoElemento)` para o colocar no final do elemento pai.')
            ),
            React.createElement(
              'p',
              { className: 'mt-4' },
              'Para remover, o processo é `elementoPai.removeChild(elementoA remover)`.'
            )
          ),
          practice: {
            description: 'Vamos adicionar itens a uma lista de tarefas. Cada vez que um botão é clicado, um novo `<li>` é criado e adicionado à `<ul>`.',
            code: `<!-- No HTML:
<input id="novaTarefa" type="text" placeholder="Nova tarefa...">
<button id="adicionar">Adicionar</button>
<ul id="listaTarefas"></ul>
-->

// No JS:
const botaoAdicionar = document.getElementById('adicionar');
const lista = document.getElementById('listaTarefas');
const input = document.getElementById('novaTarefa');

botaoAdicionar.addEventListener('click', () => {
  const textoTarefa = input.value;
  if (textoTarefa === "") return; // Não adicionar se estiver vazio

  // 1. Criar o novo elemento <li>
  const novoItem = document.createElement('li');

  // 2. Definir o seu conteúdo
  novoItem.textContent = textoTarefa;

  // 3. Adicioná-lo à lista <ul>
  lista.appendChild(novoItem);
  
  // 4. Limpar o input
  input.value = "";
});`
          },
          quiz: [
            {
              question: "Depois de criar um novo parágrafo com `const p = document.createElement('p')`, o que precisas de fazer para que ele apareça na página?",
              options: [
                'Nada, ele aparece automaticamente.',
                'Adicioná-lo ao `document` com `document.add(p)`.',
                'Anexá-lo a um elemento já existente no DOM usando um método como `appendChild()`.',
                'Reiniciar a página.'
              ],
              correctAnswerIndex: 2,
              explanation: "Criar um elemento com `createElement` apenas o cria na memória. Para o tornar visível, tens de o inserir na árvore do DOM, anexando-o a um elemento pai que já faça parte da página."
            }
          ]
        }
      ]
    },
    {
      id: '6',
      title: 'Módulo 6: Tópicos Avançados',
      lessons: [
        {
          id: '6.1',
          title: 'JavaScript Assíncrono: Callbacks',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'O JavaScript, por natureza, é "single-threaded", o que significa que só consegue fazer uma coisa de cada vez. A isto chamamos comportamento ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'síncrono'),
              '.'
            ),
             React.createElement(
              'p',
              { className: 'mb-4' },
              'Imagina uma fila única num café. Não podes pedir o teu café até que a pessoa à tua frente tenha pago e recebido o dela. Se o pedido dela for complicado e demorar 5 minutos, toda a gente tem de esperar. Isto seria terrível num website; a página "congelaria" à espera que uma tarefa demorada (como ir buscar dados a um servidor) terminasse.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'É aqui que entra o código ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'assíncrono'),
              '. A analogia muda para um restaurante: tu fazes o teu pedido (inicias a tarefa demorada), o empregado dá-te um pager e tu vais sentar-te (o resto do teu código continua a executar). Quando o teu pedido estiver pronto (a tarefa termina), o pager vibra. Esse "aviso" é a ',
              React.createElement('strong', { className: 'text-green' }, 'função de callback'),
              ' - uma função que passas como argumento a outra, para ser executada mais tarde.'
            ),
             React.createElement(
              'p',
              { className: 'mt-4' },
              'A função `setTimeout` é o exemplo mais simples. Ela agenda a execução de uma função de callback após um certo período de tempo, sem bloquear o resto do código.'
            )
          ),
          practice: {
            description: 'Vamos ver a diferença entre síncrono e assíncrono. Usamos `setTimeout` para agendar uma mensagem, e vemos como as outras mensagens aparecem primeiro, mesmo que o tempo de espera seja 0 milissegundos.',
            code: `console.log("Pedido 1: Pedir o café.");

// Tarefa assíncrona: o café demora 2 segundos a ser feito.
// O 'pager' (callback) será chamado quando estiver pronto.
setTimeout(() => {
  console.log("Callback: O teu café está pronto!");
}, 2000); // 2000 milissegundos = 2 segundos

console.log("Pedido 2: Sentar à mesa e ler o jornal.");

// Experiência com 0ms:
console.log("\\n--- Experiência com 0ms ---");
console.log("A");
setTimeout(() => { console.log("B"); }, 0);
console.log("C");
// Output: A, C, B`
          },
          quiz: [
            {
              question: "Qual será a ordem de impressão na consola do seguinte código? `console.log('Primeiro'); setTimeout(() => console.log('Segundo'), 0); console.log('Terceiro');`",
              options: [
                'Primeiro, Segundo, Terceiro',
                'Segundo, Primeiro, Terceiro',
                'Primeiro, Terceiro, Segundo',
                'Vai dar um erro.'
              ],
              correctAnswerIndex: 2,
              explanation: "Isto é um conceito chave do JavaScript! Mesmo com um atraso de 0ms, `setTimeout` coloca a sua função de callback na 'fila de eventos'. O motor do JavaScript executa primeiro todo o código síncrono (`console.log('Primeiro')` e `console.log('Terceiro')`), e só depois verifica a fila e executa o `console.log('Segundo')`."
            }
          ]
        },
        {
          id: '6.2',
          title: 'JavaScript Assíncrono: Promises',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'As Promises são uma evolução dos callbacks para lidar com código assíncrono. Elas representam um valor que pode estar disponível ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'agora, no futuro, ou nunca'),
              '. Elas ajudam a evitar o "Callback Hell", um aninhamento excessivo de callbacks que torna o código difícil de ler.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'A analogia é uma ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'encomenda online'),
              '. Quando fazes a encomenda, recebes uma "promessa" de que o item chegará. Esta promessa pode ter três estados:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Pending (Pendente):'), ' A encomenda foi feita e estás à espera.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Fulfilled (Realizada):'), ' A encomenda chegou com sucesso! É aqui que usas o método `.then()` para lidar com o resultado.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Rejected (Rejeitada):'), ' Houve um problema com a encomenda. É aqui que usas o método `.catch()` para lidar com o erro.')
            ),
             React.createElement(
              'p',
              { className: 'mt-4' },
              'A grande vantagem é que podes encadear vários `.then()`, tornando o fluxo assíncrono muito mais legível.'
            )
          ),
          practice: {
            description: 'A função `fetch` (que busca dados de um URL) retorna uma Promise. Vamos usá-la para ir buscar dados de uma API pública e ver como lidamos com o sucesso e o erro.',
            code: `const url = 'https://jsonplaceholder.typicode.com/todos/1';

console.log("A ir buscar dados...");

fetch(url)
  .then(response => {
    // .then() é chamado quando o servidor responde.
    // Verificamos se a resposta foi bem-sucedida.
    if (!response.ok) {
      throw new Error('Erro na rede!');
    }
    return response.json(); // .json() também retorna uma Promise!
  })
  .then(data => {
    // Este .then() lida com o resultado da Promise de .json().
    console.log("Dados recebidos:", data);
  })
  .catch(error => {
    // .catch() é chamado se houver qualquer erro na cadeia.
    console.error("Ups, algo correu mal:", error);
  });

console.log("Pedido feito. A aguardar resposta...");`
          },
          quiz: [
            {
              question: 'Numa Promise, para que serve o método `.catch()`?',
              options: [
                'Para executar código, quer a Promise tenha sucesso ou falhe.',
                'Para executar código apenas quando a Promise é bem-sucedida.',
                'Para lidar com qualquer erro que ocorra na Promise ou na cadeia de `.then()`.',
                'Para cancelar uma Promise que está pendente.'
              ],
              correctAnswerIndex: 2,
              explanation: 'O método `.catch()` é o "plano B". Ele apanha qualquer erro que aconteça, seja uma falha de rede ou um erro lançado intencionalmente, permitindo-te lidar com a falha de forma controlada.'
            }
          ]
        },
        {
          id: '6.3',
          title: 'JavaScript Assíncrono: Async/Await',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              '`async/await` é "açúcar sintático" por cima das Promises. Não introduz nada de novo, mas permite-nos escrever código assíncrono que se ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'parece e comporta como código síncrono'),
              ', tornando-o muito mais fácil de ler e de raciocinar.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'A analogia é ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'seguir uma receita de cozinha passo a passo'),
              '. Em vez de usar vários temporizadores (`.then()`), tu simplesmente segues a receita:'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, '1. Marca a receita como `async` (a palavra-chave `async` antes de `function`).'),
              React.createElement('li', null, '2. Quando chegas a um passo que demora tempo (ex: "pré-aquecer o forno"), tu ', React.createElement('strong', { className: 'text-green' }, '`await`'), ' (esperas) que ele termine antes de passares ao passo seguinte.'),
              React.createElement('li', null, '3. Se algo pode correr mal (o forno avariar), metes esses passos dentro de um bloco `try...catch`, como um plano de contingência.')
            )
          ),
          practice: {
            description: 'Vamos reescrever o exemplo da lição anterior usando `async/await`. Repara como o código fica mais limpo e linear, sem a necessidade de encadear `.then()`.',
            code: `const url = 'https://jsonplaceholder.typicode.com/todos/1';

// A função tem de ser marcada como 'async'
async function buscarDados() {
  console.log("A ir buscar dados...");
  
  // Usamos um bloco try...catch para lidar com erros
  try {
    // 'await' pausa a função até a Promise do fetch resolver
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Erro na rede!');
    }
    
    // 'await' pausa novamente até a Promise do .json() resolver
    const data = await response.json();
    
    console.log("Dados recebidos:", data);
  } catch (error) {
    console.error("Ups, algo correu mal:", error);
  }
  
  console.log("Busca de dados terminada.");
}

buscarDados();`
          },
          quiz: [
            {
              question: 'O que faz a palavra-chave `await`?',
              options: [
                'Executa uma função imediatamente.',
                'Pausa a execução de uma função `async` até que uma Promise seja resolvida ou rejeitada.',
                'Define uma função como sendo assíncrona.',
                'Ignora uma Promise e continua a executar o código.'
              ],
              correctAnswerIndex: 1,
              explanation: '`await` é a chave da magia! Só pode ser usado dentro de uma função `async` e efetivamente "pausa" a função naquele ponto, espera que a Promise termine, e depois continua a execução com o resultado da Promise.'
            }
          ]
        },
        {
          id: '6.4',
          title: 'Fetch API e JSON',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Já usámos a `fetch` API, mas vamos aprofundar o seu propósito e o formato de dados mais comum na web: JSON.'
            ),
            React.createElement(
              'h3',
              { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'API (Application Programming Interface)'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Uma API é como o ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'menu de um restaurante'),
              '. Não precisas de saber como a cozinha funciona; o menu dá-te uma lista de pratos (dados) que podes pedir e as regras para o fazer. Da mesma forma, uma API web define os "endpoints" (URLs) que podes aceder para obter ou enviar dados.'
            ),
             React.createElement(
              'h3',
              { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'JSON (JavaScript Object Notation)'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'JSON é o formato em que a comida (os dados) é servida. É um formato de texto leve e fácil de ler tanto para humanos como para máquinas. A sua sintaxe é praticamente idêntica à dos objetos e arrays de JavaScript, o que o torna perfeito para trabalhar com a linguagem.'
            ),
            React.createElement(
              'p',
              null,
              'Quando usas `fetch` para obter dados, a resposta do servidor vem num formato bruto. O método `.json()` lê essa resposta até ao fim e transforma o texto JSON num verdadeiro objeto ou array de JavaScript que podes usar no teu código.'
            )
          ),
          practice: {
            description: 'Vamos usar a `fetch` API para ir buscar uma lista de utilizadores de uma API pública. Depois, vamos percorrer essa lista (que virá em formato JSON e será convertida para um array) e mostrar os nomes na consola.',
            code: `async function buscarUtilizadores() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const utilizadores = await response.json(); // Converte a resposta JSON para um array JS
    
    console.log("Lista de Utilizadores:");
    utilizadores.forEach(user => {
      console.log(\`- \${user.name} (\${user.email})\`);
    });
    
  } catch (error) {
    console.error('Não foi possível buscar os utilizadores:', error);
  }
}

buscarUtilizadores();`
          },
          quiz: [
            {
              question: "Quando recebes uma resposta de uma chamada `fetch`, o que faz o método `.json()`?",
              options: [
                'Verifica se a resposta é válida.',
                'Converte a resposta para uma string de texto simples.',
                'Lê o corpo da resposta e transforma o texto em formato JSON num objeto/array de JavaScript.',
                'Envia dados em formato JSON para um servidor.'
              ],
              correctAnswerIndex: 2,
              explanation: 'Correto! O método `.json()` é um passo crucial que "desempacota" os dados da resposta do servidor, transformando-os numa estrutura de dados de JavaScript (como um objeto ou array) com a qual podes trabalhar facilmente.'
            }
          ]
        }
      ]
    },
    {
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
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '.reduce()'), ': É como ', React.createElement('strong', { className: 'text-lightest-slate' }, 'fazer um sumo'), '. Recebe um array de vários itens (frutas) e combina-os num único valor final (o sumo).')
            )
          ),
          practice: {
            description: 'Vamos usar um array de números para demonstrar o poder destes três métodos.',
            code: `const numeros = [1, 2, 3, 4, 5, 6];

// .map() para criar um novo array com o dobro de cada número
const dobrados = numeros.map(num => num * 2);
console.log("Dobrados:", dobrados); // [2, 4, 6, 8, 10, 12]

// .filter() para criar um novo array apenas com os números pares
const pares = numeros.filter(num => num % 2 === 0);
console.log("Pares:", pares); // [2, 4, 6]

// .reduce() para calcular a soma de todos os números
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log("Soma:", soma); // 21`
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
            }
          ]
        },
        {
          id: '7.2',
          title: 'ES6+: Destructuring e Spread/Rest',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'O JavaScript está sempre a evoluir. As funcionalidades do ES6 (ECMAScript 2015) e posteriores tornaram o código muito mais agradável de escrever. Vamos ver duas das mais úteis.'
            ),
             React.createElement(
              'h3',
              { className: 'text-xl font-bold text-lightest-slate mb-2' }, 'Destructuring (Desestruturação)'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'É como ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'desfazer as malas'),
              '. Em vez de tirares os itens um a um da mala (ex: `mala.camisola`, `mala.calcas`), abres a mala e tiras logo o que queres para variáveis separadas.'
            ),
             React.createElement(
              'h3',
              { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'Spread (...) e Rest (...)'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'São o mesmo operador (`...`), mas usado em contextos diferentes.'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Spread (Espalhar):'), ' É como tirar todas as cartas de um baralho e espalhá-las na mesa. Podes usar isto para copiar arrays/objetos ou para os combinar.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Rest (Resto):'), ' É como pegar em algumas cartas de cima do baralho e dizer "...e o resto". Agrupa os elementos restantes de um array ou os parâmetros de uma função.')
            )
          ),
          practice: {
            description: 'Vamos ver estes operadores em ação para extrair dados de um objeto e manipular arrays de forma limpa.',
            code: `// Destructuring
const pessoa = { nome: 'Joana', idade: 29, cidade: 'Porto' };
const { nome, idade } = pessoa;
console.log(\`\${nome} tem \${idade} anos.\`);

// Spread
const frutas1 = ['maçã', 'banana'];
const frutas2 = ['laranja', 'morango'];
const todasAsFrutas = [...frutas1, ...frutas2];
console.log("Todas as frutas:", todasAsFrutas);

// Rest
function somar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log("Soma com Rest:", somar(10, 20, 30)); // 60`
          },
          quiz: [
            {
              question: "Qual será o valor de `novoArray`? `const array1 = [1, 2]; const novoArray = [...array1, 3, 4];`",
              options: [
                '[[1, 2], 3, 4]',
                '[1, 2, 3, 4]',
                '[1, 2, [3, 4]]',
                'Vai dar um erro.'
              ],
              correctAnswerIndex: 1,
              // FIX: Replaced incorrect shorthand property 'espalha' with the correct 'explanation' property and its value.
              explanation: "O operador spread `...array1` \"espalha\" os elementos de `array1` dentro do novo array. Assim, em vez de inserir o array `[1, 2]` como um único elemento, ele insere os seus elementos individuais, 1 e 2, resultando em `[1, 2, 3, 4]`."
            }
          ]
        },
        {
          id: '7.3',
          title: 'Módulos: import / export',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'À medida que as tuas aplicações crescem, colocar todo o código num único ficheiro torna-se impraticável. Os módulos permitem-te dividir o teu código em ficheiros mais pequenos e reutilizáveis, mantendo tudo organizado.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'A analogia é uma ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'biblioteca com diferentes secções'),
              '. Em vez de teres todos os livros amontoados numa sala, tens secções de "Matemática", "História", etc.'
            ),
            React.createElement(
              'ul',
              { className: 'list-disc list-inside mb-4 pl-4 space-y-2' },
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'export'), ': É como colocar um livro (uma função, variável, classe) na prateleira de uma secção para que outros o possam consultar. Podes ter várias "exportações nomeadas" ou uma única "exportação padrão" por ficheiro.'),
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'import'), ': É como ir a uma secção específica da biblioteca para requisitar um livro que precisas para o teu trabalho.')
            )
          ),
          practice: {
            description: 'Vamos simular dois ficheiros. Um `matematica.js` que exporta funções, e um `app.js` que as importa para as usar. (Nota: para isto funcionar num navegador, o teu ficheiro HTML precisaria de `<script type="module">`).',
            code: `// Ficheiro: matematica.js
export const PI = 3.14159;

export function somar(a, b) {
  return a + b;
}

export function subtrair(a, b) {
  return a - b;
}

// ------------------------------------

// Ficheiro: app.js
import { somar, PI } from './matematica.js';
// Podes importar tudo de uma vez: import * as Mat from './matematica.js';

const resultado = somar(5, 3);
console.log(\`Resultado: \${resultado}\`);
console.log(\`Valor de PI: \${PI}\`);`
          },
          quiz: [
            {
              question: "Se um ficheiro `utils.js` contém `export const apiKey = '123';`, como o importarias corretamente noutro ficheiro?",
              options: [
                "import apiKey from './utils.js';",
                "import { apiKey } from './utils.js';",
                "require({ apiKey } from './utils.js');",
                "import './utils.js' as apiKey;"
              ],
              correctAnswerIndex: 1,
              explanation: "Como `apiKey` é uma exportação nomeada (não `default`), temos de usar chavetas `{}` à volta do nome exato da variável que queremos importar."
            }
          ]
        },
        {
          id: '7.4',
          title: 'E agora? Próximos Passos',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4 font-bold text-lightest-slate' },
              'Parabéns por chegares até aqui! Já tens uma base sólida de JavaScript.'
            ),
             React.createElement(
              'p',
              { className: 'mb-4' },
              'Aprender a programar é uma jornada, não um destino. Se o JavaScript que aprendeste aqui são as ferramentas individuais (martelo, serrote, chave de fendas), os próximos passos envolvem aprender a usar "kits pré-fabricados" e ferramentas mais especializadas para construir coisas maiores e mais depressa.'
            ),
            React.createElement(
              'h3',
              { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'Frameworks e Bibliotecas'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Estas são as "plantas e kits" do mundo do desenvolvimento. Em vez de construíres cada componente da tua interface do zero, usas sistemas como ', React.createElement('strong', { className: 'text-green' }, 'React'), ', ', React.createElement('strong', { className: 'text-green' }, 'Vue'), ', ou ', React.createElement('strong', { className: 'text-green' }, 'Angular'), ' para criar interfaces complexas, interativas e eficientes. A aplicação que estás a usar foi construída com React!'
            ),
            React.createElement(
              'h3',
              { className: 'text-xl font-bold text-lightest-slate mb-2 mt-6' }, 'Node.js (JavaScript no Servidor)'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'E se pudesses usar as tuas habilidades de JavaScript para construir a "cozinha" do restaurante em vez de apenas a "sala de jantar"? O Node.js permite-te fazer exatamente isso. Podes criar servidores, interagir com bases de dados e construir o backend completo das tuas aplicações, tudo com JavaScript.'
            ),
             React.createElement(
              'p',
              { className: 'mb-4' },
              'O mais importante é ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'continuar a praticar'),
              '. Cria pequenos projetos, tenta recriar websites que gostas, e nunca pares de aprender. A comunidade de desenvolvimento é vasta e cheia de recursos.'
            )
          ),
          practice: {
            description: 'Não há código a executar aqui. Em vez disso, aqui ficam alguns recursos fantásticos para continuares a tua jornada:',
            code: `// Documentação de referência (essencial):
// MDN Web Docs: https://developer.mozilla.org/

// Para praticar com desafios de código:
// freeCodeCamp: https://www.freecodecamp.org/
// Codewars: https://www.codewars.com/

// Para aprender sobre frameworks (depois de dominares JS):
// React: https://react.dev/
// Vue: https://vuejs.org/
// Angular: https://angular.io/

// Para aprender sobre JavaScript no backend:
// Node.js: https://nodejs.org/`
          },
          quiz: [
            {
              question: "Qual é o principal benefício de usar um framework como o React ou o Vue?",
              options: [
                'Substituem a necessidade de saber HTML e CSS.',
                'Permitem-te escrever JavaScript que corre diretamente no hardware do computador.',
                'Fornecem uma estrutura e componentes reutilizáveis para construir interfaces de utilizador complexas de forma mais eficiente.',
                'São a única forma de fazer pedidos a APIs.'
              ],
              correctAnswerIndex: 2,
              explanation: "Exatamente! Frameworks dão-te super-poderes para o frontend. Eles gerem o estado da aplicação, atualizam o DOM de forma otimizada e permitem-te construir a tua UI em pequenos blocos reutilizáveis (componentes), acelerando drasticamente o desenvolvimento."
            }
          ]
        }
      ]
    }
  ]
};