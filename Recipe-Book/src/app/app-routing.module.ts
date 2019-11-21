import { NgModule } from "@angular/core";
import {Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthComponent } from "./auth/auth.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routeArr: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routeArr)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}
