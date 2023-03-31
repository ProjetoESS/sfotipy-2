import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuscaComponent } from './page-busca.component';

describe('PageBuscaComponent', () => {
  let component: PageBuscaComponent;
  let fixture: ComponentFixture<PageBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
