import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamprPage } from './campr.page';

const routes: Routes = [
  {
    path: '',
    component: CamprPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamprPageRoutingModule {}
