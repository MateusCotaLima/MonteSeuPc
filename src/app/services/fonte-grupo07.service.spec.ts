import { TestBed } from '@angular/core/testing';

import { FonteGrupo07Service } from './fonte-grupo07.service';

describe('FonteGrupo07Service', () => {
  let service: FonteGrupo07Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonteGrupo07Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
