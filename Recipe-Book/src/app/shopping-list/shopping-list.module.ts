import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

const shoppingRoutes: Routes = [
    {path: 'shopping-list', component:ShoppingListComponent, children:[]},
];

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        RouterModule.forChild(shoppingRoutes),
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule {}