import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'cor',
    loadChildren: () => import('./cor/cor.module').then( m => m.CorPageModule)
  },
  {
    path: 'cam',
    loadChildren: () => import('./cam/cam.module').then( m => m.CamPageModule)
  },
  {
    path: 'camcon',
    loadChildren: () => import('./camcon/camcon.module').then( m => m.CamconPageModule)
  },
  {
    path: 'campr',
    loadChildren: () => import('./campr/campr.module').then( m => m.CamprPageModule)
  },
  {
    path: 'poli',
    loadChildren: () => import('./poli/poli.module').then( m => m.PoliPageModule)
  },
  {
    path: 'park',
    loadChildren: () => import('./park/park.module').then( m => m.ParkPageModule)
  },
  {
    path: 'werpr',
    loadChildren: () => import('./werpr/werpr.module').then( m => m.WerprPageModule)
  },
  {
    path: 'fahr',
    loadChildren: () => import('./fahr/fahr.module').then( m => m.FahrPageModule)
  },
  {
    path: 'proz',
    loadChildren: () => import('./proz/proz.module').then( m => m.ProzPageModule)
  },
  {
    path: 'pausch',
    loadChildren: () => import('./pausch/pausch.module').then( m => m.PauschPageModule)
  },
  {
    path: 'ppau',
    loadChildren: () => import('./ppau/ppau.module').then( m => m.PpauPageModule)
  },
  {
    path: 'gehalt',
    loadChildren: () => import('./gehalt/gehalt.module').then( m => m.GehaltPageModule)
  },
  {
    path: 'schul',
    loadChildren: () => import('./schul/schul.module').then( m => m.SchulPageModule)
  },
  {
    path: 'austt',
    loadChildren: () => import('./austt/austt.module').then( m => m.AusttPageModule)
  },
  {
    path: 'open',
    loadChildren: () => import('./open/open.module').then( m => m.OpenPageModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./calls/calls.module').then( m => m.CallsPageModule)
  },
  {
    path: 'callws',
    loadChildren: () => import('./callws/callws.module').then( m => m.CallwsPageModule)
  },
  {
    path: 'buchen',
    loadChildren: () => import('./buchen/buchen.module').then( m => m.BuchenPageModule)
  },
  {
    path: 'ft1',
    loadChildren: () => import('./ft1/ft1.module').then( m => m.Ft1PageModule)
  },
  {
    path: 'ft2',
    loadChildren: () => import('./ft2/ft2.module').then( m => m.Ft2PageModule)
  },
  {
    path: 'buchen1',
    loadChildren: () => import('./buchen1/buchen1.module').then( m => m.Buchen1PageModule)
  },
  {
    path: 'buchen2',
    loadChildren: () => import('./buchen2/buchen2.module').then( m => m.Buchen2PageModule)
  },
  {
    path: 'tanken',
    loadChildren: () => import('./tanken/tanken.module').then( m => m.TankenPageModule)
  },
  {
    path: 'tankendi',
    loadChildren: () => import('./tankendi/tankendi.module').then( m => m.TankendiPageModule)
  },
  {
    path: 'tankenad',
    loadChildren: () => import('./tankenad/tankenad.module').then( m => m.TankenadPageModule)
  },
  {
    path: 'tankenst',
    loadChildren: () => import('./tankenst/tankenst.module').then( m => m.TankenstPageModule)
  },
  {
    path: 'tankenf',
    loadChildren: () => import('./tankenf/tankenf.module').then( m => m.TankenfPageModule)
  },
  {
    path: 'regeln',
    loadChildren: () => import('./regeln/regeln.module').then( m => m.RegelnPageModule)
  },
  {
    path: 'panne',
    loadChildren: () => import('./panne/panne.module').then( m => m.PannePageModule)
  },
  {
    path: 'unfall',
    loadChildren: () => import('./unfall/unfall.module').then( m => m.UnfallPageModule)
  },
  {
    path: 'unfmain',
    loadChildren: () => import('./unfmain/unfmain.module').then( m => m.UnfmainPageModule)
  },
  {
    path: 'anfahrt',
    loadChildren: () => import('./anfahrt/anfahrt.module').then( m => m.AnfahrtPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
