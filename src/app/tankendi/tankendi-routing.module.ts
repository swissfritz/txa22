import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankendiPage } from './tankendi.page';

const routes: Routes = [
  {
    path: '',
    component: TankendiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankendiPageRoutingModule {}
