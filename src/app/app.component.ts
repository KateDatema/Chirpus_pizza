//Contains a typescript class for my application

import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//title = 'my-pizza-store, is is a var you can use in your HTML, export is saying that this class is public
export class AppComponent {
  title = 'my-pizza-store';
  
  food: MenuItem[] = [
  {name: "Wet Burritos", description: "All burritos served with salsa, sour cream available upon request. Add a side of tortilla chips for 1.5", category: "South of the Border", price: 11.25 },
  {name: "Deluxe Pizza(16)", description: "Ham, Pepperoni, Sausage, Onions, Greeen Peppers, and Mushrooms ", category: "Specialty Pizza", price: 22.80 },
  {name: "Margherite Pizza (16)", description: "Olive Oil, Garlic, Mozzarella cheese, Tomatoes, Parmesan, and Fresh Basil",  category: "Specialty Pizza",price: 20.00 },
  {name: "Stomboli", description: "Homemade pizza dough, pizza sauce, mozzarella cheese and your choice of toppings", category: "Specialty Pizza", price: 8.50 },
  {name: "Wings", description: "Honey BBQ Wings", category: "Other", price: 8.50 },
  ]
}



