import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamconPage } from './camcon.page';

const routes: Routes = [
  {
    path: '',
    component: CamconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamconPageRoutingModule {}
