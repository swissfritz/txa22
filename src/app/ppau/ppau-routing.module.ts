import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpauPage } from './ppau.page';

const routes: Routes = [
  {
    path: '',
    component: PpauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpauPageRoutingModule {}
