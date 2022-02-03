import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectArmazenamentoGrupo07Page } from './select-armazenamento-grupo07.page';

describe('SelectArmazenamentoGrupo07Page', () => {
  let component: SelectArmazenamentoGrupo07Page;
  let fixture: ComponentFixture<SelectArmazenamentoGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArmazenamentoGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectArmazenamentoGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
