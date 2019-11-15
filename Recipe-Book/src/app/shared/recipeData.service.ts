import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RecipeDataService{
    constructor(private http: HttpClientModule){}
    getRecipeData(){

    }

    saveRecipeData(){

    }
}