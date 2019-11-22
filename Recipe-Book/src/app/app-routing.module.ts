import { NgModule } from "@angular/core";
import {Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routeArr: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
    {path: 'login', loadChildren: './auth/auth.module#AuthModule'},
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routeArr, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}
