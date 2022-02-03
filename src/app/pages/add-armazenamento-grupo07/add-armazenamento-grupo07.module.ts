import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddArmazenamentoGrupo07PageRoutingModule } from './add-armazenamento-grupo07-routing.module';

import { AddArmazenamentoGrupo07Page } from './add-armazenamento-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddArmazenamentoGrupo07PageRoutingModule
  ],
  declarations: [AddArmazenamentoGrupo07Page]
})
export class AddArmazenamentoGrupo07PageModule {}
