import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png'),
    new Recipe('Recipe 2', 'Recipe 2 description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJlkbpUKLAjbgvS1A4220jygGdk4UhmsT8ZA&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
