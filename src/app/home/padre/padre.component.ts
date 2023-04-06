import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/interfaces/producto.interface';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  datos: producto[] = [];
  datoElegido: producto = this.datos[0];
  datoFiltrado = this.datos;
  datoCarro: number[] = [];

  constructor(public datosService: DatosService) {}

  ngOnInit(): void {
    this.datosService.$datos.subscribe({
      next: (response) => {
        this.datos = response;
        this.datoElegido = this.datos[0];
        this.datoFiltrado = this.datos;
      },
    });
  }

  filtro: string = '';
  estrella: number = 0;

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

  AnyadirCarro() {
    const index = this.datos.findIndex((prod) => {
      return prod.product === this.datoElegido.product;
    });
    this.datoCarro.push(index);
  }
}
