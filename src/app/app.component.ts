import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lis = this.getLis(6);

  getLis(quantity: number) {
    return Array.from(Array(quantity)).map(() => {
      return {
        nombre: 'Product',
      };
    });
  }

  buttonClicked(index:number){
    alert('Boton '+index+' apretado');
  }

}
