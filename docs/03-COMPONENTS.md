# Components

Components use PascalCase as a filename and end with `.tsx`.

-   `Button.tsx`
-   `MenuFoldout.tsx`

In principle a file should only contain one component with a single responsibility. If a (sub)component is directly related to the component in the file, it may be placed in the same file.

-   `Table.tsx`
    -   `TableHeader`
    -   `TableAction`
    -   `TableFilters`

You should only do this when you are sure that the component can only be used in the context of the component in the file.

## Location

Components which are reusable across the application should be placed in the `src/core/components` folder.

Components which belong to a module should be placed in the `src/modules/<module-name>/components` folder.

## Props

Props should be named in camelCase.

-   `isDisabled`
-   `onSubmit`

You should declare props in an interface called `Props`. `children` should have the type `ReactNode`.

```tsx
import React, { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    isDisabled?: boolean;
    onSubmit: () => void;
}
```

## Server and client components

React 18 introduced server components, these components render on the server and only serve their output (html) to the client, without any javascript. This is a great way to improve performance and reduce the amount of javascript that needs to be downloaded.

A component should be a server component, unless it needs interactivity.

Take a look at the islands architecture (https://joshwcomeau.com/react/the-perils-of-rehydration/ & https://jasonformat.com/islands-architecture/).
