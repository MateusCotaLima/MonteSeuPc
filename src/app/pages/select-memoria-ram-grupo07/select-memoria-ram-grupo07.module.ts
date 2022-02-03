import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectMemoriaRamGrupo07PageRoutingModule } from './select-memoria-ram-grupo07-routing.module';

import { SelectMemoriaRamGrupo07Page } from './select-memoria-ram-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMemoriaRamGrupo07PageRoutingModule
  ],
  declarations: [SelectMemoriaRamGrupo07Page]
})
export class SelectMemoriaRamGrupo07PageModule {}
