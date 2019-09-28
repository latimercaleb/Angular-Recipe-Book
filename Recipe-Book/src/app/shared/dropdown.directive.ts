import { Directive,ElementRef,Renderer2,HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    // Add a css class to element on click, remove css class on another click 
    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    @HostListener('click') checkOpen(){
        this.elRef.nativeElement.classList.length == 1 ? this.openList() : this.closeList();
    }

    openList(){
        this.renderer.addClass(this.elRef.nativeElement,'open');
    }

    closeList(){
        this.renderer.removeClass(this.elRef.nativeElement,'open');
    }
}