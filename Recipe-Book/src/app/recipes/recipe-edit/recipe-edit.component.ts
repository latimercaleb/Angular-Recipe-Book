import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editModeEnabled: boolean = false;
  recipeForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editModeEnabled = params.id != null;
        this.initForm();
      });
  }

  private initForm(){
    let recipeName = '';
    let recipeImgPath = '';
    let description = '';
    let recipeIngredients = new FormArray([]);

    if (this.editModeEnabled){
      const recipeToEdit = this.recipeService.getRecipe(this.id);
      recipeName = recipeToEdit.name;
      recipeImgPath = recipeToEdit.imagePath;
      description = recipeToEdit.description;
      if(recipeToEdit.indgredients){
        for(let parts of recipeToEdit.indgredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(parts.name),
              'amount': new FormControl(parts.amount),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImgPath),
      'description': new FormControl(description),
      'indgredients': recipeIngredients
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }
  
  onAddNewIngredientToSelectedRecipe(){
    (<FormArray>this.recipeForm.get('indgredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl(),
      })
    );
  }
}
