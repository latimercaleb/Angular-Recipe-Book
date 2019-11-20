import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipePlaceholderComponent } from "../recipe-placeholder/recipe-placeholder.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeResolverService } from "./recipe-resolver.service";

const recipeRoutes: Routes = [
    {path: 'recipes', component:RecipesComponent, canActivate: [AuthGuard], children: [
        {path: '', component:RecipePlaceholderComponent },
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component:RecipeDetailComponent, resolve: [RecipeResolverService] },
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] }
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule{

}