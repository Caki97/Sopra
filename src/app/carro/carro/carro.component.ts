import { Component } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { producto } from 'src/app/interfaces/producto.interface';
import { CarroService } from 'src/app/servicios/carro.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css'],
})
export class CarroComponent {
  datos: producto[] = [];
  contador: number[] = [];
  precio: number[] = [];
  datosCarro: number[] = [];

  constructor(
    public datosService: DatosService,
    public carroService: CarroService
  ) {}

  ngOnInit(): void {
    this.datosService.$datos.subscribe({
      next: (response) => {
        this.datos = response;
      },
    });
    this.carroService.$datoscarro.subscribe({
      next: (response) => {
        this.datosCarro = response;
      },
    });
    this.ContarEntradas();
    this.PrecioEntrada();
  }

  ContarEntradas() {
    this.datosCarro.forEach(
      (el) => (this.contador[el] = this.contador[el] + 1 || 1)
    );
  }

  PrecioEntrada() {
    for (let i = 0; i < this.datosCarro.length; i++) {
      this.precio[i] = this.contador[i] * 7.5;
    }
  }

  EliminarProducto(index: number) {
    this.contador.splice(index, 1);
  }
}
