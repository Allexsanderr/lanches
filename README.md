<div align="center">
  <h1>🔥 Chapa &amp; Fogo</h1>
  <p><strong>Landing page de alta conversão</strong> para hamburgueria artesanal — dark, elegante e com glassmorphism.</p>

  <p>
    <a href="#-rodando-localmente">Rodar localmente</a> •
    <a href="#-stack">Stack</a> •
    <a href="#-estrutura">Estrutura</a> •
    <a href="#-customização-rápida">Customização</a>
  </p>

  <p>
    <img alt="Vite" src="https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white">
    <img alt="React" src="https://img.shields.io/badge/React-19.x-149ECA?logo=react&logoColor=white">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white">
    <img alt="Tailwind" src="https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?logo=tailwindcss&logoColor=white">
  </p>
</div>

---

## ✨ O que tem aqui

- Hero com imagem de fundo + overlay cinematográfico
- Navbar transparente sobre o hero
- Cards com efeito glass + animação de entrada (fade-up)
- Seção de Cardápio com imagens reais dos lanches + fallback automático
- Layout responsivo (mobile-first)

## 🧱 Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones)
- Google Fonts: Oswald (títulos) + Inter (texto)

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173/

## 🧪 Scripts

```bash
npm run dev      # ambiente de desenvolvimento
npm run lint     # eslint
npm run build    # build de produção
npm run preview  # prévia do build
```

## 🗂️ Estrutura

- [src/App.tsx](./src/App.tsx) — landing page completa (seções, cards, animações e cardápio)
- [src/index.css](./src/index.css) — Tailwind + animações
- [tailwind.config.js](./tailwind.config.js) — tema (cores, fontes, glow)
- [index.html](./index.html) — fontes e metadados

## 🎨 Customização rápida

**Cores / fontes / glow**

Edite em [tailwind.config.js](./tailwind.config.js):
- `colors.charcoal` e `colors.amberGold`
- `fontFamily.title` e `fontFamily.body`
- `boxShadow.glow`

**Imagem do hero**

Coloque `hero-bg.png` em `public/` e o hero usa automaticamente:
- `public/hero-bg.png`

Se não existir, ele usa um fallback online.

**Imagens do cardápio**

Os cards usam fotos reais (Unsplash). Se der erro de rede, cai para um fallback gerado.

## 🌐 Deploy

Qualquer host estático funciona (Vercel, Netlify, GitHub Pages via build).

Build:

```bash
npm run build
```

O output fica em `dist/`.

## 📷 Créditos

- Fotos do cardápio: Unsplash (via `source.unsplash.com`)
- Tipografia: Google Fonts (Inter / Oswald)
