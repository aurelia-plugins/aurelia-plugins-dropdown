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

There are 2 usables attributes `direction` and `right`:
* Use the `direction` attribute to change the direction of the dropdown. By default the dropdown uses `down`, but you can also use `up`, `left` or `right` to show the dropdown-menu up, left or right of the button.
* Use the `right` attribute to change the alignment of the `dropdown-menu` to the right. The CSS class `dropdown-menu-right` is added.
 
```html
<aup-dropdown direction="down" right="false">
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
$dropdown-item-background: transparent !default;
$dropdown-item-color-hover: white !default;
$dropdown-item-text-decoration: none !default;
$dropdown-item-text-decoration-hover: none !default;
$dropdown-menu-background: white !default;
$dropdown-menu-box-shadow: none !default;
$dropdown-menu-margin-spacer: 1px !default;
$dropdown-menu-min-width: 160px !default;
$dropdown-item-background-hover: #0000ff !default;
$dropdown-item-color: #333333 !default;
$dropdown-item-padding-x: 16px !default;
$dropdown-item-padding-y: 4px !default;
$dropdown-divider-border: solid 1px #cccccc !default;
$dropdown-divider-padding-y: $dropdown-item-padding-y !default;
$dropdown-header-color: #333333 !default;
$dropdown-menu-border: solid 1px #cccccc !default;
$dropdown-menu-border-radius: 4px !default;
$dropdown-menu-padding: 4px 0 !default;

// DROPDOWNS
.dropdown, .dropleft, .dropright, .dropup { position: relative; }
[class^=dropdown-toggle] { cursor: pointer; white-space: nowrap; @include caret(); }
.dropdown-toggle-no-caret { &::after, &::before { display: none; } }

[class*=dropdown-menu] {
  background: $dropdown-menu-background; border: $dropdown-menu-border; border-radius: $dropdown-menu-border-radius; box-shadow: $dropdown-menu-box-shadow;
  display: block; left: 0; list-style: none; margin: $dropdown-menu-margin-spacer 0 0; min-width: $dropdown-menu-min-width; padding: $dropdown-menu-padding;
  position: absolute; top: 100%; z-index: $zindex-dropdown;
}
.dropdown-menu-right { left: auto; right: 0; }

.dropdown-item {
  background: $dropdown-item-background; color: $dropdown-item-color; display: block; padding: $dropdown-item-padding-y $dropdown-item-padding-x;
  text-decoration: $dropdown-item-text-decoration; white-space: nowrap; width: 100%;
  @include hover { background: $dropdown-item-background-hover; color: $dropdown-item-color-hover; text-decoration: $dropdown-item-text-decoration-hover; }
}

.dropdown-divider { border-top: $dropdown-divider-border; height: 0; margin: $dropdown-divider-padding-y 0; }
.dropdown-header { color: $dropdown-header-color; display: block; padding: $dropdown-item-padding-y $dropdown-item-padding-x; white-space: nowrap; }
.dropdown-text { color: $dropdown-item-color; display: block; padding: $dropdown-item-padding-y $dropdown-item-padding-x; }

.dropleft [class*=dropdown-menu] { left: auto; margin: 0 $dropdown-menu-margin-spacer 0 0; right: 100%; top: 0; }
.dropleft .dropdown-toggle { @include caret(left); &::before { vertical-align: 0; } }
.dropright [class*=dropdown-menu] { left: 100%; margin: 0 0 0 $dropdown-menu-margin-spacer; right: auto; top: 0; }
.dropright .dropdown-toggle { @include caret(right); &::after { vertical-align: 0; } }
.dropup [class*=dropdown-menu] { bottom: 100%; margin: 0 0 $dropdown-menu-margin-spacer; top: auto; }
.dropup .dropdown-toggle { @include caret(up); }
```