import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../shared/recipeData.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  constructor(private dataService: RecipeDataService) { }

  ngOnInit() {
    this.dataService.getRecipeData();
  }
}
