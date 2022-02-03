import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPlacaDeVideoGrupo07PageRoutingModule } from './select-placa-de-video-grupo07-routing.module';

import { SelectPlacaDeVideoGrupo07Page } from './select-placa-de-video-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPlacaDeVideoGrupo07PageRoutingModule
  ],
  declarations: [SelectPlacaDeVideoGrupo07Page]
})
export class SelectPlacaDeVideoGrupo07PageModule {}
