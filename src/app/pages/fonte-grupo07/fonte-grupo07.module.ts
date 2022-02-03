import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FonteGrupo07PageRoutingModule } from './fonte-grupo07-routing.module';

import { FonteGrupo07Page } from './fonte-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FonteGrupo07PageRoutingModule
  ],
  declarations: [FonteGrupo07Page]
})
export class FonteGrupo07PageModule {}
