import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipePostClick: Recipe;
  constructor() { }

  ngOnInit() {
  }

  mapRecipeDetails(clickedRecipeDetails: Recipe){
    console.log(`STEP 3, clicked data in parent before property bind: ${clickedRecipeDetails.name} & ${clickedRecipeDetails.description}`);
    this.recipePostClick = new Recipe(clickedRecipeDetails.name,clickedRecipeDetails.description,clickedRecipeDetails.imagePath);
  }
}
