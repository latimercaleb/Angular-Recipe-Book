import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  recipeItemClicked(){
    console.log(`STEP 1: Item clicked and emitted from recipeItemClicked in recipe-item-component to recipe component`);
     this.recipeService.recipeSelected.emit(this.recipe);
  }

}
