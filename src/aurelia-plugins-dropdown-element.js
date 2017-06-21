// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {EventAggregator} from 'aurelia-event-aggregator';
import {bindable, customElement} from 'aurelia-templating';


// CLASS ATTRIBUTES
@customElement('aup-dropdown')
@inject(EventAggregator)


// PUBLIC CLASS
export class Dropdown {
  // PRIVATE PROPERTIES
  _eventAggregator;
  _subscription;

  // PUBLIC PROPERTIES
  show = false;

  // BINDABLE PROPERTIES
  @bindable color = 'white';
  @bindable right = false;

  // CONSTRUCTOR
  constructor(eventAggregator) {
    this._eventAggregator = eventAggregator;
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
  }

  toggle(event) {
    event.stopPropagation();
    this._subscription.dispose();
    this._eventAggregator.publish('aurelia-plugins:dropdown:hide', event);
    this.show = !this.show;
    this._subscription = this._eventAggregator.subscribe('aurelia-plugins:dropdown:hide', () => this.hide());
  }
}