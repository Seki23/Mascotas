import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarExcelMedicoComponent } from './cargar-excel-medico.component';

describe('CargarExcelMedicoComponent', () => {
  let component: CargarExcelMedicoComponent;
  let fixture: ComponentFixture<CargarExcelMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarExcelMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarExcelMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
