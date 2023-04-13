# **Introduction**

This is the documentation for the **Next.js 13** starter template. This template is a **boilerplate** for **Next.js 13** projects. It is a **starting template** for new projects, and a **reference** for existing projects.

-   **Very well documented.** Extensive documentation about the project, with references. This is very important for new developers who are not familiar with the project structure.
-   **Scalable.** This project is built with scalability in mind. It provides a guide for seperation of concerns.
-   **Strict code style.** This project uses [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) to enforce a strict code style. This makes it easy to work with other developers.
-   **Based on Next.js 13.** This project is built on top of Next.js 13. This means that all the great features of Next.js 13 are available. It will be upgraded to the latest versions of Next.
-   **Frontend-first.** This project is built with a frontend-first mindset. A lot of teams want to seperate frontend and API's. For example by using [Laravel](https://laravel.com/), even though Next.js can be used as a [fullstack framework](https://www.youtube.com/watch?v=W4UhNo3HAMw).
-   **End to end testing.** This project uses [Playwright](https://playwright.dev/) for end to end testing. This is a great tool for testing the application as a whole.

## **Why Next.js?**

We use **Next.js** because it has a very large userbase, and is very well maintained. It is also very easy to use, and has a lot of great features. Read extensive documentation about **Next.js** [here](https://nextjs.org/docs) and read the beta documentation for **Next.js 13** [here](https://beta.nextjs.org/docs).

## **Installation**

Make sure NPM & Node are working.

This project was created on whe following versions but should be working with all minor & quite a few of the last major versions.

-   NPM: 9.5.0
-   PNPM: 7.29.0
-   Node: v18.14.2

```bash
pnpm i
pnpm run dev
```

### Commands:

```bash
pnpm run dev # Run Next.js development server
pnpm run build # Create a build of the project.
pnpm start # Run the build
pnpm run lint # Lint all javascript & typescript (.js, jsx, ts, tsx) using next lint with eslint & prettier
pnpm run stylelint # Lint all css & scss (.css, .scss)
pnpm run test # Run all tests
pnpm run test:debug # Run all tests in debug mode with visible browser
pnpm run test:report # Run all tests and generate a report
```

## **Table of Contents**

-   [Folder Structure](./02-FOLDER-STRUCTURE.md)
-   [Components](./03-COMPONENTS.md)
-   [Styles](./04-STYLES.md)
