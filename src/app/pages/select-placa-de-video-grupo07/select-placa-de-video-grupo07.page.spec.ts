import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPlacaDeVideoGrupo07Page } from './select-placa-de-video-grupo07.page';

describe('SelectPlacaDeVideoGrupo07Page', () => {
  let component: SelectPlacaDeVideoGrupo07Page;
  let fixture: ComponentFixture<SelectPlacaDeVideoGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPlacaDeVideoGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPlacaDeVideoGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
