import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from '../interfaces/producto.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor(private http: HttpClient) {}

  $datos: BehaviorSubject<producto[]> = new BehaviorSubject<producto[]>([]);

  setdatos(newdatos: producto[]) {
    this.$datos.next(newdatos);
  }

  getDataProduct() {
    const url = '/assets/data/datos.json';
    this.http.get<producto[]>(url).subscribe({
      next: (response) => {
        if (!response) return;
        this.$datos.next(response);
      },
    });
  }
}
