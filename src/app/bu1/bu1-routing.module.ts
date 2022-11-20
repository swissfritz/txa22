import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bu1Page } from './bu1.page';

const routes: Routes = [
  {
    path: '',
    component: Bu1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bu1PageRoutingModule {}
