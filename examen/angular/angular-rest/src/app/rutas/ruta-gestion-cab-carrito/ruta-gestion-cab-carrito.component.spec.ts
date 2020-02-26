import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionCabCarritoComponent } from './ruta-gestion-cab-carrito.component';

describe('RutaGestionCabCarritoComponent', () => {
  let component: RutaGestionCabCarritoComponent;
  let fixture: ComponentFixture<RutaGestionCabCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionCabCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionCabCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
