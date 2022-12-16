import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Buchen2Page } from './buchen2.page';

const routes: Routes = [
  {
    path: '',
    component: Buchen2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Buchen2PageRoutingModule {}
