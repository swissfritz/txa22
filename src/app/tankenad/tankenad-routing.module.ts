import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankenadPage } from './tankenad.page';

const routes: Routes = [
  {
    path: '',
    component: TankenadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankenadPageRoutingModule {}
