import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPlacaDeVideoGrupo07Page } from './add-placa-de-video-grupo07.page';

describe('AddPlacaDeVideoGrupo07Page', () => {
  let component: AddPlacaDeVideoGrupo07Page;
  let fixture: ComponentFixture<AddPlacaDeVideoGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlacaDeVideoGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlacaDeVideoGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
