# Vercel CLI

Para instalar a **Vercel CLI** e configurá-la em seu projeto para uso com CI/CD, siga este passo a passo detalhado:

---

## 1. Instalação da Vercel CLI

A Vercel CLI é a ferramenta que permite gerenciar sua hospedagem direto do terminal. Certifique-se de ter o Node.js instalado em sua máquina.

- Abra o terminal do seu VS Code (ou o de sua preferência).
- Execute o comando de instalação global:

  ```bash
  npm i -g vercel
  ```

- Verifique se a instalação foi bem-sucedida digitando `vercel --version`.

---

## 2. Login e Autenticação

Antes de vincular o projeto, você precisa autorizar seu computador.

- No terminal, digite:

  ```bash
  vercel login
  ```

- Selecione a opção **Continue with GitHub** usando as setas do teclado e dê **Enter**.
- Uma janela abrirá no seu navegador; clique em **Verify** e, após a confirmação de sucesso, volte ao terminal.

---

## 3. Vinculando o Projeto Local à Nuvem

Este passo cria a conexão necessária para obter os IDs que serão usados no seu fluxo automático de deploy (CI/CD).

- Dentro da pasta raiz do seu projeto, execute:

  ```bash
  vercel link
  ```

- Responda às perguntas do terminal da seguinte forma:

  - `Set up “.../Caminho/Do/Projeto”?`: Digite `y` e dê Enter.
  - `Which scope should contain your project?`: Selecione seu nome de usuário (ex: **Silvio's projects**) e dê Enter.
  - `Link to existing project?`: Digite `n` se existe um projeto na Vercel com seu projeto atual (Ou digite `n` se for a primeira vez (ele criará um novo projeto na Vercel para você)).
  - `What’s your project’s name?`: Dê Enter para aceitar o nome da pasta ou digite um nome corrigido (como **portfolio-html-e-css**).
  - `In which directory is your code located?`: Apenas dê Enter para confirmar que é na raiz (`./`), caso apareça.
  - `Would you like to pull environment variables now?`: Digite `n` para não puxar as variáveis de ambientes.

---

## 4. Coletando IDs para o CI/CD (GitHub Actions)

Após o comando `vercel link`, uma pasta oculta chamada `.vercel` será criada na sua estrutura de arquivos.

- Abra o arquivo `.vercel/project.json` no seu editor.
  - Localize e copie os seguintes valores:
    - `orgId`: Você o salvará no GitHub como o segredo `VERCEL_ORG_ID`.
    - `projectId`: Você o salvará no GitHub como o segredo `VERCEL_PROJECT_ID`.

---

## 5. Configurando o Token de Acesso

Além dos IDs, o GitHub precisa de um "crachá" para entrar na sua conta da Vercel.

- Acesse o painel da Vercel no navegador: **Settings** > **Tokens**.
- Clique em **Create**, dê um nome (ex: `github-actions-token`), selecione o escopo de acesso total e clique em **Create**.
- Copie o código gerado imediatamente e salve-o nos segredos do GitHub como `VERCEL_TOKEN`.

---

### Resumo das Chaves no GitHub

Para que sua esteira de CI/CD funcione, você deve ter estes 4 segredos configurados em seu repositório (**Settings** > **Secrets and variables** > **Actions**):

- `FORMSPREE_LINK`: O link do seu formulário.
- `VERCEL_TOKEN`: A chave gerada no painel da Vercel.
- `VERCEL_ORG_ID`: O ID da organização do arquivo JSON.
- `VERCEL_PROJECT_ID`: O ID do projeto do arquivo JSON.

[Voltar para README.md](/README.md)
