import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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

    if (this.editModeEnabled){
      const recipeToEdit = this.recipeService.getRecipe(this.id);
      recipeName = recipeToEdit.name;
      recipeImgPath = recipeToEdit.imagePath;
      description = recipeToEdit.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImgPath),
      'description': new FormControl(description),
    });

  }

}
