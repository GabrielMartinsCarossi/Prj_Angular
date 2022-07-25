import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chocolate Chips Cookies', 'Super simple cookies recipe', 'https://www.errenskitchen.com/wp-content/uploads/2019/02/chocolate-chip-cookies-3.jpg'),
    new Recipe('Amazing Carbonara', 'The original Italian recipe', 'https://assets.bonappetit.com/photos/5e46c93bc7bda40009794ace/1:1/w_2560%2Cc_limit/0220-Traditional-Carbonara-Pasta.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
