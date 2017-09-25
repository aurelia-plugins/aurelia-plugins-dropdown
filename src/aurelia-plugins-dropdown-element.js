// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {EventAggregator} from 'aurelia-event-aggregator';
import {bindable, customElement} from 'aurelia-templating';


// CLASS ATTRIBUTES
@customElement('aup-dropdown')
@inject(Element, EventAggregator)


// PUBLIC CLASS
export class Dropdown {
  // PRIVATE PROPERTIES
  _element;
  _eventAggregator;
  _navlink;
  _subscription;

  // PUBLIC PROPERTIES
  show = false;

  // BINDABLE PROPERTIES
  @bindable color = 'white';
  @bindable right = false;

  // CONSTRUCTOR
  constructor(element, eventAggregator) {
    this._element = element;
    this._eventAggregator = eventAggregator;

    this._navlink = this._element.querySelector('[slot=dropdown-toggle]');
    this._subscription = this._eventAggregator.subscribe('aurelia-plugins:dropdown:hide', () => this.hide());
  }

  // LIFECYCLE HANDLERS
  attached() {
    document.addEventListener('click', () => this.hide());
  }

  detached() {
    this._subscription.dispose();
    document.removeEventListener('click', () => this.hide());
  }

  // PUBLIC METHODS
  hide() {
    this.show = false;
    this._navlink.classList.remove('active');
  }

  toggle(event) {
    event.stopPropagation();
    this._subscription.dispose();
    this._eventAggregator.publish('aurelia-plugins:dropdown:hide', event);
    this.show = !this.show;
    this.show ? this._navlink.classList.add('active') : this._navlink.classList.remove('active');
    this._subscription = this._eventAggregator.subscribe('aurelia-plugins:dropdown:hide', () => this.hide());
  }
}