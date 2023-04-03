import { Component } from '@angular/core';
import * as datos from '../../data/datos.json';

type producto = {
  image: string;
  product: string;
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
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  datos:producto[] = datos;

  datoElegido: producto = this.datos[0];
  datoFiltrado = this.datos;

  filtro: string = '';
  estrella: number = 0;

  getJsonContent(){
    return (datos as producto[]);
  }

  Selecciona(precio: number) {
    const datoEncontrado = this.datos.find((dato) => dato.price === precio);
    this.datoElegido = datoEncontrado ?? this.datoElegido;
  }

  EliminaPeli() {
    this.datos.splice(
      this.datos.findIndex((prod) => {
        return prod.product === this.datoElegido.product;
      }),
      1
    );
    this.datoElegido = this.datos[0];
    this.datoFiltrado = this.datos;
  }

  Favoritos() {
    if (this.datoElegido.fav === false) {
      this.datoElegido.fav = true;
    } else {
      this.datoElegido.fav = false;
    }
  }

  FiltraEstrellas(estrella: number) {
    this.datoFiltrado = this.datos.filter(
      (datos) => Math.floor(datos.rating) == estrella
    );
    this.datoElegido = this.datoFiltrado[0];
  }

  FiltraPeli(filtro: string) {
    this.datoFiltrado = this.datos.filter((datos) =>
      datos.product.toLowerCase().includes(filtro.toLowerCase())
    );
    this.datoElegido = this.datoFiltrado[0];
  }

  Reset() {
    this.datoFiltrado = this.datos;
    this.datoElegido = this.datoFiltrado[0];
  }
}

