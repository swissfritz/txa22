import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankenfPage } from './tankenf.page';

const routes: Routes = [
  {
    path: '',
    component: TankenfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankenfPageRoutingModule {}
