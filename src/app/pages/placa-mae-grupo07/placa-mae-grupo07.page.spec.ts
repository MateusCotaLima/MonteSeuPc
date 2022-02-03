import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacaMaeGrupo07Page } from './placa-mae-grupo07.page';

describe('PlacaMaeGrupo07Page', () => {
  let component: PlacaMaeGrupo07Page;
  let fixture: ComponentFixture<PlacaMaeGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacaMaeGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacaMaeGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
