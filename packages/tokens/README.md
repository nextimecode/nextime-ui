# @nextime-ui/tokens

![version](https://img.shields.io/npm/v/@nextime-ui/preline.svg)
![license](https://img.shields.io/badge/license-MIT-green)

**@nextime-ui/tokens** é um pacote de design tokens que fornece valores reutilizáveis para cores, tamanhos de fonte, espaçamentos, raios de borda e outros estilos fundamentais. Ele foi projetado para ser usado em conjunto com os componentes da **NeXTIME UI**, garantindo consistência visual em todos os projetos.

## 📚 Sobre

Os design tokens são definidos em um formato escalável e tipado (TypeScript), permitindo fácil integração em projetos modernos de front-end. Eles podem ser usados diretamente ou como base para bibliotecas de componentes.

## 📦 Instalação

Você pode instalar o pacote com o seguinte comando:

```bash
pnpm add @nextime-ui/tokens
```

## 🛠️ Como Usar

Os tokens podem ser importados e usados diretamente no seu projeto. Aqui estão alguns exemplos:

### Exemplo de Uso

#### Importando Cores

```tsx
import { colors } from '@nextime-ui/tokens';

console.log(colors.gray900); // '#1E1E1E'
```

#### Importando Tamanhos de Fonte

```tsx
import { fontSizes } from '@nextime-ui/tokens';

console.log(fontSizes.md); // '1rem'
```

#### Importando Espaçamentos

```tsx
import { space } from '@nextime-ui/tokens';

console.log(space[4]); // '16px'
```

### Tokens Disponíveis

#### Cores (`colors`)

- **Predefinidas**: Inclui tons de cinza, cores de destaque (ignite), e mais.
- **Exemplo**:
  - `white`: `#FFFFFF`
  - `ignite500`: `#00875F`

#### Tamanhos de Fonte (`fontSizes`)

- Valores disponíveis:
  - `xxs`: `0.625rem`
  - `md`: `1rem`
  - `9xl`: `6rem`

#### Pesos de Fonte (`fontWeights`)

- Valores disponíveis:
  - `regular`: `400`
  - `medium`: `500`
  - `bold`: `700`

#### Espaçamentos (`space`)

- Valores disponíveis:
  - `1`: `4px`
  - `4`: `16px`

#### Outros Tokens

- **Raios de Borda (`radii`)**
- **Alturas de Linha (`lineHeights`)**

## 🚀 Scripts Sugeridos

Adicione os seguintes scripts ao seu `package.json` para facilitar o desenvolvimento:

```json
"scripts": {
  "build": "tsup src/index.ts --format esm,cjs --dts",
  "dev": "tsup src/index.ts --format esm,cjs --dts --watch",
  "lint": "eslint src/**/*.ts* --fix",
  "typecheck": "tsc --noEmit"
}
```

- **`build`**: Gera os arquivos prontos para produção.
- **`dev`**: Inicia o modo de desenvolvimento com watch.
- **`lint`**: Analisa o código com ESLint e corrige problemas automaticamente.
- **`typecheck`**: Verifica os tipos TypeScript.

## 🌟 Contribuição

Contribuições são bem-vindas! Caso tenha sugestões ou melhorias, confira nosso [Guia de Contribuição](../../CONTRIBUTING.md).

## 📬 Contato

- Repositório: [nextimecode/nextime-ui](https://github.com/nextimecode/nextime-ui)
- Autor: [Pedro Duarte](https://github.com/phdduarte) - NeXTIME
