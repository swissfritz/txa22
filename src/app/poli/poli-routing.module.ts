import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliPage } from './poli.page';

const routes: Routes = [
  {
    path: '',
    component: PoliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliPageRoutingModule {}
