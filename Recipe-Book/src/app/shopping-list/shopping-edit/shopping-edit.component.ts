import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Indgredient } from 'src/app/shared/indgredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  @ViewChild('shoppingForm') shoppingForm: NgForm;
  editSubscription: Subscription;
  editMode: boolean;
  edittedItemId: number;
  edittedItem: Indgredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editMode = false;
    this.editSubscription = this.shoppingListService.editStarted.subscribe(
      (index: number) => {
        this.edittedItemId = index;
        this.editMode = true;
        this.edittedItem = this.shoppingListService.getIndgredient(index);
        this.shoppingForm.setValue({
          name: this.edittedItem.name,
          amount: this.edittedItem.amount
        })
      }
    );
  }

  addIndgredients(){
    console.log(this.shoppingForm);
    if(this.shoppingForm.valid){
      const newIndgredient = new Indgredient(this.shoppingForm.value.name, this.shoppingForm.value.amount);
      console.log(newIndgredient);
      if(this.editMode == true){
        this.shoppingListService.updateIndgredient(this.edittedItemId,newIndgredient);
      }else{
        this.shoppingListService.addIndgredient(newIndgredient);
      }
      this.clearIndgredient();
      this.editMode = false;
    }
    // const newIndgredient = new Indgredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
  }

  deleteIndgredient(){
    console.log('Placeholder for delete behavior, my guess is pass index');
    // Implement delete handler 
    if(this.editMode == true){
      this.shoppingListService.deleteIndgredient(this.edittedItemId);
      this.clearIndgredient();
      this.editMode = false;
    }
  }

  clearIndgredient(){
    this.shoppingForm.reset();
    // this.nameInputRef.nativeElement.value = '';
    // this.amountInputRef.nativeElement.value = '';
  }

  ngOnDestroy(){
    this.editSubscription.unsubscribe();
  }
}
