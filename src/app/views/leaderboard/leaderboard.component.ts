import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PlayerRank } from 'src/app/models/PlayerRank';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  players: PlayerRank[];
  playerCount = 10;


  constructor(private api: ApiService) { }

  public ngOnInit(): void {
    this.api.getAllRank(this.playerCount).subscribe(val => this.players = val);
  }

  public getKDR(kills: string, deaths: string) {
    return parseInt(kills) / parseInt(deaths);
  }

  public loadMore()  {
    this.playerCount += 10;
    this.api.getAllRank(this.playerCount).subscribe(val => this.players = val);
  }

}
