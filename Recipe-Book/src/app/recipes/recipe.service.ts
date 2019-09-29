import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Indgredient } from '../shared/indgredient.model';
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes :Recipe[] = [
        new Recipe('Apple Pie','Warm Apple Treat','https://www.simplyrecipes.com/wp-content/uploads/2014/09/apple-pie-vertical-b-1600.jpg', [new Indgredient('Sugar', 12), new Indgredient('Eggs', 5), new Indgredient('Apples', 2)]),
        new Recipe('Cherry Pie','Tasty Tangy Delight','https://images-gmi-pmc.edge-generalmills.com/612d8afe-a787-45bd-9276-f4d9e23d202d.jpg', [new Indgredient('Sugar', 12), new Indgredient('Eggs', 5), new Indgredient('Cherries', 12)] )
    ];

    getRecipes(){
        return this.recipes.slice();
    }

}