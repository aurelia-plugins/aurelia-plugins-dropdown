var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

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

import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { bindable, customElement } from 'aurelia-templating';

export let Dropdown = (_dec = customElement('aup-dropdown'), _dec2 = inject(EventAggregator), _dec(_class = _dec2(_class = (_class2 = class Dropdown {
  constructor(eventAggregator) {
    this.show = false;

    _initDefineProp(this, 'color', _descriptor, this);

    _initDefineProp(this, 'right', _descriptor2, this);

    this._eventAggregator = eventAggregator;
    this._subscription = this._eventAggregator.subscribe('aurelia-plugins:dropdown:hide', () => this.hide());
  }

  attached() {
    document.addEventListener('click', () => this.hide());
  }

  detached() {
    this._subscription.dispose();
    document.removeEventListener('click', () => this.hide());
  }

  hide() {
    this.show = false;
  }

  toggle(event) {
    event.stopPropagation();
    this._subscription.dispose();
    this._eventAggregator.publish('aurelia-plugins:dropdown:hide', event);
    this.show = !this.show;
    this._subscription = this._eventAggregator.subscribe('aurelia-plugins:dropdown:hide', () => this.hide());
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'color', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'white';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'right', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
})), _class2)) || _class) || _class);