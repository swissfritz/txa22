import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnfmainPage } from './unfmain.page';

const routes: Routes = [
  {
    path: '',
    component: UnfmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnfmainPageRoutingModule {}
