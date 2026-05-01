# Security Roadmap

A static security learning roadmap and study tracker.

## Build

Install dependencies once:

```sh
npm install
```

Create the static build:

```sh
npm run build
```

The built files are written to `dist/`. This command does not start a local server.

## Checks

Run JavaScript syntax checks:

```sh
npm run check:js
```

Run the editor smoke test, which also creates a static build:

```sh
npm run test:smoke
```
