import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CabCarritoRestService} from "../../services/rest/cabCarrito-rest.service";
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {AuthServices} from "../../services/auth/authService";
import {DetCarritoRestService} from "../../services/rest/detCarrito-rest.service";
import {CursoRestService} from "../../services/rest/curso-rest.service";

@Component({
  selector: 'app-ruta-gestion-compras',
  templateUrl: './ruta-gestion-compras.component.html',
  styleUrls: ['./ruta-gestion-compras.component.scss']
})
export class RutaGestionComprasComponent implements OnInit {

  FILAS = FILAS;
  url = 'http://localhost:1337';
  idUsuario="";
  materia="";
  curso="";
  precio="";
  listaCompras=[];
  estadoFiltrado="";
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _cabCarritoRestService: CabCarritoRestService,
    private readonly  _detCarritoRestService: DetCarritoRestService,
    private readonly _authService:AuthServices,
    private readonly  _cursoRestService: CursoRestService,
  ) { }

  ngOnInit() {

    this.idUsuario = this._authService.sesion.id;
    console.log('idusuario en compras: ', this.idUsuario);
    const busqueda$ = this._cabCarritoRestService.buscarPorIdUsuario(parseInt(this.idUsuario));
    busqueda$
      .subscribe( datos=> {
          //this.recorrer(datos);
          for(var i = 0; i < datos.length; i++) {
           this.buscarDetalleCarrito(datos[i]);
          }
         //this.compras = datos;//this.listaCompras;
        },
        (error) => {
          console.error(error);
        }
      )
  }
recorrer(compras)
{
  for(var i = 0; i < compras.length; i++) {
    this.buscarDetalleCarrito(compras[i]);
  }
}
  buscarDetalleCarrito(compras)
  {
    var objeto = {
      Fecha : new Date(),
      Estado: "",
      Curso:"",
      Precio:0,
      Direccion:"",
      Cantidad:0,
      SubTotal:0,
      Total:0,
    }
    console.log(compras);
    console.log('id de la compra', compras.id);
    const urlDato = this.url + '/detCarrito?idCabCarrito=' +compras.id;
    const respuesta$ = this._httpClient.get(urlDato);
    respuesta$
      .subscribe(
        (detalles: any[]) => { // TRY
          console.log('detalle: ', detalles);
          objeto.Fecha = compras.fecha;
          objeto.Estado= compras.estado;
          objeto.Curso = detalles[0].idCurso.nombre;
          objeto.Precio = detalles[0].idCurso.precio;
          objeto.Direccion = compras.direccion;
          objeto.Cantidad = detalles[0].cantidad;
          objeto.SubTotal= detalles[0].subTotal;
          objeto.Total=compras.total;
          this.listaCompras.push(objeto);
          console.log('listaaaaa',this.listaCompras);
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando detalles'
          })
        }
      );
  }


  buscarCursoPorId(idCurso)
  {
    console.log('funcion buscar idcurso');
    console.log('id: ', idCurso);
    const busqueda$ = this._cursoRestService.buscarID(idCurso);
    busqueda$
      .subscribe( (dato: any)=> {
          //this.curso = curso;
          console.log('curso', dato);
        },
        (error) => {
          console.error(error);
        }
      )
  }

  comprasFiltradas() {
    console.log('compras filtradas',this.listaCompras);
    return this.listaCompras
      .filter(
        (compra) => {
          return compra.Estado.toLowerCase().includes(this.estadoFiltrado.toLowerCase());
        }
      );
  }

}
