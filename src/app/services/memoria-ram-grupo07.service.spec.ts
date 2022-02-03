import { TestBed } from '@angular/core/testing';

import { MemoriaRamGrupo07Service } from './memoria-ram-grupo07.service';

describe('MemoriaRamGrupo07Service', () => {
  let service: MemoriaRamGrupo07Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoriaRamGrupo07Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
