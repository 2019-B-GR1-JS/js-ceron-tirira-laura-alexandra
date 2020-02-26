import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarCursoComponent } from './modal-editar-curso.component';

describe('ModalEditarCursoComponent', () => {
  let component: ModalEditarCursoComponent;
  let fixture: ComponentFixture<ModalEditarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
