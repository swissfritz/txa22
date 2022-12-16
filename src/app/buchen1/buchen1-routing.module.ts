import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Buchen1Page } from './buchen1.page';

const routes: Routes = [
  {
    path: '',
    component: Buchen1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Buchen1PageRoutingModule {}
