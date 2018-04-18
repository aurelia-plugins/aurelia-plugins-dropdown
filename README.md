# aurelia-plugins-dropdown

A dropdown plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-dropdown --save
```

When using Aurelia CLI add the following dependency to `aurelia.json` as described in the [documentation](http://aurelia.io/docs/build-systems/aurelia-cli#adding-client-libraries-to-your-project):

```json
{
  "name": "aurelia-plugins-dropdown",
  "path": "../node_modules/aurelia-plugins-dropdown/dist/amd",
  "main": "aurelia-plugins-dropdown"
}
```

Add `node_modules/babel-polyfill/dist/polyfill.min.js` to the prepend list in `aurelia.json`. Do not forgot to add `babel-polyfill` to the dependencies in `package.json`.

For projects using Webpack, please add `babel-polyfill` to your `webpack.config.js` as documented by [babeljs.io](https://babeljs.io/docs/usage/polyfill/#usage-in-node--browserify--webpack).

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
import {PLATFORM} from 'aurelia-framework';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin(PLATFORM.moduleName('aurelia-plugins-dropdown'));

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
<aup-dropdown color="white" right="false">
  <div slot="dropdown-toggle">Dropdown</div>
  <div slot="dropdown-menu">
    <a class="dropdown-item" click.delegate="action()" href>Action</a>
    <a class="dropdown-item" click.delegate="anotherAction()" href>Another action</a>
  </div>
</aup-dropdown>
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
$dropdown-divider-padding-y: $dropdown-item-padding-y !default;
$dropdown-item-text-decoration: none !default;
$dropdown-item-text-decoration-hover: none !default;
$dropdown-menu-background: #ffffff !default;
$dropdown-menu-border-color: #ecf0f1 !default;
$dropdown-menu-border: solid 1px $dropdown-menu-border-color !default;
$dropdown-menu-border-radius: 4px !default;
$dropdown-menu-box-shadow: none !default;
$dropdown-menu-margin-top: 1px !default;
$dropdown-menu-min-width: 160px !default;
$dropdown-menu-padding: 8px 0 !default;
$dropdown-toggle-color: #ffffff !default;
$dropdown-toggle-margin-left: 4px !default;
$dropdown-toggle-size: 4px !default;

// DROPDOWNS
.dropdown { position: relative; }

.dropdown-toggle { white-space: nowrap; }
.dropdown-toggle [slot=dropdown-toggle]::after {
  border-left: $dropdown-toggle-size solid transparent; border-top: $dropdown-toggle-size solid $dropdown-toggle-color; border-right: $dropdown-toggle-size solid transparent;
  content: ''; display: inline-block; height: 0; margin-left: $dropdown-toggle-margin-left; vertical-align: middle; width: 0;
}
.dropdown-toggle-black [slot=dropdown-toggle]::after { border-top-color: #000000; }
.dropdown-toggle-white [slot=dropdown-toggle]::after { border-top-color: #ffffff; }

.dropdown-menu {
  background: $dropdown-menu-background; border: $dropdown-menu-border; border-radius: $dropdown-menu-border-radius; box-shadow: $dropdown-menu-box-shadow; display: block;
  list-style: none; margin-top: $dropdown-menu-margin-top; min-width: $dropdown-menu-min-width; padding: $dropdown-menu-padding; position: absolute; z-index: 1;
}
.dropdown-menu-right { right: 0; }
.dropdown-menu-up { bottom: 24px; margin-top: 0; margin-bottom: $dropdown-menu-margin-top; }

.dropdown-divider { border-top: $dropdown-divider-border; height: 1px; margin: $dropdown-divider-padding-y 0; }
.dropdown-header { padding: $dropdown-item-padding-y $dropdown-item-padding-x; white-space: nowrap; }

.dropdown-item { background: $dropdown-item-background; color: $dropdown-item-color; display: block; padding: $dropdown-item-padding-y $dropdown-item-padding-x; text-decoration: $dropdown-item-text-decoration; white-space: nowrap; width: 100%; }
.dropdown-item:focus, .dropdown-item:hover { background: $dropdown-item-background-hover; color: $dropdown-item-color-hover; text-decoration: $dropdown-item-text-decoration-hover; }
```