import { TestBed } from '@angular/core/testing';

import { VaisseauService } from './vaisseaux.service';

describe('VaisseauService', () => {
  let service: VaisseauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaisseauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
