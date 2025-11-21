# Project Notes for Claude

## Package Manager

This project uses **pnpm** as the package manager. Always use `pnpm` commands instead of `npm` or `yarn`.

Development branch is "dev". Production brand is "main". Live page is on production branch

## Pages Must Be Server-Side

All page components (files in the `app/` directory that export a default component) must be server-side rendered. Never use `"use client"` directive in page files. If client-side functionality is needed, extract it into separate client components.

## Cursor Rules

Component-specific cursor rules are stored in a `.cursor/` folder within the component's directory. For example:
- Logo component rules: `components/shared/.cursor/.cursorrules`

When creating cursor rules for components, create a `.cursor/` folder inside the component's directory and place the `.cursorrules` file there.
