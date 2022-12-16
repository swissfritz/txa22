import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ft1Page } from './ft1.page';

const routes: Routes = [
  {
    path: '',
    component: Ft1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ft1PageRoutingModule {}
