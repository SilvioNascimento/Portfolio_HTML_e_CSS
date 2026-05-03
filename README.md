# Portfolio_HTML_e_CSS

## Sobre o projeto

Desenvolvimento de portfólio pessoal responsivo para centralização de trajetória acadêmica e profissional, utilizando boas práticas de estilização e integração de APIs de formulários. Além disso, também está sendo utilizado o serviço de metodologia ágil Kanban oferecido pelo GitHub.

---

## Estrutura das pastas

```text
├── assets/               -> Agrupa ícones, imagens e outras mídias
    ├── docs/             -> Agrupa documentações adicionais
    │   ├── ConceitoCIeCD.md
    │   ├── VercelCLI.md
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

---

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

---

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

---

## Funcionalidades

- **Navegar entre seções**: Permite navegar em cada seção de forma mais rápida, desde que clique no link (que tem o formato de botão) com o nome da seção que deseja ir;
- **Acessar projetos**: Direciona o usuário para o repositório do projeto após clicar no card específico;
- **Acessar meios de contato**: Direciona para a rede social que foi selecionada;
- **Visualizar currículos**: Direciona para uma outra página que contém os botões que exibem o currículo que foi selecionado;
- **Enviar email**: Envia um email com os dados inseridos pelo visitante (nome, email e mensagem)

---

## Inspirações

A seguir serão listados as inspirações que obtive após verificar seus materiais.

- CodingNepal
  - Tipo de material: Vídeo
  - Link: [https://www.youtube.com/watch?v=VUtJ7FWCfZA&list=PLpwngcHZlPae68z_mLFNfbJFIJVJ_Zcx2](https://www.youtube.com/watch?v=VUtJ7FWCfZA&list=PLpwngcHZlPae68z_mLFNfbJFIJVJ_Zcx2)
  - Descrição: Aplicar a ideia de produzir um slide de cards (estilo carrossel), com responsividade, mostrado no vídeo.

- cinthialindolfo
  - Tipo de material: Portfólio
  - Link: [https://cinthialindolfo-portifolio.netlify.app/](https://cinthialindolfo-portifolio.netlify.app/)
  - Descrição: Inspirar na maioria da estrutura do portfólio para desenvolver o meu próprio portfólio online.

- maykonsousa
  - Tipo de material: Portfólio
  - Link: [https://maykonsousa.github.io/](https://maykonsousa.github.io/)
  - Descrição: Inspirar em desenvolver uma área que o visitante pode enviar uma mensagem para o meu e-mail profissional.

- Carlos-CGS
  - Tipo de material: Portfólio
  - Link: [https://carlos-cgs.github.io/CGS/index.html](https://carlos-cgs.github.io/CGS/index.html)
  - Descrição: Inspirar a estrutura que divulga as formações e certificações em destaque.

---

## ⚙️ Automação e Deploy (CI/CD)

Este projeto utiliza uma pipeline de **CI/CD** (Integração Contínua e Entrega Contínua) para automatizar o processo de build, proteger credenciais e realizar a publicação do portfólio.

### 🛠️ Tecnologias Utilizadas

- **GitHub Actions**: Responsável por executar o fluxo de automação (o "robô").
- **Vercel CLI**: Utilizada para realizar a comunicação e o deploy entre o GitHub e o servidor.
- **GitHub Secrets**: Um "cofre" seguro onde armazenamos chaves de API e IDs sensíveis.

---

### 🔒 Segurança e o arquivo `env.js`

Uma das principais funcionalidades da nossa pipeline é a **proteção do endpoint do Formspree**.

1. **O Problema**: Expor o ID do formulário no GitHub atrai robôs de spam.
2. **A Solução**: O arquivo `js/env.js` está listado no `.gitignore` e nunca é enviado ao repositório público.
3. **A Automação**: Durante o deploy, o GitHub Actions lê o link secreto do Formspree (armazenado nos *Secrets*) e **cria o arquivo `env.js` dinamicamente** apenas para o ambiente de produção.

### 🚀 Passo a Passo da Configuração

Se você deseja replicar este fluxo de deploy automatizado:

#### 1. Configurar Secrets no GitHub

Vá em **Settings > Secrets and variables > Actions** e adicione:

- `FORMSPREE_LINK`: O link completo do seu formulário.
- `VERCEL_TOKEN`: Token gerado no painel da Vercel.
- `VERCEL_ORG_ID`: O `orgId` encontrado no arquivo `.vercel/project.json`.
- `VERCEL_PROJECT_ID`: O `projectId` encontrado no arquivo `.vercel/project.json`.

#### 2. Criar o Workflow

Crie o arquivo `.github/workflows/deploy.yml` com a seguinte instrução:

```yaml
name: Deploy para Vercel
on:
  push:
    branches: 
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Gerar env.js dinamicamente
        run: |
          mkdir -p js
          echo "document.addEventListener('DOMContentLoaded', () => { 
            const f = document.getElementById('form-contato'); 
            if(f) f.action = '${{ secrets.FORMSPREE_LINK }}'; 
          });" > js/env.js

      - name: Deploy para Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### 3. Execução

Basta realizar um git push. Você pode acompanhar o progresso na aba Actions do seu repositório. Quando o processo finalizar, o site estará atualizado e o formulário de contato funcional.

### 4. Documentações adicionais

Para saber mais sobre o conceito de CI/CD e exemplos que podem ser utilizados no dia-a-dia, acesse o link abaixo:

- [Conceito CI e CD](assets/docs/ConceitoCIeCD.md)

E para saber mais sobre como configurar o Vercel CLI para o projeto, acesse o link abaixo:

- [Vercel CLI](assets/docs/VercelCLI.md)
