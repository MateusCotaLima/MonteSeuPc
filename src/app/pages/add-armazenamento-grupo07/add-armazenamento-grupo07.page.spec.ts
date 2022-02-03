import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddArmazenamentoGrupo07Page } from './add-armazenamento-grupo07.page';

describe('AddArmazenamentoGrupo07Page', () => {
  let component: AddArmazenamentoGrupo07Page;
  let fixture: ComponentFixture<AddArmazenamentoGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArmazenamentoGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddArmazenamentoGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
