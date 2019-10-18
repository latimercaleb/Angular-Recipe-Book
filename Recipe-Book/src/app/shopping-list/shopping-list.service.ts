import { Indgredient } from "../shared/indgredient.model";
import {Subject} from 'rxjs';
export class ShoppingListService{
    indgredients: Indgredient[] = [
        new Indgredient('Apples',4),
        new Indgredient('Sugar', 2)
    ];

    indgredientsChanged = new Subject<Indgredient[]>();

    getIndgredients(){
        return this.indgredients;
    }

    addIndgredient(newIndgredient: Indgredient){
        this.indgredients.push(newIndgredient);
        this.indgredientsChanged.next(this.indgredients.slice());
    }

    addIndgredients(newIndgredientList: Indgredient[]){
        newIndgredientList.forEach((indgredient)=>{
            this.indgredients.push(indgredient);
        });
        this.indgredientsChanged.next(this.indgredients.slice());
    }

    removeIndgredient(){

    }
}