import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    salular()
    {
      alert('HOLAAAAAA');
    }
  }

}
