import { TestBed } from '@angular/core/testing';

import { ProcessadorGrupo07Service } from './processador-grupo07.service';

describe('ProcessadorGrupo07Service', () => {
  let service: ProcessadorGrupo07Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessadorGrupo07Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
