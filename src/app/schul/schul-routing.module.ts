import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchulPage } from './schul.page';

const routes: Routes = [
  {
    path: '',
    component: SchulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchulPageRoutingModule {}
