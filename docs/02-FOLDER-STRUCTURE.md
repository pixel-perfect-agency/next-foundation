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

<br>

### Folders in `/src`:

### **/app**

The **`/app`** folder contains all routes (pages) and the **layout** of the application. Read extensive documentation about the [app directory here](https://nextjs.org/docs).
<br>

You must never place any components other than Next.js defined components in this folder. This includes the following: `layout.tsx`, `page.tsx`, `error.tsx`, `loading.tsx`, `not-found.tsx` etc.

All other components must be placed a specific module folder in the **`/src/modules`** folder. Shared components that are used in multiple modules must be placed in the **`/src/modules/core`** folder.


### **/modules**

The **modules** folder contains all the modules of the application. Each module is a **feature** of the application. Each module has its own folder. The folder name should be the same as the module name. The module name should be in **kebab-case**.

The module folder contains all the components, hooks, styles and types that are specific to that module. The module folder should contain the following folders:

-   **components**: All components that are specific to that module.
-   **hooks**: All hooks that are specific to that module.
-   **utils**: All utils that are specific to that module.

The rationale for modules is to provide a clear separation of concerns but allow sharing of components within specific page implementations. This way you can compose a page from multiple modules, but still have a clear separation of concerns.

### **/modules/core/components**

The **core** components of the application. This folder contains all components that are used in multiple modules. These components are **generic** and **reusable**. They are **not** specific to a module. Examples of these components are:

-   Buttons
-   Inputs
-   Cards


### **/modules/core/hooks**

The **hooks** folder contains all the custom hooks that are not specific to a module / feature.
Examples of these hooks are:

-   useDebounce
-   useLocalStorage


### **/styles**

The **styles** folder contains all the global styles for the application. In this case it loads [TailwindCSS](https://tailwindcss.com/).

<br>

### **/types**

The **types** folder contains all the Typescript types. These can be reusable, types for the application or types for the API.
