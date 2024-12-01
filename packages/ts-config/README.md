# @nextime-ui/ts-config

![version](https://img.shields.io/npm/v/@nextime-ui/react.svg)
![license](https://img.shields.io/badge/license-MIT-green)

**@nextime-ui/ts-config** é um conjunto de configurações compartilhadas do TypeScript projetadas para garantir consistência e melhores práticas em projetos desenvolvidos no monorepo **NeXTIME UI**. Ele inclui diferentes configurações específicas para React, Next.js e uso geral.

## 📚 Sobre

Este pacote simplifica o gerenciamento de configurações do TypeScript em múltiplos pacotes, promovendo um padrão unificado e reduzindo a duplicação. Ele utiliza arquivos de configuração extensíveis para permitir que cada pacote herde e ajuste as opções conforme necessário.

## 📦 Instalação

Para instalar o pacote em um projeto, execute:

```bash
pnpm add -D @nextime-ui/ts-config typescript
```

## 🛠️ Configuração

Os arquivos de configuração podem ser estendidos em seu projeto através do arquivo `tsconfig.json`. Aqui estão os exemplos para diferentes cenários:

### Configuração Base

Para projetos TypeScript gerais:

```json
{
  "extends": "@nextime-ui/ts-config/base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

### Configuração para React

Para projetos com React:

```json
{
  "extends": "@nextime-ui/ts-config/react.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

### Configuração para Next.js

Para projetos com Next.js:

```json
{
  "extends": "@nextime-ui/ts-config/nextjs.json",
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}
```

## 🚀 Estrutura do Pacote

O pacote inclui os seguintes arquivos de configuração:

- **`base.json`**: Configuração base para projetos gerais.
- **`react.json`**: Extende a configuração base com opções específicas para projetos React.
- **`nextjs.json`**: Extende a configuração base com opções específicas para projetos Next.js.

## 🔧 Scripts Sugeridos

Adicione os seguintes scripts ao seu `package.json` para facilitar o uso do TypeScript:

```json
"scripts": {
  "typecheck": "tsc --noEmit"
}
```

- **`typecheck`**: Verifica erros de tipo sem gerar arquivos compilados.

## 🌟 Contribuição

Se você encontrou problemas ou deseja sugerir melhorias, consulte nosso [Guia de Contribuição](../../CONTRIBUTING.md).

## 📬 Contato

- Repositório: [nextimecode/nextime-ui](https://github.com/nextimecode/nextime-ui)
- Autor: [Pedro Duarte](https://github.com/phdduarte) - NeXTIME
