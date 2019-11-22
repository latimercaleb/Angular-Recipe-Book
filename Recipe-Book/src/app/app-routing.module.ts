import { NgModule } from "@angular/core";
import {Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routeArr: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
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
