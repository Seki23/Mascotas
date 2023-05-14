import { TestBed } from '@angular/core/testing';

import { UbicacionPaisService } from './ubicacion-pais.service';

describe('UbicacionPaisService', () => {
  let service: UbicacionPaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicacionPaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
