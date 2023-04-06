import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from '../interfaces/producto.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor(private http: HttpClient) {}

  // private _datos: producto[] = [];
  // private _datosSelected: producto | null = null;

  $datos: BehaviorSubject<producto[]> = new BehaviorSubject<producto[]>([]);

  // get datos(): producto[] {
  //   return this._datos;
  // }

  setdatos(newdatos: producto[]) {
    this.$datos.next(newdatos);
  }

  // getdatoseleccionado(): producto | null {
  //   return this._datosSelected;
  // }

  // setdatoseleccionado(newdato: producto | null) {
  //   this._datosSelected = newdato;
  // }

  getDataProduct() {
    const url = '/assets/data/datos.json';
    this.http.get<producto[]>(url).subscribe({
      next: (response) => {
        if (!response) return;
        this.$datos.next(response);
        // const firstindex = 0;
        // this._datos = response;
        // this._datosSelected = response[firstindex];
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
