# **Next.js Foundation**

A very **solid foundation** for a scalable Next.js projects.

### **Quick setup**

```
npm i
npm run dev
```

## **Table of contents**

-   [**Rationale**](#rationale)
-   [**Why should it be used?**](#why)
-   [**Folder structure**](#folder-structure)
-   [**/docs**](#docs)
-   [**/public**](#public)
-   [Folders in `/src`:](#folders-in-src)
    -   [**/app**](#app)
    -   [**/core**](#core)
    -   [**/locales**](#locales)
    -   [**/modules**](#modules)
-   [**Installation**](#installation)
    -   [Quick setup:](#quick-setup-1)
    -   [Commands:](#commands)
    -   [Documentation:](#documentation)

## **Rationale**

Next.js it is a great framework for building React applications. It is very easy to get started with and has a lot of great features. However, it's not very opinionated about how a project should be structured. This is fine for a small project built in free time but can become a problem when working on a large project with a team of developers. This is where this project comes in.

<sub>⚠️Note: Of course, this is just one way to structure a project. Feel free to use this as a starting point and adapt it to specific needs.</sub>

<br>

## **Why should it be used?**

Why should this project be used as a starting point for projects? Here are some reasons:

-   **Very well documented.** Extensive documentation about the project, with references. This is very useful for new developers who are not familiar with the project structure.
-   **Scalable.** This project is built with scalability in mind. It provides a guide for seperation of concerns.
-   **Strict code style.** This project uses [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) to enforce a strict code style. This makes it easy to work with other developers.
-   **Based on Next.js 13.** This project is built on top of Next.js 13. This means that all the great features of Next.js 13 are available. It will be upgraded to the latest versions of Next.
-   **Frontend-first.** This project is built with a frontend-first mindset. A lot of teams want to seperate frontand and API's. For example using [Laravel](https://laravel.com/). Even though Next.js can be a [fullstack framework](https://www.youtube.com/watch?v=W4UhNo3HAMw).
-   ⚠️TODO: **\*End to end testing.** This project uses [Cypress](https://www.cypress.io/) for testing. This is very useful for testing the application.\*

## **Folder structure**

### **/docs**

Documentation is hard. It takes a lot of time and effort to write effective technical documentation for other developers. It is very useful to provide background information for features, why do they even exist? Also it is very useful to provide information about the project structure and technical decisions. This folder is the place to put all this information.

It is very useful to have docs in the **same place** as the code. This way, it is easy to keep the docs up to date, something like a wiki or external software is often forgotten.

Documentation is written in [Markdown](https://www.markdownguide.org/). This is a very simple markup language that is easy to learn.

<br>

### **/public**

The **public** folder contains all static files. This includes:

-   Images
-   Fonts
-   Favicon
-   robots.txt
-   sitemap.xml

<br>

### Folders in `/src`:

### **/app**

The **`/app`** folder contains all routes (pages) and the **layout** of the application. This folder is the **entry point** of the application and handled by **Next.js 13**. Read extensive documentation about the [app directory here](https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory).
<br>

### **/core**

The **core** of the application. This folder contains all the **markup**, **logic** and **styling** that is not specific to a page. This includes:

-   Components which are reused across the application
-   Global styles
-   Reusable functions and hooks

Think of this folder as the **foundation** of the application. It is the **core** on which the rest of the application is built.
If a [design system](https://leerob.io/blog/style-guides-component-libraries-design-systems) is used across multiple projects, create a separate repository & package for it, and import it as a dependency.
If a design system is used only in this project, it should be placed in the **`/core`** folder.
<br>

### **/locales**

The optional **locales** folder contains all the translations for the application. _This is not implemented yet!_
<br>

### **/modules**

The **modules** folder contains folders for every **module** in the application. A **module** is a **self-contained** part of the application. It contains all the **markup**, **logic** and **styling** that is specific to a module. This includes:

-   Components which are only used in this module
-   Module specific styles
-   Module specific functions and hooks

The folder should be named after the scope of the module. For example, if the module is a **blog**, the folder should be named **`/blog`**. If the module is a **user profile**, the folder should be named **`/profile`**.

<br>

## **Installation**

Make sure NPM & Node are working.

This project was created on whe following versions but should be working with all minor & quite a few of the last major versions.

-   NPM: 8.1.0
-   Node: v16.13.0

### Quick setup:

```
npm install
npm run dev
```

### Commands:

```
npm run dev: Run Next.js development server
npm run build: Create a build of the project.
npm start: Run the build
npm run lint: Lint all javascript & typescript (.js, jsx, ts, tsx)
npm run lint-fix: Lint & fix all javascript & typescript (.js, jsx, ts, tsx)
```

### Documentation:

More documentation about this project is in the `docs` folder
