import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlacaMaeGrupo07Page } from './add-placa-mae-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlacaMaeGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPlacaMaeGrupo07PageRoutingModule {}
