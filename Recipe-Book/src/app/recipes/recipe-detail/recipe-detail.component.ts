import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  imageHeight: string = '250px';
  constructor(private service: ShoppingListService) { }

  ngOnInit() {
    this.selectedRecipe = new Recipe('','Please select a receipe item','',[]);
  }

  sendIndgredients(){
    this.service.addIndgredients(this.selectedRecipe.indgredients);
  }

}
