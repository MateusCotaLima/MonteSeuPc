import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddGabineteGrupo07Page } from './add-gabinete-grupo07.page';

describe('AddGabineteGrupo07Page', () => {
  let component: AddGabineteGrupo07Page;
  let fixture: ComponentFixture<AddGabineteGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGabineteGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGabineteGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
