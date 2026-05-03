# Conceito CI/CD

Entender **CI/CD** é como compreender a diferença entre lavar uma pilha enorme de louça no fim do dia ou lavar cada talher assim que você termina de usá-lo. Para um iniciante, o conceito pode parecer técnico, mas ele é fundamentado em automação e frequência.

Abaixo, apresento a explicação estruturada com exemplos práticos e as referências utilizadas para compor este guia.

---

## 1. O que é CI/CD? (O Conceito Facilitado)

### **CI - Integração Contínua (Continuous Integration)**

Imagine que você e um colega estão escrevendo um código para o mesmo projeto. Se vocês passarem uma semana sem compartilhar o que fizeram, na hora de juntar tudo (o "merge"), haverá uma bagunça de erros.

- **O que o CI faz:** Toda vez que você termina uma pequena tarefa e envia para o GitHub (`git push`), um robô automático (como o GitHub Actions) testa seu código na hora.
- **Exemplo Prático:** Você altera a cor de um botão no seu portfólio. Ao enviar, o CI verifica se essa mudança não quebrou o alinhamento de outras seções.

### **CD - Implantação Contínua (Continuous Deployment)**

Depois que o robô do CI diz que "está tudo bem", o CD entra em cena para levar essa mudança para o site oficial (como a Vercel) sem que você precise fazer nada manualmente.

- **O que o CD faz:** Ele pega o código aprovado e o publica no servidor.
- **Exemplo Prático:** Assim que o GitHub Actions termina de criar seu arquivo `env.js` e testar seu HTML, ele "entrega" o site pronto para a Vercel. Em segundos, o link do seu site já mostra a nova cor do botão para o mundo todo.

---

## 2. Exemplos do Dia a Dia para Fixar

- **A Esteira de Sushi:** Imagine um restaurante de sushi onde o chef (desenvolvedor) coloca o prato na esteira (GitHub). Antes do prato chegar ao cliente (usuário), ele passa por um sensor que verifica se o peixe está fresco (CI). Se estiver tudo ok, o prato segue viagem até a mesa (CD).
- **O Corretor Ortográfico:** Escrever código sem CI/CD é como escrever um livro inteiro e só revisar no final. Com CI/CD, é como ter um corretor ortográfico que te avisa do erro no momento em que você digita a palavra.
- **Mudar E-mail:** Em vez de abrir o código, procurar o link do Formspree, alterar, salvar e dar push, você apenas vai no GitHub, altera o valor do Secret `FORMSPREE_LINK` e pronto. O próximo deploy já usará o e-mail novo.
- **Adicionar novo membro na equipe:** Se alguém clonar seu projeto, o site dele não terá o link do seu e-mail (segurança), mas ele verá no seu README como configurar o próprio e-mail dele para testes locais.
- **Atualização de CSS:** Você altera o `contato.css`. Ao dar push, o CI/CD garante que, além do novo estilo, o arquivo `env.js` (que não existe no GitHub) seja incluído no pacote final para a Vercel, mantendo o formulário sempre ativo.

[Voltar para README.md](/README.md)
