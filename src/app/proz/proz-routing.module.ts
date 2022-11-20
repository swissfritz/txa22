import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProzPage } from './proz.page';

const routes: Routes = [
  {
    path: '',
    component: ProzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProzPageRoutingModule {}
