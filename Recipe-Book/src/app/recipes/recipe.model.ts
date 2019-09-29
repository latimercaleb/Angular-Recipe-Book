// Models in Angular are standalone typescript classes that typically define direct constructs that are used in alot of places
import{Indgredient} from '../shared/indgredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public indgredients: Indgredient[];

  constructor(name:string,description:string,imagePath:string, indgredients: Indgredient[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.indgredients = indgredients;
  }
}
