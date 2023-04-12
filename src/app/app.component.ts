import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatosService } from './servicios/datos.service';
import { CarroService } from './servicios/carro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  constructor(public datosService: DatosService, public carroService: CarroService) { }

 ngOnInit(){
   this.datosService.getDataProduct();
   }


 }

