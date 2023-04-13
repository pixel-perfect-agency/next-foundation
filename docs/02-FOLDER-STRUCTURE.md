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

### **/tests**

The **tests** folder contains e2e tests with Playwright. This is a great tool for testing the application. It is very easy to use and has a lot of great features. Read extensive documentation about [Playwright here](https://playwright.dev/docs/intro).

<br>

### **/types**

The **types** folder contains all the typescript types. These can be reusable, types for the application or types for the API.
