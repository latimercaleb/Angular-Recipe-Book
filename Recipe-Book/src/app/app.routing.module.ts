import { NgModule } from "@angular/core";
import {Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from "./recipes/recipes.component";
import { AuthGuard } from "./auth/auth.guard";
import { RecipePlaceholderComponent } from "./recipe-placeholder/recipe-placeholder.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeResolverService } from "./recipes/recipe-resolver.service";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthComponent } from "./auth/auth.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routeArr: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'recipes', component:RecipesComponent, canActivate: [AuthGuard], children: [
        {path: '', component:RecipePlaceholderComponent },
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component:RecipeDetailComponent, resolve: [RecipeResolverService] },
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] }
    ]},
    {path: 'shopping-list', component:ShoppingListComponent, children:[]},
    {path: 'login', component:AuthComponent},
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
