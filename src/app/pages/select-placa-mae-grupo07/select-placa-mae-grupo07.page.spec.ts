import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPlacaMaeGrupo07Page } from './select-placa-mae-grupo07.page';

describe('SelectPlacaMaeGrupo07Page', () => {
  let component: SelectPlacaMaeGrupo07Page;
  let fixture: ComponentFixture<SelectPlacaMaeGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPlacaMaeGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPlacaMaeGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
