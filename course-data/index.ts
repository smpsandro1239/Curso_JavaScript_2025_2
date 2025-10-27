import * as React from 'react';
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
            examples: [
              {
                title: "Exemplo 1: O Básico - 'Olá, Mundo!'",
                description: "O primeiro passo em qualquer linguagem é o famoso 'Olá, Mundo!'. Em JavaScript, usamos `console.log()` para imprimir mensagens na consola do navegador. É uma ferramenta essencial para depuração (debugging). Abre as ferramentas de programador do teu navegador (normalmente com F12 ou Ctrl+Shift+I) e vai ao separador 'Consola' para veres o resultado.",
                code: `console.log('Olá, Mundo!');`
              },
              {
                title: "Exemplo 2: O Caso Comum - Múltiplas Mensagens",
                description: "Podes usar `console.log()` várias vezes para seguir o fluxo do teu programa. É como deixar migalhas de pão para saberes por onde o código passou.",
                code: `console.log("Passo 1: A iniciar o programa.");
console.log("Passo 2: A processar dados...");
console.log("Passo 3: Programa terminado.");`
              },
              {
                title: "Exemplo 3: A Nuance - Imprimir Variáveis",
                description: "O `console.log()` não serve apenas para texto. Podes (e deves!) usá-lo para inspecionar o conteúdo de variáveis em qualquer ponto do teu código.",
                code: `const nome = "Ana";
const idade = 28;

console.log("Informação do Utilizador:");
console.log("Nome:", nome);
console.log("Idade:", idade);`
              }
            ]
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
            },
            {
              question: 'Qual comando usas para imprimir uma mensagem na consola do navegador?',
              options: [
                'print("Olá")',
                'document.write("Olá")',
                'console.log("Olá")',
                'debug.out("Olá")'
              ],
              correctAnswerIndex: 2,
              explanation: '`console.log()` é o comando universal em JavaScript para registar informação na consola, sendo uma ferramenta fundamental para qualquer programador.'
            },
            {
                question: 'Se a web fosse uma casa, o que seria o CSS?',
                options: [
                  'A estrutura (paredes, telhado).',
                  'A eletricidade e a água.',
                  'A decoração (cor, móveis).',
                  'A morada da casa.'
                ],
                correctAnswerIndex: 2,
                explanation: 'Exato! O CSS cuida da parte visual e da apresentação, tal como a decoração numa casa, enquanto o HTML é a estrutura e o JavaScript a funcionalidade.'
            }
          ],
          challenge: {
            description: "Escreve três comandos `console.log()`. O primeiro deve imprimir o teu nome. O segundo, a tua idade. O terceiro, a tua cidade.",
            starterCode: `// Escreve o teu código aqui`,
            solution: `console.log("O meu nome é Alex.");
console.log("A minha idade é 30.");
console.log("A minha cidade é Lisboa.");`
          }
        },
        {
          id: '1.2',
          title: 'Adicionar JS a uma página',
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
            examples: [
              {
                title: "Exemplo 1: O Básico - Script Externo (Recomendado)",
                description: 'Abaixo, um exemplo de como ligar um ficheiro JavaScript externo a um HTML. Esta é a forma mais comum e recomendada. O script é geralmente colocado antes de fechar a tag `</body>` para garantir que toda a página HTML seja carregada antes do script ser executado.',
                code: `<!-- No teu ficheiro index.html -->
<body>
  <h1>O meu site</h1>

  <script src="o_meu_script.js"></script>
</body>

<!-- No teu ficheiro o_meu_script.js -->
console.log("Olá do ficheiro externo!");`
              },
              {
                title: "Exemplo 2: O Caso Comum - Script Interno",
                description: "Para um pequeno teste rápido ou uma funcionalidade muito específica de uma única página, um script interno pode ser aceitável. Repara como o código JS fica diretamente dentro do HTML.",
                code: `<!-- No teu ficheiro index.html -->
<body>
  <p id="mensagem">Olá!</p>

  <script>
    // Este código não vai funcionar aqui, mas é para exemplificar.
    // Veremos como manipular elementos no Módulo 5!
    const paragrafo = document.getElementById('mensagem');
    paragrafo.textContent = 'Olá diretamente do script interno!';
  </script>
</body>`
              },
              {
                title: "Exemplo 3: A Armadilha - Script Inline (A Evitar)",
                description: "Este é um exemplo do que NÃO fazer na maioria das vezes. Colocar lógica no atributo `onclick` mistura HTML e JS, tornando o código difícil de ler e manter. Veremos a forma correta (com `addEventListener`) no módulo sobre o DOM.",
                code: `<button onclick="alert('Foste clicado!')">Clica em Mim (Método Antigo)</button>`
              }
            ]
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
            },
            {
                question: 'Porque é que a tag `<script>` é geralmente colocada no final do `<body>`?',
                options: [
                  'Porque é uma regra do HTML e não funciona noutro lado.',
                  'Para permitir que a página HTML seja carregada e renderizada primeiro, melhorando a experiência do utilizador.',
                  'Para o JavaScript ter prioridade sobre o CSS.',
                  'Não faz diferença onde é colocada.'
                ],
                correctAnswerIndex: 1,
                explanation: 'Colocar o script no final garante que o navegador já construiu o DOM a partir do HTML. Se o script tentasse manipular um elemento que ainda não foi carregado, resultaria num erro.'
            },
            {
                question: 'Qual das seguintes opções descreve um script inline?',
                options: [
                  '<script src="ficheiro.js"></script>',
                  '<script>console.log("olá");</script>',
                  '<button onclick="console.log(\'clicado\')">',
                  'Nenhuma das anteriores'
                ],
                correctAnswerIndex: 2,
                explanation: 'Um script inline é quando o código JavaScript é colocado diretamente dentro de um atributo de um elemento HTML, como `onclick`, `onmouseover`, etc. É uma prática geralmente desaconselhada.'
            }
          ],
          challenge: {
            description: "Imagina que tens um ficheiro HTML. Adiciona uma tag `<script>` no final do `<body>` que imprima a mensagem 'Página carregada com sucesso!' na consola.",
            starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>A Minha Página</title>
</head>
<body>

  <h1>Bem-vindo!</h1>

  <!-- Adiciona o teu script aqui -->

</body>
</html>`,
            solution: `<script>
  console.log('Página carregada com sucesso!');
</script>`
          }
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
            examples: [
              {
                title: "Exemplo 1: O Básico - Verificar um Número",
                description: 'Vamos verificar se um número é positivo, negativo ou zero.',
                code: `const numero = 10;

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}`
              },
              {
                title: "Exemplo 2: O Caso Comum - Atribuir Notas",
                description: 'Uma cadeia de `if/else if` é perfeita para classificar um valor em diferentes categorias, como atribuir uma nota a uma pontuação.',
                code: `const pontuacao = 85;
