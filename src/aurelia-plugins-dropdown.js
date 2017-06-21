// IMPORTS
import {PLATFORM} from 'aurelia-pal';


// PUBLIC METHODS
export function configure(aurelia) {
  aurelia.globalResources(PLATFORM.moduleName('./aurelia-plugins-dropdown-element'));
}