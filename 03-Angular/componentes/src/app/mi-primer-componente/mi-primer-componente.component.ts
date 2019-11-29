import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {every} from "rxjs/operators";

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent implements OnInit , OnDestroy{

  ancho = 200;
  alto = 200;

  @Input()
  public  titulo:string

  @Input()
  public imagen:string;

  @Input() //atributo o propiedad
  public textoImagen:string;

  @Input()
  public textoBoton:string;

  @Output() //evento del componente
  public cambioSueldo = new EventEmitter();


num_uno =0;

num_dos=0;

suma=0;
resta=0;
multiplicacion=0;
division=0;

  constructor() {
    console.log('instanciando'); //no se debe meter logica de negocio en el constructor
  } //instancia la clase(ayuda ->angular)

  ngOnInit() { //la clase esta lista, hace algo al inicio
    console.log('esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
  }

  ngOnDestroy(): void { //la clase esta por destruirse, //el void regresa null no es necesario escribir

  }

  saludar()
  {
    alert('HOLAAAAAA');
  }

  aumentarSueldo()
  {
    this.textoBoton = (Number(this.textoBoton) +1).toString();
    //transformar a numero otr manera
    //this.textoBoton = (+(this.textoBoton) +1).toString();
    this.alto = this.alto +1;
    this.ancho = (this.ancho +1 );
    this.cambioSueldo.emit(this.textoBoton); //se emite el evento
  }

  obtenerValor1(evento)
  {
    console.log(evento);
    const dato= evento.srcElement.value;
    console.log(dato);
    this.num_uno= dato;
    //this.num_dos = this.num_uno;

    console.log(this.num_uno);
    //console.log(this.num_dos);
    this.suma=this.sumar();
    this.resta=this.restar();
    this.multiplicacion=this.multiplicar();
    this.division=this.dividir();


  }

  obtenerValor2(evento)
  {
    console.log(evento);
    const dato= evento.srcElement.value;
    console.log(dato);
    this.num_dos= dato;

    console.log(this.num_dos);

    this.suma=this.sumar();
    this.resta=this.restar();
    this.multiplicacion=this.multiplicar();
    this.division=this.dividir();

  }

  sumar()
  {
    console.log("suma")
    console.log(this.num_uno);
    console.log(this.num_dos);
    const suma = Number(this.num_uno) + Number(this.num_dos)
    console.log(suma)
    return suma;
  }

  restar()
  {
    console.log("resta")
    const resta = Number(this.num_uno) - Number(this.num_dos)
    console.log(resta)
    return resta;
  }

  multiplicar()
  {
    console.log("multiplicacion")
    const multiplicacion = Number(this.num_uno) * Number(this.num_dos)
    console.log(multiplicacion)
    return multiplicacion;
  }

  dividir()
  {
    console.log("division")
    const division = Number(this.num_uno) / Number(this.num_dos)
    console.log(division)
    return division;
  }


  calculadora()
  {
    //suma
    console.log("suma")
    const suma= this.sumar();
    console.log("resta")
    const resta= this.restar();
    console.log("multiplicaicion")
    const multiplicacion= this.multiplicar();
    console.log("division")
    const division= this.dividir();
  }

}
