import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe = new Recipe('','Please select a receipe item','',[]);
  imageHeight: string = '250px';
  recipeId: number;
  constructor(private serviceShopping: ShoppingListService, private serviceRecipe: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) =>{
        this.selectedRecipe = this.serviceRecipe.getRecipe(parseInt(params.id));
        this.recipeId = +params.id;
      });
  }

  sendIndgredients(){
    this.serviceShopping.addIndgredients(this.selectedRecipe.indgredients);
  }

  deleteRecipe(){
    debugger;
    // Use service to delete recipe
    this.serviceRecipe.deleteRecipe(this.recipeId);
    // Navigate back to /recipes
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