let nota;

if (pontuacao >= 90) {
  nota = "A";
} else if (pontuacao >= 80) {
  nota = "B";
} else if (pontuacao >= 70) {
  nota = "C";
} else {
  nota = "Reprovado";
}

console.log("A nota final é:", nota); // B`
              },
              {
                title: "Exemplo 3: A Armadilha - Valores 'Falsy'",
                description: "Em JavaScript, não são só os booleanos `false` que são tratados como falsos numa condição. Valores como `0`, `''` (string vazia), `null`, `undefined` e `NaN` também são 'falsy'. Isto pode ser útil, mas também uma fonte de bugs se não tiveres atenção.",
                code: `const nomeUtilizador = "";

if (nomeUtilizador) {
  console.log("Bem-vindo, " + nomeUtilizador);
} else {
  console.log("Por favor, faça login."); // Esta linha será executada
}`
              }
            ]
          },
          quiz: [
            {
              question: "O que será impresso? `const saldo = 50; if (saldo > 100) { console.log('Rico'); } else { console.log('Pobre'); }`",
              options: [
                'Rico',
                'Pobre',
                'Nada será impresso',
                'Vai dar erro'
              ],
              correctAnswerIndex: 1,
              explanation: "A condição `saldo > 100` (ou seja, 50 > 100) é `false`. Como a condição do `if` não foi satisfeita, o código dentro do bloco `else` é executado."
            },
            {
              question: "Qual o output? `let temperatura = 15; if (temperatura < 10) { console.log('Frio'); } else if (temperatura <= 20) { console.log('Ameno'); } else { console.log('Quente'); }`",
              options: [
                'Frio',
                'Ameno',
                'Quente',
                'Frio e Ameno'
              ],
              correctAnswerIndex: 1,
              explanation: 'A primeira condição (`15 < 10`) é falsa. O JavaScript passa para a segunda: `15 <= 20` é verdadeira. O bloco correspondente é executado e a verificação para.'
            },
            {
              question: "Qual destes valores NÃO é considerado 'falsy'?",
              options: [
                '0',
                '""',
                '[] (um array vazio)',
                'null'
              ],
              correctAnswerIndex: 2,
              explanation: "Esta é uma armadilha comum! Um array vazio (e um objeto vazio `{}`) é 'truthy' em JavaScript. A condição `if ([])` será executada."
            }
          ],
          challenge: {
            description: "Escreve uma estrutura `if/else` para determinar o acesso a uma área restrita. Um utilizador só pode entrar se for um `admin` E se estiver `logado`. Cria as variáveis `eAdmin` e `estaLogado` (booleanos) e imprime 'Acesso Permitido' ou 'Acesso Negado'.",
            starterCode: `const eAdmin = true;
const estaLogado = false;

// Escreve a tua condição aqui`,
            solution: `const eAdmin = true;
const estaLogado = false;

if (eAdmin && estaLogado) {
  console.log("Acesso Permitido");
} else {
  console.log("Acesso Negado");
}`
          }
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
            examples: [
              {
                title: "Exemplo 1: O Básico - Dia da Semana",
                description: 'Vamos converter um número (0-6) para o dia da semana correspondente.',
                code: `const dia = 3;
let nomeDia;

switch (dia) {
  case 0:
    nomeDia = "Domingo";
    break;
  case 1:
    nomeDia = "Segunda-feira";
    break;
  case 2:
    nomeDia = "Terça-feira";
    break;
  // ... e assim por diante
  default:
    nomeDia = "Dia inválido";
}
console.log(nomeDia);`
              },
              {
                title: "Exemplo 2: O Caso Comum - Agrupar Casos",
                description: "Podes agrupar vários `case` para executar o mesmo bloco de código. É útil para categorizar.",
                code: `const mes = 4; // Abril
let estacao;

switch (mes) {
  case 12:
  case 1:
  case 2:
    estacao = "Inverno";
    break;
  case 3:
  case 4:
  case 5:
    estacao = "Primavera";
    break;
  // ... etc
  default:
    estacao = "Mês inválido";
}
console.log("Estamos na:", estacao);`
              },
              {
                title: "Exemplo 3: A Armadilha - O 'Fall-through'",
                description: "Vê o que acontece se nos esquecermos do `break`. A execução 'cai' para os casos seguintes até encontrar um `break` ou o fim do `switch`.",
                code: `const nivelAcesso = "user";

switch (nivelAcesso) {
  case "admin":
    console.log("Acesso total");
    // break esquecido
  case "editor":
    console.log("Pode editar conteúdo");
    // break esquecido
  case "user":
    console.log("Pode ver conteúdo");
    break;
  default:
    console.log("Acesso negado");
}
// Output:
// Pode editar conteúdo
// Pode ver conteúdo`
              }
            ]
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
            },
            {
                question: "O que será impresso? `let animal = 'gato'; switch(animal) { case 'cão': console.log('au'); break; case 'vaca': console.log('muu'); break; default: console.log('som'); }`",
                options: [
                  'au',
                  'muu',
                  'som',
                  'Nada'
                ],
                correctAnswerIndex: 2,
                explanation: "Como o valor de `animal` ('gato') não corresponde a nenhum dos `case` ('cão' ou 'vaca'), o bloco `default` é executado."
            },
            {
                question: "Quando é que um `switch` é geralmente preferível a um `if/else if/else`?",
                options: [
                    "Quando tens condições complexas (ex: `idade > 18 && valor < 100`).",
                    "Quando tens uma única variável ou expressão para comparar contra múltiplos valores distintos.",
                    "Nunca, `if/else` é sempre melhor.",
                    "Apenas quando se comparam números."
                ],
                correctAnswerIndex: 1,
                explanation: "`switch` brilha em cenários onde uma única variável é testada contra uma lista de possíveis valores discretos. Torna o código mais limpo e legível do que uma longa cadeia de `else if (variavel === ...)`."
            }
          ],
          challenge: {
            description: "Cria uma função `obterSaudacao(lingua)` que recebe um código de língua ('pt', 'en', 'es', 'fr') e devolve a saudação correspondente ('Olá', 'Hello', 'Hola', 'Bonjour'). Usa uma estrutura `switch`. Se a língua não for reconhecida, deve devolver 'Saudação não disponível'.",
            starterCode: `function obterSaudacao(lingua) {
  // Usa um switch aqui para retornar a saudação correta
}

console.log(obterSaudacao("pt")); // Deve imprimir "Olá"
console.log(obterSaudacao("de")); // Deve imprimir "Saudação não disponível"`,
            solution: `function obterSaudacao(lingua) {
  switch (lingua) {
    case "pt":
      return "Olá";
    case "en":
      return "Hello";
    case "es":
      return "Hola";
    case "fr":
      return "Bonjour";
    default:
      return "Saudação não disponível";
  }
}

console.log(obterSaudacao("pt"));
console.log(obterSaudacao("de"));`
          }
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
            examples: [
              {
                title: "Exemplo 1: O Básico - Contar de 1 a 5",
                description: 'O exemplo mais simples de um ciclo `for`: contar e imprimir números.',
                code: `for (let i = 1; i <= 5; i++) {
  console.log("Contagem:", i);
}`
              },
              {
                title: "Exemplo 2: O Caso Comum - Somar os Elementos de um Array",
                description: 'Uma das utilizações mais comuns de um ciclo `for` é percorrer um array para processar os seus elementos.',
                code: `const numeros = [10, 20, 30, 40];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log("A soma total é:", soma); // 100`
              },
              {
                title: "Exemplo 3: A Armadilha - Erros 'Off-by-One'",
                description: "Um erro muito comum é usar `<=` em vez de `<` na condição ao percorrer um array. Como os índices vão de 0 a `length - 1`, usar `i <= numeros.length` faria com que o ciclo tentasse aceder a um índice que não existe, resultando em `undefined`.",
                code: `const cores = ["azul", "verde"]; // length é 2, índices são 0 e 1

// Ciclo correto
for (let i = 0; i < cores.length; i++) {
  console.log(cores[i]);
}

// Ciclo incorreto (descomenta para ver o \`undefined\`)
// for (let i = 0; i <= cores.length; i++) {
//   console.log(cores[i]); // Na última volta, tenta aceder a cores[2]
// }`
              }
            ]
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
            },
            {
              question: "Qual será o valor final de `contador`? `let contador = 0; for (let i = 0; i < 5; i++) { contador++; }`",
              options: [
                '4',
                '5',
                '6',
                '0'
              ],
              correctAnswerIndex: 1,
              explanation: "O ciclo executa 5 vezes (para i=0, 1, 2, 3, 4). Em cada uma dessas vezes, `contador` é incrementado. Portanto, o seu valor final será 5."
            },
            {
              question: "Como escreverias um ciclo `for` para contar de 10 para 1 (contagem decrescente)?",
              options: [
                'for (let i = 10; i < 1; i++)',
                'for (let i = 10; i > 0; i--)',
                'for (let i = 1; i <= 10; i--)',
                'for (let i = 10; i > 1; i++)'
              ],
              correctAnswerIndex: 1,
              explanation: 'Para uma contagem decrescente, a inicialização deve ser o valor mais alto, a condição deve verificar se o valor ainda é maior que o limite, e o incremento deve ser, na verdade, um decremento (`i--`).'
            }
          ],
          challenge: {
            description: "Escreve um ciclo `for` que imprima a tabuada do 7, de 1 a 10. O output deve ser no formato: '7 x 1 = 7', '7 x 2 = 14', etc.",
            starterCode: `const numero = 7;

console.log(\`Tabuada do \${numero}:\`);

// Escreve o teu ciclo for aqui`,
            solution: `const numero = 7;

console.log(\`Tabuada do \${numero}:\`);

for (let i = 1; i <= 10; i++) {
  console.log(\`\${numero} x \${i} = \${numero * i}\`);
}`
          }
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
            examples: [
              {
                title: "Exemplo 1: O Básico - `while` para Contagem Decrescente",
                description: 'Vamos usar um ciclo `while` para fazer uma contagem decrescente até ao lançamento.',
                code: `let contagem = 5;

while (contagem > 0) {
  console.log(contagem);
  contagem--; // Crucial para evitar um ciclo infinito!
}

console.log("Lançar!");`
              },
              {
                title: "Exemplo 2: O Caso Comum - Jogo de Adivinhas",
                description: 'Um ciclo `while` é perfeito para um jogo que continua enquanto o jogador não acertar no número secreto.',
                code: `const numeroSecreto = 7;
let palpite = 0;

while (palpite !== numeroSecreto) {
  // Num programa real, o palpite viria do utilizador
  palpite = Math.floor(Math.random() * 10) + 1;
  console.log("Tentativa:", palpite);
}

console.log("Acertaste! O número era 7.");`
              },
              {
                title: "Exemplo 3: A Nuance - `do...while` para Menus",
                description: "`do...while` é útil para situações como menus de utilizador, onde queres que a ação (mostrar o menu) aconteça pelo menos uma vez, antes de verificares se o utilizador quer sair.",
                code: `let escolha;

do {
  // Num programa real, pediríamos input ao utilizador
  escolha = prompt("Escolha uma opção (ou 'sair' para terminar):");
  console.log("Processando a escolha:", escolha);
} while (escolha !== "sair");

console.log("Programa terminado.");`
              }
            ]
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
            },
            {
              question: "O que acontece neste código? `let i = 0; while(i < 5) { console.log(i); }`",
              options: [
                "Imprime os números de 0 a 4.",
                "Imprime 0, 1, 2, 3, 4, 5.",
                "Cria um ciclo infinito.",
                "Não imprime nada."
              ],
              correctAnswerIndex: 2,
              explanation: "A variável `i` nunca é incrementada dentro do ciclo. A condição `i < 5` (0 < 5) será sempre verdadeira, levando a um ciclo infinito que irá bloquear o programa."
            },
            {
              question: "Quantas vezes a palavra 'Olá' será impressa? `let contador = 5; do { console.log('Olá'); contador++; } while (contador < 5);`",
              options: [
                '0 vezes',
                '1 vez',
                '5 vezes',
                'Infinitas vezes'
              ],
              correctAnswerIndex: 1,
              explanation: "O ciclo `do...while` executa o bloco uma vez antes de verificar a condição. Ele imprime 'Olá', incrementa `contador` para 6. Depois, a condição `6 < 5` é avaliada como `false`, e o ciclo termina."
            }
          ],
          challenge: {
            description: "Simula o lançamento de um dado (um número aleatório de 1 a 6) repetidamente até que o resultado seja 6. Usa um ciclo `while` ou `do...while` e, no final, imprime quantas tentativas foram necessárias.",
            starterCode: `let tentativas = 0;
let dado;

// Escreve o teu ciclo aqui

console.log(\`Foram necessárias \${tentativas} tentativas para conseguir um 6!\`);`,
            solution: `let tentativas = 0;
let dado = 0;

while (dado !== 6) {
  dado = Math.floor(Math.random() * 6) + 1;
  tentativas++;
  console.log(\`Tentativa \${tentativas}: saiu o número \${dado}\`);
}

console.log(\`Foram necessárias \${tentativas} tentativas para conseguir um 6!\`);`
          }
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
            examples: [
              {
                title: "Exemplo 1: O Básico - As Três Formas",
                description: 'Vamos imprimir os elementos de um array usando as três abordagens para vermos as diferenças na sintaxe.',
                code: `const frutas = ["maçã", "banana", "laranja"];

// 1. Clássico 'for'
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 2. Moderno 'forEach'
frutas.forEach(fruta => {
  console.log(fruta);
});

// 3. Recomendado 'for...of'
for (const fruta of frutas) {
  console.log(fruta);
}`
              },
              {
                title: "Exemplo 2: O Caso Comum - Usar o Índice",
                description: "Às vezes, além do valor, também precisas do índice do elemento. O `for` clássico e o `forEach` dão-te acesso fácil a ele.",
                code: `const nomes = ["Ana", "Rui", "Marta"];

// Com forEach, o índice é o segundo parâmetro da callback
nomes.forEach((nome, index) => {
  console.log(\`\${index + 1}. \${nome}\`);
});`
              },
              {
                title: "Exemplo 3: A Armadilha - Sair de um Loop",
                description: "Uma diferença crucial: não podes 'parar' um `forEach` a meio com `break`. Se precisas dessa funcionalidade, o `for...of` ou o `for` clássico são a escolha certa.",
                code: `const numeros = [1, 5, 10, 15, 20];

// Encontrar o primeiro número maior que 10
for (const num of numeros) {
  if (num > 10) {
    console.log("Encontrado:", num);
    break; // Para o loop aqui
  }
}

// Tentar fazer o mesmo com forEach (não funciona como esperado)
numeros.forEach(num => {
  if (num > 10) {
    // 'return' aqui apenas sai da callback, não do forEach
    return;
  }
  // console.log(num); // vai imprimir 1, 5, 10
});`
              }
            ]
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
            },
            {
              question: "Qual destes ciclos te permite usar a palavra-chave `break` para parar a iteração a meio?",
              options: [
                'forEach',
                'map',
                'for...of',
                'reduce'
              ],
              correctAnswerIndex: 2,
              explanation: "Tanto o `for...of` como o ciclo `for` clássico permitem o uso de `break` para terminar o ciclo prematuramente. `forEach`, `map` e `reduce` não podem ser parados desta forma."
            },
            {
              question: "O que devolve o método `.forEach()`?",
              options: [
                'Um novo array com os elementos modificados.',
                'O último elemento do array.',
                'O valor `undefined`.',
                'O número de elementos no array.'
              ],
              correctAnswerIndex: 2,
              explanation: "`forEach` é usado para executar um 'efeito secundário' (como `console.log`) para cada elemento. Ele não devolve nenhum valor útil; o seu valor de retorno é sempre `undefined`."
            }
          ],
          challenge: {
            description: "Dado um array de palavras, usa um ciclo `for...of` para construir uma nova string que seja a concatenação de todas as palavras com mais de 3 letras, separadas por um espaço.",
            starterCode: `const palavras = ["Olá", "mundo", "em", "JavaScript", "é", "top"];
let fraseFinal = "";

// Escreve o teu ciclo for...of aqui

console.log(fraseFinal.trim()); // .trim() remove espaços extra no início/fim`,
            solution: `const palavras = ["Olá", "mundo", "em", "JavaScript", "é", "top"];
let fraseFinal = "";

for (const palavra of palavras) {
  if (palavra.length > 3) {
    fraseFinal += palavra + " ";
  }
}

console.log(fraseFinal.trim()); // "mundo JavaScript"`
          }
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
              examples: [
                {
                  title: "Exemplo 1: O Básico - `for...in`",
                  description: 'Vamos usar o ciclo `for...in` para listar as propriedades e os valores de um objeto simples.',
                  code: `const carro = {
  marca: "Tesla",
  modelo: "Model 3",
  ano: 2022
};

for (const chave in carro) {
  console.log(\`\${chave}: \${carro[chave]}\`);
}`
                },
                {
                  title: "Exemplo 2: O Caso Comum - `Object.keys()` + `forEach()`",
                  description: 'Esta é uma abordagem moderna e muito comum. Primeiro obtemos um array com as chaves e depois iteramos sobre esse array.',
                  code: `const utilizador = { nome: "Bia", idade: 25, cidade: "Porto" };

const chaves = Object.keys(utilizador); // ["nome", "idade", "cidade"]

chaves.forEach(chave => {
  console.log(\`A propriedade '\${chave}' tem o valor '\${utilizador[chave]}'\`);
});`
                },
                {
                  title: "Exemplo 3: A Nuance - `Object.entries()` com Destructuring",
                  description: "O método `Object.entries()` é extremamente poderoso quando combinado com `for...of` e desestruturação de arrays. Permite-nos aceder à chave e ao valor de forma muito elegante em cada iteração.",
                  code: `const pontuacoes = {
  matematica: 95,
  portugues: 88,
  historia: 92
};

for (const [disciplina, nota] of Object.entries(pontuacoes)) {
  console.log(\`Nota em \${disciplina}: \${nota}\`);
}`
                }
              ]
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
              },
              {
                question: "O que devolve `Object.keys({ a: 1, b: 2 })`?",
                options: [
                  "`['a: 1', 'b: 2']`",
                  "`[1, 2]`",
                  "`['a', 'b']`",
                  "`[['a', 1], ['b', 2]]`"
                ],
                correctAnswerIndex: 2,
                explanation: "`Object.keys()` devolve um array contendo apenas os nomes das chaves (propriedades) do objeto."
              },
              {
                question: "Porque é que `for...in` deve ser usado com cuidado?",
                options: [
                  "É muito lento.",
                  "Não funciona com todos os objetos.",
                  "Pode iterar sobre propriedades herdadas do protótipo, o que pode não ser o desejado.",
                  "Só funciona com strings."
                ],
                correctAnswerIndex: 2,
                explanation: "Ao contrário dos métodos `Object.*`, `for...in` percorre a cadeia de protótipos. Para iterar apenas as propriedades 'próprias' de um objeto, os métodos `Object.keys`, `values`, ou `entries` são mais seguros e previsíveis."
              }
            ],
            challenge: {
                description: "Dado um objeto que representa as pontuações de um jogador, escreve uma função que calcula a pontuação total (a soma de todos os valores). Usa um dos métodos modernos (`Object.values` é uma boa escolha aqui).",
                starterCode: `const pontuacoes = {
  nivel1: 1500,
  nivel2: 2300,
  bonus: 500
};

function calcularTotal(scores) {
  let total = 0;
  // O teu código aqui
  return total;
}

console.log("Pontuação Total:", calcularTotal(pontuacoes)); // Deve ser 4300`,
                solution: `const pontuacoes = {
  nivel1: 1500,
  nivel2: 2300,
  bonus: 500
};

function calcularTotal(scores) {
  const valores = Object.values(scores); // [1500, 2300, 500]
  let total = 0;
  for (const valor of valores) {
    total += valor;
  }
  return total;
}

console.log("Pontuação Total:", calcularTotal(pontuacoes));`
            }
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
            examples: []
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
            examples: []
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
            examples: []
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
            examples: []
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
            examples: []
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
            examples: []
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
            examples: []
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
            examples: []
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
            examples: []
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
        },
        {
          id: '6.5',
          title: 'Aprofundando: O Event Loop',
          theory: React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'mb-4' },
              'Já vimos o "quê" do código assíncrono (callbacks, promises), mas agora vamos ver o "como". O Event Loop é o coração do modelo de concorrência do JavaScript e explica porque é que o código se comporta da forma que vemos.'
            ),
            React.createElement(
              'p',
              { className: 'mb-4' },
              'A analogia é uma cozinha de um restaurante com um único ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'Chef (o Call Stack)'),
              '. O Chef só pode fazer uma tarefa de cada vez. As tarefas demoradas (como cozinhar algo no forno) são entregues a ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'Ajudantes (as Web APIs)'),
              '. O Chef continua o seu trabalho.'
            ),
             React.createElement(
              'p',
              { className: 'mb-4' },
              'Quando um Ajudante termina uma tarefa, ele não interrompe o Chef. Ele coloca um "aviso" numa ',
              React.createElement('strong', { className: 'text-lightest-slate' }, 'Fila de Espera (Callback Queue)'),
              '. O ',
              React.createElement('strong', { className: 'text-green' }, 'Event Loop'),
              ' é como o maître do restaurante. Ele está constantemente a verificar: "O Chef está livre?". Se o Chef (Call Stack) estiver vazio, o Event Loop vai à Fila de Espera, pega no primeiro aviso e entrega-o ao Chef para ele o executar.'
            ),
            React.createElement(
              'p',
              null,
              'Isto explica porque é que um `setTimeout(..., 0)` só executa depois de todo o código síncrono. O Chef tem de terminar tudo o que está a fazer antes de o maître lhe poder entregar novas tarefas da fila.'
            )
          ),
          practice: {
            examples: []
          },
          quiz: [
            {
              question: "No modelo do Event Loop, o que acontece quando chamas uma função como `fetch` ou `setTimeout`?",
              options: [
                'O Call Stack pausa e espera que a tarefa termine.',
                'A tarefa é executada imediatamente pelo Call Stack.',
                'A tarefa é entregue a uma Web API para ser processada em segundo plano, e o Call Stack continua a executar outro código.',
                'O Event Loop executa a tarefa imediatamente.'
              ],
              correctAnswerIndex: 2,
              explanation: 'Exatamente! A grande magia é que o Call Stack (o nosso Chef) não fica bloqueado. Ele delega tarefas demoradas às Web APIs (os Ajudantes) e continua a executar o código síncrono. Isto mantém a aplicação responsiva.'
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
              React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, '.reduce()'), ': É como ', React.createElement('strong', { className: 'text-lightest-slate' }, 'fazer um sumo'), '. Recebe um array de vários itens (frutas) e combina-nos num único valor final (o sumo).')
            )
          ),
          practice: {
            examples: []
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
            examples: []
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
            examples: []
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
            examples: [
                {
                    title: "Recursos para Continuar",
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
                }
            ]
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