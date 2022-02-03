import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPlacaMaeGrupo07Page } from './add-placa-mae-grupo07.page';

describe('AddPlacaMaeGrupo07Page', () => {
  let component: AddPlacaMaeGrupo07Page;
  let fixture: ComponentFixture<AddPlacaMaeGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlacaMaeGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlacaMaeGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
