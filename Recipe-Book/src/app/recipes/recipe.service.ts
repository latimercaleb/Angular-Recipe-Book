import {Recipe} from './recipe.model';
import { Indgredient } from '../shared/indgredient.model';
import { Subject } from 'rxjs';
export class RecipeService{
    recipeSelected = new Subject<Recipe>();
    recipesAddedOrChanged = new Subject<Recipe[]>();
    private recipes :Recipe[] = [
        new Recipe('Apple Pie','Warm Apple Treat','https://www.simplyrecipes.com/wp-content/uploads/2014/09/apple-pie-vertical-b-1600.jpg', [new Indgredient('Sugar', 12), new Indgredient('Eggs', 5), new Indgredient('Apples', 2)]),
        new Recipe('Cherry Pie','Tasty Tangy Delight','https://images-gmi-pmc.edge-generalmills.com/612d8afe-a787-45bd-9276-f4d9e23d202d.jpg', [new Indgredient('Sugar', 12), new Indgredient('Eggs', 5), new Indgredient('Cherries', 12)] )
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number): Recipe{
        return this.recipes[id];
    }

    addRecipe(newRecipe: Recipe){
        this.recipes.push(newRecipe);
        this.recipesAddedOrChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesAddedOrChanged.next(this.recipes.slice());
    }

    deleteRecipe(indexToDelete: number){
        this.recipes.splice(indexToDelete,1);
        this.recipesAddedOrChanged.next(this.recipes.slice());
    }

    loadRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesAddedOrChanged.next(this.recipes.slice()); // Inform other components of changes from HTTP
    }
}