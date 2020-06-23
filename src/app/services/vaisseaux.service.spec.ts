import { TestBed } from '@angular/core/testing';

import { VaisseauxService } from './vaisseaux.service';

describe('VaisseauxService', () => {
  let service: VaisseauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaisseauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
