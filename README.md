# Portfolio_HTML_e_CSS

## Sobre o projeto

Desenvolvimento de portfólio pessoal responsivo para centralização de trajetória acadêmica e profissional, utilizando boas práticas de estilização e integração de APIs de formulários. Além disso, também está sendo utilizado o serviço de metodologia ágil Kanban oferecido pelo GitHub.

## Estrutura das pastas

```text
├── assets/               -> Agrupa ícones, imagens e outras mídias
    ├── icons/            -> Armazena ícones para a aba de navegação
    │   ├── favicon.ico
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── apple-touch-icon.png
    │   ├── android-chrome-192x192.png
    │   ├── android-chrome-512x512.png
    │   └── site.webmanifest
    ├── images/           -> Agrupa imagens que são utilizados no portfólio
    │   ├── Silvio.jpg
    │   ├── images.png
    │   ├── foto_Silvio.jpeg
    │   ├── Clone_Yu-Gi-Oh.jpg
    │   ├── Apresentacao_ENID.jpg
    │   ├── Projeto_Reflorae.jpg
    │   ├── DER_de_redeSocialPB.png
    │   ├── Estagio_Prepara_Curso.jpg
    │   ├── Ministrando_a_Oficina_de_JavaScript.jpg
    │   ├── Monitoria_realizada_presencialmente.jpg
    │   ├── Diagrama_Entidade-Relacionamento_de_apiYuGiOh.png
    │   └── Equipe_de_desenvolvimento_Reflora_ae_reunida.jpeg
    └── pdfs/              -> Armazena arquivos em PDF
    │   ├── Currículo_-_Docente.pdf
    │   └── Currículo_-_Desenvolvedor_Full Stack.pdf
├── css/                   -> Reune arquivos de estilização
    ├── footer.css
    ├── variaveis.css
    ├── main.css
    ├── formacao.css
    ├── navegacao_curriculo.css 
    ├── opcoes_curriculo.css 
    ├── secao.css 
    ├── cabecalho.css 
    ├── cabecalho_curriculo.css 
    ├── habilidades.css 
    ├── navegacao.css 
    ├── experiencias.css 
    ├── sobre.css 
    ├── contato.css 
    ├── responsividade.css 
    └── projetos.css 
├── js/                     -> Reune arquivos de JavaScripts, responsáveis por ditar interações às páginas web
    ├── reset.js            -> Resetar os campos do formulário
    └── script.js           -> animação do card slider
├── README.md               -> Documentação do projeto
├── pages/                  -> Agrupa páginas web adicionais 
    └── secao_curriculos.html
├── .gitignore              -> Define a segurança e variáveis de ambiente
└── index.html              -> Página principal - Raíz
```

> **Nota sobre o env.js:**
> Você notará que o arquivo js/env.js não está presente na árvore de arquivos do repositório remoto. Isso ocorre porque ele contém credenciais sensíveis. Para que o formulário funcione localmente, siga o modelo descrito na seção Rodando Localmente.

## Tecnologias utilizadas

- **HTML5**: Desenvolver a estrutura do Portfólio;
- **CSS3**: Estilizar os elementos do Portfólio;
- **JavaScript**: Atribuir a funcionalidade de carrossel nos projetos realizados no portfólio, de resetar os campos do formulário e de inserir o link sensível para os envios de mensagens dos visitantes para o email profissional cadastrada;
- **Google Fonts**: Inserir fontes e ícones de setas para o carrossel. Para acessar diversas fontes e ícones, [clique aqui](https://fonts.google.com/);
- **Font Awesome**: Atribuir ícones no portfólio. Para verificar uma extensão de ícones, [clique aqui](https://fontawesome.com/);
- **SwiperJS**: Utilizar o efeito carrossel já pré-definido. Para acessar tanto o efeito usado quanto o que pode estar disponível, [clique aqui](https://swiperjs.com/);
- **Microsoft Word 2019**: Software utilizado para desenvolver o currículo;
- **favicon.io**: Plataforma online e gratuita especializada na criação e geração de favicons (ícones que aparecem na aba do navegador, favoritos e resultados de pesquisa) para sites. Acesse o site [clicando aqui](https://favicon.io/);
- **Formspree**: Serviço para enviar e-mails de um formulário HTML sem precisar ter um back-end desenvolvido. Acesse o serviço [clicando aqui](https://formspree.io/).

## Rodando Localmente

Clone o repositório:

```bash
git clone https://github.com/SilvioNascimento/Portfolio_HTML_e_CSS.git
```

Depois você acesse por este [link](https://formspree.io/) para ir ao serviço gratuito de Formspree. Em seguida, você se cadastra, clique em **+ Add New** e selecione a opção *New Form*, informe os dados que está pedindo, e quando aparecer o link do ***Form endpoint***, copie-o.

Quando abrir a pasta do projeto **Portolio_HTML_e_CSS**, abre a pasta *js*. Crie um novo arquivo chamado ***env.js*** e insere o código abaixo (Cole o link do form que copiou no lugar de *INSERIR_O_LINK_DO_FORM_AQUI*):

```js
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-contato");
  if (formulario) {
    formulario.action = "INSERIR_O_LINK_DO_FORM_AQUI";
  }
});
```

Se estiver utilizando o **Visual Studio Code** já com a extensão *Live Server*, então selecione o arquivo ***index.html*** e clique no botão ***Go Live*** para executá-lo em um servidor gerado.

Caso não tenha instalado a extensão, ou você o instala e segue os comandos no parágrafo acima, ou você vai para o local que clonou o arquivo, abre-o e executa o ***index.html*** em um navegador de sua escolha.

## Funcionalidades

- **Navegar entre seções**: Permite navegar em cada seção de forma mais rápida, desde que clique no link (que tem o formato de botão) com o nome da seção que deseja ir;
- **Acessar projetos**: Direciona o usuário para o repositório do projeto após clicar no card específico;
- **Acessar meios de contato**: Direciona para a rede social que foi selecionada;
- **Visualizar currículos**: Direciona para uma outra página que contém os botões que exibem o currículo que foi selecionado;
- **Enviar email**: Envia um email com os dados inseridos pelo visitante (nome, email e mensagem)

