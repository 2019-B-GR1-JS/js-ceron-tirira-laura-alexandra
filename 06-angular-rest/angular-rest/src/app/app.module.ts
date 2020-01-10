import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsuarioRestService} from "C:/Users/Laura/Documents/GitHub/js-ceron-tirira-laura-alexandra/06-angular-rest/angular-rest/src/app/services/restusuario-rest.service";
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // -> Directivas
    // ngFor ngIf
    AppRoutingModule,
    FormsModule, // -> Formularios
    HttpClientModule, // -> HTTP
    ButtonModule,
  ],
  providers: [
    UsuarioRestService
  ], // Servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
