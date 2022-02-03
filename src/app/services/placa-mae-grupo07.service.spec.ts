import { TestBed } from '@angular/core/testing';

import { PlacaMaeGrupo07Service } from './placa-mae-grupo07.service';

describe('PlacaMaeGrupo07Service', () => {
  let service: PlacaMaeGrupo07Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacaMaeGrupo07Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
