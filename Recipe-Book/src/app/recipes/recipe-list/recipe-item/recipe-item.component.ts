import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output('detailData') details = new EventEmitter<{recipeName: string, recipeDescription: string}>();
  constructor() { }

  ngOnInit() {
  }

  passNameAndDescrip(name: string, description: string){
    console.log(`STEP 1: Item clicked and emitted from passNameAndDescrip in recipe-item-component to recipe-list component: ${name} or ${description}`);
     this.details.emit({
      recipeName: name,
      recipeDescription: description
     });
  }

}
