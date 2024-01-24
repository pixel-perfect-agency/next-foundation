# **Folder structure**

### **/docs**

Documentation is hard. It takes a lot of time and effort to write effective technical documentation for other developers. It is very useful to provide background information for features, why do they even exist? Also it is very helpful to provide information about the project structure and technical decisions. This folder is the place to put all this information.

It is very convenient to have docs in the **same place** as the code. This way, it is easy to keep the docs up to date, something like a wiki or external software is often forgotten.

Documentation is written in [Markdown](https://www.markdownguide.org/). This is a very simple markup language that is easy to learn.

<br>

### **/public**

The **public** folder contains all static files. This includes files like:

-   Images
-   Fonts
-   Favicon
-   robots.txt
-   sitemap.xml

<br>

### Folders in `/src`:

### **/app**

The **`/app`** folder contains all routes (pages) and the **layout** of the application. This folder is the **entry point** of the application and handled by **Next.js 13**. Read extensive documentation about the [app directory here](https://nextjs.org/docs).
<br>

Subfolders in `/app`:

Some components are scoped to specific route groups or routes.

Take a look at the following example:

```txt
/app
├── (dashboard)
│   ├── components/
│   └── page.tsx
├── (auth)
│   ├── components/
│   ├── hooks/
│   ├── layout.tsx
│   └── page.tsx
└── (profile)
    ├── components/
    └── page.tsx
```

You must never use components from other "modules" in a module. For example, the **dashboard** module must not use components from the **auth** module.

If a component is used in multiple modules, it should be placed in the **/components** folder.

### **/components**

The **core** components of the application. This folder contains all components that are used in multiple modules. These components are **generic** and **reusable**. They are **not** specific to a module. Examples of these components are:

-   Buttons
-   Inputs
-   Cards

Think of this folder as the **scoped design-system** of the application.
If a [design system](https://leerob.io/blog/style-guides-component-libraries-design-systems) is used across multiple projects, create a separate repository & package for it, and import it as a dependency.
<br>

### **/hooks**

The **hooks** folder contains all the custom hooks that are not specific to a module / feature.
Examples of these hooks are:

-   useDebounce
-   useLocalStorage

### **/locales**

The optional **locales** folder contains all the translations for the application. _This is not implemented yet!_
<br>

### **/styles**

The **styles** folder contains all the global styles for the application. In this case it loads [TailwindCSS](https://tailwindcss.com/).

### **/tests**

The **tests** folder contains e2e tests with Playwright. This is a great tool for testing the application. It is very easy to use and has a lot of great features. Read extensive documentation about [Playwright here](https://playwright.dev/docs/intro).

<br>

### **/types**

The **types** folder contains all the typescript types. These can be reusable, types for the application or types for the API.
