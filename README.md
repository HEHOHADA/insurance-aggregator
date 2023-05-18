# insurance-aggregator

This is a monorepo for the insurance aggregator project.

+ `apps`- apps that are deployed

- `web`: web app
- `admin`: admin app with admin panel
- `serverless`: serverless functions
- `server`: api server for admin panel/web app
- `scrapping`: scrapping service

+ `packages` - packages that are used by apps

- `ui`: a stub component library shared to applications
- `lib`: a stub library shared to applications
- `eslint-config-custom`: `eslint` configurations (`eslint-config-prettier`)
- `prettier-config-custom`: `prettier` configurations
- `database`: `prisma-client` configurations with schema and migrations/generated files
- `server-libs` libs used by the server/serverless functions
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `config`: `config` of app

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

### Build

To build all apps and packages, run the following command:

```
cd insurance-aggregator
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd insurance-aggregator
pnpm run dev
```
