import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-modal-editar-curso',
  templateUrl: './modal-editar-curso.component.html',
  styleUrls: ['./modal-editar-curso.component.scss']
})
export class ModalEditarCursoComponent implements OnInit {
  codigo="";
  nombre="";
  descripcion="";
  materia="";
  precio="";
  idProfesor="";
  url = 'http://localhost:1337';
  profesores = [];

  constructor(
    public dialogRef: MatDialogRef<ModalEditarCursoComponent>,
    private readonly _httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit() {
    //consultar los profesores
    const urlProfesor = this.url + '/profesor';
    const profesores$ = this._httpClient.get(
      urlProfesor
    );
    profesores$
      .subscribe(
        (profesores: any[]) => { // TRY
          console.log('Profesores: ', profesores);
          this.profesores = profesores;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando profesores'
          })
        }
      );

    console.log('datos en modal', this.data);
    console.log('profesores en ele modal', this.profesores)

    if (this.data != null) {
      console.log('datos en modal diferente de null', this.data);
      this.codigo = this.data.curso.codigo;
      this.nombre = this.data.curso.nombre;
      this.descripcion = this.data.curso.descripcion;
      this.materia = this.data.curso.materia;
      this.precio = this.data.curso.precio;
      this.idProfesor = this.data.curso.idProfesor.id;
    }

  }

  cancelar()
  {
    this.dialogRef.close();
  }

  aceptar()
  {
    this.dialogRef.close({
      codigo:this.codigo,
      nombre:this.nombre,
      descripcion:this.descripcion,
      materia:this.materia,
      precio:this.precio,
      idProfesor:this.idProfesor
    })
  }

}
