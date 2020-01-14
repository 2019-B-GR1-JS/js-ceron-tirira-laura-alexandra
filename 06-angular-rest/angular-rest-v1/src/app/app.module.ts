import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from "primeng";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
@NgModule({
  declarations: [
    AppComponent //componentes
  ],
  imports: [ //modulos
    BrowserModule, //ngfor, ngif
    AppRoutingModule,
    FormsModule, //formularios
    HttpClientModule, //http
    ButtonModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [ //servicios
    UsuarioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
