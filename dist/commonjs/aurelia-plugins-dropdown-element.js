'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

var _aureliaTemplating = require('aurelia-templating');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Dropdown = exports.Dropdown = (_dec = (0, _aureliaTemplating.customElement)('aup-dropdown'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = (_class2 = function () {
  function Dropdown(element, eventAggregator) {
    var _this = this;

    _classCallCheck(this, Dropdown);

    this.show = false;

    _initDefineProp(this, 'color', _descriptor, this);

    _initDefineProp(this, 'right', _descriptor2, this);

    this._element = element;
    this._eventAggregator = eventAggregator;

    this._navlink = this._element.querySelector('.nav-link');
    this._subscription = this._eventAggregator.subscribe('aurelia-plugins:dropdown:hide', function () {
      return _this.hide();
    });
  }

  Dropdown.prototype.attached = function attached() {
    var _this2 = this;

    document.addEventListener('click', function () {
      return _this2.hide();
    });
  };

  Dropdown.prototype.detached = function detached() {
    var _this3 = this;

    this._subscription.dispose();
    document.removeEventListener('click', function () {
      return _this3.hide();
    });
  };

  Dropdown.prototype.hide = function hide() {
    this.show = false;
    this._navlink.classList.remove('active');
  };

  Dropdown.prototype.toggle = function toggle(event) {
    var _this4 = this;

    event.stopPropagation();
    this._subscription.dispose();
    this._eventAggregator.publish('aurelia-plugins:dropdown:hide', event);
    this.show = !this.show;
    this.show ? this._navlink.classList.add('active') : this._navlink.classList.remove('active');
    this._subscription = this._eventAggregator.subscribe('aurelia-plugins:dropdown:hide', function () {
      return _this4.hide();
    });
  };

  return Dropdown;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'color', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'white';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'right', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class) || _class);