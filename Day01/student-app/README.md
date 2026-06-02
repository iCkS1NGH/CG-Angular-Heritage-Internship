```markdown
# student-app

A minimal Angular application created on Day 1 of my Angular internship. This serves as a reference for the application to be recreated for hands-on.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) — Angular CLI depends on Node and its package manager, `npm`. Verify your install with `node -v` before proceeding.

---

## Setup

### 1. Install the Angular CLI globally

```bash
npm install -g @angular/cli
```

The `-g` flag installs the CLI to your system's global `node_modules`, making the `ng` command available in any directory. This is a one-time step per machine.

### 2. Confirm the installation

```bash
ng version
```

This prints the installed CLI version alongside compatible Angular package versions. It is a quick sanity check that the install succeeded and that your Node version is supported.

### 3. Scaffold a new project

```bash
ng new student-app
```

The CLI prompts you to choose a stylesheet format and whether to enable server-side rendering. For a first project, selecting `CSS` and declining SSR keeps things simple. Under the hood, this generates the full project structure, installs all `npm` dependencies, and initializes a Git repository.

### 4. Enter the project directory

```bash
cd student-app
```

All the subsequent `ng` commands must be run from within the project root, where `angular.json` lives.

### 5. Start the development server

```bash
ng serve
```

The CLI compiles the application and starts a local dev server, typically at `http://localhost:4200`. The output will show the exact URL. Open it by holding `Ctrl` and clicking the link directly in the terminal, or paste it manually into a browser.

The server watches for file changes and recompiles automatically — no manual refresh needed during development.

---

## Project Structure (generated)

```
student-app/
├── src/
│   ├── app/                  # Components, services, routing
│   ├── main.ts               # Browser bootstrap entry point
│   ├── main.server.ts        # SSR bootstrap entry point
│   ├── server.ts             # Express server for SSR
│   └── styles.css            # Global styles
├── public/                   # Static assets (served as-is)
├── angular.json              # CLI workspace and build configuration
├── tsconfig.json             # Base TypeScript config (strict mode enabled)
├── tsconfig.app.json         # TypeScript config for app compilation
├── tsconfig.spec.json        # TypeScript config for test compilation
├── .editorconfig             # Editor formatting rules (2-space indent, single quotes)
└── .prettierrc               # Prettier: 100-char line width, single quotes
```

---

## Notes

Day 1 learning notes: *(link to be updated)*
```