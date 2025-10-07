# Styles

This project uses TailwindCSS for styling. TailwindCSS is a utility-first CSS framework. It is very powerful and flexible, but it can be a bit overwhelming at first. It is recommended to read the [TailwindCSS documentation](https://tailwindcss.com/docs) to get familiar with the framework.

## Be aware of the following:

The utility-first approach is very powerful, but it can also lead to a lot of duplicate code. This is not necessarily a bad thing, but you should take it into consideration. If you style a button you don't want to copy the same styles for the button in another module. You can solve this by creating a component for the button and use the utility classes in the component. This way you can reuse the component in other modules.

```tsx
// button.tsx

const Button = ({ children }: PropsWithChildren) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm">
            {children}
        </button>
    );
};

<Button>Hello World!</Button>;
```
