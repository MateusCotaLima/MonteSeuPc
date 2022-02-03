import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmazenamentoGrupo07PageRoutingModule } from './armazenamento-grupo07-routing.module';

import { ArmazenamentoGrupo07Page } from './armazenamento-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmazenamentoGrupo07PageRoutingModule
  ],
  declarations: [ArmazenamentoGrupo07Page]
})
export class ArmazenamentoGrupo07PageModule {}
