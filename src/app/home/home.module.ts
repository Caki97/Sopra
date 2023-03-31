import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { PadreComponent } from './padre/padre.component';
import { AsideComponent } from './padre/aside/aside.component';
import { DialogComponent } from './padre/dialog/dialog.component';
import { MainComponent } from './padre/main/main.component';


@NgModule({
  declarations: [
    PadreComponent,
    AsideComponent,
    DialogComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
