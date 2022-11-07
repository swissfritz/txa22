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
    path: 'calls',
    loadChildren: () => import('./calls/calls.module').then( m => m.CallsPageModule)
  },
  {
    path: 'tanken',
    loadChildren: () => import('./tanken/tanken.module').then( m => m.TankenPageModule)
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
    path: 'anfahrt',
    loadChildren: () => import('./anfahrt/anfahrt.module').then( m => m.AnfahrtPageModule)
  },
  {
    path: 'buchen',
    loadChildren: () => import('./buchen/buchen.module').then( m => m.BuchenPageModule)
  },
  {
    path: 'unfall',
    loadChildren: () => import('./unfall/unfall.module').then( m => m.UnfallPageModule)
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
    path: 'poli',
    loadChildren: () => import('./poli/poli.module').then( m => m.PoliPageModule)
  },
  {
    path: 'park',
    loadChildren: () => import('./park/park.module').then( m => m.ParkPageModule)
  },
  {
    path: 'schul',
    loadChildren: () => import('./schul/schul.module').then( m => m.SchulPageModule)
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
    path: 'austt',
    loadChildren: () => import('./austt/austt.module').then( m => m.AusttPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
