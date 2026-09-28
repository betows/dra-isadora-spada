# Dra. Isadora Mór Spada

Landing page de produção para a **Dra. Isadora Mór Spada** (CRO-SC 18650) — harmonização facial, botox, preenchimento e mentoria em Blumenau/SC.

Paleta editorial cream / terracotta / burgundy / gold. Tipografia Cormorant Garamond, Great Vibes e DM Sans. Hero WebGL suave (Three.js), revelações com Framer Motion e SEO local em PT-BR.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Three.js via `@react-three/fiber` e `@react-three/drei`
- Framer Motion (scroll reveals + respeito a `prefers-reduced-motion`)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Deploy (Vercel)

1. Importe este repositório na Vercel (framework: Next.js).
2. Defina `NEXT_PUBLIC_SITE_URL` com a URL canônica, por exemplo `https://seu-dominio.com.br` — usada em `metadataBase`, sitemap, robots e JSON-LD.
3. Deploy. Sem variáveis, o fallback é `https://dra-isadora-spada.vercel.app`.

## SEO

- Title, description e H1/H2 com *harmonização facial Blumenau*, botox, preenchimento e mentoria
- `robots.ts` + `sitemap.ts`
- Open Graph / Twitter cards gerados
- JSON-LD `Physician` + `LocalBusiness` + `FAQPage` (Blumenau/SC, CRO-SC 18650)
- Sem afirmações de ranking (“primeiro lugar no Google” e similares)

## Acessibilidade de movimento

Se o sistema pede `prefers-reduced-motion: reduce`, o canvas WebGL e as animações pesadas são desligados. O hero cai em um fallback CSS calmo.

## Conteúdo e CTAs

| | |
| --- | --- |
| WhatsApp | https://wa.me/message/JO4Z2TQT4S2VK1 |
| Instagram | https://www.instagram.com/draisadoraspada/ |
| Produtos | Método LipSense® · Mentoria Ilumme · SynFace |

Resultados clínicos variam. O site é informativo e não substitui avaliação presencial.

## Estrutura

```
src/app/           rotas, metadata, OG, robots, sitemap
src/components/    hero, seções, FAQ, JSON-LD
src/lib/site.ts    copy, links e dados de SEO
```
