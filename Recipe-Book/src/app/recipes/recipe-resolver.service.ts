import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { RecipeDataService } from '../shared/recipeData.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]>{
  constructor(private dataService: RecipeDataService, private recipeService: RecipeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentRecipes = this.recipeService.getRecipes();
    if(currentRecipes.length === 0){ // Check if recipes are already loaded before calling http to load data
      return this.dataService.getRecipeData()
    }else{
      return currentRecipes;
    }
  }
}
