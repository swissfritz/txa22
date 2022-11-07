import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannePage } from './panne.page';

const routes: Routes = [
  {
    path: '',
    component: PannePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannePageRoutingModule {}
