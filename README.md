# NeXTIME UI

**NeXTIME UI** é um monorepo contendo bibliotecas de componentes para React, projetadas para facilitar o desenvolvimento de interfaces de usuário modernas e consistentes.

O monorepo utiliza [pnpm workspaces](https://pnpm.io/workspaces) para gerenciar múltiplos pacotes, permitindo que bibliotecas e ferramentas sejam desenvolvidas e mantidas de forma integrada.

![version](https://img.shields.io/npm/v/@nextime-ui/react.svg)
![license](https://img.shields.io/badge/license-MIT-green)

## 📦 Estrutura do Monorepo

O monorepo contém os seguintes pacotes principais:

- **[@nextime-ui/react](packages/react)**: Biblioteca principal de componentes React.
- **[@nextime-ui/preline](packages/preline)**: Componentes baseados no framework Preline UI.
- **`docs`**: Projeto para a documentação utilizando Storybook.

Cada pacote está localizado dentro da pasta `packages/` e possui seu próprio README com detalhes específicos.

## 💻 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

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

## 🛠️ Desenvolvimento e Atualização de Versão

Ao fazer alterações nos pacotes, siga estas etapas:

1. **Fazer Alterações no Código**:
   Modifique os pacotes conforme necessário.

2. **Gerar Changeset**:
   Crie um changeset para registrar suas alterações:
   ```bash
   pnpm changeset
   ```

3. **Atualizar Versões**:
   Atualize as versões dos pacotes afetados:
   ```bash
   pnpm version-packages
   ```

4. **Publicar os Pacotes** (opcional):
   ```bash
   pnpm publish
   ```

## 📝 Usando NeXTIME UI

Exemplo básico com o pacote React:

```bash
pnpm add @nextime-ui/react
```

```tsx
import { Button } from '@nextime-ui/react';

function App() {
  return <Button>Click me!</Button>;
}
```

Consulte os pacotes individuais para mais exemplos e detalhes de uso.

## 📖 Documentação

Acesse a documentação completa no site oficial:  
🔗 **[Nextime UI Docs](https://ui.nextime.com.br)**

## 🌟 Contribuição

NeXTIME UI é um projeto **open source**, e sua contribuição é bem-vinda! Veja nosso [Guia de Contribuição](CONTRIBUTING.md) para mais informações.

## 📚 Contato

- Repositório: [nextimecode/nextime-ui](https://github.com/nextimecode/nextime-ui)
- Autor: [Pedro Duarte](https://github.com/phdduarte) - NeXTIME
