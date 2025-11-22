# Project Notes for Claude

## Package Manager

This project uses **pnpm** as the package manager. Always use `pnpm` commands instead of `npm` or `yarn`.

Development branch is "dev". Production brand is "main". Live page is on production branch

## Pages Must Be Server-Side

All page components (files in the `app/` directory that export a default component) must be server-side rendered. Never use `"use client"` directive in page files. If client-side functionality is needed, extract it into separate client components.

## UI Components

Base components are shadcn/ui components. If a component doesn't exist in `/components/ui`, refer to the [shadcn/ui documentation](https://ui.shadcn.com/docs/installation/next) to download and add it using:

```bash
pnpm dlx shadcn@latest add <component-name>
```

## Cursor Rules

Component-specific cursor rules are stored in a `.cursor/` folder within the component's directory. For example:

- Logo component rules: `components/shared/.cursor/.cursorrules`

When creating cursor rules for components, create a `.cursor/` folder inside the component's directory and place the `.cursorrules` file there.

## Commit Message Style

All commit messages must follow the Conventional Commits specification. Use the following format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types

Use one of the following types:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Changes to the build process or auxiliary tools and libraries

### Subject

- Use imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end
- Keep it concise (50 characters or less)

### Examples

```
feat: add Accelerator menu item
fix: correct anchor scrolling behavior
refactor: reduce section spacing
style: remove frosted background effect
docs: update installation instructions
```
