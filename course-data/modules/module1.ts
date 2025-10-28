import * as React from 'react';
import type { Module } from '../../types';

export const module1: Module = {
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
    },
    {
      id: '1.3',
      title: 'O Teu Ambiente: Ferramentas do Navegador',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Todo o programador web tem um conjunto de ferramentas essenciais que vêm incluídas em todos os navegadores modernos: as Ferramentas de Programador (DevTools). Conhecê-las é como um mecânico conhecer as suas chaves. Vamos focar-nos nas três mais importantes para começar.'),
        React.createElement('p', { className: 'mb-4' }, 'Podes abri-las a qualquer momento pressionando F12 ou Ctrl+Shift+I (Cmd+Option+I no Mac).'),
        React.createElement('ul', { className: 'list-disc list-inside mb-4 pl-4 space-y-4' },
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Console (Consola)'), ': Já a conheces para o `console.log`. Mas é mais do que isso: é um ambiente interativo (REPL - Read-Eval-Print-Loop) onde podes escrever e testar qualquer código JavaScript em tempo real na página atual.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Elements (Elementos)'), ': O inspetor do DOM. Permite-te ver a estrutura HTML "viva" da página, exatamente como o navegador a está a renderizar. Podes selecionar elementos, ver o CSS que lhes está a ser aplicado, e até mesmo editar o HTML e o CSS em tempo real para testar alterações visuais.'),
          React.createElement('li', null, React.createElement('strong', { className: 'text-green' }, 'Sources (Fontes)'), ': O depurador. Aqui podes ver todos os ficheiros (HTML, CSS, JS) que a página carregou. A sua funcionalidade mais poderosa é a depuração (debugging): podes colocar "breakpoints" ou usar a palavra-chave `debugger` no teu código para pausar a execução e inspecionar o valor das tuas variáveis passo a passo.')
        )
      ),
      practice: {
        examples: [
          {
            title: "Exemplo 1: O Básico - A Consola como REPL",
            description: "Abre a consola nesta página e escreve `2 + 2` e prime Enter. Depois, escreve `alert('Olá da consola!');` e prime Enter. Estás a executar código diretamente!",
            code: `// Escreve isto diretamente na consola!
2 + 2
alert('Olá da consola!');`
          },
          {
            title: "Exemplo 2: O Caso Comum - Inspecionar e Mudar Elementos",
            description: "Usa a ferramenta de seleção (geralmente um ícone de um quadrado com uma seta) na aba 'Elements' para clicares neste título `<h1>`. Vais ver o elemento HTML realçado. Clica duas vezes no texto dentro da tag e muda-o para o que quiseres. A mudança é instantânea!",
            code: `// Não há código para escrever aqui.
// A prática é usar as DevTools para inspecionar e modificar a página.`
          },
          {
            title: "Exemplo 3: A Nuance - Depuração com `debugger`",
            description: "A palavra-chave `debugger` é uma ferramenta incrível. Quando o navegador a encontra no teu código (e as DevTools estão abertas), ele pausa a execução nesse exato ponto. Isto permite-te ver o valor de todas as variáveis nesse momento, como uma fotografia instantânea do teu programa.",
            code: `let nome = "Ana";
let idade = 25;

debugger; // A execução vai pausar aqui se as DevTools estiverem abertas

console.log(\`O nome é \${nome}\`); // Podes executar isto passo a passo`
          }
        ]
      },
      quiz: [
        {
          question: "Em que aba das DevTools podes inspecionar a estrutura HTML e o CSS de um elemento?",
          options: ['Console', 'Sources', 'Network', 'Elements'],
          correctAnswerIndex: 3,
          explanation: "A aba 'Elements' é a tua janela para a árvore do DOM. É essencial para entenderes a estrutura da página e como o CSS a afeta."
        },
        {
          question: "Além de ver o output de `console.log`, para que serve a Consola?",
          options: [
            'Para escrever e testar código JavaScript interativamente.',
            'Apenas para ver erros.',
            'Para editar ficheiros HTML.',
            'Para mudar a cor da página.'
          ],
          correctAnswerIndex: 0,
          explanation: "A consola é um ambiente REPL (Read-Eval-Print-Loop) completo. Podes declarar variáveis, chamar funções e interagir com o DOM, tudo em tempo real."
        },
        {
          question: "Qual palavra-chave podes adicionar ao teu código para pausar a sua execução e iniciar o depurador?",
          options: ['pause', 'stop', 'break', 'debugger'],
          correctAnswerIndex: 3,
          explanation: "A instrução `debugger;` é a forma programática de criar um 'breakpoint', permitindo-te inspecionar o estado da tua aplicação num ponto específico."
        }
      ],
      challenge: {
        description: "Abre um website que gostes (ex: YouTube, Wikipedia). Usa a aba 'Elements' para encontrar o elemento do logótipo principal. Tenta alterar o seu estilo CSS diretamente nas DevTools para, por exemplo, o fazer rodar (`transform: rotate(180deg);`).",
        starterCode: `// 1. Abre um website.
// 2. Abre as DevTools (F12).
// 3. Usa a ferramenta de seleção para encontrar o logótipo.
// 4. Na aba de estilos (Styles), adiciona uma nova regra de CSS para esse elemento.`,
        solution: "Ao seguires os passos, deves ter conseguido manipular o estilo do logótipo em tempo real. Isto mostra como as DevTools são poderosas para testar alterações de CSS e HTML sem ter de recarregar a página."
      }
    },
    {
      id: '1.4',
      title: 'Desafio do Módulo: O Teu Primeiro Site',
      theory: React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4' }, 'Chegou a hora de aplicar tudo o que aprendeste neste módulo. Vais sair do nosso ambiente de aprendizagem e criar um verdadeiro projeto no teu próprio computador.'),
        React.createElement('p', { className: 'mb-4' }, 'Já aprendeste o que é o JavaScript, como o adicionar a uma página e como usar as ferramentas do navegador para o inspecionar. Este desafio junta todas essas peças.'),
        React.createElement('p', { className: 'mb-4' }, 'O objetivo é criar dois ficheiros locais, um HTML e um JS, e fazê-los interagir. Esta é a base de todo o desenvolvimento web.')
      ),
      practice: {
        examples: [
          {
            title: "Passo 1: Criar o ficheiro `index.html`",
            description: "Abre um editor de texto simples (como o Bloco de Notas, VS Code, etc.) e cria um ficheiro com este conteúdo. Guarda-o como `index.html` numa pasta no teu computador.",
            code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <title>O Meu Primeiro Site</title>
</head>
<body>

  <h1 id="titulo-principal">Olá, Mundo do HTML!</h1>

  <script src="script.js"></script>
</body>
</html>`
          },
          {
            title: "Passo 2: Criar o ficheiro `script.js`",
            description: "Na mesma pasta, cria outro ficheiro chamado `script.js`. Este ficheiro conterá a lógica para manipular o nosso HTML.",
            code: `console.log("Script carregado com sucesso!");

// Vamos aprender a manipular o DOM no Módulo 5,
// mas aqui fica um avanço para o nosso desafio!
const titulo = document.getElementById("titulo-principal");
titulo.textContent = "Olá, Mundo do JavaScript!";
titulo.style.color = "blue";`
          },
          {
            title: "Passo 3: Abrir no Navegador",
            description: "Navega até à pasta onde guardaste os ficheiros e simplesmente arrasta o ficheiro `index.html` para uma janela do teu navegador, ou usa o menu 'Ficheiro > Abrir Ficheiro'. Deves ver o teu título já alterado pelo JavaScript!",
            code: `// Não há código para executar aqui.
// O resultado é o que vês no teu navegador.`
          }
        ]
      },
      quiz: [
        {
          question: "Qual é a extensão de um ficheiro de JavaScript?",
          options: ['.html', '.css', '.js', '.txt'],
          correctAnswerIndex: 2,
          explanation: "A extensão padrão para ficheiros de código JavaScript é `.js`."
        },
        {
          question: "Qual tag HTML é usada para ligar um ficheiro JavaScript externo?",
          options: ['<link>', '<style>', '<javascript>', '<script>'],
          correctAnswerIndex: 3,
          explanation: "A tag `<script>`, com o atributo `src` a apontar para o caminho do ficheiro, é a forma correta de incluir um script externo."
        },
        {
          question: "Se o teu `script.js` não parece estar a funcionar, qual é o primeiro passo que deves dar para depurar?",
          options: [
            "Reiniciar o computador.",
            "Apagar o ficheiro HTML e começar de novo.",
            "Abrir as DevTools (F12) e verificar a Consola por erros.",
            "Perguntar a um amigo."
          ],
          correctAnswerIndex: 2,
          explanation: "A Consola das DevTools é a tua primeira linha de defesa. Ela dir-te-á se há erros de sintaxe, se o ficheiro não foi encontrado (erro 404), ou se estás a tentar aceder a elementos que não existem."
        }
      ],
      challenge: {
        description: "Expande o projeto que acabaste de criar. No teu ficheiro `index.html`, adiciona um botão `<button id='meu-botao'>Clica em Mim</button>`. No teu `script.js`, escreve o código necessário para que, quando o botão for clicado, o texto do título `<h1>` mude para 'Fui clicado!'.",
        starterCode: `// No teu script.js, adiciona este código:

// 1. Seleciona o botão e o título
const botao = document.getElementById("meu-botao");
const titulo = document.getElementById("titulo-principal");

// 2. Adiciona um 'ouvinte de evento' ao botão`,
        solution: `const botao = document.getElementById("meu-botao");
const titulo = document.getElementById("titulo-principal");

botao.addEventListener('click', function() {
  titulo.textContent = "Fui clicado!";
});`
      }
    }
  ]
};
