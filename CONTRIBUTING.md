# Guia de Contribuição

Obrigado por considerar contribuir com o **Nextime UI**! Este documento descreve as diretrizes para contribuir com o projeto. Queremos tornar o processo de contribuição o mais simples e transparente possível.

## 🛠️ Como Configurar o Ambiente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/nextimecode/nextime-ui.git
   ```
2. **Acesse o diretório do projeto**:
   ```bash
   cd nextime-ui
   ```
3. **Instale as dependências**:
   Certifique-se de ter o [pnpm](https://pnpm.io/) instalado e execute:
   ```bash
   pnpm install
   ```
4. **Inicie o ambiente de desenvolvimento**:
   ```bash
   pnpm dev
   ```

## 📝 Regras para Contribuir

- **Abra uma issue antes de começar a trabalhar** em novas funcionalidades ou correções. Isso ajuda a evitar trabalho duplicado.
- **Siga os padrões de código estabelecidos**. Usamos [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) para garantir a consistência do código. Execute:
  ```bash
  pnpm lint
  ```
- **Adicione testes sempre que possível**. Utilizamos [Vitest](https://vitest.dev/) para testes.

## 🚀 Como Contribuir

1. **Fork este repositório**:
   Clique no botão "Fork" na página principal do repositório.

2. **Crie uma branch para sua contribuição**:
   Use uma convenção de nomes descritiva, como:
   ```bash
   git checkout -b feature/minha-nova-feature
   ```

3. **Faça as alterações necessárias**:
   Certifique-se de testar seu código localmente antes de abrir o pull request.

4. **Adicione commits seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/)**:
   Exemplos:
   - `feat: adiciona suporte para nova funcionalidade`
   - `fix: corrige erro no componente Button`

5. **Abra um pull request**:
   - Vá até a página principal do repositório original e clique em "New Pull Request".
   - Preencha as informações do pull request explicando o que foi feito e por que.

## ✅ Checklist para Pull Requests

Antes de abrir seu pull request, verifique se:
- [ ] O código está testado e funcional.
- [ ] Adicionou ou atualizou a documentação, se necessário.
- [ ] Seguiu os padrões de commits e estilo de código.

## 📢 Dúvidas e Feedback

Se tiver dúvidas, sinta-se à vontade para abrir uma [issue](https://github.com/nextimecode/nextime-ui/issues) ou entrar em contato.

Agradecemos sua contribuição para tornar o **Nextime UI** ainda melhor!
