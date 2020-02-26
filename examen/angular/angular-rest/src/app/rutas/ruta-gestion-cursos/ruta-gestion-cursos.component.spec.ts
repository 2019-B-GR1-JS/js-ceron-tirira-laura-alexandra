import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionCursosComponent } from './ruta-gestion-cursos.component';

describe('RutaGestionCursosComponent', () => {
  let component: RutaGestionCursosComponent;
  let fixture: ComponentFixture<RutaGestionCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
