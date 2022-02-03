import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacaDeVideoGrupo07PageRoutingModule } from './placa-de-video-grupo07-routing.module';

import { PlacaDeVideoGrupo07Page } from './placa-de-video-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacaDeVideoGrupo07PageRoutingModule
  ],
  declarations: [PlacaDeVideoGrupo07Page]
})
export class PlacaDeVideoGrupo07PageModule {}
