# Carlos Alberto Medeiros — Portfolio Next

Portfólio profissional em Next.js, React, TypeScript e Tailwind CSS para GitHub Pages.

## Objetivo

Apresentar experiência profissional, projetos, competências técnicas e posicionamento como Senior Full Stack Software Engineer com foco em Python, Django, FastAPI, APIs, Cloud, DevOps, automação e AI-Augmented Engineering.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub Pages

## Estrutura

```txt
public/
  Carlos-Alberto-Medeiros.pdf
  images/carlos-alberto-medeiros.webp
src/
  app/
    page.tsx
    en/page.tsx
    layout.tsx
    globals.css
  components/
  data/
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse:

```txt
http://localhost:3000/portfolio
```

Observação: como o projeto usa `basePath: /portfolio`, o acesso local também usa `/portfolio`.

## Build

```bash
npm run build
```

## Deploy no GitHub Pages

```bash
npm run deploy
```

Depois configure no GitHub:

```txt
Settings → Pages → Deploy from branch → gh-pages → /root
```

URL final:

```txt
https://carlosalbertoprojetos.github.io/portfolio/
```

## Checklist antes de publicar

- Confirmar se o PDF em `public/Carlos-Alberto-Medeiros.pdf` está atualizado.
- Confirmar se a foto em `public/images/carlos-alberto-medeiros.webp` está correta.
- Validar links de GitHub, LinkedIn, WhatsApp e Medium.
- Rodar `npm run build`.
- Testar a versão `/portfolio/en/`.
- Revisar projetos em `src/data/projects.ts`.

## Correções de desenvolvimento local

Este projeto usa `basePath` apenas no build de GitHub Pages. Em desenvolvimento local, acesse normalmente:

```bash
npm install
npm run dev
```

URL local:

```text
http://localhost:3000/
```

Para validar o build que será publicado no GitHub Pages:

```bash
npm run build:github
```

Para publicar:

```bash
npm run deploy
```

Se aparecer aviso de hydration com atributos como `bbai-tooltip-injected` ou `cz-shortcut-listen`, isso normalmente é causado por extensões do navegador que alteram o HTML antes do React hidratar a página. Teste em aba anônima sem extensões.

Se aparecer aviso de múltiplos `package-lock.json`, rode os comandos dentro da pasta `portfolio-next` e remova lockfiles desnecessários da pasta pai.
