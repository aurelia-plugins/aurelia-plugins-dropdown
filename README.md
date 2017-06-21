# aurelia-plugins-dropdown

A dropdown plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-dropdown --save
```

**JSPM**

```shell
jspm install aurelia-plugins-dropdown
```

**Bower**

```shell
bower install aurelia-plugins-dropdown
```

## Configuration

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-plugins-dropdown');

    await aurelia.start();
    aurelia.setRoot('app');
}
```

## Usage

Once the dropdown plugin is configured, to use it simply add the custom element `<aup-dropdown></aup-dropdown>` in your view.

The custom element contains 2 named slots `dropdown-toggle` and `dropdown-menu`.

There are 2 usables attributes `color` and `right`:
* Use the `color` attribute to add an extra CSS class to `dropdown-toggle::after` to change the color of the arrow. The added CSS class will be `dropdown-toggle-${color}`.
* Use the `right` attribute to change the alignment of the `dropdown-menu` to the right. The CSS class `dropdown-menu-right` is added.
 
```html
<aup-dropdown color.bind="color" right.bind="right">
  <div slot="dropdown-toggle">Dropdown</div>
  <div slot="dropdown-menu">
    <a class="dropdown-item" click.delegate="action()" href>Action</a>
    <a class="dropdown-item" click.delegate="anotherAction()" href>Another action</a>
  </div>
</aup-dropdown>
```

```javascript
export class App {
  constructor() {}

  color = 'white';
  right = false;
}
```

## Styling

The dropdown doesn't come with styling. If you use the CSS Framework [`Faceman`](<http://faceman.io>), styling is provided automatically. Otherwise copy and paste the below styling to your SCSS stylesheet. Use the variables to change the look-and-feel.

```scss
// VARIABLES
$dropdown-divider-border-color: #ecf0f1 !default;
$dropdown-divider-border: solid 1px $dropdown-divider-border-color !default;
$dropdown-item-background: transparent !default;
$dropdown-item-background-hover: #ecf0f1 !default;
$dropdown-item-color: #34495e !default;
$dropdown-item-color-hover: #34495e !default;
$dropdown-item-padding-x: 8px !default;
$dropdown-item-padding-y: 8px !default;
$dropdown-item-text-decoration: none !default;
$dropdown-item-text-decoration-hover: none !default;
$dropdown-menu-background: #ffffff !default;
$dropdown-menu-border-color: #ecf0f1 !default;
$dropdown-menu-border: solid 1px $dropdown-menu-border-color !default;
$dropdown-menu-border-radius: 4px !default;
$dropdown-menu-margin-top: 1px !default;
$dropdown-menu-min-width: 160px !default;
$dropdown-menu-padding-x: 0 !default;
$dropdown-menu-padding-y: 8px !default;
$dropdown-toggle-color: #ffffff !default;
$dropdown-toggle-margin-left: 4px !default;
$dropdown-toggle-size: 4px !default;

// DROPDOWNS
.dropdown { position: relative; }

.dropdown-toggle [slot='dropdown-toggle']::after {
  border-left: $dropdown-toggle-size solid transparent; border-top: $dropdown-toggle-size solid $dropdown-toggle-color; border-right: $dropdown-toggle-size solid transparent;
  content: ''; display: inline-block; height: 0; margin-left: $dropdown-toggle-margin-left; vertical-align: middle; width: 0;
}
.dropdown-toggle-black [slot='dropdown-toggle']::after { border-top-color: #000000; }
.dropdown-toggle-white [slot='dropdown-toggle']::after { border-top-color: #ffffff; }

.dropdown-menu {
  background: $dropdown-menu-background; border: $dropdown-menu-border; border-radius: $dropdown-menu-border-radius; display: block; list-style: none;
  margin-top: $dropdown-menu-margin-top; min-width: $dropdown-menu-min-width; padding: $dropdown-menu-padding-y $dropdown-menu-padding-x; position: absolute;
}
.dropdown-menu-right { right: 0; }

.dropdown-divider { border-top: $dropdown-divider-border; height: 1px; margin: $dropdown-item-padding-y 0; }
.dropdown-header { padding: $dropdown-item-padding-y $dropdown-item-padding-x; white-space: nowrap; }

.dropdown-item { background: $dropdown-item-background; color: $dropdown-item-color; display: block; padding: $dropdown-item-padding-y $dropdown-item-padding-x; text-decoration: $dropdown-item-text-decoration; white-space: nowrap; width: 100%; }
.dropdown-item:focus, .dropdown-item:hover { background: $dropdown-item-background-hover; color: $dropdown-item-color-hover; text-decoration: $dropdown-item-text-decoration-hover; }
```