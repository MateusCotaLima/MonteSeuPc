import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPlacaMaeGrupo07PageRoutingModule } from './select-placa-mae-grupo07-routing.module';

import { SelectPlacaMaeGrupo07Page } from './select-placa-mae-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPlacaMaeGrupo07PageRoutingModule
  ],
  declarations: [SelectPlacaMaeGrupo07Page]
})
export class SelectPlacaMaeGrupo07PageModule {}
