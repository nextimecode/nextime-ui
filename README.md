# NeXTIME UI

**NeXTIME UI** é um monorepo open source contendo bibliotecas e ferramentas para facilitar o desenvolvimento de interfaces de usuário modernas e consistentes em projetos React, com suporte completo a TypeScript.

O monorepo utiliza [pnpm workspaces](https://pnpm.io/workspaces) para gerenciar múltiplos pacotes de forma integrada, permitindo fácil manutenção e escalabilidade.

![version](https://img.shields.io/npm/v/@nextime-ui/preline.svg)
![license](https://img.shields.io/badge/license-MIT-green)

## 📦 Estrutura do Monorepo

O projeto está organizado em diversos pacotes principais, localizados na pasta `packages/`:

- **[@nextime-ui/preline](packages/react)**: Biblioteca principal de componentes React.
- **[@nextime-ui/preline](packages/preline)**: Componentes React baseados no framework Preline UI.
- **[@nextime-ui/icons](packages/icons)**: Conjunto de ícones reutilizáveis para React.
- **[@nextime-ui/tokens](packages/tokens)**: Tokens de design para cores, tamanhos, espaçamentos e mais.
- **[@nextime-ui/ts-config](packages/ts-config)**: Configurações compartilhadas para projetos TypeScript.
- **[@nextime-ui/eslint-config](packages/eslint-config)**: Configuração padrão para ESLint.
- **`docs`**: Projeto para a documentação interativa utilizando Storybook.

Cada pacote possui seu próprio README com instruções específicas.

## 💻 Pré-requisitos

Certifique-se de ter instalado:

- [pnpm](https://pnpm.io/) (versão mais recente)
- [Node.js](https://nodejs.org/) (versão compatível com o projeto)

## 🛠️ Configuração do Ambiente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/nextimecode/nextime-ui.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd nextime-ui
   ```

3. **Instale as dependências**:
   ```bash
   pnpm install
   ```

4. **Inicie o ambiente de desenvolvimento**:
   Para rodar todos os pacotes em modo de desenvolvimento:
   ```bash
   pnpm dev
   ```

## 🛠️ Publicação e Atualizações

1. **Realize as alterações necessárias nos pacotes**.
2. **Crie um changeset** para registrar as alterações:
   ```bash
   pnpm changeset
   ```
3. **Atualize as versões dos pacotes afetados**:
   ```bash
   pnpm version-packages
   ```
4. **Publique os pacotes (opcional)**:
   ```bash
   pnpm publish
   ```

## 📝 Exemplo de Uso

Para usar o pacote principal de componentes React:

1. Instale o pacote:
   ```bash
   pnpm add @nextime-ui/preline
   ```

2. Importe e use os componentes no seu projeto:
   ```tsx
   import { Button } from '@nextime-ui/preline';

   function App() {
     return <Button>Click me!</Button>;
   }
   ```

Consulte os READMEs dos pacotes para mais exemplos e informações detalhadas.

## 📖 Documentação

Acesse a documentação interativa e exemplos completos no site oficial:
🔗 **[Nextime UI Docs](https://ui.nextime.com.br)**

## 🌟 Contribuição

Contribuições são bem-vindas! Consulte o [Guia de Contribuição](CONTRIBUTING.md) para saber como participar.

## 📬 Contato

- Repositório: [nextimecode/nextime-ui](https://github.com/nextimecode/nextime-ui)
- Autor: [Pedro Duarte](https://github.com/phdduarte) - NeXTIME
