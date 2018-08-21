import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.welovead.com/upload/photo_db/2009/06/16/200906160006072057/480_480/200906160006072057.jpg')
  ];
  
  constructor() { }

  ngOnInit() { }
}
