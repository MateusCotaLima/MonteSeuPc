import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlacaMaeGrupo07PageRoutingModule } from './add-placa-mae-grupo07-routing.module';

import { AddPlacaMaeGrupo07Page } from './add-placa-mae-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlacaMaeGrupo07PageRoutingModule
  ],
  declarations: [AddPlacaMaeGrupo07Page]
})
export class AddPlacaMaeGrupo07PageModule {}
