# @nextime-ui/docs

**@nextime-ui/docs** é o pacote responsável por hospedar e gerenciar a documentação do monorepo **NeXTIME UI**, utilizando o [Storybook](https://storybook.js.org/) para criar e exibir exemplos interativos dos componentes.

![version](https://img.shields.io/npm/v/@nextime-ui/preline.svg)
![license](https://img.shields.io/badge/license-MIT-green)

## 📚 Sobre

Este projeto tem como objetivo documentar os componentes disponíveis no monorepo **NeXTIME UI**, permitindo que desenvolvedores entendam suas funcionalidades e saibam como utilizá-los em seus projetos.

A documentação está disponível online:  
🔗 **[Nextime UI Docs](https://ui.nextime.com.br)**

## 💻 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [pnpm](https://pnpm.io/) (versão mais recente)
- [Node.js](https://nodejs.org/) (versão compatível com o projeto)

## 🛠️ Scripts Disponíveis

Os seguintes scripts estão disponíveis no `package.json` para gerenciar o projeto:

- **`pnpm dev`**: Inicia o Storybook no modo de desenvolvimento.
- **`pnpm build`**: Gera a versão estática do Storybook para produção.
- **`pnpm lint`**: Analisa o código usando ESLint e corrige problemas automaticamente.
- **`pnpm typecheck`**: Realiza a verificação de tipos com TypeScript.
- **`pnpm clean`**: Remove arquivos temporários e dependências.
- **`pnpm update`**: Atualiza as dependências para as versões mais recentes.

## 🛠️ Como Configurar o Ambiente

1. **Clone o repositório principal**:
   ```bash
   git clone https://github.com/nextimecode/nextime-ui.git
   ```

2. **Acesse o diretório do pacote `docs`**:
   ```bash
   cd nextime-ui/packages/docs
   ```

3. **Instale as dependências**:
   ```bash
   pnpm install
   ```

4. **Inicie o Storybook**:
   ```bash
   pnpm dev
   ```

5. Acesse a documentação no navegador em:  
   `http://localhost:6006`

## 📝 Publicação

Para publicar a versão estática do Storybook:

1. Gere os arquivos de produção:
   ```bash
   pnpm build
   ```

2. Os arquivos serão gerados no diretório `storybook-static`. Publique-os no servidor ou serviço de hospedagem de sua escolha.

## 🌟 Contribuição

Contribuições para a documentação são bem-vindas! Certifique-se de seguir o [Guia de Contribuição](../../CONTRIBUTING.md).

## 📚 Dependências Principais

Este pacote depende de:

- **[@nextime-ui/preline]**: Componentes React documentados.
- **[@nextime-ui/tokens]**: Tokens de design utilizados para estilização.
- **Storybook**: Ferramenta para criar e organizar a documentação interativa.

## 📬 Contato

- Repositório: [nextimecode/nextime-ui](https://github.com/nextimecode/nextime-ui)
- Autor: [Pedro Duarte](https://github.com/phdduarte) - NeXTIME
