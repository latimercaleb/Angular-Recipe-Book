import { Component, OnInit } from '@angular/core';
import {Indgredient} from '../shared/indgredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Indgredient[] = [
    new Indgredient('Apples',4),
    new Indgredient('Sugar', 2)
  ];
  constructor() { }

  ngOnInit() {

  }

  newIndgredient(indgredient: Indgredient){
    this.ingredients.push(indgredient);
  }

}
