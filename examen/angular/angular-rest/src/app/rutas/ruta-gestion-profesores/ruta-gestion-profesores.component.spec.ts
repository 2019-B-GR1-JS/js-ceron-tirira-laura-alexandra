import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionProfesoresComponent } from './ruta-gestion-profesores.component';

describe('RutaGestionProfesoresComponent', () => {
  let component: RutaGestionProfesoresComponent;
  let fixture: ComponentFixture<RutaGestionProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
