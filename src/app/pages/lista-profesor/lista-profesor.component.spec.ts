import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfesorComponent } from './lista-profesor.component';

describe('ListaProfesorComponent', () => {
  let component: ListaProfesorComponent;
  let fixture: ComponentFixture<ListaProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProfesorComponent]
    });
    fixture = TestBed.createComponent(ListaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
