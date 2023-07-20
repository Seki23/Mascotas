import { TestBed } from '@angular/core/testing';

import { CargarExcelService } from './cargar-excel.service';

describe('CargarExcelService', () => {
  let service: CargarExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
