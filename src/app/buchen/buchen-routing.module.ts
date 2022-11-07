import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuchenPage } from './buchen.page';

const routes: Routes = [
  {
    path: '',
    component: BuchenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuchenPageRoutingModule {}
