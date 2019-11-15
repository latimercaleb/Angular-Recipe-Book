import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from '../recipes/recipe.model';
@Injectable({
    providedIn: 'root'
})
export class RecipeDataService{
    constructor(private http: HttpClient, private recipesService: RecipeService){}
    getRecipeData(){
        return this.http.get<Recipe[]>('https://angular-recipe-be.firebaseio.com/recipes.json').subscribe(
            (response) => {
                this.recipesService.loadRecipes(response);
            }
        );
    }

    saveRecipeData(){
        const recipeCollection = this.recipesService.getRecipes();
        return this.http.put('https://angular-recipe-be.firebaseio.com/recipes.json',recipeCollection).subscribe(
            (response: any) => {
                console.log('PUT in saveRecipeData() sent with: ');
                console.log(response);
            });
    }
}