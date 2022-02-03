import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GabineteGrupo07PageRoutingModule } from './gabinete-grupo07-routing.module';

import { GabineteGrupo07Page } from './gabinete-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GabineteGrupo07PageRoutingModule
  ],
  declarations: [GabineteGrupo07Page]
})
export class GabineteGrupo07PageModule {}
