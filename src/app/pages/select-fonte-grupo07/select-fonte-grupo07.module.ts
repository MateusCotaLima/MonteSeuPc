import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectFonteGrupo07PageRoutingModule } from './select-fonte-grupo07-routing.module';

import { SelectFonteGrupo07Page } from './select-fonte-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectFonteGrupo07PageRoutingModule
  ],
  declarations: [SelectFonteGrupo07Page]
})
export class SelectFonteGrupo07PageModule {}
