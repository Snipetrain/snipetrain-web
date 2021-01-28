import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard-component/leaderboard.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardUserComponent } from './leaderboard-user/leaderboard-user.component';

@NgModule({
  declarations: [
    LeaderboardComponent,
    LeaderboardUserComponent,
  ],
  imports: [
    CommonModule,
    LeaderboardRoutingModule,
    SharedModule
  ]
})
export class LeaderboardModule { }
