import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGabineteGrupo07PageRoutingModule } from './add-gabinete-grupo07-routing.module';

import { AddGabineteGrupo07Page } from './add-gabinete-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGabineteGrupo07PageRoutingModule
  ],
  declarations: [AddGabineteGrupo07Page]
})
export class AddGabineteGrupo07PageModule {}
