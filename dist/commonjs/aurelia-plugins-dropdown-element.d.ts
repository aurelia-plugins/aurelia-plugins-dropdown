export declare class Dropdown {
    _element: any;
    _eventAggregator: any;
    _navlink: any;
    _subscription: any;
    show: boolean;
    color: string;
    right: boolean;
    constructor(element: any, eventAggregator: any);
    attached(): void;
    detached(): void;
    hide(): void;
    toggle(event: any): void;
}
