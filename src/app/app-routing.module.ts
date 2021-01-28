import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './views/notfound/notfound.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'leaderboard',
    loadChildren: () =>
      import('./views/leaderboard/leaderboard.module').then((m) => m.LeaderboardModule),
  },
  {
    path: 'servers',
    loadChildren: () =>
      import('./views/servers/servers.module').then((m) => m.ServersModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
