import { Component } from '@angular/core';
import data from '../assets/products.json';

interface DATA {
  product: String;
  price: Number;
  currency: String;
  rating: Number;
  description: String;
  similarProducts: {};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: DATA[] = data;

  buttonClicked() {
    console.log(data);
  }
  
}
