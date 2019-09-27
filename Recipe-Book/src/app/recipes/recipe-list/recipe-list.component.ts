import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() clickedRecipeData  = new EventEmitter<Recipe>();
  recipes :Recipe[] = [
    new Recipe('Apple Pie','Warm Apple Treat','https://www.simplyrecipes.com/wp-content/uploads/2014/09/apple-pie-vertical-b-1600.jpg' ),
    new Recipe('Cherry Pie','Tasty Tangy Delight','https://images-gmi-pmc.edge-generalmills.com/612d8afe-a787-45bd-9276-f4d9e23d202d.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClick(clickedRecipe: Recipe){
    console.log(`STEP 2: Custom Event picked up in recipe-list and emitted  from recipe-list comp up to recipes-comp: ${clickedRecipe.name} & ${clickedRecipe.description}`);
    this.clickedRecipeData.emit(clickedRecipe);
  }
}
