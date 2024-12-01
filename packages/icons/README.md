# @nextime-ui/icons

![version](https://img.shields.io/npm/v/@nextime-ui/preline.svg)
![license](https://img.shields.io/badge/license-MIT-green)

**@nextime-ui/icons** é um pacote de ícones reutilizáveis para projetos React, projetado para ser integrado facilmente com o restante da biblioteca **NeXTIME UI**. Atualmente, ele inclui os ícones do [Phosphor Icons](https://phosphoricons.com/), mas tem planos de expansão para incluir outros conjuntos de ícones no futuro.

## 📚 Sobre

Este pacote tem como objetivo simplificar o uso de ícones em projetos React, garantindo performance e consistência visual. Ele é baseado em bibliotecas confiáveis como **Phosphor Icons** e **Framer Motion**, permitindo a criação de ícones animados e altamente configuráveis.

## 📦 Instalação

Você pode instalar o pacote executando:

```bash
pnpm add @nextime-ui/icons
```

Certifique-se de ter o React instalado no seu projeto como dependência peer.

## 🛠️ Configuração

O pacote já está configurado para funcionar automaticamente em projetos React. Basta importar os ícones diretamente:

### Exemplo de Uso

```tsx
import { Star, Heart } from '@nextime-ui/icons';

function App() {
  return (
    <div>
      <Star size={32} weight="bold" />
      <Heart size={32} color="red" />
    </div>
  );
}
```

Todos os ícones seguem a API fornecida pelo [Phosphor Icons](https://phosphoricons.com/), permitindo controle sobre propriedades como `size`, `weight` e `color`.

## 🚀 Scripts Sugeridos

Adicione os seguintes scripts no seu `package.json` para facilitar o desenvolvimento:

```json
"scripts": {
  "build": "tsup src/index.tsx --format esm,cjs --dts --external react",
  "dev": "tsup src/index.tsx --format esm,cjs --dts --external react --watch",
  "lint": "eslint src/**/*.ts* --fix",
  "typecheck": "tsc --noEmit"
}
```

- **`build`**: Gera os arquivos prontos para produção.
- **`dev`**: Inicia o modo de desenvolvimento com watch.
- **`lint`**: Analisa o código com ESLint e corrige problemas automaticamente.
- **`typecheck`**: Realiza a verificação de tipos com TypeScript.

## 🔧 Recursos Incluídos

- **Phosphor Icons**: Conjunto de ícones moderno e altamente personalizável.
- **Framer Motion**: Suporte para animações suaves em ícones.
- **Base Emotion**: Permite estilização customizada dos ícones utilizando CSS-in-JS.

## ⚙️ Planejamento Futuro

Planejamos expandir o pacote para incluir outros conjuntos de ícones e recursos, como:
- **Material Icons**
- **Heroicons**
- Conjuntos de ícones personalizados baseados em SVG.

## 🌟 Contribuição

Contribuições são bem-vindas! Se você tiver ideias para adicionar novos conjuntos de ícones ou melhorias no pacote, consulte nosso [Guia de Contribuição](../../CONTRIBUTING.md).

## 📬 Contato

- Repositório: [nextimecode/nextime-ui](https://github.com/nextimecode/nextime-ui)
- Autor: [Pedro Duarte](https://github.com/phdduarte) - NeXTIME
