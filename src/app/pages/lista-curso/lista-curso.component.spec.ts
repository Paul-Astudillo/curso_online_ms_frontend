import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCursoComponent } from './lista-curso.component';

describe('ListaCursoComponent', () => {
  let component: ListaCursoComponent;
  let fixture: ComponentFixture<ListaCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCursoComponent]
    });
    fixture = TestBed.createComponent(ListaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
