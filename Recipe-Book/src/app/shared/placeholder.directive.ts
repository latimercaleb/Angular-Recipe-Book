import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appAlertPlaceholder]'
})
export class PlaceholderDirective{
    // Use this to inject the view container refference
    constructor(public viewContainerRef: ViewContainerRef){}

}