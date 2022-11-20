import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankenstPage } from './tankenst.page';

const routes: Routes = [
  {
    path: '',
    component: TankenstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankenstPageRoutingModule {}
