import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarGrupo07PageRoutingModule } from './listar-grupo07-routing.module';

import { ListarGrupo07Page } from './listar-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarGrupo07PageRoutingModule
  ],
  declarations: [ListarGrupo07Page]
})
export class ListarGrupo07PageModule {}
