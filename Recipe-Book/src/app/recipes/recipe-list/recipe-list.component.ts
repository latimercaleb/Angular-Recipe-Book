import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes :Recipe[] = [
    new Recipe('Apple Pie','Tasty Fruit Pie','https://www.simplyrecipes.com/wp-content/uploads/2014/09/apple-pie-vertical-b-1600.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
