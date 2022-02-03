import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteHomeGrupo07PageRoutingModule } from './cliente-home-grupo07-routing.module';

import { ClienteHomeGrupo07Page } from './cliente-home-grupo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteHomeGrupo07PageRoutingModule
  ],
  declarations: [ClienteHomeGrupo07Page]
})
export class ClienteHomeGrupo07PageModule {}
