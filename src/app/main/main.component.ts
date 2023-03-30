import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

type producto = {
  product: string;
  image: string;
  price: number;
  fav: boolean;
  currency: string;
  rating: number;
  description: string;
  similarProducts?: producto[];
  reviews?: review[];
};

type review = {
  image: string;
  name: string;
  rating: number;
  opinion: string;
  date: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Input() datoElegido!: producto;
  @Output() EliminarPeli = new EventEmitter<any>();
  @Output() Favoritosemit = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {}

  EliminaPeli() {
    this.EliminarPeli.emit();
  }

  Favoritos() {
    this.Favoritosemit.emit();
  }

  AbrirDialogo(datos: any) {
    this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        image: datos.image,
        product: datos.product,
        description: datos.description,
      },
    });
  }
}
