import { TestBed } from '@angular/core/testing';

import { PlacaDeVideoGrupo07Service } from './placa-de-video-grupo07.service';

describe('PlacaDeVideoGrupo07Service', () => {
  let service: PlacaDeVideoGrupo07Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacaDeVideoGrupo07Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
