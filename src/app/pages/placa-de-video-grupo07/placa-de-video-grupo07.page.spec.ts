import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacaDeVideoGrupo07Page } from './placa-de-video-grupo07.page';

describe('PlacaDeVideoGrupo07Page', () => {
  let component: PlacaDeVideoGrupo07Page;
  let fixture: ComponentFixture<PlacaDeVideoGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacaDeVideoGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacaDeVideoGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
