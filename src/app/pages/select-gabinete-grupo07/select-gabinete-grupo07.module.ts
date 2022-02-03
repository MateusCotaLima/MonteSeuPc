import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectGabineteGrupo07PageRoutingModule } from './select-gabinete-grupo07-routing.module';

import { SelectGabineteGrupo07Page } from './select-gabinete-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectGabineteGrupo07PageRoutingModule
  ],
  declarations: [SelectGabineteGrupo07Page]
})
export class SelectGabineteGrupo07PageModule {}
