import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteHomeGrupo07Page } from './cliente-home-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteHomeGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteHomeGrupo07PageRoutingModule {}
