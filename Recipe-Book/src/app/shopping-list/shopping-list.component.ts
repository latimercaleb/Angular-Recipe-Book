import { Component, OnInit, OnDestroy } from '@angular/core';
import {Indgredient} from '../shared/indgredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  indgredients: Indgredient[] = [];
  private indgredientsChangeSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService, private logger: LoggingService) { }

  ngOnInit() {
    this.indgredients = this.shoppingListService.getIndgredients();
    this.indgredientsChangeSubscription = this.shoppingListService.indgredientsChanged.subscribe(
      (indgredients: Indgredient[]) => {this.indgredients = indgredients;}
    );
    this.logger.printLog('Shopping List init');
  }

  ngOnDestroy(){
    this.indgredientsChangeSubscription.unsubscribe();
  }

  editItem(id: number){
    this.shoppingListService.editStarted.next(id);
  }
}
