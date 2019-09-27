import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() customClickEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  recipeItemClicked(){
    console.log(`STEP 1: Item clicked and emitted from recipeItemClicked in recipe-item-component to recipe-list component`);
     this.customClickEvent.emit();
  }

}
