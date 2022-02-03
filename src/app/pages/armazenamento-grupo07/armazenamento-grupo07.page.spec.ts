import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmazenamentoGrupo07Page } from './armazenamento-grupo07.page';

describe('ArmazenamentoGrupo07Page', () => {
  let component: ArmazenamentoGrupo07Page;
  let fixture: ComponentFixture<ArmazenamentoGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmazenamentoGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmazenamentoGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
