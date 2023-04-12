# Styles

This project uses SCSS for styling. Classnames are notoriously hard to come up with. This project uses [BEM](http://getbem.com/) as a naming convention for CSS classes. BEM stands for Block, Element, Modifier. We also use the a version of the ITCSS architecture for styling, this devides the styling in to layers inside a triangle. Read extensive documentation about [ITCSS here](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

## Styling layers

The order of these layers is how the CSS is actually generated, the last one has the highest specificity.

### Settings

_Does not contain actual styling._

Contains global variables, like colors, font imports, etc. These variables are used in the rest of the styling layers.

### Tools

_Does not contain actual styling applied to selectors, but can contain tools to generate styling_

Contains mixins and functions that are used in the rest of the styling layers.

-   [Mixins](https://sass-lang.com/documentation/at-rules/mixin)
-   [Functions](https://sass-lang.com/documentation/at-rules/function)

### Generic

First layer that contains actual styling. This layer contains styling that is not specific to a component. This layer is also the only layer that can contain styling for HTML elements.

`_reset.scss` contains a normalization based on [normalize.css](https://necolas.github.io/normalize.css/) and removes base margin and padding from all elements.

`_page.scss` contains styling for the `html`, `body` and other 'full-page-wrapping' elements.

`_typography.scss` contains styling for the `h1`-`h6` and `p` elements. If your design has consistent typography, you should never use other font sizes than the ones defined in this file.

### Utilities

Some base utility classes are imported from [scss-partials](https://github.com/Willem-Jaap/scss-partials) (flex, margin & padding).

Other utility classes can be added here.

### Elements

Elements are the smallest building blocks of a design. They are the smallest components that can be reused in multiple places. Elements are not specific to a page or a component.

For example:

-   Button
-   Input
-   Label
-   Icon
-   Selectbox

### Components

Components are the building blocks of a page but should be reusable in multiple places.

A file in this folder should contain the styling for a single component.

### Layouts

If you have a very specific layout for a page, you can add the styling for that layout in this folder.

## Classnames (BEM)

As mentioned before, BEM is used for naming CSS classes. BEM stands for Block, Element, Modifier, if you want a more in-depth explanation, read the [BEM documentation](http://getbem.com/) and checkout the [BEM naming convention](https://en.bem.info/methodology/quick-start/).

### Block

Blocks are the highest level of abstraction in BEM. They are the most independent parts of a design. Blocks can be nested inside other blocks,
the name should describe its purpose.

```scss
// Examples
.card {...}

.menu {...}

// Bad examples
// These are not blocks, they are elements
.card-title {...}
.menu-item {...}
```

A block can be seen as a namespace for its elements and modifiers.

### Element

Elements are parts of a block that have no standalone meaning. They are only meaningful in the context of the block they belong to.

```html
<div class="card">
    <div class="card__title">...</div>
    <div class="card__body">...</div>
</div>

<nav class="menu">
    <ul class="menu__list">
        <li class="menu__item">...</li>
        <li class="menu__item">...</li>
    </ul>
</nav>
```

```scss
.card {
    &__title {...}
    &__body {...}
}

.menu {
    &__list {...}
    &__item {...}
}
```

### Modifier

Modifiers are used to change the appearance of a block or an element. They are always used in combination with a block or an element.

```html
<div class="card card--highlighted">...</div>

<nav class="menu menu--vertical">...</nav>
```

```scss
.card {
    // ... Base style

    &--highlighted {...}
}

.menu {
    &--vertical {...}
}
```

## Stylelint

Stylelint is used to enforce better styling. This project uses [stylelint-config-pixel](https://github.com/pixel-perfect-agency/stylelint-config-pixel) as a base for the stylelint configuration. This configuration can be extended.

## Do's and Don'ts

### Do's

-   Use `rem` and `em` units for font sizes and spacing.
-   Clamp your fontsizes and layout margins using the `clamp` function.
-   Use CSS & SCSS variables for colors and other values that are used multiple times.
-   Use flexbox and grid for layout.

### Don'ts

-   Don't use `px` units for font sizes and spacing.
-   Don't use `!important` in your styling.
-   Avoid using `position: absolute` and `position: fixed` for layout.
-   Avoid using `float` for layout.
-   Only use `z-index` when absolutely necessary.
