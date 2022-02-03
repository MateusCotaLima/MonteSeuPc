import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalGrupo07PageRoutingModule } from './principal-grupo07-routing.module';

import { PrincipalGrupo07Page } from './principal-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalGrupo07PageRoutingModule
  ],
  declarations: [PrincipalGrupo07Page]
})
export class PrincipalGrupo07PageModule {}
