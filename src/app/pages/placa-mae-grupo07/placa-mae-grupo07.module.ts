import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacaMaeGrupo07PageRoutingModule } from './placa-mae-grupo07-routing.module';

import { PlacaMaeGrupo07Page } from './placa-mae-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacaMaeGrupo07PageRoutingModule
  ],
  declarations: [PlacaMaeGrupo07Page]
})
export class PlacaMaeGrupo07PageModule {}
