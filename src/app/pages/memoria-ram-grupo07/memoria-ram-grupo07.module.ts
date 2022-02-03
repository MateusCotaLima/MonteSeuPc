import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoriaRamGrupo07PageRoutingModule } from './memoria-ram-grupo07-routing.module';

import { MemoriaRamGrupo07Page } from './memoria-ram-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriaRamGrupo07PageRoutingModule
  ],
  declarations: [MemoriaRamGrupo07Page]
})
export class MemoriaRamGrupo07PageModule {}
