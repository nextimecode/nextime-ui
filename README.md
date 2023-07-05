# NeXTIME-UI

NeXTIME UI é uma biblioteca de componentes para React, construída para facilitar o desenvolvimento de interfaces de usuário.

![version](https://img.shields.io/npm/v/@nextime-ui/react.svg)
![license](https://img.shields.io/badge/license-MIT-green)

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente de `pnpm`
* Você instalou a versão mais recente do `Node.js`

## 🛠️ Desenvolvimento e Atualização de Versão

Ao fazer alterações no código dos pacotes do projeto, você precisa seguir alguns passos para garantir que as versões dos pacotes estejam atualizadas. Aqui estão os passos detalhados:

1. **Fazer Alterações no Código**: Faça as alterações necessárias nos pacotes do projeto.

2. **Gerar Changeset**: Execute o comando `pnpm changeset`. Isso vai identificar as alterações feitas e criar um arquivo dentro do diretório `.changeset`.

    ```bash
    pnpm changeset
    ```

    Após a execução do comando, verifique o conteúdo do diretório `.changeset`. Confirme se a versão proposta corresponde ao tipo de alterações que você fez.

3. **Atualizar Versões dos Pacotes**: Execute o comando `pnpm version-packages`. Isso irá analisar os arquivos de changeset e atualizar as versões dos pacotes afetados de acordo.

    ```bash
    pnpm version-packages
    ```

    Após a execução deste comando, as versões dos pacotes devem ser atualizadas para refletir as alterações feitas.

Esses passos garantem que cada pacote tenha uma versão apropriada de acordo com as alterações feitas. Lembre-se de seguir esses passos cada vez que fizer alterações nos pacotes do projeto.

## 📝 Usando NeXTIME UI

Você pode instalar a biblioteca NeXTIME UI no seu projeto executando o seguinte comando no diretório raiz do seu projeto:

```bash
pnpm add @nextime-ui/react
```

Veja o exemplo de uso da NeXTIME UI:

```jsx
import { Button } from '@nextime-ui/react';

function App() {
  return <Button>Click me!</Button>
}
```

## 📖 Documentação

O projeto Docs cuida da documentação utilizando storybook e você pode acessar o site da documentação no link https://ui.nextime.com.br/

## 📚 Contato
Se você tiver qualquer dúvida, sinta-se à vontade para nos contatar.

Projeto: https://github.com/nextimecode/nextime-ui

Autor: [Pedro Duarte](https://github.com/phdduarte) - NeXTIME