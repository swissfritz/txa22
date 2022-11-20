import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PauschPage } from './pausch.page';

const routes: Routes = [
  {
    path: '',
    component: PauschPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PauschPageRoutingModule {}
