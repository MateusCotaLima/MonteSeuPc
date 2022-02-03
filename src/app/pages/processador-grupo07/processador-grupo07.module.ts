import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessadorGrupo07PageRoutingModule } from './processador-grupo07-routing.module';

import { ProcessadorGrupo07Page } from './processador-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessadorGrupo07PageRoutingModule
  ],
  declarations: [ProcessadorGrupo07Page]
})
export class ProcessadorGrupo07PageModule {}
