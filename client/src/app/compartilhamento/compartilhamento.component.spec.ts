import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilhamentoComponent } from './compartilhamento.component';

describe('CompartilhamentoComponent', () => {
  let component: CompartilhamentoComponent;
  let fixture: ComponentFixture<CompartilhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompartilhamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartilhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
