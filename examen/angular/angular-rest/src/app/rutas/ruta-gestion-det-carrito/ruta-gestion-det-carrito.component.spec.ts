import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionDetCarritoComponent } from './ruta-gestion-det-carrito.component';

describe('RutaGestionDetCarritoComponent', () => {
  let component: RutaGestionDetCarritoComponent;
  let fixture: ComponentFixture<RutaGestionDetCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionDetCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionDetCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
