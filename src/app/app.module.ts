import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GuardModule } from './guard/guard.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ContactModule,
    HomeModule,
    GuardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
