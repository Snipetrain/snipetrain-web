import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './views/leaderboard/leaderboard.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LeaderboardComponent },
/*   { path: '', pathMatch: 'full', redirectTo: 'leaderboard' },
  { path: 'leaderboard', component: LeaderboardComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
