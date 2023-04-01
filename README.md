# insurance-aggregator

- `web`: web app
- `ui`: a stub component library shared to applications
- `admin`: admin app (not implemented)
- `serverless`: serverless functions
- `eslint-config-custom`: `eslint` configurations (`eslint-config-prettier`)
- `prettier-config-custom`: `prettier` configurations
- `database`: `prisma-client` configurations with schema and migrations/generated files
- `server-libs` libs used by the server/serverless functions
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

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
