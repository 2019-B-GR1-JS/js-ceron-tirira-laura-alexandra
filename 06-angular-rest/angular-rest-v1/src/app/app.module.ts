import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent //componentes
  ],
  imports: [ //modulos
    BrowserModule, //ngfor, ngif
    AppRoutingModule,
    FormsModule, //formularios
    HttpClientModule, //http
    ButtonModule
  ],
  providers: [ //servicios
    UsuarioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
