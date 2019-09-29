import { Component, OnInit } from '@angular/core';
import {Indgredient} from '../shared/indgredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  indgredients: Indgredient[] = [];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.indgredients = this.shoppingListService.getIndgredients();
  }
}
