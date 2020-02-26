import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-editar-profesor',
  templateUrl: './modal-editar-profesor.component.html',
  styleUrls: ['./modal-editar-profesor.component.scss']
})
export class ModalEditarProfesorComponent implements OnInit {
  nombre="";
  apellido="";
  correo="";
  telefono="";
  cedula="";

  constructor(
    public dialogRef: MatDialogRef<ModalEditarProfesorComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {

  }

  ngOnInit() {
    console.log('datos en modal', this.data);
    if (this.data != null) {
      this.nombre = this.data.profesor.nombre;
      this.apellido = this.data.profesor.apellido;
      this.correo = this.data.profesor.correo;
      this.telefono = this.data.profesor.telefono;
      this.cedula = this.data.profesor.cedula;
    }
  }

  cancelar()
  {
    this.dialogRef.close();
  }

  aceptar()
  {
    this.dialogRef.close({
      nombre:this.nombre,
      apellido:this.apellido,
      correo:this.correo,
      telefono:this.telefono,
      cedula:this.cedula})
  }

}
