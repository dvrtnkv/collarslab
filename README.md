# Landing Page Source: [collarslab.com](https://collarslab.com)

## Build [Next.js](https://vercel.com/templates/next.js/nextjs-boilerplate) app Typescript, [Material UI](https://mui.com/material-ui/getting-started/overview/)

## Scripts in package.json

```json
/* ... */
"scripts": {
    "dev": "next dev -p 4000",
    "dev:static": "serve ./out -l 3000 -n",
    "build": "next build",
    "export": "next export",
    "start": "next start",
    "lint": "next lint"
  },
/* ... */
```

## Initial setup

```bash
npm install
npm run build
npm run start
```

## Test Dev server

Fast refhresh on PORT 4000

```bash
npm run dev
```

## Test dev:static on PORT 3000

serve ./out -l 3000 -n

```bash
npm run dev:static
```

You can opt-out of Next.js telemetry if you want

```bash
npx next telemetry disable
```
