import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent implements OnInit , OnDestroy{

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

  @Input()
  public ancho:string;
  @Input()
  public largo:string;

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


    //this.ancho = (this.ancho)

    this.cambioSueldo.emit(this.textoBoton); //se emite el evento
  }

//class (etiquta html)
//  instancia a la calse
//  clase esta lista
// clase se destruye
}
