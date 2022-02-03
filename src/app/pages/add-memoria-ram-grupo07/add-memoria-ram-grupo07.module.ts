import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMemoriaRamGrupo07PageRoutingModule } from './add-memoria-ram-grupo07-routing.module';

import { AddMemoriaRamGrupo07Page } from './add-memoria-ram-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMemoriaRamGrupo07PageRoutingModule
  ],
  declarations: [AddMemoriaRamGrupo07Page]
})
export class AddMemoriaRamGrupo07PageModule {}
