import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMemoriaRamGrupo07Page } from './add-memoria-ram-grupo07.page';

describe('AddMemoriaRamGrupo07Page', () => {
  let component: AddMemoriaRamGrupo07Page;
  let fixture: ComponentFixture<AddMemoriaRamGrupo07Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemoriaRamGrupo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMemoriaRamGrupo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
