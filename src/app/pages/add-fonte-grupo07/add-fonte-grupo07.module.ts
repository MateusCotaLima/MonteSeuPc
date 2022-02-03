import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFonteGrupo07PageRoutingModule } from './add-fonte-grupo07-routing.module';

import { AddFonteGrupo07Page } from './add-fonte-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFonteGrupo07PageRoutingModule
  ],
  declarations: [AddFonteGrupo07Page]
})
export class AddFonteGrupo07PageModule {}
