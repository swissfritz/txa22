import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WerprPage } from './werpr.page';

const routes: Routes = [
  {
    path: '',
    component: WerprPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WerprPageRoutingModule {}
