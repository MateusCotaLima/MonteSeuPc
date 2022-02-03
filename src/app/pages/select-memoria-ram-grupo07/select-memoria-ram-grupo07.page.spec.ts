import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectMemoriaRamGrupo07Page } from './select-memoria-ram-grupo07.page';

describe('SelectMemoriaRamGrupo07Page', () => {
  let component: SelectMemoriaRamGrupo07Page;
  let fixture: ComponentFixture<SelectMemoriaRamGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMemoriaRamGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectMemoriaRamGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
