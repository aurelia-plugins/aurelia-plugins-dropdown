'use strict';

System.register(['aurelia-pal'], function (_export, _context) {
  "use strict";

  var PLATFORM;
  function configure(aurelia) {
    aurelia.globalResources([PLATFORM.moduleName('./aurelia-plugins-dropdown-element')]);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }],
    execute: function () {}
  };
});