import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarroRoutingModule } from './carro-routing.module';
import { CarroComponent } from './carro/carro.component';


@NgModule({
  declarations: [
    CarroComponent
  ],
  imports: [
    CommonModule,
    CarroRoutingModule
  ]
})
export class CarroModule { }
