import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
@Injectable({
    providedIn: 'root'
})
export class RecipeDataService{
    constructor(private http: HttpClient, private recipesService: RecipeService, private authService: AuthService){}
    getRecipeData(){
        return this.authService.user.pipe(
            take(1), 
            exhaustMap(user => {
            return this.http.get<Recipe[]>('https://angular-recipe-be.firebaseio.com/recipes.json', 
                {
                    params: new HttpParams().set('auth', user.token)
                });
            }), 
            map( recipes =>{
                return recipes.map((recipe, idx) => {
                    if(recipe != null){
                        return {... recipe, indgredients: recipe.indgredients ? recipe.indgredients: []};
                    }else{
                        console.log(`Object at ${idx} was deleted from database`);
                        return {
                            description: 'Item was deleted',
                            imagePath: 'https://bloximages.chicago2.vip.townnews.com/ncnewsonline.com/content/tncms/assets/v3/editorial/5/70/570c3871-56b3-5883-b05e-f5963c507a57/54012dc24880f.image.jpg?resize=500%2C657',
                            name: 'Deleted from Database',
                            indgredients: []
                        };
                    }
                });
            }),
            tap(recipes => {
                this.recipesService.loadRecipes(recipes);
            }));
    }

    saveRecipeData(){
        const recipeCollection = this.recipesService.getRecipes();
        return this.http.put('https://angular-recipe-be.firebaseio.com/recipes.json',recipeCollection).subscribe(
            (response: any) => {
                console.log('PUT in saveRecipeData() sent with: ');
                console.log(response);
            });
    }
}