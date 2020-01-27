import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditaLibroComponent } from './ruta-edita-libro.component';

describe('RutaEditaLibroComponent', () => {
  let component: RutaEditaLibroComponent;
  let fixture: ComponentFixture<RutaEditaLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditaLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
