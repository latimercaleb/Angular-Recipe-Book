import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Indgredient } from 'src/app/shared/indgredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIndgredients(){
    const newIndgredient = new Indgredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIndgredient(newIndgredient);
  }

  deleteIndgredient(){
    console.log('Placeholder for delete behavior, my guess is pass index');
  }

  clearIndgredient(){
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

}
