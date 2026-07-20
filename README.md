# Electrical Ellipse

Welcome to **Electrical Ellipse**, the personal portfolio website of **Miks Silis**, software developer. This site is built using [Astro](https://astro.build/) and is structured to host a personal blog in the future.

## Project Structure

Inside the repository, you will find the following key directories and files:

- [src/pages/](file:///home/miks/Documents/Projects/electrical-ellipse/src/pages) - Page routes.
    - [index.astro](file:///home/miks/Documents/Projects/electrical-ellipse/src/pages/index.astro) - Home page.
    - [about.astro](file:///home/miks/Documents/Projects/electrical-ellipse/src/pages/about.astro) - About page.
    - [contact.astro](file:///home/miks/Documents/Projects/electrical-ellipse/src/pages/contact.astro) - Contact page.
    - [layouts/layout.astro](file:///home/miks/Documents/Projects/electrical-ellipse/src/pages/layouts/layout.astro) - Core HTML template wrapper.
- [src/components/](file:///home/miks/Documents/Projects/electrical-ellipse/src/components) - Reusable UI elements.
    - [Navbar.astro](file:///home/miks/Documents/Projects/electrical-ellipse/src/components/Navbar.astro) - Navigation bar.
    - [Footer.astro](file:///home/miks/Documents/Projects/electrical-ellipse/src/components/Footer.astro) - Page footer.
- [src/styles/](file:///home/miks/Documents/Projects/electrical-ellipse/src/styles) - Custom CSS and layouts styling.

## Development Commands

All commands are run from the root of the project.

### 1. Installation

Install project dependencies:

```sh
yarn install
```

### 2. Run Dev Server

To start a local development server with hot-reloading at `http://localhost:4321`:

```sh
yarn dev
```

Alternatively, you can run the server in the background as defined in [AGENTS.md](file:///home/miks/Documents/Projects/electrical-ellipse/AGENTS.md):

```sh
yarn astro dev --background
```

Manage the background server with:

- `yarn astro dev status` - Check the status of the server.
- `yarn astro dev logs` - View the live server logs.
- `yarn astro dev stop` - Stop the background server.

### 3. Build & Preview

To build the site for production and preview the build locally:

```sh
yarn build
yarn preview
```

## Tech Stack & Features

- **Framework:** [Astro v7](https://astro.build/) for optimal performance.
- **Styling:** Custom CSS with CSS variables (`variables.css`) for theming.
- **Theme Support:** Dark mode toggle stored in `localStorage` to preserve user preferences.

## Roadmap

- [ ] Add MDX/Markdown integration for blog posts.
- [ ] Implement responsive grid layouts for blog listing pages.
- [ ] Integrate rss/sitemap feeds.
- [ ] Add portfolio projects showcase.
