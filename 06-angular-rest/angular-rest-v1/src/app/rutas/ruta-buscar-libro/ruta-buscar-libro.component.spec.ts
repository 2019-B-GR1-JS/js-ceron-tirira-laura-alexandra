import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBuscarLibroComponent } from './ruta-buscar-libro.component';

describe('RutaBuscarLibroComponent', () => {
  let component: RutaBuscarLibroComponent;
  let fixture: ComponentFixture<RutaBuscarLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaBuscarLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBuscarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
