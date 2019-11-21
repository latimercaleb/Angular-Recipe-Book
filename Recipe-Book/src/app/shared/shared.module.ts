import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { AlertComponent } from "./alert/alert.component";
import { Loader } from "./loader.component";
import { CommonModule } from "@angular/common";
import { PlaceholderDirective } from "./placeholder.directive";

@NgModule({
    declarations: [
        DropdownDirective,
        AlertComponent,
        Loader,
        PlaceholderDirective
    ],
    imports: [
        CommonModule,

    ],
    exports: [
        DropdownDirective,
        AlertComponent,
        Loader,
        PlaceholderDirective,
        CommonModule
    ],
    entryComponents: [
        AlertComponent
    ]
})
export class SharedModule{

}