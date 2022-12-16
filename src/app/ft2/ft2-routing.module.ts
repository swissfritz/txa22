import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ft2Page } from './ft2.page';

const routes: Routes = [
  {
    path: '',
    component: Ft2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ft2PageRoutingModule {}
