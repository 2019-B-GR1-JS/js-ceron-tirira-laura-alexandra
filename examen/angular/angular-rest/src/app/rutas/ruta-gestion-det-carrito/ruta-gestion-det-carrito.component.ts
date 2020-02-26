import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {CabCarritoRestService} from "../../services/rest/cabCarrito-rest.service";
import {DetCarritoRestService} from "../../services/rest/detCarrito-rest.service";
import {CursoRestService} from "../../services/rest/curso-rest.service";
import {AuthServices} from "../../services/auth/authService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ruta-gestion-det-carrito',
  templateUrl: './ruta-gestion-det-carrito.component.html',
  styleUrls: ['./ruta-gestion-det-carrito.component.scss']
})
export class RutaGestionDetCarritoComponent implements OnInit {
  //curso
  nombre="";
  materia="";
  precio="";
  //cabecera
  estadoMostrar="Nuevo";
  fecha= new Date();
  total;
  direccion="";
  //detalle
  cantidad="";
  //precio="";
  subtotal="";
  busquedaCurso;
  curso;
  //parametros
  parametrosEditar;
  compras;
  idCompra="";
  idUsuario = "";
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _cursoRestService:CursoRestService,
    private readonly _cabCarritoRestService: CabCarritoRestService,
    private readonly  _detCarritoRestService: DetCarritoRestService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _authService:AuthServices,
    private router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.escucharParametrosEdicion();
    this.buscarCursoPorId();
    this.idUsuario = this._authService.sesion.id;
    console.log('datos usuario loggeado: ', this._authService.sesion);
    console.log('id del usuario loggeadoo: ', this.idUsuario);

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl1:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });

  }
  escucharParametrosEdicion()
  {
    const parametros$ = this._activatedRoute.params;
    parametros$
      .subscribe( (parametros) => {
          this.parametrosEditar = parametros.idCurso;
          this.busquedaCurso = parseInt(this.parametrosEditar);
          console.log(parametros);
        }

      );
  }
  buscarCursoPorId()
  {
    console.log('funcion buscar curso');
    console.log('id: ', this.busquedaCurso);
    const busqueda$ = this._cursoRestService.buscarID(this.busquedaCurso);
    busqueda$
      .subscribe( (dato: any)=> {
          //this.curso = curso;
          console.log('curso', dato);
          console.log(typeof (dato));
          if (dato != null) {
            this.nombre= dato[0].nombre;
            this.materia = dato[0].materia;
            this.precio = dato[0].precio;
          }
        },
        (error) => {
          console.error(error);
        }
      )
  }
  obtenerCantidad(evento)
  {
    const dato= evento.srcElement.value;
    this.cantidad= dato;
    this.subtotal=this.calcularSubtotal();
    this.total=this.calcularTotal();
  }
  calcularSubtotal()
  {
    const subtotal = (Number(this.precio) * Number(this.cantidad)).toFixed(2);
    this.subtotal= subtotal;
    return subtotal;
  }
  calcularTotal()
  {
    const total = (Number(this.subtotal) + (Number(this.subtotal) * 0.12)).toFixed(2);
    this.total = total;
    return total;
  }
  comprar() {
    console.log('guardando cabCarrito');
    this.guardarCabCarritoHTTP();
  }
  guardarCabCarritoHTTP() {
    var datos = {
      estado : "Creado",
      fecha: new Date(),
      total : 0,
      idUsuario : this.idUsuario,
      direccion:""
    };
    console.log('inico guardarCabHTTP', datos);
    datos.estado ='creado';
    datos.fecha = this.fecha;
    datos.total = this.total;
    datos.idUsuario = this.idUsuario;
    datos.direccion = this.direccion;
    console.log('datps', datos);
    const cabCarritoGuardado$ = this._cabCarritoRestService.crear(datos);
    cabCarritoGuardado$
      .subscribe(
        (compraGuardada: any) => { // try
          console.log(compraGuardada);
          this.idCompra = compraGuardada.id;
          console.log('inicio', this.idCompra);
          this.guardarDetCarritoHTTP();
          this.estadoMostrar = datos.estado;
          console.log(this.estadoMostrar);
        },
        (error) => { // catch
          console.error(error)
        }
      )  }
  guardarDetCarritoHTTP() {
    var datosDet = {
      cantidad : 0,
      precio: 0,
      subTotal : 0,
      idCurso : 0,
      idCabCarrito:0,
    };

    datosDet.cantidad =parseInt( this.cantidad);
    datosDet.precio = parseInt(this.precio);
    datosDet.subTotal =parseInt(this.subtotal);
    datosDet.idCurso = this.busquedaCurso;
    datosDet.idCabCarrito =parseInt(this.idCompra);

    console.log('datos detalle', datosDet);

    const detCarritoGuardado$ = this._detCarritoRestService.crear(datosDet);
    detCarritoGuardado$
      .subscribe(
        (compraGuardada: any) => { // try
          console.log(compraGuardada);
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }
  pagar() {
    console.log('Editando det carrito', );
    this.editarCabCarritoHTTP(parseInt(this.idCompra));
  }
  editarCabCarritoHTTP(id: number) {
    var datos = {
      estado : "Comprado",
      fecha: this.fecha,
      total : this.total,
      idUsuario : this.idUsuario,
      direccion:this.direccion
    };
    console.log('inico guardarCabHTTP', datos);
    datos.estado ='Comprado';
    datos.fecha = this.fecha;
    datos.total = this.total;
    datos.idUsuario = this.idUsuario;
    datos.direccion = this.direccion;
    const cabCarritoEditado$ = this._cabCarritoRestService.editar(id, datos);
    cabCarritoEditado$
      .subscribe(
        (cabCarritoEditado: any) => { // try
          console.log('detCabcarrito editado', cabCarritoEditado);
          this.estadoMostrar = datos.estado;
          console.log(this.estadoMostrar);
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }


}
