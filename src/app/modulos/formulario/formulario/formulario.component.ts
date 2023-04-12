

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { producto } from 'src/app/interfaces/producto.interface';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  datos: producto[] = [];
  
  userForm: FormGroup = this.formBuilder.group({
    image: ["https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"],
    product: [null, [Validators.required, Validators.minLength(4)]],
    price: [null, [Validators.required, Validators.min(10)]],
    fav: [false],
    currency: ["€"],
    rating: [0],
    description: [null, [Validators.required]],
    similarProducts: [[]]
  });

  formValue: any;

  constructor(private formBuilder: FormBuilder, public datosService: DatosService) {}

  ngOnInit(): void {
    this.datosService.$datos.subscribe({
      next: (response) => {
        this.datos = response;
      },
    });
  }

  anyadirNuevoProducto() {
    this.formValue=this.userForm.value
    this.datos.push(this.formValue);
    this.datosService.setdatos(this.datos);
  }

  validarCampo(field: string): boolean {
    return (
      this.userForm.controls[field].invalid &&
      this.userForm.controls[field].touched
    );
  }
}
