import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard-component/leaderboard.component';
import { LeaderboardUserComponent } from './leaderboard-user/leaderboard-user.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LeaderboardComponent },
  { path: ':id', component: LeaderboardUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardRoutingModule { }
