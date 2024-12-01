# Nextime UI / Preline

Nextime UI é uma biblioteca de componentes para React, baseada no Preline UI. Seu objetivo é transformar os elementos nativos do Preline em componentes React reutilizáveis, com suporte total ao TypeScript, oferecendo maior produtividade e consistência nos projetos.

![version](https://img.shields.io/npm/v/@nextime-ui/preline.svg)
![license](https://img.shields.io/badge/license-MIT-green)

## 📝 Instalação

Você pode instalar a biblioteca Nextime UI no seu projeto executando o seguinte comando no diretório raiz do seu projeto:

```bash
npm add @nextime-ui/preline
```

## 📖 Como Usar

Veja como utilizar o componente `Button`:

```tsx
import { Button } from '@nextime-ui/preline';

function App() {
  return (
    <div>
      <Button variant="solid" color="blue">
        Solid Button
      </Button>
      <Button variant="outline" size="large" color="red">
        Outline Large Button
      </Button>
      <Button isLoading>Loading Button</Button>
    </div>
  );
}
```

### Propriedades do Componente `Button`

| Propriedade  | Tipo                                                | Padrão     | Descrição                                                                |
|--------------|-----------------------------------------------------|------------|--------------------------------------------------------------------------|
| `variant`    | `'solid' | 'outline' | 'ghost' | 'soft' | 'white' | 'link'` | `'solid'` | Define o estilo do botão.                                                |
| `size`       | `'small' | 'default' | 'large'`                    | `'default'` | Define o tamanho do botão.                                               |
| `color`      | `'blue' | 'gray' | 'teal' | 'red' | 'yellow' | 'neutral' | 'white'` | `'blue'` | Define a cor do botão.                                                   |
| `isLoading`  | `boolean`                                           | `false`    | Exibe um spinner de carregamento no botão.                               |
| `children`   | `React.ReactNode`                                   | -          | O conteúdo do botão.                                                     |
| `...props`   | `React.ButtonHTMLAttributes<HTMLButtonElement>`     | -          | Permite passar atributos nativos do elemento `<button>`.                 |

### Variantes Disponíveis

- **`solid`**: Botão com fundo sólido.
- **`outline`**: Botão com borda e texto coloridos.
- **`ghost`**: Botão com texto colorido e fundo transparente.
- **`soft`**: Botão com fundo suave.
- **`white`**: Botão com fundo branco.
- **`link`**: Botão estilo link.

### Tamanhos Disponíveis

- **`small`**
- **`default`**
- **`large`**

## 📚 Documentação Completa

Acesse a documentação completa no Storybook: [Nextime UI Docs](https://ui.nextime.com.br).

## 🌟 Contribuição

Nextime UI é um projeto **open source** e toda contribuição é bem-vinda! Se você encontrou um problema, tem uma ideia para melhoria ou deseja adicionar novos recursos, sinta-se à vontade para abrir um [issue](https://github.com/nextimecode/nextime-ui/issues) ou enviar um [pull request](https://github.com/nextimecode/nextime-ui/pulls).

Leia nosso [Guia de Contribuição](https://github.com/nextimecode/nextime-ui/blob/main/CONTRIBUTING.md) para mais informações sobre como contribuir.

## 📂 Repositório

Encontre o código-fonte no GitHub: [Nextime UI / Preline](https://github.com/nextimecode/nextime-ui)

## 📬 Contato

Autor: [Pedro Duarte](https://github.com/phdduarte) - NeXTIME
