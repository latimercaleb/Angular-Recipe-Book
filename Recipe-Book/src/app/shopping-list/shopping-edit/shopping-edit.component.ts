import { Component, OnInit, ElementRef, ViewChild, Output,EventEmitter } from '@angular/core';
import { Indgredient } from 'src/app/shared/indgredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Indgredient>();
  constructor() { }

  ngOnInit() {
  }

  addIndgredents(){
    const newIndgredient = new Indgredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIndgredient);
  }

}
