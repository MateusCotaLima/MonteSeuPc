import { TestBed } from '@angular/core/testing';

import { GabineteGrupo07Service } from './gabinete-grupo07.service';

describe('GabineteGrupo07Service', () => {
  let service: GabineteGrupo07Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GabineteGrupo07Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
