import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlacaDeVideoGrupo07PageRoutingModule } from './add-placa-de-video-grupo07-routing.module';

import { AddPlacaDeVideoGrupo07Page } from './add-placa-de-video-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlacaDeVideoGrupo07PageRoutingModule
  ],
  declarations: [AddPlacaDeVideoGrupo07Page]
})
export class AddPlacaDeVideoGrupo07PageModule {}
