import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProcessadorGrupo07PageRoutingModule } from './add-processador-grupo07-routing.module';

import { AddProcessadorGrupo07Page } from './add-processador-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProcessadorGrupo07PageRoutingModule
  ],
  declarations: [AddProcessadorGrupo07Page]
})
export class AddProcessadorGrupo07PageModule {}
