import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentes';
  arregloObjetos =[
    {
    id:1, //number
    "nombre":"Laura", //string
    apellido:"Cerón", //string
    sueldo: 2.2, //number
    casado: true, //boolean
    carro:null,
    ojos:undefined,
    comida:"https://www.cocinayvino.com/wp-content/uploads/2017/01/comidarapida.jpg"
  },
    {
      id:1, //number
      "nombre":"Alex", //string
      apellido:"Cerón", //string
      sueldo: 7.2, //number
      casado: true, //boolean
      carro:null,
      ojos:undefined,
      comida:"https://www.elsiglodetorreon.com.mx/m/i/2019/03/1157048.jpeg"
    },
    {
      id:1, //number
      "nombre":"Eithan", //string
      apellido:"Cerón", //string
      sueldo: 9.2, //number
      casado: true, //boolean
      carro:null,
      ojos:undefined,
      comida:"https://s03.s3c.es/imag/_v0/770x420/2/8/d/Comida-basura.jpg"
    }

  ]

imprimirSueldo(sueldo:string)
{
  console.log(sueldo);
}

}
