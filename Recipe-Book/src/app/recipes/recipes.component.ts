import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  descriptionName: string;
  descriptionDetails: string;
  constructor() { }

  ngOnInit() {
  }

  detailsParse(details: {carriedName: string, carriedDescription: string}){
    console.log(`STEP 3: ${details.carriedName} & ${details.carriedDescription}`);
    this.descriptionName = details.carriedName;
    this.descriptionDetails = details.carriedDescription;
    // console.log('Details in parent: ' + details.name + " , " + details.description);
  }
}
