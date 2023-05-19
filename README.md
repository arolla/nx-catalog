# nx-catalog
Guild Frontend catalog

How to:

## Welcome to the nx-catalog wiki!

### How to init the monorepo with nx: [nx](https://nx.dev/getting-started/intro)

`yarn global add nx@latest`
`npx nx@latest init`

### Add the different plugins : [nx plugins](https://nx.dev/community#plugin-directory)

`yarn add @nx/angular:app`
`yarn add @nx/angular`
`yarn add @nx/react`
`yarn add @nx/storybook`
`yarn add @nx-plus/vue`

### Create apps (UI): [generators](https://nx.dev/packages/nx/documents/generate)

`nx generate @nx/angular:app angular-book`
`nx generate @nx/react:app react-book`
`nx generate @nx-plus/vue:app vue-book`

### Add Storybook to each apps
`nx g @nx/storybook:configuration angular-book`
`nx g @nx/storybook:configuration react-book`
`nx g @nx/storybook:configuration vue-book`

### Create apps (API)

`yarn add @nx/node`
`nx generate @nx/node:app node-book`
`yarn add @nx/nest`
`nx generate @nx/nest:app nest-book`

### Add playwright for projects (note: Cypress is already setup for each apps by the generator plugin)

`yarn add -D @nx-extend/playwright`
`nx g @nx-extend/playwright:init`

## Creation d'un composant react dans react-book en CDD.

Lancer le storybook sur le projet react-book: 
`npx nx storybook react-book`

Lancer le projet tu lances la commande :
`npx nx serve react-book`

Lancer les tests :
`npx nx test react-book`

