# FAST Element Starter

This is a starter project for a building web component library using [FAST Element](https://www.fast.design/docs/fast-element/getting-started).

## Getting Started

Before getting started, make sure you have installed all dependencies:

```bash
npm install
```

### Starting Dev Environment

---

```bash
npm run dev
```

This command will start up the [Storybook](https://storybook.js.org/docs/web-components/get-started/introduction) environment and run the custom element manifest generator.

---

```bash
npm run serve
```

Sometimes you need to completely isolate your components for additional testing. Running the `serve` command will start a local web server using the `index.html` file at the root of the project.

## Testing Your Components

```bash
npm run test

-- or --

npm run test:watch
```

These will open up headless browser instances and run your automated tests defined in your `*.tests.ts` files.
