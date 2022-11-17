# Steps to reproduce build

## Create next app with Typescript ESLint using npm.

```bash
npx create-next-app@latest . --ts --eslint --use-npm
```

## Output

```bash
Creating a new Next.js app <directory>.

Using npm.

Installing dependencies:
- react
- react-dom
- next
- typescript
- @types/react
- @types/node
- @types/react-dom
- eslint
- eslint-config-next

added 237 packages, and audited 238 packages in 48s

78 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Initializing project with template: default

Success! Created frontend at <directory>.
```

## Test Dev server

```bash
npm run dev
```

## Output

```bash
> frontend@0.1.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 3.8s (154 modules)
```

## Edit configuration package.json

```json
"dependencies": {
    "eslint": "8.27.0",
    "eslint-config-next": "13.0.3",
    "next": "13.0.3",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "4.9.3"
  },
  "devDependencies": {
    "@types/node": "18.11.9",
    "@types/react": "18.0.25",
    "@types/react-dom": "18.0.9"
  }
```

## Opt-out telemetry

```bash
npx next telemetry disable
```

## Output

```bash
Your preference has been saved to /home/<username>/.config/nextjs-nodejs/config.json.

Status: Disabled

You have opted-out of Next.js anonymous telemetry program.
No data will be collected from your machine.
Learn more: https://nextjs.org/telemetry
```

## Install Material UI & Font Roboto

```bash
npm install @mui/material @emotion/react @emotion/styled @fontsource/roboto
```

## Git install & config

```bash
sudo apt install git
cd /home/<username>/app_directory
git init
git add .

```

## If Author identity unknown you need generate ssh key in your /home/<username>/.ssh/id_rsa.pub

```bash
ssh-keygen
```

After that you need add content of id_rsa.pub to your github account [settings/keys](https://github.com/settings/keys)

## You can add your identity globals to this repository

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
## Add repository url

```bash
git remote add origin git@github.com:dvrtnkv/collarslab.git
git branch -M main
git commit -m "Init commit"
git push -u origin main