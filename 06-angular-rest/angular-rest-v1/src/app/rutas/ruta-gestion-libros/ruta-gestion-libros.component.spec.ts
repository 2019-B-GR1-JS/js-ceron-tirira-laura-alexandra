import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionLibrosComponent } from './ruta-gestion-libros.component';

describe('RutaGestionLibrosComponent', () => {
  let component: RutaGestionLibrosComponent;
  let fixture: ComponentFixture<RutaGestionLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
