// Models in Angular are standalone typescript classes that typically define direct constructs that are used in alot of places
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name:string,description:string,imagePath:string){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
