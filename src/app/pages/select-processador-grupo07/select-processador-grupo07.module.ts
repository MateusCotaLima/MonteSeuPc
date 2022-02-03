import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectProcessadorGrupo07PageRoutingModule } from './select-processador-grupo07-routing.module';

import { SelectProcessadorGrupo07Page } from './select-processador-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectProcessadorGrupo07PageRoutingModule
  ],
  declarations: [SelectProcessadorGrupo07Page]
})
export class SelectProcessadorGrupo07PageModule {}
