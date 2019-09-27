import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  imageHeight: string = '250px';
  constructor() { }

  ngOnInit() {
    this.selectedRecipe = new Recipe('','Please select a receipe item','')
  }

}
