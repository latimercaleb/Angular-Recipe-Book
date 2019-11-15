import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RecipeDataService } from '../shared/recipeData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showList: boolean;
  // @Output() listChanged = new EventEmitter <{listState: boolean}>();
  constructor(private dataService: RecipeDataService) { }

  ngOnInit() {
    this.showList = false;
  }

  onSave(){
    console.log('Attempting PUT request header.ts');
    this.dataService.saveRecipeData();
  }

  onGet(){
    console.log('Attempting GET request header.ts');
    this.dataService.getRecipeData().subscribe();
  }

  // No longer needed, routing handled by router instead of click events
  // changeListVisibility(arg: boolean){
  //   this.showList = arg;
  //   this.listChanged.emit({
  //     listState: this.showList
  //   });
  // }
}
