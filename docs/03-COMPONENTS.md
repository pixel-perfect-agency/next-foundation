# Components

Components hypen-case as a filename and end with `.tsx`.

All NPM packages are also lowercase and hypen-case, to keep all imports consistent the project uses the same naming convention.

-   `button.tsx`
-   `menu-foldout.tsx`

In principle a file should only contain one component with a single responsibility. If a (sub)component is directly related to the component in the file, it may be placed in the same file.

-   `table.tsx`
    -   `Table`
    -   `TableHeader`
    -   `TableAction`
    -   `TableFilters`

You should only do this when you are sure that the component can only be used in the context of the component in the file.

## Location

Components which are reusable across the application should be placed in the `src/components` folder.

Components which belong to a module should be placed in the `src/app/(<module-name>)/components` folder.

## Props

Props should be named in camelCase.

-   `isDisabled`
-   `onSubmit`

You should declare props in an interface called `Props`. `children` should be defined using the `PropsWithChildren` type.

```tsx
import { type PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    isDisabled?: boolean;
    onSubmit: () => void;
}

const Component = ({ children, isDisabled, onSubmit }: Props) => {
    return <div>{children}</div>;
};
```

If you have no other props, you can use the `PropsWithChildren` type directly.

```tsx
import { type PropsWithChildren } from 'react';

const Component = ({ children }: PropsWithChildren) => {
    return <div>{children}</div>;
};
```

## Server and client components

React 18 introduced server components, these components render on the server and only serve their output (html) to the client, without any javascript. This is a great way to improve performance and reduce the amount of javascript that needs to be downloaded.

A component should be a server component, unless it needs interactivity.

Take a look at the islands architecture (https://joshwcomeau.com/react/the-perils-of-rehydration/ & https://jasonformat.com/islands-architecture/).

## Documenting components

If it is not immediately clear what a component does, you should add a comment above the component explaining what it does, this is the same for props.

Document using the [JSDoc](https://jsdoc.app/) syntax. Don't add types, these are already defined in the interface.

Beware of over-documenting, only document when it is not clear what the component does.

Don't do this:

```tsx
/**
 * This is a button component
 * @param {boolean} isDisabled - Whether the button is disabled
 * @param {() => void} onClick - The click handler
 */
```

For unclear component with props:

```tsx
/**
 * This component is used to conditionally render content based on a media query
 *
 * @example
 * <MediaQuery query="(min-width: 768px)">
 *     <Component />
 * </MediaQuery>
 *
 * @param query - The media query to match according to the CSS specification
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
 */
```
