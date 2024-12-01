# @nextime-ui/eslint-config

**@nextime-ui/eslint-config** é a configuração padrão do ESLint utilizada nos projetos do monorepo **NeXTIME UI**. Ela foi projetada para garantir consistência de estilo de código, boas práticas e acessibilidade, aproveitando integrações com Prettier, TypeScript e outras ferramentas populares.

![version](https://img.shields.io/npm/v/@nextime-ui/preline.svg)
![license](https://img.shields.io/badge/license-MIT-green)

## 📚 Sobre

Este pacote fornece um conjunto de regras e plugins do ESLint que pode ser reutilizado em qualquer projeto, especialmente aqueles que utilizam React, TypeScript e Prettier. O objetivo é simplificar a configuração do ESLint e promover um ambiente de desenvolvimento padronizado.

## 📦 Instalação

Antes de começar, certifique-se de ter o ESLint e o TypeScript instalados no seu projeto. Para instalar o pacote de configuração, execute:

```bash
pnpm add -D @nextime-ui/eslint-config eslint typescript
```

Se o seu projeto já utiliza outras ferramentas ou dependências relacionadas, confira as **peerDependencies** deste pacote no `package.json` para garantir que todas estão instaladas.

## 🛠️ Configuração

Adicione o `@nextime-ui/eslint-config` como extensão no seu arquivo de configuração do ESLint (por exemplo, `.eslintrc.json` ou `.eslintrc.js`):

### Usando `.eslintrc.json`

```json
{
  "extends": "@nextime-ui/eslint-config"
}
```

### Usando `.eslintrc.js`

```javascript
module.exports = {
  extends: ["@nextime-ui/eslint-config"]
};
```

## 🚀 Scripts Sugeridos

Adicione os seguintes scripts no seu `package.json` para facilitar a execução do ESLint no seu projeto:

```json
"scripts": {
  "lint": "eslint 'src/**/*.{ts,tsx,js,jsx}' --fix",
  "lint:check": "eslint 'src/**/*.{ts,tsx,js,jsx}'"
}
```

- **`lint`**: Executa o ESLint corrigindo problemas automaticamente.
- **`lint:check`**: Verifica problemas sem fazer correções.

## ⚙️ Recursos Incluídos

Este pacote inclui suporte para:

- **React**: Configurações específicas para projetos com React.
- **TypeScript**: Regras otimizadas para TypeScript.
- **Prettier**: Integração para manter consistência de formatação.
- **Acessibilidade**: Regras do `jsx-a11y` para melhorar a acessibilidade.
- **Melhores práticas**: Plugins como `eslint-plugin-unicorn` e `eslint-plugin-promise` para garantir código mais limpo e confiável.
- **Importação organizada**: Utiliza o `eslint-plugin-import-helpers` para organizar automaticamente os imports.

## 🔧 Scripts Disponíveis

O pacote também inclui scripts úteis:

- **`pnpm clean`**: Remove os diretórios `node_modules` e outros arquivos temporários.
- **`pnpm update`**: Atualiza as dependências para suas versões mais recentes.

## 🌟 Contribuição

Contribuições são bem-vindas! Se você encontrou um problema ou gostaria de sugerir melhorias, consulte nosso [Guia de Contribuição](../../CONTRIBUTING.md).

## 📬 Contato

- Repositório: [nextimecode/nextime-ui](https://github.com/nextimecode/nextime-ui)
- Autor: [Pedro Duarte](https://github.com/phdduarte) - NeXTIME
