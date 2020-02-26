import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionComprasComponent } from './ruta-gestion-compras.component';

describe('RutaGestionComprasComponent', () => {
  let component: RutaGestionComprasComponent;
  let fixture: ComponentFixture<RutaGestionComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
