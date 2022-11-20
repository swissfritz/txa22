import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallwsPage } from './callws.page';

const routes: Routes = [
  {
    path: '',
    component: CallwsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallwsPageRoutingModule {}
