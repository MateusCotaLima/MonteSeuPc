import { TestBed } from '@angular/core/testing';

import { ArmazenamentoGrupo07Service } from './armazenamento-grupo07.service';

describe('ArmazenamentoGrupo07Service', () => {
  let service: ArmazenamentoGrupo07Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmazenamentoGrupo07Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
