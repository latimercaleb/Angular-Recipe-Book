import { Indgredient } from "../shared/indgredient.model";

export class ShoppingListService{
    indgredients: Indgredient[] = [
        new Indgredient('Apples',4),
        new Indgredient('Sugar', 2)
    ];

    getIndgredients(){
        return this.indgredients;
    }

    addIndgredient(newIndgredient: Indgredient){
        this.indgredients.push(newIndgredient);
    }

    addIndgredients(newIndgredientList: Indgredient[]){
        newIndgredientList.forEach((indgredient)=>{
            this.indgredients.push(indgredient);
        });
    }

    removeIndgredient(){

    }
}