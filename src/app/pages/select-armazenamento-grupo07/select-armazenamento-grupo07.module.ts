import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectArmazenamentoGrupo07PageRoutingModule } from './select-armazenamento-grupo07-routing.module';

import { SelectArmazenamentoGrupo07Page } from './select-armazenamento-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectArmazenamentoGrupo07PageRoutingModule
  ],
  declarations: [SelectArmazenamentoGrupo07Page]
})
export class SelectArmazenamentoGrupo07PageModule {}
