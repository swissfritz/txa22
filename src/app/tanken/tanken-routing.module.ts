import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankenPage } from './tanken.page';

const routes: Routes = [
  {
    path: '',
    component: TankenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankenPageRoutingModule {}
